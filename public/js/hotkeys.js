/**
	module hotkey.js
	글로벌 TV핫키 처리
	layout.js 에 있던 내용 옮겨옴
*/

function isVodPage() {
	return location.href.indexOf('VodPlayer_Custom') != -1;
}
function isTvPlaying() {
	return location.href.indexOf('TV_Custom') != -1 && ModLauncher.isTvPlaying();
}
function isTvPage() {
	return location.href.indexOf('TV_Custom') != -1;
}

// 시간 동기화
function setTime(o) {

	if (ModLauncher.getProductName() == ModLauncher.MOD_X) {
		AndroidFunction.ShellExec2("date " + o.dateTime2, "");
	} else {
		var cmd = 'date -s ' + o.dateTime;
		console.log("setting stb time to server time " + cmd);
		var s = LauncherFunction.ShellExec(cmd);
		console.log("stb time result " + s);
	}

}

// 메뉴 이동
function movePage(title, m) {
	$.post("policy/checktime", {
		title: title,
	}, function (o) {
		console.log(JSON.stringify(o));
		if (o.success) {
			if (o.dateTime) {
				setTime(o);
			}
			if (title == 'TV 보기')
				moveTv();
			else
				ContentLauncher.launch(m);
		} else
			modAlert(o.reason);
	}, 'json');
}
/*
function moveByTitle(title){
	if(!pageinfo)
		return;
	if(title=='TV 보기')
	{
		movePage(title, null);
		
	}else{
		for(var i in pageinfo.submenu) {
			var m = pageinfo.submenu[i];
			if (m.title == title) {
				console.log(JSON.stringify(m));
				movePage(title, m);
				break; // 반드시 필요함. 아니면 m값이 변경됨
			}
		}
	}
}
*/
function checkAndMove(title) {
	// pageapp.__checkUseableTime();
	if (typeof (title) == 'string')
		moveByTitle(title);
	else
		if (typeof (title) == 'function') {
			throw "no longer support move by function : " + title;
			title();
		} else
			throw "i don't know how to do" + title;
}


var _hotkeyapp = {
	/**
	사용 가능 메뉴인지 체크
	
	1. 단말기 운영시간 확인 (이용시작/이용끝시간) => 아무것도 못씀
	2. prepaid 카드 적용 메뉴인지 확인 
	3. prepaid 카드 적용 메뉴일경우 사용 가부 확인 
	
	*/
	checkMenu: function (c) {
		return;
		console.log(c);
		// pay test code

		//si.pay_enabled = true;si.pay_tv = true;si.pay_poptv = true;si.pay_movie = true;	

		this.__checkUseableTime();

		if (this.__isFreeMenu(c.카테고리명)) // 공짜메뉴는 사용 가능 
			return true;

		if (!this.isPayExpired(c))
			return true;

		modAlert("컨텐츠를 이용하시려면 선불카드를 구입하셔야 합니다.");
		abort('선불카드 미구입');
		return false;
	},
	init: function () {
		console.log("##################### Hotkey INIT #########################");
	},
	/*
	hasPayMenu: function(){
		return $('[menu-category=선불카드입력]').length > 0;
	},
	*/
	isPayExpired: function (c) {
		var s = localStorage.pay_expire_date;
		var d0 = new Date(s);
		if (isNaN(d0.getTime()))
			d0 = new Date(0);
		var d = new Date();
		console.log(d, d0);
		//abort();
		return d > d0;
	},
	__renderPrepaidCardInfo: function () {
		var s = localStorage.pay_expire_date;
		var d0 = new Date(s);
		if (isNaN(d0.getTime()))
			d0 = new Date(0);
		var d = new Date();
		var diff = d0 - d;
		if (diff < 0) {
			$('#prepaid-card-area').remove();
			return;
		}
		var msec = diff;
		var hh = Math.floor(msec / 1000 / 60 / 60);
		msec -= hh * 1000 * 60 * 60;
		var mm = Math.floor(msec / 1000 / 60);
		msec -= mm * 1000 * 60;
		var ss = Math.floor(msec / 1000);
		msec -= ss * 1000;
		//alert(dr);
		//$('#remain-time').html('%0시간 %1분 %2초'.format2(hh, mm, ss));
		$('#remain-time').html('%0시간 %1분'.format2(hh, mm + 1));
		$('#prepaid-card-area').show();
	},
	__renderDate: function () {
		var time = new Date().formatMOD("hh:mm:ssa/p");
		$('.textTime').html(time);
		$(".textDate").html(new Date().formatMOD("yyyy.MM.dd"));
		$(".textWeek").html(new Date().formatMOD("E"));

		if (time.search("오전") > 0) {
			if (parseInt(time.split(":")[0], 10) > 6 && parseInt(time.split(":")[0], 10) != 12) {
				$(".weatherArea").css({
					'background-image': 'url(images/kr/indicate/R1_sun.png)'
				});
			} else {
				$(".weatherArea").css({
					'background-image': 'url(images/kr/indicate/R1_night.png)'
				});
			}
		} else if (time.search("오후") > 0) {
			if (parseInt(time.split(":")[0], 10) > 6 && parseInt(time.split(":")[0], 10) != 12) {
				$(".weatherArea").css({
					'background-image': 'url(images/kr/indicate/R1_night.png)'
				});
			} else {
				$(".weatherArea").css({
					'background-image': 'url(images/kr/indicate/R1_sun.png)'
				});
			}
		}
	},
	__isFreeMenu: function (cat) {
		if (!si.pay_enabled)
			return true;
		cat = cat.toLowerCase();
		var map = {
			tv보기: 'pay_tv',
			영화: 'pay_movie',
			poptv: 'pay_poptv',
			poptvold: 'pay_poptv',
		}
		//alert(cat + map[cat]);
		if (typeof (map[cat]) == 'undefined')
			return true;
		//alert(map[cat]);
		var val = si[map[cat]];
		console.log('payenabled', cat, val);
		return !val;
	},
	__checkUseableTime: function (c) {
		var dt = new Date();
		var d = decodeMysqlDate('2015-1-1 %0:%1:00'.format2(dt.getHours(), dt.getMinutes()));
		var d0 = decodeMysqlDate('2015-1-1 ' + settings.이용시작시간);
		var d1 = decodeMysqlDate('2015-1-1 ' + settings.이용끝시간);

		// console.log(d, d0, d1);

		ModLauncher.xmlPut("/system/storage/modtv_info/data/servicestarttiime", settings.이용시작시간);
		ModLauncher.xmlPut("/system/storage/modtv_info/data/serviceendtime", settings.이용끝시간);

		//d.setDate(d.getDate()+5);
		if (d.getTime() < d0.getTime() || d.getTime() > d1.getTime()) {
			modAlert('MOD서비스 이용 가능 시간이 아닙니다.\n이용가능시간 (%0~%1)'.format2(settings.이용시작시간, settings.이용끝시간));
			abort('서비스 이용시간 아님');
		}
	},
}

$(function () {
	_hotkeyapp.init();

	$(document).keyup(function (e) {

		console.log(e);
		/*
		if (DialogGlobalSettings.modalCount() > 0) { // 모달창이 떠있으면 아무것도 안한다 
			e.preventDefault();
			return;
		}


		//modx에서는 TV보기 버튼이 0번이다.
		if (ModLauncher.getProductName() == ModLauncher.MOD_X) {
			MODKeyCode.TV = 0;
			if (e.keyCode == '0') {
				if (isTvPlaying() || isVodPage())
					return;
				//moveTv();	
				checkAndMove("TV 보기");
				return;
			}
		}
		*/

		/*if(ModLauncher.isReal != true) {
			return;
		}*/
		switch (e.keyCode) {
			case KeyCode.VK_BACK_SPACE:
				e.preventDefault();
				break;
			//back키 및 home키는 androidapi.js에서 처리함
			/*case C.Remocon.BACK:
				
			moveBack();
			e.preventDefault();
			break;*/
			/*
				메세지 창이 떴을때는 Home, BACK 키가 동작하지 않도록 해야함
			*/
			case MODKeyCode.BACK:
				if (isTvPage() && !ModLauncher.isTvPlaying()) {
					console.log('tv is not opened. force move home');
					CommandCenter.execute('home');
				}
				if (isTvPlaying()) { // tv가 플레이될때는 tv어플이 스스로를 닫으므로 아무것도 하면 안된다
					//ModLauncher.closeTV();
					return;
				}
				//e.preventDefault();
				//moveBack();
				window.history.back();
				/*if(G.keyNavManager.getCurrent().opt.keyLock) {
					return;
				}
				if(!ModLauncher.isTvPlaying() && !ModLauncher.isPlayingVod()) {
					console.log("Back Key ======> moveBack");
					moveBack();
					return;
				}
				if(ModLauncher.isTvPlaying()) {
					console.log("Back Key ======> close TV");
					ModLauncher.closeTV();
				}*/
				break;
			case MODKeyCode.HOME:
				if (isTvPage() && !ModLauncher.isTvPlaying()) {
					console.log('tv is not opened. force move home');
					CommandCenter.execute('home');
				}
				if (isTvPlaying()) {
					// ModLauncher.closeTV();
					return;
				}
				//if(!ModLauncher.isPlayingVod()) {
				// moveHome();
				location.href = "/Main";
				//	return;
				//}
				break;

			case MODKeyCode.CH_UP: case MODKeyCode.CH_DOWN: case MODKeyCode.TV:
				if (isTvPlaying() || isVodPage())
					return;
				checkAndMove("TV 보기");
				/*function(){
					moveTv();						
				});*/
				break;

			case MODKeyCode.MENU: case 192: //`키
				// if (settings.use_nursecall_remocon) {
				// nurseCallByHotKey.call();
				// e.preventDefault();
				// }
				// alert("간호사 호출 서비스 준비중 입니다.");
				location.href = "/dm09/hospital/nurse/CallNurse";

				break;
		}
		console.log('layout keyup: ' + e.keyCode);
	});
});

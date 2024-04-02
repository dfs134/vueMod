/**
전역변수 유닛
여기에 뭐 추가하지 말것 삭제예정

@module mods3.js
*/
var G = {
	opt: {
		//__autoBuildNavigator: true, // 아직 안쓰고있음. G.autoBuildNavigator 를 사용함. 추후에 G.opt.autoBuildNavigator 를 사용하도록 수정
		moveToLastMenu: true,
		showBoxCursor: true,
	},
	/*
	getTerminalId: function(){
		var me = this;
		var tid = localStorage.getItem('modterminalid');
		if (!tid) {
			tid = md5(LauncherFunction.MacAddress());
			localStorage.setItem('modterminalid', tid);
		}
		console.log('getTerminalId', tid);
		return tid;
	},*/
	givenid: function () {
		return this.si().givenid;
	},
	_serviceinfo: {
		givenid: null,
		isDebug: true,
	},
	_uishost: './',
	uisapi: function (method) {
		//return 'http://pc.moddev.kr/mods3/' + method;
		//return '/hq/' + method;
		//return 'http://metauis.moddev.kr/' + method;
		return this._uishost + '/' + method;
	},
	olduisapi: function (method) {
		return 'http://' + G.si().uishost + ':8080/' + method;
	},
	gwapihost: function (method) {
		return 'http://211.110.202.100:80/' + method;
	},
	si: function () {
		assert(this._serviceinfo.givenid != null, 'Service Info is not loaded');
		//this._serviceinfo.uishost = '211.238.157.175';
		return this._serviceinfo;
	},
	httpget: function (url, cb) {
		$.post('httpget_proxy', { url: url }, function (data) {
			//서버 proxy 버젼
			// 추후 iframe버젼 생각해볼것 -> 보안문제로 안됨
			//console.log('$$.httpget', url, data);
			cb(data);
		});
	},
	__autoBuildNavigator: true, // 사용 금지, setCallback 을 대신 사용할것
	pageid: function () {
		var pageid = location.href;
		/*if (pageid == location.protocol + '//' + location.hostname + location.pathname)
		{
			// 주소가 http://new.moddev.kr/s3/ 일때 http://new.moddev.kr/s3/Home 으로 변경
			pageid += 'Home';
		}*/
		return pageid.hashCode();
	},
	rebuildNavigator: function () {
		this.keyNavManager.pop();
		this.__buildNavigator(this.navOption);
	},
	__buildNavigatorCount: 0,
	__buildNavigator: function (o) // 사용금지, setCallback 대신사용
	{
		this.navOption = o;
		this.__buildNavigatorCount++;
		console.log('build-navigator-count: ' + this.__buildNavigatorCount);
		if (this.__buildNavigatorCount > 1) {
			console.log('warning - __buildNavigator called %0 times'.format2(this.__buildNavigatorCount));
			console.log('It is not an errror and may be normal circumtance.');
			print_stack();
		}
		var me = this;
		var opt = _.extend({
			onconfirm: function (el) { },
			onchange: function (el) { },
			onblock: function (el, dir) { },
			onkeydown: function (e) { },
		}, me.keyNavCallback, o)
		//alert(msg(o));
		$('.menuitem:visible').registerKeyNav({
			onconfirm: function (el) {
				if (opt.onconfirm(el))
					return;
				var pageid = me.pageid();
				localStorage.setItem('lastmenuid_' + pageid, $(el).attr('nav-item-id'));
				//alert(el);//'a');
				//throw 'stop';
				//$(el).trigger('click');
				var href = $(el).attr('href');
				if (href)
					moveTo(href);
			},
			onchange: function (el) {
				//console.log('onchange', el);
				$('.menuitem').removeClass('selected');
				$(el).addClass('selected');
				opt.onchange(el);
			},
			onblock: function (el, dir) {
				return opt.onblock(el, dir);
			},
			onkeydown: function (e) {
				return opt.onkeydown(e);
			},
			canchange: opt.canchange,
		});

		/* 갤러리 내에서는 상하로 키로는 다른메뉴로 빠져나가지 않는다 */
		$('.gallery-item').attr({
			'key-nav-accept-up': '.gallery-item',
			'key-nav-accept-down': '.gallery-item',
		});

		/*
		
		$('.menuitem').each(function(){
			var $i = $(this);
			var id = $i.attr('id');
			
			// image  소스를 바꾸지 않고 class만 변경해서 처리하기 위해 background url 로 이미지를 표시한다
			// image src 는 css에서 지정 불가능		
			// css에 직접 추가 해야 상태 변화에 대응이 됨. $.css 를 쓰면 엘리먼트에 style로 추가됨
			
			if ($i.attr('src')) {
				$('#css').append('#%0 {background:url(%1);}'.format2(id, $i.attr('src')));
				$('#css').append('#%0.selected {background:url(%1);}'.format2(id, $i.attr('src_selected')));
			}
			$i.attr('src', null);
		});	
		*/

		var lastmenu = localStorage.getItem('lastmenuid_' + me.pageid());
		var el = $('[nav-item-id=%0]'.format2(lastmenu))[0];
		if (G.initialElement)
			el = G.initialElement;
		if (!G.opt.moveToLastMenu || !G.keyNavManager.focus(el))
			G.keyNavManager.selectFirst();
		return G.keyNavManager;
	},
	/*
	abort: function(msg){
		throw new ESilentException();
	},	
	onerror: function(e){
		if (e.exceptionType == 'ESilentException')
			return true;
		if (e.exceptionType == 'EUnknownTerminal')
		{
			if (location.href.indexOf('UnknownTerminal') == -1)
				moveTo('UnknownTerminal');
			return true;
		}
	},
	*/
	/**
	페이지 이동만 함수. history 연관 없음
	*/
	__moveTo: function (url) {
		// alert(url);
		if (!url)
			return;

		saveCaptionPos();

		console.log('MOVE TO:' + url);
		//alert(url);
		//this.saveBackLocation(url);
		try {
			if (typeof (url) == 'string' && url.indexOf('javascript:') == -1) {
				LauncherFunction.SetKeyCallBack(""); // 이동하기 전에 KeyCallBack 클리어를 하지 않으면 뭔가 한번 더 이벤트가 발생함 (단말에만 해당)
			}
			//$('#spinner').fadeIn(1000).fadeOut(1000);//show().css('opacity', 0.5);//slideDown(300);
			$('#spinner').fadeIn(0).delay(1000).fadeOut(1000);//fadeIn(500).fadeOut(500);//show().css('opacity', 0.5);//slideDown(300);
			setTimeout(function () {
				if (typeof (url) == 'function') {
					url();
				} else
					location.href = url;
			}, 50);
		} catch (e) {
			console.log('G.moveTo: ' + e);
			alert(e);
			//location.href = url;
		}
	},
	moveTo: function (url) // location.replace 대체
	{
		if (url == 'Home')
			delete localStorage.prevPages;
		//localStorage.previousPage = location.href;
		var prevPages = getobj(localStorage.prevPages);
		if (!prevPages)
			prevPages = {};

		if (typeof (url) == 'string') {
			//alert(msg(location));
			//prevPages[(location.ogigin + '/'+ url).hashCode()] = location.href;
			var fullurl = url;
			// var pathname = '/new/s3/';
			var pathname = '/Main';
			{
				var s = location.pathname;
				s = s.substr(0, s.lastIndexOf('/') + 1);
				if (s)
					pathname = s;
			}
			//alert(pathname); return;			
			var i = location.href.lastIndexOf(pathname);
			if (i != -1 && url.indexOf('http') != 0) { // S3내 상대경로 이동일때
				fullurl = location.href.substring(0, i + pathname.length) + url;
			}

			fullurl = decodeURIComponent(fullurl);
			localStorage.lastFullUrl = fullurl;
			// alert('moveto - ' +fullurl);
			prevPages[fullurl] = decodeURIComponent(location.href);
			localStorage.prevPages = JSON.stringify(prevPages);
		}

		G.__moveTo(url);
	},
	moveBack: function (url) {
		//G.__moveTo(localStorage.previousPage);
		var prevPages = getobj(localStorage.prevPages);
		if (!prevPages)
			prevPages = {};
		var backurl = prevPages[decodeURIComponent(location.href)];
		if (url) {
			backurl = url;
		}
		//console.log(localStorage.lastFullUrl);	console.log(decodeURIComponent(location.href));
		//return;
		// alert(location.href + '\n' +backurl);
		// alert(msg(prevPages) + '\n'+ backurl);
		// alert('moveback - '+ backurl);
		if (!backurl)
			backurl = 'Home';
		G.__moveTo(backurl);
		//this.moveTo($('.back-btn').attr('href'));
		//this.mo
	},
	moveHome: function () {
		G.moveTo('Home');
		//G.__moveTo('Home');
	},
	moveTv: function () {
		G.moveTo('TvController');
	},
	ishome: function () {
		var path = location.protocol + '//' + location.hostname + location.pathname;
		return (location.href == path) || (location.href.toLowerCase().indexOf('Home') == path.length);
	},
	/**	
	
	aes, poptvaes 함수는 아래파일들을 추가해야 사용 가능함
	
	<script src="lib/cryptojs/components/core-min.js"></script>
	<script src="lib/cryptojs/rollups/aes.js"></script>
	<script src="lib/cryptojs/components/enc-utf16-min.js"></script>
	<script src="lib/cryptojs/components/enc-base64-min.js"></script>
	<script src="lib/cryptojs/components/mode-ecb-min.js"></script>	
	*/
	aes: function (s, password) {
		var key = "68616e6712345e61";
		var encrypted = CryptoJS.AES.encrypt(s, key, {
			mode: CryptoJS.mode.ECB,
			padding: CryptoJS.pad.Pkcs7
		});
		var s = encrypted.toString();
		return s;
	},
	poptvaes: function (s) {
		var password = '68616e6712345e61';
		return this.aes(s, password);
	},
	keyNavCallback: {
	}, // autoBuildNavigator 대신 사용. 
	showSpinner: function () {
		$('#spinner').fadeIn(1000);
	},
	hideSpinner: function () {
		$('#spinner').fadeOut(1000);
	},
	showVeil: function () {
		$('#veil').fadeIn(500);
	},
	hideVeil: function () {
		$('#veil').fadeOut(500);
	},
}

var moveTo = G.moveTo;
//var abort = G.abort;
var moveBack = G.moveBack;
var moveTv = G.moveTv;
var moveHome = G.moveHome;

function saveCaptionPos() {
	$cap = $('.bottomcaption-body');
	if (!$cap.css('margin-left'))
		;//localStorage.setItem('captionpos', null);
	else {
		var l = $cap.css('margin-left');
		l = l.replace('px', '');
		console.log($cap.width(), l);
		localStorage.setItem('captionpos', l);
	}
	/*
	if (!$('.js-marquee-wrapper').css('margin-left'))
			setCookie('captionpos', 0);
	/*
	if (!$('.js-marquee-wrapper').css('margin-left'))
			setCookie('captionpos', 0);
	else {
		var w = $('.js-marquee-wrapper').parent().width();
		var l = $('.js-marquee-wrapper').css('margin-left');
		l = l.replace('px', '');
		setCookie('captionwidth', w);
		setCookie('captionleft', l);
		
		setCookie('captionpos',  w - l);
		return;
		var w = $('.js-marquee').width();
		var l = $('.js-marquee-wrapper').css('margin-left');
		
		setCookie('captionwidth', w);
		var pos = l.replace('px', '');
		pos = (1280-pos);
		//pos = -pos;
		setCookie('captionpos', pos);//pos*1.0);
		//return 'aaaaaa';//pos;
	}*/
}
/*
var TVPlayer = {
	_getSystemXmlNodeAll : function(path) {
		var cmd = null;
		cmd = LauncherFunction.JSONs(cmd, "get2.to", "system");
		cmd = LauncherFunction.JSONs(cmd, "get2.request", "true");
		cmd = LauncherFunction.JSONs(cmd, "get2.value.query", path);
		cmd = LauncherFunction.JSONs(cmd, "get2.value.type", "Node");
		var val = LauncherFunction.JsonRun(cmd);
		return val;
	},
	_getSystemXmlNodeData: function(list, nodeNm) {
		var parser = new DOMParser();
		var xmlDoc = parser.parseFromString(list, "text/xml");
		var data = xmlDoc.getElementsByTagName(nodeNm)[0];
		if( data ) {
			return ( data.text ? data.text : data.textContent );
		} else {
			return "null";
		}
	},
	_checkPlayer: function(type) {
		var val = null;
		var cmd = null;
		cmd = LauncherFunction.JSONs(cmd, "get2.to", "system");
		cmd = LauncherFunction.JSONs(cmd, "get2.request", "true");
		cmd = LauncherFunction.JSONs(cmd, "get2.value.query", "/system/viewgroups/etc/view[@name='"+type+"']/@visible");
		cmd = LauncherFunction.JSONs(cmd, "get2.value.type", "String");
		val = LauncherFunction.JsonRun(cmd);
		return val;
	},
	
	_getServiceType: function() {
		var result = null;
		result = LauncherFunction.GetXmlNodeValue("/system/storage/modtv_info/pay_type");
		return result;
	},
	
	_getExpireDt: function() {
		var result = null;
		result = LauncherFunction.GetXmlNodeValue("/system/storage/modtv_info/expire_dt");
		return result;
	},
	
	_getTvFreeYn: function() {
		var result = null;
		result = LauncherFunction.GetXmlNodeValue("/system/storage/modtv_info/tv_free_yn");
		return result;
	},
	
	_checkExpireTime:function(service_type) {
		if (service_type != "SR") {
			var _expire_dt_str = this._getExpireDt();
			var _expire_dt, _now_dt, _expire_time, _now_time, _diff, _valid_time;
			var reg = /(19[7-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])/;
			if (reg.test(_expire_dt_str)) {
				_expire_dt = new Date(_expire_dt_str);
			} else {
				return false;
			}
			_now_dt = new Date();
			_expire_time = _expire_dt.getTime();
			_now_time = _now_dt.getTime();
			_diff = _expire_time - _now_time;
			
			_valid_time = 30 * 24 * 60 * 60 * 1000;
			if (_diff > _valid_time) {
				$$.debug("[INFO]유효 시간 초과 = " + _diff);
				return false;
			}
			if (_diff <= 0) {
				return false;
			}
		}
		return true;
	},
	
	//시청제한 체크는 나중에 추가 
	_chkModTVExpire: function(service_type, tv_free_yn) {
		if (service_type != "SR" && tv_free_yn != "Y") {
			if (!this._checkExpireTime(service_type)) {
				console.log("TV time expired");
				modAlert("컨텐츠를 이용하시려면 선불카드를 구입하셔야 합니다.");
				return false;
			}
		}
		console.log("TV able");
		return true;
	},
	
	_isBetweenTime2: function(startTime, endTime) {
		var date = new Date();
		var nowHour = date.getHours();
		var nowMin = date.getMinutes();
		
		var startHour = startTime.split(":")[0];
		var startMin = startTime.split(":")[1];
		var endHour = endTime.split(":")[0];
		var endMin = endTime.split(":")[1];
		if(startHour > endHour) {
			if(startHour > nowHour < endHour) nowHour = parseInt(nowHour) + 24;
			endHour = parseInt(endHour) + 24;
		}
		var startTot = (startHour*60) +  parseInt(startMin);
		var endTot = (endHour*60) +  parseInt(endMin);
		var nowTot = (nowHour*60) +  parseInt(nowMin);
				
		if(nowTot >= startTot && nowTot  <= endTot) {
			return true;
		}else{
			return false;
		}
	},
	
	_chkLimit: function() {
		var startTime = LauncherFunction.GetXmlNodeValue("/system/storage/modtv_info/data/servicestarttiime");
		var endTime = LauncherFunction.GetXmlNodeValue("/system/storage/modtv_info/data/serviceendtime");
		var result = this._isBetweenTime2(startTime, endTime);
		if(!result) {
			modAlert("MOD서비스 이용 가능 시간이 아닙니다.");
			return false;
		}
		return true;
	},
	
	_checkTVAnable: function() {
		var tvPlayerVisible = ( this._checkPlayer("atsc") == "gone" ) ? true : false;
		var vodPlayerVisible = ( this._checkPlayer("video") == "gone" ) ? true : false;
		if( ( tvPlayerVisible && vodPlayerVisible ) ){
			var service_type = this._getServiceType();
			var tv_free_yn = this._getTvFreeYn();
			var isExpired = this._chkModTVExpire(service_type, tv_free_yn);
			if(!isExpired) {
				return false;
			}
			return this._chkLimit();
		}
		return false;
	},
	
	keyTV: function() {
		if( true == this._checkTVAnable() ) {
			console.log("millisecond in keyTV[to renderTV]: " + new Date().getTime());
			moveTo("tvrender");
		}
	},
	
	keyChUp: function() {
		if( true == this._checkTVAnable() ) {
			//moveTo("TV_Custom");
			console.log("millisecond in keyChUp[to renderTV]: " + new Date().getTime());
			moveTo("tvrender");
		}
	},
	
	keyChDown: function() {		
		if( true == this._checkTVAnable() ) {
			console.log("millisecond in keyChDown[to renderTV]: " + new Date().getTime());
			moveTo("tvrender");
		}
	}
}

*/
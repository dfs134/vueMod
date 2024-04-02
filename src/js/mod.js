/**

 MOD 시스템 초기화 필요한 부분
 리모콘 처리 등 
 MOD 시스템에 종속적인 JS 호출은 전부 여기에 몰아 넣을계획임
 
 이 파일은 단독으로 포함 가능함. (jQuery등 lib는 필요)
 
 @Module mod.js 
 
*/

var NotAnError = '(not an error)'; // abort 처리용. throw 'msg'+NotAnError 형식으로 사용
if (typeof(AndroidFunction) == 'undefined')
{
	window.onerror = function(msg, url, line) {
		var s;
		if (msg.indexOf(NotAnError) != -1 && msg.indexOf(NotAnError) == msg.length - NotAnError.length)
		{
			s = '(Context Aborted): %0 %1 line ['.format2(msg, url)+line+']';
			console.log(s);
			return true;
		}
	}
} else
{
	window.onerror = function(msg, url, line) {
		//alert(msg + ' : ' + url + ' : ' + line);
		//alert(msg);
		//if (msg.indexOf('Uncaught') != 0) return;
		//console.log(msg);
		var s;
		//alert(msg.indexOf(NotAnError));
		//alert(msg.length - NotAnError.length);
		if (msg.indexOf(NotAnError) != -1 && msg.indexOf(NotAnError) == msg.length - NotAnError.length)
		{
			s = '(Context Aborted): %0 %1 line [%2]'.format2(msg, url, line);
			console.log(s);
			return true;
		} else {
			s = '(MOD Javascript Error): %0 %1 line [%2]'.format2(msg, url, line);
			console.log(s);
			var e = new Error();
			console.log(e.stack);
			

			//if (settings.debug == 'true')
				//alert(s);
			//return false;
			return true;
		}	
	}
}

var _error_id_gen = Date.now() % 100000;

function throw_error(msg)
{
	_error_id_gen++;
	var errid = '(ERROR ID: '+_error_id_gen+')';
	console.log(msg + errid);
	var err = new Error();
	console.log(err.stack);
	throw msg + errid;
}

var C = {}
C.Remocon = {
	UP: 19,
	DOWN: 20,
	LEFT: 21,
	RIGHT: 22,
	OK: 23,
	MUTE: 91,
	VOL_UP: 24,
	VOL_DOWN: 25,
	CH_UP: 92,
	CH_DOWN: 93,
	HOME: 3,
	TV: 120,
	MENU: 82,
	BACK: 4,
	//BACK: 27,
	//POWER_OFF: 5,
	POWER: 6,
	POWER_HS: 26,
	NUM_0: 7,
	NUM_1: 8,
	NUM_2: 9,
	NUM_3: 10,
	NUM_4: 11,
	NUM_5: 12,
	NUM_6: 13,
	NUM_7: 14,
	NUM_8: 15,
	NUM_9: 16,
	REWIND: 89,
	FORWARD: 90,
	PAUSE: 85,
	STOP: 86,
	POUND: 67,
	ASTERISK: 56,
	HOME_HS: 131, //하이실리콘 홈키
};

C.MODKeyCode = {
	UP: KeyCode.VK_UP,
	DOWN: KeyCode.VK_DOWN,
	LEFT: KeyCode.VK_LEFT,
	RIGHT: KeyCode.VK_RIGHT,
	OK: KeyCode.VK_RETURN,
	MUTE: KeyCode.VK_VOLUME_MUTE,
	VOL_UP: KeyCode.VK_VOLUME_UP,
	VOL_DOWN: KeyCode.VK_VOLUME_DOWN,
	CH_UP: KeyCode.VK_MEDIA_NEXT_TRACK,
	CH_DOWN: KeyCode.VK_MEDIA_PREV_TRACK,
	HOME: KeyCode.VK_BROWSER_HOME,
	HOME_HS: KeyCode.VK_BROWSER_HOME,
	//TV: KeyCode.VK_LAUNCHAPP1,
	TV: 120,
	MENU: KeyCode.VK_CONTEXT_MENU,
	BACK: KeyCode.VK_ESCAPE,
	POWER: KeyCode.VK_SLEEP,
	POWER_HS: KeyCode.VK_SLEEP,
	NUM_0: KeyCode.VK_NUMPAD0,
	NUM_1: KeyCode.VK_NUMPAD1,
	NUM_2: KeyCode.VK_NUMPAD2,
	NUM_3: KeyCode.VK_NUMPAD3,
	NUM_4: KeyCode.VK_NUMPAD4,
	NUM_5: KeyCode.VK_NUMPAD5,
	NUM_6: KeyCode.VK_NUMPAD6,
	NUM_7: KeyCode.VK_NUMPAD7,
	NUM_8: KeyCode.VK_NUMPAD8,
	NUM_9: KeyCode.VK_NUMPAD9,
	REWIND: KeyCode.VK_R,
	FORWARD: KeyCode.VK_F,
	PAUSE: KeyCode.VK_PAUSE,
	STOP: KeyCode.VK_MEDIA_STOP,
	POUND: KeyCode.VK_DIVIDE,
	ASTERISK: KeyCode.MULTIPLY
}

var MODKeyCode = C.MODKeyCode;

var ModLauncher = {
	MOD_A: 'tcc8800st',
	MOD_B: 'tcc8800st',
	MOD_E: 'Hi3796MV100',
	MOD_X: 'Hi3798CV200_MOD',
	getProductName: function(){
		if (!this.isReal)
			return 'EMULATOR';
		return LauncherFunction.GetProp("ro.build.product");
	},
	isHiSilicon: function(){
		//return AndroidFunction.GetProp('ro.build.product') != 'tcc8800st';
		return LauncherFunction.GetProp('ro.build.product') == 'Hi3796MV100';
	},
	hasPlayer: function(){
		//alert(LauncherFunction.GetProp('ro.build.product'));
		return this.isReal && (this.isHiSilicon() || this.isTelechips());
	},
	isReal: true,
	isTelechips: function(){
		return LauncherFunction.GetProp('ro.build.product') == 'tcc8800st';
	},
	revision: function() {
		//return AndroidFunction.GetLauncherVersion() + "."+AndroidFunction.SourceReversion() +"("+ AndroidFunction.GetProp("ro.ubicod.platform.sw_revision")+")";
		return AndroidFunction.SourceReversion() +"/"+ AndroidFunction.GetProp("ro.ubicod.platform.sw_revision");
	},
	getSystemXmlValue: function(xpath) {
		return AndroidFunction.GetXmlNodeValue(xpath);
	},
	getBacklightState: function(){
		/**
		return 'on' or 'off'
		*/
		if (ModLauncher.getProductName() == ModLauncher.MOD_X) {
			if (AndroidFunction.GetProp("persist.modtv.backlight.suspend") == "true")
				return "on";
			return "off";
		}
		var r = this.getSystemXmlValue('/system/storage/preference/backlight');
		console.log('getBacklightState: '+ r);
		if (r == 'true')
			return 'on';
		return 'off';
	},
	unzip: function(local, target) {
		var cmd = null;
		cmd = AndroidFunction.JSONs(cmd, "unzip.to", "ModManager");
		cmd = AndroidFunction.JSONs(cmd, "unzip.request", "true");
		cmd = AndroidFunction.JSONs(cmd, "unzip.data.local", local);
		cmd = AndroidFunction.JSONs(cmd, "unzip.data.target", target);
		AndroidFunction.JsonRun(cmd);
	},
	download: function(remote, local, callback) {
		console.log('downloadStarted %0 => %1 (%2)'.format2(remote, local, callback));
		
		if( "" == callback ) {
			var cmd = null;
			cmd = AndroidFunction.JSONs(cmd, "download.name", "download_test");
			cmd = AndroidFunction.JSONs(cmd, "download.to", "ModManager");
			cmd = AndroidFunction.JSONs(cmd, "download.request", "true");
			cmd = AndroidFunction.JSONs(cmd, "download.att.version", "0.0.9");
			cmd = AndroidFunction.JSONs(cmd, "download.data.remote", remote);
			cmd = AndroidFunction.JSONs(cmd, "download.data.local", local);
			AndroidFunction.JsonRun(cmd);
		} else {
			var cmd = null;
			cmd = AndroidFunction.JSONs(cmd, "download.name", "download_test");
			cmd = AndroidFunction.JSONs(cmd, "download.to", "ModManager");
			cmd = AndroidFunction.JSONs(cmd, "download.request", "false");
			cmd = AndroidFunction.JSONs(cmd, "download.att.version", "0.0.9");
			cmd = AndroidFunction.JSONs(cmd, "download.data.remote", remote);
			cmd = AndroidFunction.JSONs(cmd, "download.data.local", local);
			
			var target = 'top';
			if (request.target) // window1 에서 테스트할때는 top_s3.php?target=window1 이거 안하면 콜백 발생 안함
				target = request.target;
			
			cmd = AndroidFunction.JSONi(cmd, "download.data.event.end.callback.att.index", 0);
			cmd = AndroidFunction.JSONs(cmd, "download.data.event.end.callback.att.to", target);
			cmd = AndroidFunction.JSONs(cmd, "download.data.event.end.callback.value.", callback);
			AndroidFunction.JsonRun(cmd);
		}
		console.log(cmd);
	},
	isFileExists: function(path) {
		var ret = AndroidFunction.FileExist(path);
		return ret == 1;
	},
	getFileSize: function(fn) {
		var me = this;
		var cmd = 'ls -al %0'.format2(fn);
		var s = AndroidFunction.ShellExec(cmd);
		//log(cmd + '\n'+s);
		var downloadedsize = parseInt(s.match(/\s\d+\s/));
		if (isNaN(downloadedsize))
			return -1;
		return downloadedsize;
	},
	openTo: function(target, url, left, top, width, height) {
		/**
			target can be top, center, window1, bottom
			open rule
			
			1) left, top must be placed in screen size.
			2) launcher will adjust position automatically if it is placed out of screen.
			3) width, height can be sized bigger than screen size.		
			4) width can't be 0.
			5) height can be 0.
			6) therefore, the smallest size of window is (1px * 0px)
			
		*/
		var cmd = null;
		cmd = AndroidFunction.JSONs(cmd, "open.to", target);
		cmd = AndroidFunction.JSONs(cmd, "open.request", "true");
		cmd = AndroidFunction.JSONs(cmd, "open.value", url);
		cmd = AndroidFunction.JSONs(cmd, "open.data.x", left);
		cmd = AndroidFunction.JSONs(cmd, "open.data.y", top);
		cmd = AndroidFunction.JSONs(cmd, "open.data.w", width);
		cmd = AndroidFunction.JSONs(cmd, "open.data.h", height);
		return AndroidFunction.JsonRun(cmd);
	},
	shutup: function(target) {
		this.openTo(target, "about:blank", 0, 0, 1, 1);

		var cmd = null;
		var val = null;
		cmd = AndroidFunction.JSONs(cmd, "hide.to", target);
		cmd = AndroidFunction.JSONs(cmd, "hide.request", "true");
		val = AndroidFunction.JsonRun(cmd);	
		
		return val;
	},
	closeWindow: function(target) {
		this.shutup();
	},	
	getMac: function(){
		return AndroidFunction.MacAddress();
	},
	/**
		window1에서 자바스크립트 실행
	*/
	execjs: function(js, target){
		if (target == null)
			target = 'window1';
		var cmd = null;
		cmd = AndroidFunction.JSONs(cmd, "callback.to", target);
		cmd = AndroidFunction.JSONs(cmd, "callback.value", js);
		console.log('///////////////////////////');
		console.log('///////////////////////////');
		console.log('///////////////////////////');
		console.log('///////////////////////////');
		console.log('///////////////////////////');
		console.log('///////////////////////////');
		console.log('ModLauncher.execjs');
		console.log(js);
		console.log(cmd);
		console.log('///////////////////////////');
		console.log('///////////////////////////');
		console.log('///////////////////////////');
		console.log('///////////////////////////');
		console.log('///////////////////////////');
		console.log('///////////////////////////');
		AndroidFunction.JsonRun(cmd);
	},
	pressKey: function(keycode)
	{
		var s = 'input keyevent '+keycode;
		AndroidFunction.ShellExec(s);
	},
	sleep: function(){
		if (!this.isAwaken())
			return;
		if (this.isHiSilicon())
			AndroidFunction.ShellExec('input keyevent 26');
		else
			AndroidFunction.ShellExec('input keyevent 6');
	},	
	awake: function(){
		/*
		이런식으로 하면 tv못본다
		AndroidFunction.SetSetupInfo("backlight", "true");
		AndroidFunction.SetSetupInfo("ledcolor", "true");
		console.log("sleep off   power on");
		AndroidFunction.KeyEnableOnPowerOff("true");
		AndroidFunction.SetXmlNodeValue("/system/storage/preference/backlight", 'false');				
		*/ 
		if (this.isAwaken())
			return;
		/*
		이건 키 이벤트만 발생하고 안켜진다
		var cmd = null;
		cmd = AndroidFunction.JSONs(cmd, "key.to", 'window1');
		cmd = AndroidFunction.JSONs(cmd, "key.request", "true");
		cmd = AndroidFunction.JSONs(cmd, "key.data.keycode", "6");
		cmd = AndroidFunction.JSONs(cmd, "key.data.scancode", "107");
		cmd = AndroidFunction.JSONs(cmd, "key.data.action", "1");
		AndroidFunction.JsonRun(cmd);
		*/
		if (this.isHiSilicon())
			AndroidFunction.ShellExec('input keyevent 26');
		else
			AndroidFunction.ShellExec('input keyevent 6');
	},	
	isAwaken: function(){
		return AndroidFunction.GetXmlNodeValue("/system/storage/preference/backlight") != 'false';
	},
	xmlGet: function(key) {
		return AndroidFunction.GetXmlNodeValue(key);
	},
	xmlPut: function(key, val) {
		AndroidFunction.SetXmlNodeValue(key, val);
	},
	xmlGetMod: function(key) {
		return this.xmlGet('/system/storage/modtv_info/data/'+key);
	},
	xmlPutMod: function(key, val) {
		return this.xmlPut('/system/storage/modtv_info/data/'+key, val);
	},	
	isPlayingVod: function() {
		var sts = this.getSystemXmlValue("/system/viewgroups/etc/view[@name='video']/@visible");
		if (sts == "show") return true;
		return false;
	},
	isTvPlaying: function() {
		var sts = this.getSystemXmlValue("/system/viewgroups/etc/view[@name='atsc']/@visible");
		if (sts == "show") return true;
		return false;
	},
	closeTV: function() {
		var cmd = null;
		cmd = AndroidFunction.JSONs(cmd, "atsc.to", "ModLauncher");
		cmd = AndroidFunction.JSONs(cmd, "atsc.data.command", "exit");
		AndroidFunction.JsonRun(cmd);
	},
	showWindow: function(target){
		var cmd = null; // 윈도우에 변화는 없고 visiblility만 변경됨
		cmd = AndroidFunction.JSONs(cmd, "show.to", target);
		cmd = AndroidFunction.JSONs(cmd, "show.request", "true");
		return AndroidFunction.JsonRun(cmd);
	},	
	hideWindow: function(target) {
		var cmd = null; // 윈도우에 변화는 없고 visiblility만 변경됨
		cmd = AndroidFunction.JSONs(cmd, "hide.to", target);
		cmd = AndroidFunction.JSONs(cmd, "hide.request", "true");
		return AndroidFunction.JsonRun(cmd);
	},
	isWindowVisible: function(target) {
		var cmd = null;
		cmd = AndroidFunction.JSONs(cmd, 'is_show.to', target);
		cmd = AndroidFunction.JSONs(cmd, 'is_show.request', 'true');
		var val = AndroidFunction.JsonRun(cmd);
		console.log(target + ' ' + val + '===========================isWindowVisible========================');
		//console.log(val);
		return val == 'true';	 //  or 'false'
	},
	_hideVod: function() {
		var cmd = null;
		cmd = LauncherFunction.JSONs(cmd, "hide.to", "video");
		cmd = LauncherFunction.JSONs(cmd, "hide.request", "true");
		return LauncherFunction.JsonRun(cmd);
	},	
	_stopVod: function() {
		var cmd = null;
		cmd = LauncherFunction.JSONs(cmd, "play.to", "video");
		cmd = LauncherFunction.JSONs(cmd, "play.value.stop", "");
		cmd = LauncherFunction.JSONs(cmd, "play.value.reset", "");
		cmd = LauncherFunction.JSONs(cmd, "play.request", "true");
		return LauncherFunction.JsonRun(cmd);
	},	
	closeVod: function() {
		this._stopVod();
		this._hideVod();
	},
	home: function(){
		location.href = 'Home';//settings.serviceroot + 'StartMOD';
	},
	stfu: function(){
		/*
		if (settings.debug) {
			var js = "javascript:(function(){console.log('BOTTOM : ' + window.innerWidth + ' | ' + window.innerHeight + ' | ' + location.href)})()";
			console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);console.log(js);
			this.open(js, 'bottom', 0, 0, 1, 0); // 로그확인결과 기본값 1280*100 about:blank
			this.open(js, 'center', 0, 0, 1, 0); // 기본값 640*300 about:blank
			this.open(js, 'window2', 0, 0, 1, 0); // 기본값 -10*0 about:blank window2, popup은 건드릴 필요가 없다
			this.open(js, 'popup', 0, 0, 1, 0); // 기본값 -10*0 about:blank
		}
		// this.closeWindow('top'); 탑은 어차피 로딩할거기땜에 닫을 필요가 없다
		*/
		ModLauncher.shutup('center'); // center, bottom 은 안쓸 예정이다
		// ModLauncher.shutup('window2'); // MOD-E에만 동작 
		// ModLauncher.shutup('hidden');  // powerhtml 이 여기에 로딩됨, 초기화하면 안됨 
		// ModLauncher.shutup('bottom');
		
		ModLauncher.closeTV();
		ModLauncher.closeVod();		
	},	
	sendLog: function()
	{		
		//var s = 'input keyevent 67;sleep 1;input keyevent 12;sleep 1;input keyevent 12;sleep 1;input keyevent 12;sleep 1;input keyevent 56';
		var s = 'input keyevent 67;input keyevent 12;input keyevent 12;input keyevent 12;input keyevent 56';
		var all = s.split(';');
		var index = 0;
		
		function _shellexec(){
			if (index >= all.length)
				return;
			//console.log(all[index]);
			AndroidFunction.ShellExec(all[index]);
			index++;
			setTimeout(_shellexec, 500);
		}
		_shellexec();
		
		//AndroidFunction.ShellExec(s);
		return 'send log ok';
	},
	reboot: function(){
		var cmd = null;
		cmd = LauncherFunction.JSONs(cmd, "reboot.index", 0);
		cmd = LauncherFunction.JSONs(cmd, "reboot.to", "ModLauncher");
		cmd = LauncherFunction.JSONs(cmd, "reboot.request", "false");
		cmd = LauncherFunction.JSONs(cmd, "reboot.value", "null");
		return LauncherFunction.JsonRun(cmd);
	},
	sendWatchLog: function(logdata){
		$.post(settings.pcms_host+'/pcms/watchlog/add', logdata, null, 'json').done(function(o){
			console.log('watchlog: ' + JSON.stringify(o));			
		}).fail(function(xhr){
			console.log('watchlog fail: ' + xhr.responseText);
		});
	},
	systemApiHost: function(){
		var port = 9090;
		if (LauncherFunction.GetHttpServicePort)
			port = LauncherFunction.GetHttpServicePort();
		return 'http://localhost:'+port+'/';
	}
};

/**
	Emulating of ModLauncher 
	각 method들은 override해서 ModLauncher 이외에서도 동작하도록 한다. 혹은 에러가 나지 않도록 함
*/
function buildEmulatedFunctions()
{
	
	ModLauncher = jQuery.extend(ModLauncher, {
		isReal: false,
		revision: function() {
			return navigator.appName;
		},
		getMac: function(){
			return localStorage.virtualMac;
		},
		execjs: function(js, target) {
			console.log('running javascript: ' + js);
			if (target == null)
				target = 'window1';
			if (target == 'window1' && $('#service-frame').length)
				$('#service-frame')[0].contentWindow.eval(js);
			else {
				if (window.parent != null && window != window.parent)
					window.parent.eval(js);
				else {
					console.log('top 윈도우가 존재하지 않음.');
					try {
						eval(js);
					} catch(e) {
						console.log('top 윈도우가 아니라서 나는 에러일 가능성이 높음 : ' + e);
					}
				}
			}
		},
		awake: function(){
		},
		isAwaken: function(){
			return true;
		},
		xmlGet: function(key) {
			var xml;			
			try {
				xml = JSON.parse(localStorage.mod_system_xml);
				if (!xml || typeof(xml) != 'object') {
					xml = {};
				}
			} catch (e) {
				xml = {};
			}
			console.log('emulator xml get key: [%0] val: [%1]'.format2(key, xml[key]));
			return xml[key];
		},
		xmlPut: function(key, val) {
			console.log('emulator xml get key: [%0] val: [%1]'.format2(key, val));
			var xml;
			try {
				xml = JSON.parse(localStorage.mod_system_xml);
				if (!xml || typeof(xml) != 'object') {
					xml = {};
				}
			} catch(e) {
				xml = {};
			}
			xml[key] = val;
			localStorage.setItem('mod_system_xml', JSON.stringify(xml));
		},
		openTo: function(target, url, left, top, width, height) {
		},
		hideWindow: function(target) {
		},
		showWindow: function(target) {
		},
		isTvPlaying: function() {
			return false;
		},
		isWindowVisible: function(target) {
			return true;
		},
		shutup: function(target){
		},
		closeTV: function(){
		},
		getBacklightState: function(){
			return 'on';
		},
		isHiSilicon: function(){
			return false;//true;
		},
		isTelechips: function(){
			return false;
		},
		getFileSize: function(){
			return 0;
		},
	});
}

// 에뮬레이터 사이트에서는 stb상에서도 에뮬레이터 activate
if (typeof(AndroidFunction) == 'undefined' || location.href.indexOf('hospitalwww.moddev.kr') != -1 || location.href.indexOf('emulator.moddev.kr') != -1) {
	console.log('build emulator');
	buildEmulatedFunctions();	
}


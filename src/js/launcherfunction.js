/**

MOD 런처에서만 동작하는 API wrapper
MOD 런처가 아닐 경우 Emulating을 제공함
AndroidFunction Object 에뮬레이팅임
deprecated

LauncherFunction(AndroidFunction)을 직접 호출 하는 부분은 wrapping하여 ModLauncher 내로 포함시킨 후이 
이 모듈 자체도 없앨 예정. 따라서, 추가 개발시에는 여기있는 함수는 호출하지 않기를 권장함.

종속성 없음

@Module launcherfunction.js

*/

/**

이 아래는 런처 에뮬레이팅임


*/

var LauncherFunction;

function buildEmulatedLauncher() 
{
	var _Cmd = {
		open: function(a) {
			console.log('open', a);
			//throw a;
			if (a.value.indexOf('file://') == 0)
			{
				a.value = a.value.replace('file://', 'file');
			}
			console.log('open modified', a);
			if (a.to == 'window1') {
				if (a.value.indexOf('error.html') != -1)
					throw a.value;
				
				location.href = a.value;
				return;
			} 
			
			if (['center'].indexOf(a.to) == -1)return;
			
			var $win = this.secureWindow(a.to);
			
			$win.css('left', a.data.x);
			$win.css('top', a.data.y);
			$win.css('width', a.data.w);
			$win.css('height', a.data.h);
			
			return;
			$win.attr('src', a.value);
		},
		set: function(a) {
			console.log('set', a);
		},
		get2: function(a) {
			console.log('get2', a);
		},
		play: function(a) {
			console.log('play', a);
		},
		secureWindow: function(name){
			var win = $("iframe[name='%0']".format2(name));
			if (win.length == 0)
			{
				var zIndex = 99999;
				if (name == 'popup')
					zIndex++;
				win = $("<iframe name='%0' />".format2(name));
				win.css({
					position: 'absolute',
					zIndex: zIndex,
				});
				
				win.appendTo($('body'));
			}
			return win;
		}
		
	}

	LauncherFunction = {
		JSONi: function(sjo, spath, ivalue){
			return this.JSONs(sjo, spath, ivalue);
		},
		JSONs: function(sjo, spath, svalue){
			if (sjo == null)
				var o = {};
			else
				var o = JSON.parse(sjo);
			
			var c = o;
			
			var ss = spath.split('.');
			//console.log(ss);
			for(var i = 0; i < ss.length-1; i++)
			{
				var leaf = ss[i];
				if (c[leaf] == null)
					c[leaf] = {};
				c = c[leaf];
			}
			c[ss[ss.length-1]] = svalue;
			return JSON.stringify(o);
		},
		GetProp: function(skey){
			console.log('LauncherFunction.GetProp', skey);
			switch(skey) {
				case 'ro.ubicod.platform.sw_revision': return 13133;
				default: return skey; break;
			}
			throw skey;
		},
		DebugOut: function(){
		},
		JsonRun: function(json){
			var o = JSON.parse(json);
			console.log('JsonRun', o);
			var cmd = null;
			for (cmd in o)
			{
				break;
			}		
			switch(cmd) {
			case 'open':
				_Cmd.open(o.open);
			break;
			case 'home':
				location.href = 'Home';
				break;
			case 'set':
				_Cmd.set(o.set);
				break;
			case 'get2':
				_Cmd.set(o.get2);
				break;
			case 'play':
				_Cmd.set(o.play);
				break;
				
			default: console.log('Unknown cmd', o);
			}		
		},
		FileExist: function(){
		},
		SourceReversion: function(){
			return "x";
		},
		GetLauncherVersion: function(){
			return 'emulator'+ this.GetProp('ro.ubicod.platform.sw_revision');
		},
		GetXmlNodeValue: function(path, a){
			console.log('GetXmlNodeValue', path);
			var v = localStorage.getItem('xml_'+path);
			if (typeof v == 'undefined')
				v = '';
			return v;
			//return 'dummyString';
		},
		SetXmlNodeValue: function(path, value){
			localStorage.setItem('xml_'+path, value);
			console.log('SetXmlNodeValue', path, value);
			//throw 'SetXmlNodeValue';
		},
		GetKeyCallbackBlock: function(){
			console.log('GetKeyCallbackBlock', this.keycallbackblock);
			return this.keycallbackblock;		
		},
		keycallbackblock: false,
		SetKeyCallbackBlock: function(b){
			this.keycallbackblock = b;
			console.log('SetKeyCallbackBlock', b);
		},
		ajaxget: function(url){
			console.log('GetHtml2String', url);
			var result = '';
			$.ajax({
				url: url,
				async: false,
			}).done(function(data){
				result = data;
			});
			console.log('ajaxget result', result);
			return result;
		},
		GetHtml2String: function(url, cbstr){
			if (cbstr)
			{
				throw 'async 콜백 버젼 사용 금지. $$.httpget 사용할것';
			}
			console.log('GetHtml2String', url);
			
			if(url.indexOf('://') == -1) {
				return this.ajaxget(url);
			}		
			var result = '';
			$.ajax({
				url: 'httpget_proxy',
				data: {
					url: url
				},
				async: false,
			}).done(function(data){
				result = data;
				if (cbstr)
					eval(cbstr);
			});
			console.log('GetHtml2String result', result);
			return result;
		},
		// GetHtml2StringText -> 이것도 쓰면 안됨
		Test_Bed: function(){
			return false;
		},
		Test_Mode: function(){
			var test_mode = ['dev', 'sqa', 'qa', 'release'];
			return 'release';
		},
		SetKeyCallBack: function(scb){
			this.keycallback = scb;
			console.log('LauncherFunction.SetKeyCallback');
		},
		SeedEncrypt: function(s){
			return encodeURI(s);
		},
		MacAddress: function(){
			function virtualMac(){
				var guid = U.createGuid();
				var mac = '%0:%1:%2:%3:%4:%5'.format2(guid.substr(0, 2), guid.substr(2, 2),guid.substr(4, 2),guid.substr(6, 2),guid.substr(9, 2),guid.substr(11, 2));
				return mac;
			}
			// 박진현단말 '00:17:29:08:53:98'
			
			var mac = localStorage.getItem('virtualMac');
			if (!mac) {
				mac = virtualMac();
				localStorage.setItem('virtualMac', mac);
			}
			return mac;	
		},
		SetSetupInfo: function(type, val){
			setCookie('SS_'+type, val);
		},
		GetSetupInfo: function(type){
			return getCookie('SS_'+type);		
		},
		IPv4: function(){
			return '127.0.0.1';
		},
		ToMD5Hash: function(s){
			return md5(s);
		},
		AesEncrypt: function(s){
			return encodeURI(s);
		},
		ClearWebCache: function(){
		},
		SetProp: function(key, val){
		},
		SetHome: function(url) {
		},
		ShellExec: function(){
			console.log(msg('ShellExec', arguments));
			return true;
		},
	}
	console.log("launcherfunction.js Setup Complete");
}
if (typeof(AndroidFunction) != 'undefined' && AndroidFunction.MacAddress != null) // 검사 2개 필요
	LauncherFunction = AndroidFunction;
else
	buildEmulatedLauncher();

localStorage.setItem('virtualMac', LauncherFunction.MacAddress());
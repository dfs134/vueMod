/**

mod 명령 수행 담당 js
MOD 표준 커맨드 실행기.
실행은 message를 통해서 이루어지거나, launcher 커맨드로부터 실행될 수 도 있다.

새로운 명령이 추가될때는 이 파일만 수정한다.

이 모듈의 실행 context는 top 전용


@Module commandcenter.js

*/

/**
	다른 윈도우에 익명함수를 넘기고 콜백을 통해 실행 결과를 얻어오는 함수
	함수 실행이 끝나기 전에 또 호출하면 안됨	
	
	이거 겁나 복잡한 부분이니까 건드리지 말것
	
	ex)
		execjsResult('window1', "(function(){console.log('CommandCenter - execjsResult: running on window1'); return 'XXXXXXX'})()",  function(result){console.log('CommadCenter - result: ' result); alert(result)});
		
	@function execjsResult
*/


var cbCbExecjsResult;

function cbExecjsResult(r)
{
	console.log('cbCbExecjsResult(r)'+ cbCbExecjsResult + r);
	try {
		cbCbExecjsResult(r)
	}catch(e) {
		console.log('Error in execjsResult callback - ' + e);
	}	
}

function addslashes(str) {
	var str = JSON.stringify(String(str));
	str = str.substring(1, str.length-1);
	return str.replace(/'/g, '\\\''); 
    /*return string.replace(/\\/g, '\\\\').
        replace(/\u0008/g, '\\b').
        replace(/\t/g, '\\t').
        replace(/\n/g, '\\n').
        replace(/\f/g, '\\f').
        replace(/\r/g, '\\r').
        replace(/'/g, '\\\'').
        replace(/"/g, '\\"');*/
}

function execjsResult(target, js, cb) // 이 함수는 ModLauncher를포함해야 하므로 target을 about:blank 가 있는곳으로 지정하면 실행 불가
{
	var js = addslashes(js);
	var js2 = '';
	console.log('CommandCenter - execjsResult: ' + js);
	cbCbExecjsResult = cb;
	js2 +=  "function _execjs(js, target){\
		var cmd = null;cmd = AndroidFunction.JSONs(cmd, 'callback.to', target);\
		cmd = AndroidFunction.JSONs(cmd, 'callback.value', js);		\
		AndroidFunction.JsonRun(cmd);\
	};"
	js2 += "var result=eval(\"%0\");".format2(js);
	js2 += "_execjs('cbExecjsResult(\"' + result+ '\")', 'top')";
	
	ModLauncher.execjs(js2, target);	
}

var CommandCenter = {
	findOutCuurentWindow: function(f){ // 메인윈도우가 center인지, windows1인지 알아내서 callback함수로 넘겨준다
		var tvdest = 'center'; 
		execjsResult('center', "(function(){return location.href;})()", function(result){
			console.log('location.href of tvwindow is ' + result);
			// tv보는중이면 toast타겟을 center로
			if (result.indexOf('TV_Custom') != -1) {
				var target = 'center';
			} else // 아니면 window1으로					
				var target = 'window1';
				
			f(target);
		});	
	},
	execute: function(cmd, param1, param2, sender)
	{
		console.log(cmd, param1, param2, sender);
		switch(cmd) {
		case 'log': 
			//ModLauncher.execjs(""
			break;
			
		case 'func': //자바스크립트를 실행하고 결과를 리턴
			var js = param1;//addslashes(param1);
			console.log('func js: ' + js);
			var result = eval(js);
			console.log('func js result: ' + result);
			var data = JSON.stringify({
					cmd: 'result',
					result: result,
					context: param2,				
				});
			var o = {
				cmd: 'send',
				receiver: sender,
				data: data,
			};
			console.log(o);			
			Listener._send(o);
			break;
		case 'toast':
			/*
			var tvdest = 'center'; 
			execjsResult('center', "(function(){return location.href;})()", function(result){
				console.log('location.href of tvwindow is ' + result);
				// tv보는중이면 toast타겟을 center로
				if (result.indexOf('TV_Custom') != -1) {
					var target = 'center';
				} else // 아니면 window1으로					
					var target = 'window1';
					
				ModLauncher.execjs("Toast.show('%0')".format2(param1), target);
			});	*/
			this.findOutCuurentWindow(function(target){
				ModLauncher.execjs("Toast.show('%0')".format2(param1), target);
			});
			break;
			
		case 'sysmessagebox':
			this.findOutCuurentWindow(function(target){
				var js = "modAlert('%0')".format2(addslashes(param1));
				ModLauncher.execjs(js, target);
			});
			break;
			
		case 'messagebox':
			try{
				var opt = JSON.parse(param2);
			}catch(e){
				var opt={};
			}
			param2 = JSON.stringify(opt);
			this.findOutCuurentWindow(function(target){
				ModLauncher.execjs("MessageBox.show('%0', %1)".format2(addslashes(param1), param2), target);
			});
			break;
			
		case 'caption':
			BottomCaption.push({
				text: param1, 
				repeat: param2
			});
			// 캡션은 top 윈도우에서 실행
			BottomCaption.start(); // 타이머 스타트
			break;
		case 'sleep':
			ModLauncher.execjs("ModLauncher.sleep()", 'window1');
			break;
		case 'awake':
			ModLauncher.execjs("ModLauncher.awake()", 'window1');
			break;
		case 'home':
			ModLauncher.execjs("ModLauncher.shutup('center');ModLauncher.home()", 'window1');
			break;
		case 'reboot':
			//ModLauncher.execjs("LauncherFunction.ShellExec('mod -c reboot')", 'window1');
			ModLauncher.reboot();
			break;
		case 'softreset': case 'intro':
			this.execute('toast', '시스템소프트리셋중...');
			setTimeout(function(){
				var url = settings.serviceroot + '/system/intro_s3.php';
				ModLauncher.execjs("location.href='%0'".format2(url), 'window1');
			}, 1000);
			break;			
		//case 'toast':
		//break;
		default: throw 'Unknown Command or not implemented yet : '+cmd;
		}
	}
}

if (typeof(AndroidFunction) == 'undefined')
{
	$(function(){
		CommandCenter = $.extend(CommandCenter, {
			findOutCuurentWindow: function(f){
				f('window1');
			}
		});
	});
}

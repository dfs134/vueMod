if (typeof (AndroidFunction) != 'undefined') {
	// if (ModLauncher.isReal) {
	//alert('remocon control start');
	var KeyEmulator = {
		globalKeyCallback: function (e) {
			//if (e.action != 1)
			//return;

			console.log('KeyEmulator.globalKeyCallback : %0'.format2(e.keyCode), e);
			//alert(location.href);//C.Remocon);
			//alert(o2s(C));
			var remoconKey = (_.invert(C.Remocon))[e.keyCode];   // 리모콘 코드값에 해당하는 키 이름을 얻음 HOME, POWER 등

			var keyCode = C.MODKeyCode[remoconKey];
			if (keyCode == null)
				return;

			if (e.action == 0)
				jQuery.event.trigger({ type: 'keydown', keyCode: keyCode });
			else
				jQuery.event.trigger({ type: 'keyup', keyCode: keyCode });
		},
		globalKeyCallbackForHiSilicon: function (e) {
			//			if (e.action != 1)
			//				return;

			//console.log('Remocon Event : ' + msg(e));

			console.log('KeyEmulator.globalKeyCallback : %0 %1'.format2(e.keyCode, e.action), e);

			var remoconKey = (_.invert(C.Remocon))[e.keyCode];   // 리모콘 코드값에 해당하는 키 이름을 얻음 HOME, POWER 등 131->HS HOME

			var keyCode = C.MODKeyCode[remoconKey];
			if (keyCode == null)
				return;

			// 신규보드는 방향키일때 키코드 발생 시키면 안된다 - OK키추가 161201
			if ([MODKeyCode.UP, MODKeyCode.DOWN, MODKeyCode.LEFT, MODKeyCode.RIGHT, MODKeyCode.OK].indexOf(keyCode) != -1)
				return;

			// console.log('Key Action : %0, Key1(BM) : %1, Key2(AM) : %2'.format2(e.action, e.keyCode, keyCode));
			if (e.action == 0)
				jQuery.event.trigger({ type: 'keydown', keyCode: keyCode });
			else
				jQuery.event.trigger({ type: 'keyup', keyCode: keyCode });
		}
	}

	$(function () {

		//기존보드 -> [ro.build.product]: [tcc8800st]
		//신규보드 -> [ro.build.product]: [Hi3796MV100]
		var isHiSilicon = AndroidFunction.GetProp('ro.build.product') != 'tcc8800st';
		//alert(AndroidFunction.GetProp('ro.build.product'))
		console.log('system : ' + AndroidFunction.GetProp('ro.build.product'));
		if (isHiSilicon)
			AndroidFunction.SetKeyCallBack("KeyEmulator.globalKeyCallbackForHiSilicon(e)");
		else
			AndroidFunction.SetKeyCallBack("KeyEmulator.globalKeyCallback(e)");
		console.log('******* GlobalKeyCallback registered ***********');
	});
	// }
}

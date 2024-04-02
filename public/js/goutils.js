/**

17/2/27 stack trace 추가

goutils ver 1.1
clearCookie, deleteAllCookies 추가

goutils ver 1.0

뭐라도 하나 수정하면 버젼 증가 시킨 후 표준 lib디렉토리에 옮긴다

@module goutils

*/

/*
var Person = Class.extend({
	init: function(isDancing){
		this.dancing = isDancing;
	},
	dance: function(){
		return this.dancing;
	}
});
var Ninja = Person.extend({
	init: function(){
		this._super( false );
	},
	dance: function(){
		// Call the inherited version of dance()
		return this._super();
	},
	swingSword: function(){
		return true;
	}
});

var p = new Person(true);
p.dance(); // => true

var n = new Ninja();
n.dance(); // => false
n.swingSword(); // => true

// Should all be true
p instanceof Person && p instanceof Class &&
n instanceof Ninja && n instanceof Person && n instanceof Class
*/


/**
 * Calculate a 32 bit FNV-1a hash
 * Found here: https://gist.github.com/vaiorabbit/5657561
 * Ref.: http://isthe.com/chongo/tech/comp/fnv/
 *
 * @param {string} str the input value
 * @param {boolean} [asString=false] set to true to return the hash value as 
 *     8-digit hex string instead of an integer
 * @param {integer} [seed] optionally pass the hash of the previous chunk
 * @returns {integer | string}
 */
function hashFnv32a(str, asString, seed) {
	/*jshint bitwise:false */
	var i, l,
		hval = (seed === undefined) ? 0x811c9dc5 : seed;

	for (i = 0, l = str.length; i < l; i++) {
		hval ^= str.charCodeAt(i);
		hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
	}
	if (asString) {
		// Convert to 8 digit hex string
		return ("0000000" + (hval >>> 0).toString(16)).substr(-8);
	}
	return hval >>> 0;
}

String.prototype.hashCode = function () {
	return hashFnv32a(this, false);
};


/**
	object를 메세지화 시켲주는 함수. 가변인자 지원. console.log(msg(a, b, c, d))의 형태로 사용한다
	@function: msg
	@parameters: array of any objects
	@return: string description of parameters
*/

function print_stack() {
	consoe.log('-------------------------------------');
	consoe.log('-------------------------------------');
	consoe.log('-------------------------------------');
	consoe.log('-------------------------------------');
	consoe.log('-------------------------------------');
	consoe.log('-------------------------------------');
	consoe.log('STACK TRACE--------------------------');

	var e = new Error();

	console.log(e.stack);

	consoe.log('-------------------------------------');
	consoe.log('-------------------------------------');
	consoe.log('-------------------------------------');
	consoe.log('-------------------------------------');
	consoe.log('-------------------------------------');
	consoe.log('-------------------------------------');
}

var U = {
	createGuid: function () {
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000)
				.toString(16)
				.substring(1);
		}
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
			s4() + '-' + s4() + s4() + s4();
	},
	assert: function (cond, msg) {
		if (!cond) {
			if (msg)
				throw 'Assertion failed: ' + msg;
			throw 'Assertion failed!';
		}
	},
	getobj: function (s) {
		try {
			//var o = JSON.parse(s);
			var o = eval('(' + s + ')');
			return o;
		} catch (e) {
			throw s;
		}
	}
};

/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype
(function () {
	var initializing = false, fnTest = /xyz/.test(function () { xyz; }) ? /\b_super\b/ : /.*/;
	// The base Class implementation (does nothing)
	this.Class = function () { };

	// Create a new Class that inherits from this class
	Class.extend = function (prop) {
		var _super = this.prototype;

		// Instantiate a base class (but only create the instance,
		// don't run the init constructor)
		initializing = true;
		var prototype = new this();
		initializing = false;

		// Copy the properties over onto the new prototype
		for (var name in prop) {
			// Check if we're overwriting an existing function
			prototype[name] = typeof prop[name] == "function" &&
				typeof _super[name] == "function" && fnTest.test(prop[name]) ?
				(function (name, fn) {
					return function () {
						var tmp = this._super;

						// Add a new ._super() method that is the same method
						// but on the super-class
						this._super = _super[name];

						// The method only need to be bound temporarily, so we
						// remove it when we're done executing
						var ret = fn.apply(this, arguments);
						this._super = tmp;

						return ret;
					};
				})(name, prop[name]) :
				prop[name];
		}

		// The dummy class constructor
		function Class() {
			// All construction is actually done in the init method
			if (!initializing && this.init)
				this.init.apply(this, arguments);
			if (!initializing && this.initialize)
				this.initialize.apply(this, arguments);
		}

		// Populate our constructed prototype object
		Class.prototype = prototype;

		// Enforce the constructor to be what we expect
		Class.prototype.constructor = Class;

		// And make this class extendable
		Class.extend = arguments.callee;

		return Class;
	};
})();


String.prototype.format2 = function () {
	var formatted = this;
	/* for(arg in arguments) 
	 {        
		 formatted = formatted.replace('%' + arg, arguments[arg]);    
	 }*/
	$.each(arguments, function (i, v) {
		formatted = formatted.replace('%' + i, v);
	});
	return formatted;
}
/*
String.prototype.format = function() 
{
		var args = arguments;  
		return this.replace(/{(\d+)}/g, function(match, number) 
				{     
						return typeof args[number] != 'undefined'      
								? args[number]      : 
								'{' + number + '}';  
				});
}
*/
function log(s) {
	if (s == '' || s == null)
		return;
	/*do
	{
			errorDiv = document.getElementById('errorDiv')
			if (!errorDiv)
					document.body.innerHTML += '<div id=errorDiv style="width: 100%; border: solid red; word-wrap: break-word; z-index: 32767;"></div>'
	} while(errorDiv == null)
	errorDiv.innerHTML += r + '<br>'
*/
	if ($('#log').length == 0) {
		$('body').prepend('<div id=log />');
		$('#log').css({
			backgroundColor: '#fff',
			position: 'absolute',
			right: 0,
			height: '200px',
			width: '400px',
			overflow: 'auto',
			zIndex: 99999
		});
	}
	if (typeof (s) == 'object')
		s = objtostring(s);
	$('#log').prepend('(%1) %0<br />'.format2(s, (new Date()).toISO8601Time()));
}

foo = function () {
	alert('xx')
}
alert2 = function () {
	foo.apply(this, this.arguments)
}

function splithangul(ch) {

	var font_cho = Array('ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ',
		'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ',
		'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ');

	var font_jung = Array('ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ',
		'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ',
		'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ',
		'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ');

	var font_jong = Array('', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ',
		'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ',
		'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ');

	//stringtest   = "찬이";
	CompleteCode = ch.charCodeAt(0);
	UniValue = CompleteCode - 0xAC00;

	Jong = UniValue % 28;
	Jung = ((UniValue - Jong) / 28) % 21;
	Cho = parseInt(((UniValue - Jong) / 28) / 21);

	return [font_cho[Cho], font_jung[Jung], font_jong[Jong]];
}

function islastjong(str) {
	a = splithangul(str[str.length - 1])
	return a[2] != ''
}

function hanobj(str) // 한글 을/를  구별하여 붙이기
{
	if (!str)
		return ''

	if (islastjong(str))
		return str + '을'
	else
		return str + '를'
}
function hansbj(str) // 이 /가 구별하여 붙이기
{
	if (!str)
		return ''

	if (islastjong(str))
		return str + '이'
	else
		return str + '가'

}

function getBodyHeight(min, max) {
	h = document.body.clientHeight;
	//alert(h)
	return Math.max(min, Math.min(h, max))
}
var trunc = function (n) {
	return n | 0; // bitwise operators convert operands to 32-bit integers
}

var random = function (n) {
	return trunc(Math.random() * n)
	//return Math.floor(Math.random() * n)
	//  return 1
}

var checkregex = function (str, regex, errmsg) {
	if (!regex.test(str))
		throw errmsg
}

var checkid = function (id) {

	if (id.ength < 6) {
		throw 'id 길이가 너무 짧습니다';
	}
	regex = /^[a-z]([0-9a-z_])+$/i
	//, "Username may consist of a-z, 0-9, underscores, begin with a letter."
	checkregex(id, regex, 'id는 영문, 숫자로 만들어야 합니다')
}

var checkemail = function (email) {
	regex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i
	checkregex(email, regex, "email 형식이 잘못되었습니다. user@domain.com 의 형식으로 입력하여 주세요")
}

var checkpasswd = function (pw) {
	//"Password field only allow : a-z 0-9"
	checkregex(pw, /^([0-9a-zA-Z])+$/, "패스워드는 영문, 숫자로만 이루어져야 합니다.")
}

// Split timestamp into [ Y, M, D, h, m, s ]
var decodeMysqlDate = function (timestr) {//"2010-06-09 13:12:01"
	var t = timestr.split(/[- :+]/);// Apply each element to the Date functionvar 
	if (t[3] == null)
		t[3] = 0;
	if (t[4] == null)
		t[4] = 0;
	if (t[5] == null)
		t[5] = 0;
	var d = new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5]);
	if (isNaN(d.getTime()))
		throw timestr + ' : 시간 형식이 잘못되었습니다.';
	return d;
}

String.prototype.toDate = function () {
	return decodeMysqlDate(this);
}

String.prototype.toDateTime = function () {
	return decodeMysqlDate(this);
}

/*
$(window).error(function(msg, url, line){  
		alert(msg)
		//jQuery.post("js_error_log.php", { msg: msg, url: url, line: line });});
})*/

var MD5 = function (string) {

	function RotateLeft(lValue, iShiftBits) {
		return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
	}

	function AddUnsigned(lX, lY) {
		var lX4, lY4, lX8, lY8, lResult;
		lX8 = (lX & 0x80000000);
		lY8 = (lY & 0x80000000);
		lX4 = (lX & 0x40000000);
		lY4 = (lY & 0x40000000);
		lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
		if (lX4 & lY4) {
			return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
		}
		if (lX4 | lY4) {
			if (lResult & 0x40000000) {
				return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
			} else {
				return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
			}
		} else {
			return (lResult ^ lX8 ^ lY8);
		}
	}

	function F(x, y, z) { return (x & y) | ((~x) & z); }
	function G(x, y, z) { return (x & z) | (y & (~z)); }
	function H(x, y, z) { return (x ^ y ^ z); }
	function I(x, y, z) { return (y ^ (x | (~z))); }

	function FF(a, b, c, d, x, s, ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};

	function GG(a, b, c, d, x, s, ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};

	function HH(a, b, c, d, x, s, ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};

	function II(a, b, c, d, x, s, ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};

	function ConvertToWordArray(string) {
		var lWordCount;
		var lMessageLength = string.length;
		var lNumberOfWords_temp1 = lMessageLength + 8;
		var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
		var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
		var lWordArray = Array(lNumberOfWords - 1);
		var lBytePosition = 0;
		var lByteCount = 0;
		while (lByteCount < lMessageLength) {
			lWordCount = (lByteCount - (lByteCount % 4)) / 4;
			lBytePosition = (lByteCount % 4) * 8;
			lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
			lByteCount++;
		}
		lWordCount = (lByteCount - (lByteCount % 4)) / 4;
		lBytePosition = (lByteCount % 4) * 8;
		lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
		lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
		lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
		return lWordArray;
	};

	function WordToHex(lValue) {
		var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
		for (lCount = 0; lCount <= 3; lCount++) {
			lByte = (lValue >>> (lCount * 8)) & 255;
			WordToHexValue_temp = "0" + lByte.toString(16);
			WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
		}
		return WordToHexValue;
	};

	function Utf8Encode(string) {
		string = string.replace(/\r\n/g, "\n");
		var utftext = "";

		for (var n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if ((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}

		return utftext;
	};

	var x = Array();
	var k, AA, BB, CC, DD, a, b, c, d;
	var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
	var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
	var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
	var S41 = 6, S42 = 10, S43 = 15, S44 = 21;

	string = Utf8Encode(string);

	x = ConvertToWordArray(string);

	a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;

	for (k = 0; k < x.length; k += 16) {
		AA = a; BB = b; CC = c; DD = d;
		a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
		d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
		c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
		b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
		a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
		d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
		c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
		b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
		a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
		d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
		c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
		b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
		a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
		d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
		c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
		b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
		a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
		d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
		c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
		b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
		a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
		d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
		c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
		b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
		a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
		d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
		c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
		b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
		a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
		d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
		c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
		b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
		a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
		d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
		c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
		b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
		a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
		d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
		c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
		b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
		a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
		d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
		c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
		b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
		a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
		d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
		c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
		b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
		a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
		d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
		c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
		b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
		a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
		d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
		c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
		b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
		a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
		d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
		c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
		b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
		a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
		d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
		c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
		b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
		a = AddUnsigned(a, AA);
		b = AddUnsigned(b, BB);
		c = AddUnsigned(c, CC);
		d = AddUnsigned(d, DD);
	}

	var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);

	return temp.toLowerCase();
}

var md5 = MD5

isSameDate = function (d1, d2) {
	return (d1.getFullYear() == d2.getFullYear()) && (d1.getMonth() == d2.getMonth()) &&
		(d1.getDate() == d2.getDate())
}

jqAjaxError = function (xhr) {
	alert('error: ' + xhr.responseText);
}
var jqAjaxOption = {
	showLoadingGif: false
}

jqAjax = function (url, data, callback, o) {

	var showgif = jqAjaxOption['showLoadingGif'];

	if (showgif) {
		if ($('.loading').length == 0) {
			$('<div class=loading />').css({
				position: 'absolute',
				width: '15px',
				height: '15px',
				backgroundImage: 'url(images/loading.gif)',
				display: 'none',
				zIndex: 9999
			}).appendTo('body')
		}
		var loading = $('.loading')

		var left = ($('body').width() - loading.width()) / 2
		var top = ($('body').height() - loading.height()) / 2



		loading.css({
			display: 'block',
			left: left,
			top: top
		})
	}
	var options = {
		type: 'POST',
		url: url,
		data: data,
		success: function (a) {
			if (showgif)
				loading.css('display', 'none')
			if (callback)
				callback(a)
		},
		dataType: 'json',
		error: function (xhr) {
			jqAjaxError(xhr)
			if (showgif)
				loading.css('display', 'none')
		}
	};
	jQuery.extend(options, o);
	$.ajax(options);
}
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function (elt /*, from*/) {
		var len = this.length;

		var from = Number(arguments[1]) || 0;
		from = (from < 0)
			? Math.ceil(from)
			: Math.floor(from);
		if (from < 0)
			from += len;

		for (; from < len; from++) {
			if (from in this &&
				this[from] === elt)
				return from;
		}
		return -1;
	};
}

function mysqlTimeStampToDate(timestamp) {
	return decodeMysqlDate(timestamp);
	/*
		//function parses mysql datetime string and returns javascript Date object
		//input has to be in this format: 2007-06-05 15:26:02
		var regex=/^([0-9]{2,4})-([0-1][0-9])-([0-3][0-9]) (?:([0-2][0-9]):([0-5][0-9]):([0-5][0-9]))?$/;
		var t=timestamp.replace(regex,"$1 $2 $3 $4 $5 $6").split(' ');
		return new Date(t[0],t[1]-1,t[2],t[3],t[4],t[5]);
	*/
}

function activateMaxlength() {
	$('textarea[maxlength]').bind('keydown keyup', function (event) {
		var limit = parseInt($(this).attr('maxlength'));
		var text = $(this).val();
		var chars = text.length;
		if (chars > limit) {
			$(this).blur() //한글처리 때문에 꼭 필요함
			var new_text = text.substr(0, limit);
			$(this).focus()
			$(this).val(new_text);
		}
	});
}

function trim(str) {
	return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}
String.prototype.trim = function () {
	return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

function getrootpath(url) {
	var path = '/';
	var dir = parseUri(url).directory.substring(1);
	var n = dir.indexOf('/');
	if (n > 0)
		path += dir.substring(0, n + 1);
	return path;
}

function setCookie(name, value) {
	var argc = setCookie.arguments.length;
	var argv = setCookie.arguments;

	var expires = (argc > 2) ? argv[2] : 365;//null;
	var path = (argc > 3) ? argv[3] : getrootpath(document.URL);//'/' null;
	var domain = (argc > 4) ? argv[4] : null;
	var secure = (argc > 5) ? argv[5] : false;

	if (typeof expires === 'number') {
		var days = expires, t = expires = new Date();
		t.setDate(t.getDate() + days);
	}

	document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) +
		//((expires == null) ? "" : ("; expires =" + expires.toUTCString())) +
		((path == null) ? "" : ("; path =" + path)) +
		((domain == null) ? "" : ("; domain =" + domain)) +
		((domain == true) ? "; secure" : "");
}

function getCookie(name, def) {
	name = encodeURIComponent(name);
	var dcookie = document.cookie;
	var cname = name + "=";
	var clen = dcookie.length;
	var cbegin = 0;
	while (cbegin < clen) {
		var vbegin = cbegin + cname.length;
		if (dcookie.substring(cbegin, vbegin) == cname) {
			var vend = dcookie.indexOf(";", vbegin);
			if (vend == -1) vend = clen;
			return decodeURIComponent(dcookie.substring(vbegin, vend));
		}
		cbegin = dcookie.indexOf(" ", cbegin) + 1;
		if (cbegin == 0) break;
	}
	return def;
}

function deleteCookie(s) {
	setCookie(s, -1, -1);
}

function deleteAllCookies() {
	var cookies = document.cookie.split(";");
	//	alert(cookies);
	for (var i = 0; i < cookies.length; i++)
		deleteCookie(cookies[i].split("=")[0]);
}

function clearCookie() {
	deleteAllCookies();
}

function CookieList(name) {
	this.listname = name
	this.getAll = function () {
		var a = $.cookie(this.listname);
		if (!a) {
			a = new Array()
		} else
			a = a.split(',')

		return a
	}
	this.getCount = function () {
		var a = this.getAll()
		return a.length
	}
	this.getUser = function (n) {
		var a = this.getAll()
		return a[n]
	}
	this.save = function (a) {
		//$.cookie(this.listname, a, { expires: 7, path: '/' })
		setCookie(this.listname, a)
	}
	this.add = function (id) {
		if (id.length == 0)
			throw 'id를 넣으세요'
		var a = this.getAll()
		if (this.indexOf(id) != -1)
			throw id + '님은 이미 로그인 되어 있습니다.'
		a.push(id)
		//alert(a)
		this.save(a)
	}
	this.remove = function (index) {
		var a = this.getAll()
		a.splice(index, 1)
		this.save(a)
	}
	this.indexOf = function (id) {
		var a = this.getAll()
		return a.indexOf(id)
	}
	this.clear = function () {
		setCookie(this.listname, '')
		//alert($.cookie(this.listname))
	}
}

$.fn.insertAtCaret = function (tagName) {
	return this.each(function () {
		if (document.selection) {
			//IE support
			this.focus();
			sel = document.selection.createRange();
			sel.text = tagName;
			this.focus();
		} else if (this.selectionStart || this.selectionStart == '0') {
			//MOZILLA/NETSCAPE support
			startPos = this.selectionStart;
			endPos = this.selectionEnd;
			scrollTop = this.scrollTop;
			this.value = this.value.substring(0, startPos) + tagName + this.value.substring(endPos, this.value.length);
			this.focus();
			this.selectionStart = startPos + tagName.length;
			this.selectionEnd = startPos + tagName.length;
			this.scrollTop = scrollTop;
		} else {
			this.value += tagName;
			this.focus();
		}
	});
};

$.fn.insertRoundCaret = function (tagName) {
	return this.each(function () {
		strStart = '[' + tagName + ']';
		strEnd = '[/' + tagName + ']';
		if (document.selection) {
			//IE support
			stringBefore = this.value;
			this.focus();
			sel = document.selection.createRange();
			insertstring = sel.text;
			fullinsertstring = strStart + sel.text + strEnd;
			sel.text = fullinsertstring;
			document.selection.empty();
			this.focus();
			stringAfter = this.value;
			i = stringAfter.lastIndexOf(fullinsertstring);
			range = this.createTextRange();
			numlines = stringBefore.substring(0, i).split("\n").length;
			i = i + 3 - numlines + tagName.length;
			j = insertstring.length;
			range.move("character", i);
			range.moveEnd("character", j);
			range.select();
		} else if (this.selectionStart || this.selectionStart == '0') {
			//MOZILLA/NETSCAPE support
			startPos = this.selectionStart;
			endPos = this.selectionEnd;
			scrollTop = this.scrollTop;
			this.value = this.value.substring(0, startPos) + strStart + this.value.substring(startPos, endPos) + strEnd + this.value.substring(endPos, this.value.length);
			this.focus();
			this.selectionStart = startPos + strStart.length;
			this.selectionEnd = endPos + strStart.length;
			this.scrollTop = scrollTop;
		} else {
			this.value += strStart + strEnd;
			this.focus();
		}
	});
};

function objtostring(o) {
	var r = '';
	if (typeof (o) == 'object') {
		for (var key in o)
			r += key + ': ' + o[key] + '\n';
	} else
		r = o;
	return r;
}

oalert = function (s) {
	alert(objtostring(s));
}

/*
$.fn.serializeJSON=function() {
	var json = {};
	jQuery.map($(this).serializeArray(), function(n, i){
		json[n['name']] = n['value'];
	});
	return json;
};
*/

function qrcode(talkurl, w, h) {
	if (w == null)
		w = 140;
	if (h == null)
		h = 140;
	var eurl = encodeURIComponent(talkurl);
	//$('#QRCodeDiv').html('<img src="http://chart.apis.google.com/chart?cht=qr&chs=140x140&chld=L|1&chl=' + eurl + '" >')
	return '<img src="http://chart.apis.google.com/chart?cht=qr&chs={0}x{1}&chld=L|1&chl='.format(w, h) + eurl + '" >';

}
/*
function abort()
{
	throw "silent exception, not an error";
}

function checkempty(msg, func)
{
	if (msg != '' && msg != null)
	{
		if (func != null)
			func(msg);
		else
		{
			alert(msg);
			abort();
		}
	}
}
*/
function ajaxcall(url, arg1, arg2, arg3)// callback, errortext)
{
	var callback, errortext, args;

	switch (ajaxcall.arguments.length) {
		case 0:
			throw "url 을 넣지 않았음";
		case 1: case 2:
			if (typeof arg1 == 'object') {
				args = arg1;
				callback = arg2;
			} else {
				callback = arg1;
				errortext = arg2;
			}
			break;
		default:
			args = arg1;
			callback = arg2;
			errortext = arg3;
	}

	$.ajax(url, {
		type: 'POST',
		dataType: 'json',
		data: args,
		success: function (data) {
			if (callback != null)
				switch (typeof (callback)) {
					case 'string':
						location.href = callback;
						break;
					case 'function':
						if (!callback(data))
							return;
						break;
					default:
						alert('callback 형식이 잘못되었습니다.');
				}

			if (typeof (data) == 'string') {
				alert(data);
			}
		},
		error: function (xhr, textStatus, errorThrown) {
			if (errortext != null) {
				if (typeof (errortext) == 'function')
					errortext(xhr.responseText);
				else
					alert(errortext);
			} else {
				alert('error: ' + xhr.responseText);
			}
		}
	});
}
/*
postform(formid, nexturl[, 'error message']);
postform(formid, function(data){}[, 'error message']);
*/
function postform(formid, callback, errortext) {
	var f = $(formid).attr('beforesubmit');
	//alert(f);

	if (f != null) {
		var r = eval(f);
		if (!r)
			return;

		//$(formid).beforesubmit();
	}
	//	alert(formid + $(formid).attr('onsubmit'))
	var url = $(formid).attr('action');
	//alert(url)

	$.ajax(url, {
		data: $(formid).serialize(),
		type: 'POST',
		dataType: 'json',
		success: function (data) {
			//alert(typeof(callback));
			//alert(callback);
			if (callback != null)
				switch (typeof (callback)) {
					case 'string':
						location.href = callback;
						break;
					case 'function':
						if (!callback(data))
							return;
						break;
					default:
						alert('callback 형식이 잘못되었습니다.');
				}

			if (typeof (data) == 'string') {
				alert(data);
			}
		},
		error: function (xhr, textStatus, errorThrown) {
			//oalert(xhr);
			//alert(textStatus);
			if (errortext != null) {
				//alert(typeof(errortext));
				if (typeof (errortext) == 'string')
					alert(errortext)
				else
					errortext(xhr.responseText);
			} else
				alert('error: ' + xhr.responseText);
		}
	});
}

function isie() {
	//var ie = navigator.userAgent.match(/msie/i);
	var ie = !jQuery.support.leadingWhitespace;
	return ie;
}

function isie6() {
	var ie6 = !jQuery.support.leadingWhitespace;// navigator.userAgent.match(/msie/i) && navigator.userAgent.match(/6/) );
	return ie6;
}

/**
 * You first need to create a formatting function to pad numbers to two digits…
 **/
function twoDigits(d) {
	if (0 <= d && d < 10) return "0" + d.toString();
	if (-10 < d && d < 0) return "-0" + (-1 * d).toString();
	return d.toString();
}

/**
 * …and then create the method to output the date string as desired.
 * Some people hate using prototypes this way, but if you are going
 * to apply this to more than one Date object, having it as a prototype
 * makes sense.
 **/
Date.prototype.toMysqlFormat = function () {
	return this.getUTCFullYear() + "-" + twoDigits(1 + this.getMonth()) + "-" + twoDigits(this.getDate()) + " " + twoDigits(this.getHours()) + ":" + twoDigits(this.getMinutes()) + ":" + twoDigits(this.getSeconds());
};
Date.prototype.toISO8601 = function () {
	return this.getUTCFullYear() + "-" + twoDigits(1 + this.getMonth()) + "-" + twoDigits(this.getDate()) + " " + twoDigits(this.getHours()) + ":" + twoDigits(this.getMinutes()) + ":" + twoDigits(this.getSeconds());
};
Date.prototype.toISO8601Date = function () {
	return this.getUTCFullYear() + "-" + twoDigits(1 + this.getMonth()) + "-" + twoDigits(this.getDate());
};
Date.prototype.toISO8601Time = function () {
	return twoDigits(this.getHours()) + ":" + twoDigits(this.getMinutes()) + ":" + twoDigits(this.getSeconds());
};

function getMysqlDate(d) {
	if (!d)
		d = new Date();
	return d.toISO8601Date();
}

function getMysqlTime(d) {
	if (!d)
		d = new Date();
	return d.toISO8601Time();
}

function getMysqlDateTime(d) {
	if (!d)
		d = new Date();
	return d.toISO8601();
}

function clearselection() {
	if (window.getSelection) {
		if (window.getSelection().empty) {  // Chrome
			window.getSelection().empty();
		} else if (window.getSelection().removeAllRanges) {  // Firefox
			window.getSelection().removeAllRanges();
		}
	} else if (document.selection) {  // IE?
		document.selection.empty();
	}
}

$.fn.selectRange = function (start, end) {
	return this.each(function () {
		if (this.setSelectionRange) {
			this.focus();
			this.setSelectionRange(start, end);
		} else if (this.createTextRange) {
			var range = this.createTextRange();
			range.collapse(true);
			range.moveEnd('character', end);
			range.moveStart('character', start);
			range.select();
		}
	});
};

function showerror(msg) {
	if (msg == '')
		return;
	alert(msg);
}

$.fn.serializeObject = function () {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function () {
		if (o[this.name] !== undefined) {
			if (!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};


// parseUri 1.2.2
// (c) Steven Levithan <stevenlevithan.com>
// MIT License
/*
	사용법
	parseUri(uri).anchor
	parseUri(uri).directory
	
*/
function parseUri(str) {
	var o = parseUri.options,
		m = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
		uri = {},
		i = 14;

	while (i--) uri[o.key[i]] = m[i] || "";

	uri[o.q.name] = {};
	uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
		if ($1) uri[o.q.name][$1] = $2;
	});

	return uri;
};

parseUri.options = {
	strictMode: false,
	key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
	q: {
		name: "queryKey",
		parser: /(?:^|&)([^&=]*)=?([^&]*)/g
	},
	parser: {
		strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
		loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
	}
};

/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

var dateFormat = function () {
	var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
		timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		timezoneClip = /[^-+\dA-Z]/g,
		pad = function (val, len) {
			val = String(val);
			len = len || 2;
			while (val.length < len) val = "0" + val;
			return val;
		};

	// Regexes and supporting functions are cached through closure
	return function (date, mask, utc) {
		var dF = dateFormat;

		// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
		if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
			mask = date;
			date = undefined;
		}

		// Passing date through Date applies Date.parse, if necessary
		date = date ? new Date(date) : new Date;
		if (isNaN(date)) throw SyntaxError("invalid date");

		mask = String(dF.masks[mask] || mask || dF.masks["default"]);

		// Allow setting the utc argument via the mask
		if (mask.slice(0, 4) == "UTC:") {
			mask = mask.slice(4);
			utc = true;
		}

		var _ = utc ? "getUTC" : "get",
			d = date[_ + "Date"](),
			D = date[_ + "Day"](),
			m = date[_ + "Month"](),
			y = date[_ + "FullYear"](),
			H = date[_ + "Hours"](),
			M = date[_ + "Minutes"](),
			s = date[_ + "Seconds"](),
			L = date[_ + "Milliseconds"](),
			o = utc ? 0 : date.getTimezoneOffset(),
			flags = {
				d: d,
				dd: pad(d),
				ddd: dF.i18n.dayNames[D],
				dddd: dF.i18n.dayNames[D + 7],
				m: m + 1,
				mm: pad(m + 1),
				mmm: dF.i18n.monthNames[m],
				mmmm: dF.i18n.monthNames[m + 12],
				yy: String(y).slice(2),
				yyyy: y,
				h: H % 12 || 12,
				hh: pad(H % 12 || 12),
				H: H,
				HH: pad(H),
				M: M,
				MM: pad(M),
				s: s,
				ss: pad(s),
				l: pad(L, 3),
				L: pad(L > 99 ? Math.round(L / 10) : L),
				t: H < 12 ? "a" : "p",
				tt: H < 12 ? "am" : "pm",
				T: H < 12 ? "A" : "P",
				TT: H < 12 ? "AM" : "PM",
				Z: utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
				o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
				S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
			};

		return mask.replace(token, function ($0) {
			return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
		});
	};
}();

// Some common format strings
dateFormat.masks = {
	"default": "ddd mmm dd yyyy HH:MM:ss",
	shortDate: "m/d/yy",
	mediumDate: "mmm d, yyyy",
	longDate: "mmmm d, yyyy",
	fullDate: "dddd, mmmm d, yyyy",
	shortTime: "h:MM TT",
	mediumTime: "h:MM:ss TT",
	longTime: "h:MM:ss TT Z",
	isoDate: "yyyy-mm-dd",
	isoTime: "HH:MM:ss",
	isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
	isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
	dayNamesEnglish: [
		"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	],
	dayNames: [
		'일', '월', '화', '수', '목', '금', '토',
		'일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'
	],
	monthNames: [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
		"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	]
};

// For convenience...
Date.prototype.format = function (mask, utc) {
	return dateFormat(this, mask, utc);
};

var d = new Date();
//alert(d.format('yyyy'));

function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		if (decodeURIComponent(pair[0]) == variable) {
			return decodeURIComponent(pair[1]);
		}
	}
	console.log('Query variable %s not found', variable);
}

function getrequest() {
	return request;
	/*
		var query = window.location.search.substring(1);
		var vars = query.split('&');
	var r = {};
		for (var i = 0; i < vars.length; i++) {
				var pair = vars[i].split('=');
		r[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
		}
	console.log('getrequest', r);
	return r;
	*/
}
/*
function savebackup(model)
{
	model.backup = JSON.stringify(model.attributes);
	model.isDirty = function()
	{
		return this.backup === JSON.stringify(this.attributes);
	}
}*/

$(function () {
	//return;
	if (typeof Backbone == 'object') {
		var oldSync = Backbone.sync;
		Backbone.sync = function (method, model, options) {
			console.log(method, model, options.data);
			var error = options.error;
			options.error = function (xhr) {
				console.log('server error:', xhr.responseText);
				//log(xhr.responseText);
				error(xhr);
			};
			var xhr = oldSync(method, model, options);
			return xhr;
		}
		/*
		Backbone.Model.prototype.savebackup = function() {
			this.backup = JSON.stringify(this.attributes);
		}
		Backbone.Model.prototype.isDirty = function() {
			return this.backup === JSON.stringify(this.attributes);
		}
		*/
	}

});

(function ($) {
	$.fn.extend({
		addradio: function (name, buttons) {
			var me = this;
			var _args = arguments;
			//console.log(_args);
			return this.each(function () {
				var $el = $('<fieldset data-role=controlgroup data-type=horizontal />');
				$(this).append($el);
				$el.append('<legend>' + name + '</legend>');
				if (!(buttons instanceof Array)) {
					//console.log(_args);
					for (var i = 1; i < _args.length; i++) {
						var o = {};
						var a = _args[i];
						o.name = name;
						o.id = a.id;
						o.value = a.value;
						if (o.value == null)
							o.value = o.id;
						o.type = 'radio';

						$el._addinput(o);
					}
				} else {
					for (var i = 0; i < buttons.length; i++) {
						var o = {};
						o.name = name;
						o.id = buttons[i];
						o.value = buttons[i];
						if (o.value == null)
							o.value = o.id;
						o.type = 'radio';

						$el._addinput(o);
					}
				}
				$el.wrapAll('<li xdata-role=fieldcontain />');
			});
		},

		addbuttons: function (buttons) {
			var gridcls = ['ui-grid-a', 'ui-grid-b', 'ui-grid-c', 'ui-grid-d', 'ui-grid-e'];
			var blockcls = ['ui-block-a', 'ui-block-b', 'ui-block-c', 'ui-block-d', 'ui-block-e', 'ui-block-f'];
			var me = this;
			var _args = arguments;
			console.log(_args);

			return this.each(function () {
				var $el = $('<fieldset></fieldset>').addClass(gridcls[buttons.length - 2]);
				$(this).append($el);
				if (!(buttons instanceof Array)) {
					for (var i = 1; i < _args.length; i++) {
						var $div = $('<div />').addClass(blockcls[i]);
						$el.append($div);

						var o = {};
						var a = _args[i];
						o.name = a.id;
						o.id = a.id;
						o.value = a.value;
						o.type = 'button';

						$div._addinput(o);
					}
				} else {
					for (var i = 0; i < buttons.length; i++) {
						var $div = $('<div />').addClass(blockcls[i]);
						$el.append($div);

						var o = {};
						o.name = name;
						o.id = buttons[i];
						o.value = buttons[i];
						o.type = 'button';

						$div._addinput(o);
						//console.log(o);
					}
				}
				$el.wrapAll('<li xdata-role=fieldcontain />');
			});
		},

		addinput: function () {
			var me = this;
			var _args = arguments;
			return this.each(function () {
				for (var i = 0; i < _args.length; i++) {
					$el = $('<li xdata-role=fieldcontain />');
					me.append($el);
					$el._addinput(_args[i]);
				}
			});
		},
		_addinput: function (opt) {
			var def = {
				type: 'text',
				name: opt.id,
				value: ''
			};
			def.label = def.name;
			if (opt.type == 'button')
				def.value = def.label;
			var o = $.extend({}, def, opt);
			$me = $(this);
			if (o.wrap != null) {
				$me = $(o.wrap);
				$(this).append($me);
			}
			$label = $('<label></label>');
			if (o.type == 'textarea')
				$input = $('<textarea />');
			else
				$input = $('<input />');
			if (o.type != 'button')
				$me.append($label)
			$me.append($input);

			$label.attr('for', o.id).text(o.label);
			/*$input.attr({
					id: o.id,
					type: o.type,
					name: o.name,
					value: o.value,
					checked: o.checked,
			});*/
			//console.log(o);
			$input.attr(o);
		}
	});
})(jQuery);

var FormChecker = {
	username: function (s) {
		if (s.length < 5)
			throw 'ID가 너무 짧습니다';
		if (!/^[a-z][a-z\d]{3,11}$/.test(s))
			throw 'ID형식이 잘못되었습니다. 알파벳과 숫자로 작성해 주세요.';
		return this;
	},
	이름: function (s) {
		if (s.length < 2)
			throw '이름이 너무 짧습니다';
		return this;
	},
	비밀번호: function (pw, vpw) {
		if (pw.length < 4)
			throw '패스워드가 너무 짧습니다.';
		if (pw !== vpw)
			throw '패스워드가 일치하지 않습니다.';
		return this;
	},
	비밀번호변경: function (pw, vpw) {
		if (pw == '' && vpw == '')
			return this;
		return this.비밀번호(pw, vpw);
	},
	날짜: function (datestring) {
		var d = datestring.toDateTime();
		if (isNaN(d)) {
			console.log(d);
			throw '날짜 형식이 잘못되었습니다.\n2013-1-31 과 같은 형식으로 입력해 주세요';
		}
		return this;
	},
	시간: function (datestring) {
		var d = datestring.toDateTime();
		if (isNaN(d)) {
			console.log(d);
			throw '시간 형식이 잘못되었습니다.\n11:25 과 같은 형식으로 입력해 주세요';
		}
		return this;
	},
	number: function (s, name, min, max) {
		if (!jQuery.isNumeric(s)) {
			throw s + ': %0 숫자형식이 잘못되었습니다.'.format2(name);
		}
		var n = s * 1;
		if (min != null && n < min) {
			throw '[%0] 수치가 너무 작습니다.\n[%1] 이상으로 입력해 주세요.'.format2(name, min);
		}
		if (max != null && n > max) {
			throw '[%0] 수치가 너무 큽니다.\n[%1] 이하로 입력해 주세요.'.format2(name, max);
		}
		return this;
	},
	키: function (s) {
		return this.number(s, '키', 50, 220);
	},
	몸무게: function (s) {
		return this.number(s, '몸무게', 10, 200);
	},
	email: function (s) {
		var len = s.length;
		if (
			len < 5 ||
			s.indexOf('@') < 1 ||
			s.indexOf('@') > len - 4 ||
			s.indexOf('.') == -1 ||
			s.indexOf('.') > len - 2 ||
			s.indexOf('@') > s.indexOf('.')
		)
			throw 'email 형식이 잘못되었습니다.';
		return this;
	}
}

Number.prototype.between = function (a, b) {
	if (a > b)
		return this >= b && this <= a;
	else
		return this >= a && this <= b;
}

if (typeof console == 'undefined') // ie console log 제거
{
	console = {
		log: function (s) {
			//log(s);
		}
	}
}

$.fn.extend({
	footer: function () {
		var me = this;
		var _args = arguments;
		return this.each(function () {
			$(this).css({
				position: 'fixed',
				bottom: 0,
				width: '100%'
			});
			$('<div class=footer-spacer />').height($(this).height()).appendTo($(this).parent());
		});
	}
});

clog = function (a1, a2, a3, a4, a5) {
	console.log(a1, a2, a3, a4, a5)
}


jQuery.fn.extend({
	insertAtCaret: function (myValue) {
		return this.each(function (i) {
			if (document.selection) {
				//For browsers like Internet Explorer
				this.focus();
				var sel = document.selection.createRange();
				sel.text = myValue;
				this.focus();
			}
			else if (this.selectionStart || this.selectionStart == '0') {
				//For browsers like Firefox and Webkit based
				var startPos = this.selectionStart;
				var endPos = this.selectionEnd;
				var scrollTop = this.scrollTop;
				this.value = this.value.substring(0, startPos) + myValue + this.value.substring(endPos, this.value.length);
				this.focus();
				this.selectionStart = startPos + myValue.length;
				this.selectionEnd = startPos + myValue.length;
				this.scrollTop = scrollTop;
			} else {
				this.value += myValue;
				this.focus();
			}
		});
	}
});

function get(a, def) {
	if (a == null)
		return def;
	return a;
}

U.request = function () {
	// This function is anonymous, is executed immediately and 
	// the return value is assigned to QueryString!
	var query_string = {};
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		pair[0] = decodeURIComponent(pair[0]);
		pair[1] = decodeURIComponent(pair[1]);
		// If first entry with this name
		if (typeof query_string[pair[0]] === "undefined") {
			query_string[pair[0]] = pair[1];
			// If second entry with this name
		} else if (typeof query_string[pair[0]] === "string") {
			var arr = [query_string[pair[0]], pair[1]];
			query_string[pair[0]] = arr;
			// If third or later entry with this name
		} else {
			query_string[pair[0]].push(pair[1]);
		}
	}
	return query_string;
}();

U.KeyCode = {
	// VK_CANCEL: 3,
	VK_HELP: 6,
	VK_BACK_SPACE: 8,
	VK_TAB: 9,
	VK_CLEAR: 12,
	VK_RETURN: 13,
	VK_ENTER: 14,
	VK_SHIFT: 16,
	VK_CONTROL: 17,
	VK_ALT: 18,
	VK_PAUSE: 19,
	VK_CAPS_LOCK: 20,
	VK_ESCAPE: 27,
	VK_SPACE: 32,
	VK_PAGE_UP: 33,
	VK_PAGE_DOWN: 34,
	VK_END: 35,
	VK_HOME: 36,
	VK_LEFT: 37,
	VK_UP: 38,
	VK_RIGHT: 39,
	VK_DOWN: 40,
	VK_PRINTSCREEN: 44,
	VK_INSERT: 45,
	VK_DELETE: 46,
	VK_0: 48,
	VK_1: 49,
	VK_2: 50,
	VK_3: 51,
	VK_4: 52,
	VK_5: 53,
	VK_6: 54,
	VK_7: 55,
	VK_8: 56,
	VK_9: 57,
	VK_SEMICOLON: 59,
	VK_EQUALS: 61,
	VK_A: 65,
	VK_B: 66,
	VK_C: 67,
	VK_D: 68,
	VK_E: 69,
	VK_F: 70,
	VK_G: 71,
	VK_H: 72,
	VK_I: 73,
	VK_J: 74,
	VK_K: 75,
	VK_L: 76,
	VK_M: 77,
	VK_N: 78,
	VK_O: 79,
	VK_P: 80,
	VK_Q: 81,
	VK_R: 82,
	VK_S: 83,
	VK_T: 84,
	VK_U: 85,
	VK_V: 86,
	VK_W: 87,
	VK_X: 88,
	VK_Y: 89,
	VK_Z: 90,
	VK_CONTEXT_MENU: 93,
	VK_NUMPAD0: 96,
	VK_NUMPAD1: 97,
	VK_NUMPAD2: 98,
	VK_NUMPAD3: 99,
	VK_NUMPAD4: 100,
	VK_NUMPAD5: 101,
	VK_NUMPAD6: 102,
	VK_NUMPAD7: 103,
	VK_NUMPAD8: 104,
	VK_NUMPAD9: 105,
	VK_MULTIPLY: 106,
	VK_ADD: 107,
	VK_SEPARATOR: 108,
	VK_SUBTRACT: 109,
	VK_DECIMAL: 110,
	VK_DIVIDE: 111,
	VK_F1: 112,
	VK_F2: 113,
	VK_F3: 114,
	VK_F4: 115,
	VK_F5: 116,
	VK_F6: 117,
	VK_F7: 118,
	VK_F8: 119,
	VK_F9: 120,
	VK_F10: 121,
	VK_F11: 122,
	VK_F12: 123,
	VK_F13: 124,
	VK_F14: 125,
	VK_F15: 126,
	VK_F16: 127,
	VK_F17: 128,
	VK_F18: 129,
	VK_F19: 130,
	VK_F20: 131,
	VK_F21: 132,
	VK_F22: 133,
	VK_F23: 134,
	VK_F24: 135,
	VK_NUM_LOCK: 144,
	VK_SCROLL_LOCK: 145,
	VK_COMMA: 188,
	VK_PERIOD: 190,
	VK_SLASH: 191,
	VK_BACK_QUOTE: 192,
	VK_OPEN_BRACKET: 219,
	VK_BACK_SLASH: 220,
	VK_CLOSE_BRACKET: 221,
	VK_QUOTE: 222,
	VK_META: 224,
	VK_VOLUME_UP: 0xAF,
	VK_VOLUME_DOWN: 0xAE,
	VK_VOLUME_MUTE: 0xAD,
	VK_BROWSER_HOME: 0xAC,
	VK_MEDIA_NEXT_TRACK: 0xB0,
	VK_MEDIA_PREV_TRACK: 0xB1,
	VK_MEDIA_STOP: 0xB2,
	VK_MEDIA_PLAY_PAUSE: 0xB3,
	VK_LAUNCH_MAIL: 0xB4,
	VK_LAUNCH_MEDIA_SELECT: 0xB5,
	VK_LAUNCH_APP1: 0xB6,
	VK_LAUNCH_APP2: 0xB7,
	VK_SLEEP: 0x5F,
};

var KeyCode = U.KeyCode;
var request = U.request;
var assert = U.assert;
var getobj = U.getobj;
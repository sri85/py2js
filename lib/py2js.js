/*The MIT License (MIT)

Copyright (c) <2013> <paisripathi@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

var p = {

	"version" : '1.0',

	count : function (s, ch) {
		var i,
		c = 0;
		if (typeof ch === 'string') {
			i = s.indexOf(ch);
			while (i != -1) {
				c++;
				i = s.indexOf(ch, ++i)
			}
			return c;
		} else {
			throw("Type Error");

		}
		return c;

	},

	reverse : function (s) {
		if (typeof(s) === "string") {
			return s.split('').reverse().join('');

		} else {

			return '';

		}

	},

	title : function (s) {

		var a = [],
		i,
		l,
		r = [];
		a = s.trim().split(" ");
		l = a.length;

		for (i = 0; i < l; i++) {
			r.push(a[i].toString().replace(a[i][0], a[i][0].toUpperCase()));

		}

		return r.join(" ");

	},

	capitalize : function (s) {

		if (s === '' || s == " ") {
			return "";
		} else if (typeof(s) === "string") {
			return s.toLowerCase().replace(s[0].toLowerCase(), s[0].toUpperCase());
		} else {
			return "";
		}

	},

	isUpper : function (s) {
		if (typeof(s) === "string") {
			if (/(?=.*[a-z\.,-\/#!$%\^&\*;:{}=\-_`~()\[\]\s])/g.test(s) || s == '') {
				return false;

			} else {
				return true;
			}

		} else {
			return false;

		}

	},

	isLower : function (s) {
		if (typeof(s) === "string") {
			if ((/(?=.*[A-Z\.,-\/#!$%\^&\*;:{}=\-_`~()\[\]\s])/g).test(s) || s == '') {
				return false;

			} else {

				return true;
			}

		} else {

			return false;
		}

	},

	swapCase : function (s) {
		var i,
		a = [],
		c = '',
		l;
		a = s.split('');
		l = s.length;
		for (i = 0; i < l; i++) {
			if (p.isLower(a[i])) {
				c = c + a[i].toUpperCase();

			} else {
				c = c + a[i].toLowerCase();
			}

		}
		return c;

	},

	isAlphaNum : function (s) {
		if ((/\s/g).test(s) || (/[^a-zA-Zs0-9]/g).test(s)) {
			return false;

		} else {
			if ((/[\w\d]/g).test(s)) {
				return true;
			} else {
				return false;
			}

		}

	},

	contains : function (s, c) {
		var re;
		re = new RegExp(c, 'g');
		if (re.test(s)) {
			return true;
		} else {
			return false;

		}

	},

	isEmpty : function (s) {
		if (typeof(s) === 'string') {
			if ((/[\s\t\n]/g).test(s) || (s.length) == 0) {
				return true;

			} else {
				return false;

			}

		} else {
			return false;

		}

	},

	isAlpha : function (s) {

		if (s == '') {
			return false;
		} else if (typeof(s) === 'string') {

			return !(/[^a-zA-Z]/g.test(s));

		} else {
			return false;
		}

	},

	isDigit : function (s) {
		if (s == '') {
			return false;
		} else if (typeof(s) === 'number') {
			return !(/[^0-9]/g.test(s));

		} else {
			return false;
		}

	},

	isTitle : function (s) {
		var i,
		l;
		a = s.split(" ");
		l = a.length;
		for (i = 0; i < l; i++) {
			if (!(p.isUpper(a[i][0]))) {
				return false

			}

		}
		return true

	},

	stripc : function (str) {
		var s = [],
		a = '',
		l,
		i;
		s = str.split('');
		l = s.length;
		for (i = 0; i < l; i++) {
			if (/[a-zA-Z0-9]/g.test(s[i])) {
				a = a + s[i];

			}

		}

		return a;

	},

	multiply : function (s, n) {
		if (n <= 0) {
			return s;
		}
		var i,
		r = '';
		for (i = 0; i < n; i++) {
			r = r + s

		}
		return r;

	},

	prefix : function (s1, s2) {

		return (s1 + s2);
	},

	suffix : function (s1, s2) {

		return (s2 + s1);

	},

	lTrim : function (s) {

		return s.replace(/^\s+/, "");
	},

	rTrim : function (s) {

		return s.replace(/\s+$/, "");

	},

	stripPunc : function (s) {

		return (s.replace(/[\.,-\/#!$%@\^&\*\?<>;:{}=\-_`~()\[\]]/g, "").replace(/\s{2,}/g, " "));

	},

	beginsWith : function (s) {
		var i,
		a = [];
		a = this.split(' ');
		if (a[0] === s) {
			return true;

		} else {
			return false;

		}

	},

	right : function (s, n) {

		if (n <= s.length) {
			return (s.slice((s.length, s.length) - (Math.abs(n))));
		} else {
			return s;
		}

	},

	equals : function (s1, s2) {
		var i = 0,
		a,
		l;
		a = s1.split('');
		l = s1.length;
		if (l != s2.length) {
			return false;

		} else {
			while (i < l) {
				if (s1[i] != s2[i]) {
					return false;

				}
				i++
			}
			return true;
		}

	},

	isString : function (s) {

		if (typeof(s) === "string") {

			return true;

		}

		return false;

	},

	stripExtra : function (s) {

		var split_str = s.split(" ");
		var i,
		a = [],
		n = [];
		var l = split_str.length;
		for (i = 0; i < l; i++) {
			if (split_str[i] != "") {
				n.push(split_str[i])

			}

		}

		return n.join(" ");

	},

	replaceAll : function (s, s1, s2) {
		var r;
        if (s1 === '.') {
			return s.replace(/\./g, s2);
		}

		if (s1 === '/') {
			return s.replace(/\//g, s2)

		}
		var r = new RegExp(s1, 'g');
		if (r.test(s)) {
			return s.replace(r, s2);

		} else {
			return s;
		}
		
        
	}

}

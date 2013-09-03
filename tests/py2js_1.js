/*Copyright (c) 2013 Sripathi Pai
All rights reserved.
paisripathi at gmail dot com

@Authors: Sripathi Pai

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:
1. Redistributions of source code must retain the above copyright
notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright
notice, this list of conditions and the following disclaimer in the
documentation and/or other materials provided with the distribution.
3. The name of the author may not be used to endorse or promote products
derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

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

		return s.split('').reverse().join('');

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

		return s.toLowerCase().replace(s[0].toLowerCase(), s[0].toUpperCase());

	},

	isUpper : function (s) {
		if (s === '' || s === null || s === undefined || s === ' ' || s === true || s === false) {
			return false;

		}

		if (/(?=.*[a-z\.,-\/#!$%\^&\*;:{}=\-_`~()\[\]])/g.test(s)) {
			return false;

		}
		return true;

	},

	isLower : function (s) {
		if (s === '' || s === null || s === undefined || s === ' ' || s === true || s === false) {
			return false;

		}

		if ((/(?=.*[A-Z\.,-\/#!$%\^&\*;:{}=\-_`~()\[\]])/g).test(s)) {
			return false;

		}

		return true;

	},

	swapCase : function (s) {
		var i,
		a = [],
		c = '',
		l;
		a = s.split('');
		l = s.length;
		for (i = 0; i < l; i++) {
			if (a[i].isUpper()) {
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
			if ((/\w\d/g).test(s)) {
				return true;
			} else {
				return false;
			}

		}

	},

	contains : function (s, c) {
		var re;
		re = new Regex(c, g);
		if (re.test(s)) {
			return true;
		} else {
			return false;

		}

	},

	isEmpty : function (s) {
		if ((/[\s\t\n]/g).test(s) || (s.length) == 0) {
			return true;

		}
		return false;

	},

	isAlpha : function (s) {

		return !(/[^a-zA-Z]/g.test(s));

	},

	isDigit : function (s) {
		return !(/[^0-9]/g.test(s));

	},

	isTitle : function (s) {
		var i,
		l;
		a = s.split(" ");
		l = a.length;
		for (i = 0; i < l; i++) {
			if (!a[i][0].isUpper()) {
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

		return (s.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()\[\]]/g, "").replace(/\s{2,}/g, " "));

	},

	toBool : function (s) {
		var a;
		a = s.toLowerCase();
		if (a == true || a == 'true' || a == 'on' || a == '1' || a == 'yes') {

			return true

		} else if (a == false || a == 'false' || a == 'off' || a == '0' || a == 'no') {

			return false;
		} else {

			return false;
		}

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

	right : function (s) {

		return (s.slice((s.length, s.length) - (Math.abs(n))))

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

	}

}

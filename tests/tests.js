/*
This file has the set of unit tests for the py2js library.


 */

module("isUpper tests")
test("Passing an alphabet in lower case must return false", function () {
	equal(p.isUpper('a'), false, "Passed!");
});
test("Passing an alphabet in upper case must return true", function () {
	equal(p.isUpper('A'), true, "Passed!");
});
test("Passing an empty string  must return false", function () {
	equal(p.isUpper(''), false, "Passed!");
});
test("Passing null  must return false", function () {
	equal(p.isUpper(null), false, "Passed!");
});
test("Passing undefined  must return false", function () {
	equal(p.isUpper(undefined), false, "Passed!");
});
test("Passing an empty space  must return false", function () {
	equal(p.isUpper(" "), false, "Passed!");
});
test("Passing a string with atleast one upperCase charecter must return false", function () {
	equal(p.isUpper("i am a Test"), false, "Passed!");
});
test("Passing a boolean value with  must return false", function () {
	equal(p.isUpper(true), false, "Passed!");
});
test("Passing a boolean value  must return false", function () {
	equal(p.isUpper(false), false, "Passed!");
});
test("Passing special charecter  must return false", function () {
	equal(p.isUpper('.'), false, "Passed!");
});
test("Passing the return value of the toUpperCase() must return true ", function () {
	equal(p.isUpper('a'.toUpperCase()), true, "Passed!");
});
test("Check the typeof return value, it must return boolean ", function () {
	deepEqual(typeof p.isUpper('A'), 'boolean', "Passed!");
});
test("Check whether p has method isUpper ", function () {
	equal(p.hasOwnProperty('isUpper'), true, "Passed!");
});
test("Check whether p has method isUpper ", function () {
	equal(p.isUpper('ABCD.'), false, "Passed!");
});
test("Passing NaN must return false ", function () {
	equal(p.isUpper(parseInt("test")), false, "Passed!");
});
test("Passing Infinity must return false ", function () {
	equal(p.isUpper(Infinity), false, "Passed!");
});

module("isLower tests")

test("Passing an alphabet in lower case must return true", function () {
	equal(p.isLower('a'), true, "Passed!");
});
test("Passing an alphabet in upper case must return false", function () {
	equal(p.isLower('A'), false, "Passed!");
});
test("Passing an empty string  must return false", function () {
	equal(p.isLower(''), false, "Passed!");
});
test("Passing null  must return false", function () {
	equal(p.isLower(null), false, "Passed!");
});
test("Passing undefined  must return false", function () {
	equal(p.isLower(undefined), false, "Passed!");
});
test("Passing an empty space  must return false", function () {
	equal(p.isLower(" "), false, "Passed!");
});
test("Passing a string with atleast one upperCase charecter must return false", function () {
	equal(p.isLower("I AM A tEST"), false, "Passed!");
});
test("Passing a boolean value with  must return false", function () {
	equal(p.isLower(true), false, "Passed!");
});
test("Passing a boolean value  must return false", function () {
	equal(p.isLower(false), false, "Passed!");
});
test("Passing special charecter  must return false", function () {
	equal(p.isLower('.'), false, "Passed!");

});
test("Passing the return value of the toLowerCase() must return true ", function () {
	equal(p.isLower('a'.toLowerCase()), true, "Passed!");
});
test("Check the typeof return value, it must return boolean ", function () {
	deepEqual(typeof p.isLower('a'), 'boolean', "Passed!");
});
test("Check whether p has method isLower ", function () {
	equal(p.hasOwnProperty('isLower'), true, "Passed!");
});

test("Check whether p has method isUpper ", function () {
	equal(p.isLower('abcd! '), false, "Passed!");
});

test("Passing NaN must return false ", function () {
	equal(p.isLower(parseInt("test")), false, "Passed!");
});
test("Passing Infinity must return false ", function () {
	equal(p.isLower(Infinity), false, "Passed!");
});

module("reverse tests")

test("Basic reverse functionality ", function () {
	equal(p.reverse('foo'), 'oof', "Passed!");
});

test("Basic reverse functionality ", function () {
	equal(p.reverse('foobar'), 'raboof', "Passed!");
});

test("Basic reverse functionality ", function () {
	equal(p.reverse('foo bar'), 'rab oof', "Passed!");
});

test("Passing an empty string must return the empty string ", function () {
	equal(p.reverse(''), '', "Passed!");
});
test("Passing an empty space must return the empty string ", function () {
	equal(p.reverse(' '), ' ', "Passed!");
});
test("Passing null must return the empty string ", function () {
	equal(p.reverse(null), '', "Passed!");
});
test("Passing undefined must return the empty string ", function () {
	equal(p.reverse(undefined), '', "Passed!");
});

test("Passing NaN must return the empty string ", function () {
	equal(p.reverse(NaN), '', "Passed!");
});
test("Passing Infinity must return the empty string ", function () {
	equal(p.reverse(Infinity), '', "Passed!");
});
test("Passing Infinity must return the empty string ", function () {
	equal(p.reverse("a"), 'a', "Passed!");
});

module('isString tests')

test("Passing a string must return true", function () {
	equal(p.isString('a'), true, "Passed!");
});

test("Passing an  empty string must return true", function () {
	equal(p.isString(''), true, "Passed!");
});

test("Passing null must return false", function () {
	equal(p.isString(' '), true, "Passed!");
});
test("Passing null must return false", function () {
	equal(p.isString(null), false, "Passed!");
});
test("Passing undefined must return false", function () {
	equal(p.isString(undefined), false, "Passed!");
});
test("Passing NaN must return false", function () {
	equal(p.isString(NaN), false, "Passed!");
});
test("Passing NaN must return false", function () {
	equal(p.isString(Infinity), false, "Passed!");
});
test("Passing NaN must return false", function () {
	equal(p.isString(123), false, "Passed!");
});

test("Passing NaN must return false", function () {
	equal(p.isString(false), false, "Passed!");
});
test("Passing NaN must return false", function () {
	equal(p.isString(true), false, "Passed!");
});

module('title tests')

test("Basic test for title", function () {
	equal(p.title("i love py2js"), "I Love Py2js", "Passed!");
});
test("Basic test for title", function () {
	equal(p.title("I love Py2js"), "I Love Py2js", "Passed!");
});
test("Basic test for title", function () {
	equal(p.title("i"), "I", "Passed!");
});
test("Basic test for title", function () {
	equal(p.title("i   l"), "I L", "Passed!");
});
test("Basic test for title", function () {
	equal(p.title("il"), "Il", "Passed!");
});
test("Basic test for title", function () {
	equal(p.title(" il "), "Il", "Passed!");
});
test("Basic test for title", function () {
	equal(p.title(" "), " ", "Passed!");
});

module('capitalize tests')

test("Basic test for capitalize", function () {
	equal(p.capitalize("i love py2js"), "I love py2js", "Passed!");
});

test("Basic test for capitalize", function () {
	equal(p.capitalize(" "), "", "Passed!");
});

test("Basic test for capitalize", function () {
	equal(p.capitalize(""), "", "Passed!");
});

test("Basic test for capitalize", function () {
	equal(p.capitalize("I love py2js"), "I love py2js", "Passed!");
});
test("Basic test for capitalize", function () {
	equal(p.capitalize(null), "", "Passed!");
});
test("Basic test for capitalize", function () {
	equal(p.capitalize(undefined), "", "Passed!");
});
test("Basic test for capitalize", function () {
	equal(p.capitalize(" i love py2js"), " i love py2js", "Passed!");
});

test("Basic test for capitalize", function () {
	equal(p.capitalize(" i love py2js "), " i love py2js ", "Passed!");
});
test("Basic test for capitalize", function () {
	equal(p.capitalize("!@#i love py2js."), "!@#i love py2js.", "Passed!");
});

module('swapCase tests')

test("Basic test for capitalize", function () {
	equal(p.swapCase("iL"), "Il", "Passed!");
});
test("Basic test for capitalize", function () {
	equal(p.swapCase("i LoVe pY2Js"), "I lOvE Py2jS", "Passed!");
});
test("Basic test for capitalize", function () {
	equal(p.swapCase(" i LoVe pY2Js"), " I lOvE Py2jS", "Passed!");
});
test("Basic test for capitalize", function () {
	equal(p.swapCase("@i LoVe pY2Js"), "@I lOvE Py2jS", "Passed!");
});
test("Basic test for capitalize", function () {
	equal(p.swapCase(" i LoVe pY2Js "), " I lOvE Py2jS ", "Passed!");
});

test("Basic test for capitalize", function () {
	equal(p.swapCase(" "), " ", "Passed!");
});

test("Basic test for capitalize", function () {
	equal(p.swapCase(""), "", "Passed!");
});

module("isEmpty tests")

test("Basic test for isEmpty", function () {
	equal(p.isEmpty(""), true, "Passed!");
});

test("Basic test for isEmpty", function () {
	equal(p.isEmpty("\n"), true, "Passed!");
});

test("Basic test for isEmpty", function () {
	equal(p.isEmpty("\t"), true, "Passed!");
});
test("Basic test for isEmpty", function () {
	equal(p.isEmpty(" "), true, "Passed!");
});
test("Basic test for isEmpty", function () {
	equal(p.isEmpty(null), false, "Passed!");
});

test("Basic test for isEmpty", function () {
	equal(p.isEmpty(undefined), false, "Passed!");
});

module("isAlpha tests")

test("Basic test for isAlpha", function () {
	equal(p.isAlpha("a"), true, "Passed!");
});

test("Basic test for isAlpha", function () {
	equal(p.isAlpha("A"), true, "Passed!");
});

test("Basic test for isAlpha", function () {
	equal(p.isAlpha(" "), false, "Passed!");
});

test("Basic test for isAlpha", function () {
	equal(p.isAlpha(1), false, "Passed!");
});
test("Passing empty string must return false", function () {
	equal(p.isAlpha(""), false, "Passed!");
});
test("Basic test for isAlpha", function () {
	equal(p.isAlpha("\t"), false, "Passed!");
});
test("Basic test for isAlpha", function () {
	equal(p.isAlpha("\n"), false, "Passed!");
});

test("Basic test for isAlpha", function () {
	equal(p.isAlpha(null), false, "Passed!");
});

test("Basic test for isAlpha", function () {
	equal(p.isAlpha(undefined), false, "Passed!");
});
module("isDigit tests")

test("Basic test for isDigit", function () {
	equal(p.isDigit(1), true, "Passed!");
});

test("Basic test for isDigit", function () {
	equal(p.isDigit(1.0), true, "Passed!");
});

test("Basic test for isDigit", function () {
	equal(p.isDigit("1.0"), false, "Passed!");
});
test("Basic test for isDigit", function () {
	equal(p.isDigit("a"), false, "Passed!");
});

test("Basic test for isDigit", function () {
	equal(p.isDigit(""), false, "Passed!");
});
test("Basic test for isDigit", function () {
	equal(p.isDigit(" "), false, "Passed!");
});
test("Basic test for isDigit", function () {
	equal(p.isDigit(null), false, "Passed!");
});
test("Basic test for isDigit", function () {
	equal(p.isDigit(undefined), false, "Passed!");
});

module("count tests")
test("Basic test for count", function () {
	equal(p.count("ababab", "a"), 3, "Passed!");
});

test("Basic test for count", function () {
	equal(p.count("ab ab ab", "ab"), 3, "Passed!");
});

test("Basic test for count", function () {
	equal(p.count("ab ab ab", "c"), 0, "Passed!");
});
test("Basic test for count", function () {
	equal(p.count("ab ab ab", " "), 2, "Passed!");
});

test("Basic test for count", function () {
	equal(p.count("ab ab ab abc", "a"), 4, "Passed!");
});

test("Basic test for count", function () {
	equal(p.count("ab ab ab abc", "abc"), 1, "Passed!");
});

test("Basic test for count", function () {
	equal(p.count("abc", "a"), 1, "Passed!");
});

module("isTitle tests")
test("Basic test for count", function () {
	equal(p.isTitle("B A C"), true, "Passed!");
});

test("Basic test for count", function () {
	equal(p.isTitle("B a C"), false, "Passed!");
});

test("Basic test for count", function () {
	equal(p.isTitle(" B a C"), false, "Passed!");
});

module("prefix tests")
test("Sanity test for prefix", function () {
	equal(p.prefix("Mr.", "Flash"), "Mr.Flash", "Passed!");
});
test("Prefix attribute is empty string ", function () {
	equal(p.prefix("", "Flash"), "Flash", "Passed!");
});
test("Prefix attribute is an empty white space ", function () {
	equal(p.prefix(" ", "Flash"), " Flash", "Passed!");
});
test("Prefix attribute has special characters", function () {
	equal(p.prefix("!.?", "Flash"), "!.?Flash", "Passed!");
});
test("Prefix attribute and the string is empty", function () {
	equal(p.prefix("", ""), "", "Passed!");
});
test("Prefix attribute and the string is empty", function () {
	equal(p.prefix("", " "), " ", "Passed!");
});

module("suffix tests")
test("Sanity test for prefix", function () {
	equal(p.suffix(" is fast", "Flash"), "Flash is fast", "Passed!");
});
test("Prefix attribute is empty string ", function () {
	equal(p.suffix("Flash", ""), "Flash", "Passed!");
});
test("Prefix attribute is an empty white space ", function () {
	equal(p.suffix(" ", " Flash"), " Flash ", "Passed!");
});
test("Prefix attribute has special characters", function () {
	equal(p.suffix("!.?", "Flash"), "Flash!.?", "Passed!");
});
test("Prefix attribute and the string is empty", function () {
	equal(p.suffix("", ""), "", "Passed!");
});
test("Prefix attribute and the string is empty", function () {
	equal(p.suffix("", " "), " ", "Passed!");
});

module("ltrim tests")
test("Sanity test for ltrim", function () {
	equal(p.lTrim(" Flash"), "Flash", "Passed!");
});
test("Check ltrim trims more than onr whitespace", function () {
	equal(p.lTrim("  Flash"), "Flash", "Passed!");
});
test("Check ltrim does not strip the whitespace on the right", function () {
	equal(p.lTrim("  Flash "), "Flash ", "Passed!");
});

test("Check ltrim strips only the whitespace at the beginning of a sentence", function () {
	equal(p.lTrim("  Flash is fast"), "Flash is fast", "Passed!");
});

test("Check ltrim strips when whitespace is passed as a parameter ", function () {
	equal(p.lTrim(" "), "", "Passed!");
});

module("rtrim tests")

test("Sanity test for rtrim", function () {
	equal(p.rTrim("Flash "), "Flash", "Passed!");
});
test("Check rtrim trims more than one whitespace", function () {
	equal(p.rTrim("Flash  "), "Flash", "Passed!");
});
test("Check rtrim does not strip the whitespace on the right", function () {
	equal(p.rTrim("  Flash "), "  Flash", "Passed!");
});

test("Check rtrim strips only the whitespace at the beginning of a sentence", function () {
	equal(p.rTrim("Flash is fast  "), "Flash is fast", "Passed!");
});

test("Check rtrim strips when whitespace is passed as a parameter", function () {
	equal(p.rTrim(" "), "", "Passed!");
});

module("stripPunc tests")

test("Check striPunc strips the punctuation", function () {
	equal(p.stripPunc("~!@#$%^&*()}{"), "", "Passed!");
});
test("Check striPunc strips the punctuation", function () {
	equal(p.stripPunc("~ @"), " ", "Passed!");
});
test("Check striPunc strips the punctuation", function () {
	equal(p.stripPunc("F!@#lash?><;"), "Flash", "Passed!");
});
test("Check striPunc strips the punctuation", function () {
	equal(p.stripPunc("F!@#lash?><; !is@ f@ast"), "Flash is fast", "Passed!");
});
test("Check striPunc strips the punctuation", function () {
	equal(p.stripPunc("F!@#lash?    "), "Flash  ", "Passed!");
});
test("Check striPunc strips the punctuation", function () {
	equal(p.stripPunc("Flash"), "Flash", "Passed!");
});

module("stripc tests")

test("Check stripc strips the punctuation", function () {
	equal(p.stripc("~!@#$%^&*()}{"), "", "Passed!");
});
test("Check stripc strips the punctuation", function () {
	equal(p.stripc("~Flash"), "Flash", "Passed!");
});
test("Check striPunc strips the punctuation", function () {
	equal(p.stripc("F!@#lash?><;"), "Flash", "Passed!");
});
test("Check striPunc strips the punctuation", function () {
	equal(p.stripc("F!@#lash?><;"), "Flash", "Passed!");
});
test("Check striPunc strips the punctuation", function () {
	equal(p.stripc("F!@#lash?"), "Flash", "Passed!");
});
test("Check striPunc strips the punctuation", function () {
	equal(p.stripc("F!@#lash?"), "Flash", "Passed!");
});

module("multiply tests")

test("Sanity test for multiply", function () {
	equal(p.multiply("!", 3), "!!!", "Passed!");
});
test("Sanity test for multiply", function () {
	equal(p.multiply("a", 5), "aaaaa", "Passed!");
});
test("Sanity test for multiply", function () {
	equal(p.multiply(" ", 2), "  ", "Passed!");
});
test("Sanity test for multiply", function () {
	equal(p.multiply("f", 0), "f", "Passed!");
});
test("Sanity test for multiply", function () {
	equal(p.multiply("", 5), "", "Passed!");
});
test("Sanity test for multiply", function () {
	equal(p.multiply("z", -1), "z", "Passed!");
});
test("Sanity test for multiply", function () {
	equal(p.multiply("z", 03), "zzz", "Passed!");
});
test("Sanity test for multiply", function () {
	equal(p.multiply("", -1), "", "Passed!");
});

module("isAlphaNum tests")

test("Sanity test for isalphanum", function () {
	equal(p.isAlphaNum("!123"), false, "Passed!");
});

test("Sanity test for isalphanum", function () {
	equal(p.isAlphaNum("1 23"), false, "Passed!");
});
test("Sanity test for isalphanum", function () {
	equal(p.isAlphaNum(" "), false, "Passed!");
});
test("Sanity test for isalphanum", function () {
	equal(p.isAlphaNum("flash"), true, "Passed!");
});
test("Sanity test for isalphanum", function () {
	equal(p.isAlphaNum("123"), true, "Passed!");
});
test("Sanity test for isalphanum", function () {
	equal(p.isAlphaNum("FLASH"), true, "Passed!");
});
module("contains tests")

test("Sanity test for contains", function () {
	equal(p.contains("flash", "f"), true, "Passed!");
});
test("Sanity test for contains", function () {
	equal(p.contains("flash", "F"), false, "Passed!");
});
test("Sanity test for contains", function () {
	equal(p.contains("fla sh", " "), true, "Passed!");
});
test("Sanity test for contains", function () {
	equal(p.contains("fla.sh", "."), true, "Passed!");
});
test("Sanity test for contains", function () {
	equal(p.contains("fla/sh", "/"), true, "Passed!");
});
test("Sanity test for contains", function () {
	equal(p.contains("123", "3"), true, "Passed!");
});
test("Sanity test for contains", function () {
	equal(p.contains("flash", "flash"), true, "Passed!");
});
test("Sanity test for contains", function () {
	equal(p.contains("flash is FLASH", "flash"), true, "Passed!");
});
test("Sanity test for contains", function () {
	equal(p.contains("", ""), true, "Passed!");
});
module("beginsWith tests")

test("Sanity test for beginsWith", function () {
	equal(p.beginsWith("flash", "f"), true, "Passed!");
});
test("Sanity test for beginsWith", function () {
	equal(p.beginsWith("flash is fast", "flash"), true, "Passed!");
});

module("right tests")

test("Sanity test for right", function () {
	equal(p.right("py2js", 2), "js", "Passed!");
});
test("Sanity test for right", function () {
	equal(p.right("py2js", 1), "s", "Passed!");
});
test("Sanity test for right", function () {
	equal(p.right("py2js", 0), "", "Passed!");
});
test("Sanity test for right", function () {
	equal(p.right("", 0), "", "Passed!");
});
test("Sanity test for right", function () {
	equal(p.right("py2js", -1), "s", "Passed!");
});
test("Sanity test for right", function () {
	equal(p.right("py2js", 9), "py2js", "Passed!");
});

test("Sanity test for right", function () {
	equal(p.right("py2js", 2.1), "2js", "Passed!");
});

test("Sanity test for right", function () {
	equal(p.right("py2js", 5), "py2js", "Passed!");
});

test("Sanity test for right", function () {
	equal(p.right("py2js ", 1), " ", "Passed!");
});

module("equals tests")

test("Sanity test for equals", function () {
	equal(p.equals("py2js", "py2js"), true, "Passed!");
});

test("Sanity test for equals", function () {
	equal(p.equals("py2js", "Py2js"), false, "Passed!");
});
test("Sanity test for equals", function () {
	equal(p.equals("py2js", "py2js "), false, "Passed!");
});

test("Sanity test for equals", function () {
	equal(p.equals("py2js ", ""), false, "Passed!");
});

test("Sanity test for equals", function () {
	equal(p.equals("", ""), true, "Passed!");
});
test("Sanity test for equals", function () {
	equal(p.equals("p", "P"), false, "Passed!");
});
test("Sanity test for equals", function () {
	equal(p.equals("1", "1"), true, "Passed!");
});

module("stripExtra tests")

test("Sanity test for stripExtra", function () {
	equal(p.stripExtra("py2js is  awesome"), "py2js is awesome", "Passed!");
});
test("Sanity test for stripExtra", function () {
	equal(p.stripExtra("  py2js is awesome"), "py2js is awesome", "Passed!");
});
test("Sanity test for stripExtra", function () {
	equal(p.stripExtra("py2js is awesome  "), "py2js is awesome ", "Passed!");
});
test("Sanity test for stripExtra", function () {
	equal(p.stripExtra("py2js is awes  ome"), "py2js is awes ome", "Passed!");
});
test("Sanity test for stripExtra", function () {
	equal(p.stripExtra("  "), "", "Passed!");
});
test("Sanity test for stripExtra", function () {
	equal(p.stripExtra("I   love py2js"), "I love py2js", "Passed!");
});

module("replaceAll tests")

test("Sanity test for replaceAll", function () {
	equal(p.replaceAll("my2js", "m", "p"), "py2js", "Passed!");
});

test("Sanity test for replaceAll", function () {
	equal(p.replaceAll("my2js my2js my2js", "m", "p"), "py2js py2js py2js", "Passed!");
});

test("Sanity test for replaceAll", function () {
	equal(p.replaceAll("py2js py2js py2js", " ", "/"), "py2js/py2js/py2js", "Passed!");
});

test("Sanity test for replaceAll", function () {
	equal(p.replaceAll("py2js....", ".", "/"), "py2js////", "Passed!");
});

test("Sanity test for replaceAll", function () {
	equal(p.replaceAll("py2js", "py2js", ""), "", "Passed!");
});

test("Sanity test for replaceAll", function () {
	equal(p.replaceAll("py2js", "py2js", "Q"), "py2js", "Passed!");
});


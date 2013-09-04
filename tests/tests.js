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
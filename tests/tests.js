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
	equal(typeof p.isUpper('A'), 'boolean', "Passed!");
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
	equal(p.isLower("i am a Test"), false, "Passed!");
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
	equal(typeof p.isLower('a'), 'boolean', "Passed!");
});

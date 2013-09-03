module("isUpper tests")
test("Passing an alphabet in lower case must return false", function() {
  equal( p.isUpper('a'),false, "Passed!" );
});
test("Passing an alphabet in upper case must return true", function() {
  equal( p.isUpper('A'),true, "Passed!" );
});
test("Passing an empty string  must return false", function() {
  equal( p.isUpper(''),false, "Passed!" );
});
test("Passing null  must return false", function() {
  equal( p.isUpper(null),false, "Passed!" );
});
test("Passing undefined  must return false", function() {
  equal( p.isUpper(undefined),false, "Passed!" );
});
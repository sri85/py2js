module("isUpper tests")
test("Passing an alphabet in lower case must return false", function() {
  equal( p.isUpper('a'),false, "Passed!" );
});
test("Passing an alphabet in upper case must return true", function() {
  equal( p.isUpper('A'),true, "Passed!" );
});
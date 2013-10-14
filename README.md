py2js
=====

py2js is a stringutil library for javascript.

Javascript is a wonderful language , but it does not provide string maniplutation methods unlike other scripting languages.

py2js provides string util methods which can be easily used with javascript. This library is licensed under MIT license.

# **Getting Started**

Just grab the latest copy of py2js from github and include it in the html file where you intend to use.
 `<script src ='text/javascript' src="/path to py2js/py2js.js"></script>`

## Examples
**count** : returns the total count of occurrence of the specified character.
`p.count("ababab", "a") returns 3`

**reverse** : Reverses the string.
`p.reverse('foo') returns 'oof'`

**title** : Returns "titlecased" version of string, that is, all words begin with uppercase and the rest are lowercase.
`p.title("i love py2js")returns 'I Love Py2js'`

**capitalize**: Capitalizes the first letter of the string.
`p.capitalize("i love py2js"),capitalize() returns 'I love py2js'`

**isUpper**: This method returns true if the argument passed is in UpperCase , false otherwise.
`p.isUpper('A') returns true` `p.isUpper('a') returns false`

**isLower**: This method returns true if the argument passed is in LowerCase, false otherwise.
`p.isLower('a') returns true`  `p.isLower('A') returns false`

**isString**: This method returns true if the argument passed is a String, false otherwise.
`p.isString('a') returns true` `p.isString(123) returns false`

**swapCase**: This method swaps the case of the argument passed .
`p.swapCase('iL') returns 'Il'` `p.isString("@i LoVe pY2Js") returns "@I lOvE Py2jS"`

**isEmpty**: This method returns true if the passed argument is empty, false otherwise .
`p.isEmpty('') returns true` `p.isString("\n") returns true`

**isAlpha**: This method returns true if the passed argument is an alphabet, false otherwise .
`p.isAlpha('a') returns true` `p.isAlpha(123) returns false`

**isDigit**: This method returns true if the passed argument is an number/digit, false otherwise .
`p.isDigit(1) returns true` `p.isDigit('a') returns false`

**isTitle**: This method returns true if the passed argument is in titleCase, false otherwise .
`p.isTitle("B A C") returns true` `p.isTitle(" B a C") returns false`

**prefix**: This method prefixes the string to the desired string.
`p.prefix("Mr.", "Flash") returns "Mr.Flash"` 

**suffix**: This method suffixes the string to the desired string.
`p.suffix(" is fast", "Flash") returns "Flash is fast"` 

**lTrim**: This method trims the whitespace from the left of the string.
`p.lTrim(" Flash") returns "Flash"` 

**rTrim**: This method trims the whitespace from the right of the string.
`p.lTrim("Flash  ") returns "Flash"` 

**stripPunc**: This method strips all the punctuation from the string.
`p.stripPunc("~!@#$%^&*()}{") returns ""` 

**stripc**: This method strips all the punctuation from the string.
`p.stripc("~Flash") returns "Flash"` 

**multiply**: This method multiplies the string , with given  number of times 
`p.multiply("!", 3) returns "!!!"` `p.multiply("s", 5) returns "sssss"` 

**isAlphaNum**: This method returns true if the passed string is alphanumeric in nature, false otherwise
`p.isAlphaNum("!123") returns false` 

**contains**: This method returns true if the passed string contains the passed substring, false otherwise
`p.contains("flash", "f") returns true`  `p.contains("flash", "F") returns false`

**beginsWith**: This method returns true if the passed string contains the passed substring, false otherwise.
`p.beginsWith("flash", "f") returns true`  `p.beginsWith("flash is fast", "flash") returns true`

**right**: This method returns the given number of charecters from the string .
`p.right("py2js", 2) returns "js"`  `p.right("py2js", 0) returns ""`

**equals**: This method returns the given number of charecters from the string .
`p.equals("py2js", "py2js") returns true`  `p.equals("py2js", "Py2js") returns false`

**stripExtra**: This method strips the extra whitespace between charecters .
`p.stripExtra("py2js is awesome  ") returns "py2js is awesome" `  `p.stripExtra("I   love py2js") returns "I love py2js"`

**replaceAll**: This method replaces all the occurrences the designated character with given charecter.
`p.replaceAll("my2js", "m", "p") returns "py2js" `  


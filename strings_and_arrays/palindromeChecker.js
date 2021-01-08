const str1 = "racecar"
const str2 = "banana"

function palindromeChecker(str) {
  strReverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strReverse += str[i];
  }
  if (str === strReverse) {
    return true;
  } else {
    return false;
  }
}

palindromeChecker(str2)

//Loop through str backwards, create new string backwards
//compare if new string is the same as old string

function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}
palindrome("A man, a plan, a canal. Panama");

//Lowercase the string and use the RegExp to remove unwanted characters from it
//var lowRegStr = "amanaplanacanalpanama";
//Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
// lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
// ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
// ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
// So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
// And, var reverseStr = "amanaplanacanalpanama";
//Check if reverseStr is strictly equals to lowRegStr and return a Boolean
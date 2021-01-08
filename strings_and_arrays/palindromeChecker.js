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

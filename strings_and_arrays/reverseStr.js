const str1 = "banana"

function reverseStr(str) {
  strReverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strReverse += str[i];
  }
  return strReverse
}

reverseStr(str1)
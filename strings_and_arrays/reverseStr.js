const str1 = "hello"

function reverseStr(str) {
  strReverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strReverse += str[i];
  }
  return strReverse
}

reverseStr(str1)

//loop through string starting at the end going backwards
/* Here hello's length equals 5
        For each iteration: i = str.length - 1 and newString = newString + str[i]
        First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    End of the FOR Loop*/

function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString(str1);

//se the split() method to return a new array
// ["h", "e", "l", "l", "o"]
// Step 2. Use the reverse() method to reverse the new created array
// ["o", "l", "l", "e", "h"]
// Step 3. Use the join() method to join all elements of the array into a string
// "olleh"
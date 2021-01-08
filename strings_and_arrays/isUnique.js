const str1 = "abcde"
const str2 = "abbcde"
const arr1 = [1, 2, 3]
const arr2 = [1, 2, 3, 1]

function isUnique(str) {
  let final = []
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (final[ch]) {
      return false;
    } else {
      final[ch] = true;
    }
  }
  return true;
}

isUnique(arr2)

// will take in a string or array
// loop through it and check if eac index exists in str/array
// if it doesnt, return true and continue loop
//if it does, return false and end 
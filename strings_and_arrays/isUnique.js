const str1 = "abcde"
const str2 = "abbcde"
const arr1 = [1, 2, 3]
const arr2 = [1, 2, 3, 2]

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
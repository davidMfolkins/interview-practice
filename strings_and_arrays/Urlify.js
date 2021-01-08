const str1 = "Mr John Smith "

function URLify(str) {
  let trim = str.trim()
  let urled = trim.replace(/ /g, '%20')
  return urled
}

URLify(str1)

//Trim the string to remove any whitespace at beginning or end
// replace all whitespace with %20
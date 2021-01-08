const str1 = "Mr John Smith "

function URLify(str) {
  let trim = str.trim()
  let urled = trim.replace(/ /g, '%20')
  return urled
}

URLify(str1)
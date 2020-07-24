function palindrome(str) {
  let reversedStr = "";
  let specialRegex = /\W|[\_]/g;
  let clearStr = str.replace(specialRegex, "").toLowerCase();
  for(let i = clearStr.length - 1; i >= 0; i--) {
    reversedStr += clearStr[i];
  }
  return clearStr == reversedStr;
}

function printResult() {
  var input = document.getElementById("palindrome-input").value;
  var output = document.getElementById("output-text");

  if(palindrome(input)) {
    output.innerHTML = "This is a palindrome";
  } else {
    output.innerHTML = "This is not a palindrome";
  }
}

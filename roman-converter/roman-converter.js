function convertToRoman(num) {
  let romanNum = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  let decimalNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanizedNum = "";
  for(let i = 0; i < decimalNum.length; i++) {
    while(decimalNum[i] <= num) {
      romanizedNum += romanNum[i];
      num -= decimalNum[i];
    }
  }
  return romanizedNum;
}

function convertFromRoman(num) {
  let romanNum = ["M","D","C","L","X","V","I"];
  let specialRomanNum = ["CM", "CD", "XC", "XL", "IX", "IV"];
  let decimalNum = [1000, 500, 100, 50, 10, 5, 1];
  let specialDecimalNum = [900, 400, 90, 40, 9, 4];
  let decimalVal = 0;
  for(let i = 0; i < num.length; i++) {
    if(specialRomanNum.indexOf(num[i]+num[i+1]) >= 0) {
      decimalVal += specialDecimalNum[specialRomanNum.indexOf(num[i]+num[i+1])];
      i+=2;
    }
      if(romanNum.indexOf(num[i]) >= 0) {
        decimalVal += decimalNum[romanNum.indexOf(num[i])];
      }
  }
  return decimalVal;
}

function printResultConvertToRoman() {
  var input = document.getElementById("number-input").value;
  var output = convertToRoman(input);
  
  document.getElementById("output-text-roman").innerHTML = output;
}

function printResultConvertFromRoman() {
  var input = document.getElementById("roman-input").value;
  var output = convertFromRoman(input);
  
  document.getElementById("output-text-number").innerHTML = output;
}

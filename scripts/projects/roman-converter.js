(() => {
  const toRomanForm = document.getElementById('js-to-roman-form');
  toRomanForm.onsubmit = (event) => {
    event.preventDefault();
    printRomanResult();
  }

  const printRomanResult = () => {
    const num      = toRomanForm[0].value;
    const romanNum = convertToRoman(num);
    const output   = document.getElementById('js-output-roman');
    output.innerHTML = romanNum;
  }

  const convertToRoman = (num) => {
    const romanDict = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    let romanNum = '';

    for (const i of Object.keys(romanDict)) {
      while (num >= romanDict[i]) {
        romanNum += i;
        num      -= romanDict[i];
      }
    }
    return romanNum;
  }

  const toArabicForm = document.getElementById('js-to-arabic-form');
  toArabicForm.onsubmit = (event) => {
    event.preventDefault();
    printArabicResult();
  }

  const printArabicResult = () => {
    const num       = toArabicForm[0].value;
    const arabicNum = convertToArabic(num);
    const output    = document.getElementById('js-output-arabic');
    output.innerHTML = arabicNum;
  }

  const convertToArabic = (romanNum) => {
    const error = 'Veuillez saisir un nombre romain valide.';
    let arabicNum = charToInt(romanNum.charAt(0));

    for (let i = 1; i < romanNum.length; i++) {
      const current  = romanNum.charAt(i);
      const currentInt = charToInt(current);
      const previous = romanNum.charAt(i-1);
      const previousInt = charToInt(previous);
      if (currentInt <= previousInt) {
        arabicNum += currentInt;
      } else if (isSpecialRoman(previous, current)) {
        arabicNum  = arabicNum + currentInt - 2*previousInt;
      } else {
        return error;
      }
    }
    
    if (arabicNum === -1) {
      return error;
    }
    return arabicNum;
  }

  const isSpecialRoman = (firstChar, secondChar) => {
    return (firstChar === 'C' && secondChar === 'M') ||
           (firstChar === 'C' && secondChar === 'D') ||
           (firstChar === 'X' && secondChar === 'C') ||
           (firstChar === 'X' && secondChar === 'L') ||
           (firstChar === 'I' && secondChar === 'X') ||
           (firstChar === 'I' && secondChar === 'V')
  }

  const charToInt = (char) => {
    const romanDict = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1
    }
    return romanDict[char] || -1;
  }

})();
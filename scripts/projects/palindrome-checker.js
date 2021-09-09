(() => {
  const palindromeForm = document.getElementById('js-palindrome-form');
  palindromeForm.onsubmit = (event) => {
    event.preventDefault();
    clearResult();
    printResult();
  }

  const clearResult = () => {
    document.getElementById('js-output').innerHTML = '';
  }

  const printResult = () => {
    const input  = palindromeForm[0].value;
    const output = document.getElementById('js-output');
    output.innerHTML = isPalindrome(input) ? `<i class="fas fa-check-circle valid-mark"></i> "${input}" est un palindrome.` : `<i class="fas fa-times-circle invalid-mark"></i> "${input}" n'est pas un palindrome.`;
  }

  const isPalindrome = (string) => {
    const punctuation    = /['-_,\?;\.:!\s]/g;
    const clearedString  = string.replace(punctuation, '');
    const reversedString = clearedString.split('').reverse().join('');

    return reversedString.localeCompare(clearedString, 'en', { sensitivity: 'base' }) === 0 ? true : false;
  }
})();
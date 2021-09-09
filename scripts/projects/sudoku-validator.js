(() => {
  const clientBoard = document.getElementById('js-board');
  clientBoard.onsubmit = (event) => {
    event.preventDefault();
    printResult();
  }

  const createBoardGame = () => {
    const submitBtn = document.getElementById('js-submit-btn');

    const squareRightBorderIndexes  = [2, 5, 11, 14, 20, 23, 29, 32, 38, 41, 47, 50, 56, 59, 65, 68, 74, 77];
    const squareBottomBorderIndexes = [18, 19, 20, 21, 22, 23, 24, 25, 26, 45, 46, 47, 48, 49, 50, 51, 52, 53];

    for (let i = 0; i < 81; i++) {
      const input = document.createElement('INPUT');
      input.setAttribute('type', 'text');
      input.setAttribute('required', true);
      input.setAttribute('pattern', "[1-9]");
      input.setAttribute('oninvalid', 'this.setCustomValidity("Veuillez entrer un chiffre entre 1 et 9.")');
      input.setAttribute('oninput', 'this.setCustomValidity("")');
      input.className = 'form__txt-input d-cell';
      if (squareRightBorderIndexes.includes(i)) {
        input.classList.add('square__border-right');
      }
      if(squareBottomBorderIndexes.includes(i)) {
        input.classList.add('square__border-bottom');
      }
      clientBoard.insertBefore(input, submitBtn);
    }
  }

  createBoardGame();

  const printResult = () => {
    const output = document.getElementById('js-output');
    output.innerHTML = checkValid() ? `<i class="fas fa-check-circle valid-mark"></i> Sudoku valide !` : `<i class="fas fa-times-circle invalid-mark"></i> Le sudoku n'est pas valide...`;
  }

  const checkValid = () => {
    const values = getValues();
    
    /* 
      Values are stored in a one dimensional array, index going from 0 to 80.

      Rows are segments of 9 consecutive indexes (0 -> 8, 9 -> 17, etc.).

      Columns are elements whose index is a multiple of 9 + the index of the column (1st col (index 0) : 0-9-18-..., 2d col (index 1) : 1-10-19-..., etc.).

      Squares are segments of 3 consecutive indexes of 3 consecutive rows (1st square (index 0) : 0-1-2-9-10-11-18-19-20)
    */

    for (let i = 0; i < 9; i++) {
      //Get ith row values
      const row = values.slice(9*i, 9*(i+1));
      //Check if row is valid
      if(!isValid(row)) {
        return false;
      }

      //Get ith columon values
      const col = values.filter((cell, index) => {
        return index % 9 === i;
      });
      //Check if column is valid
      if(!isValid(col)) {
        return false;
      }

      //Get ith square values
      const square = values.slice(3*i, 3*(i+1))
                           .concat(values.slice(3*i+9, 3*(i+1)+9))
                           .concat(values.slice(3*i+18, 3*(i+1)+18));
      //Check if square is valid
      if(!isValid(square)) {
        return false;
      }
      //If there are no 'false' return during loop, then every row, column and square are valid so the sudoku is valid.
      return true;
    }
  }

  const getValues = () => {
    const values = [];
    for (let i = 0; i < clientBoard.length - 1; i++) {
      values.push(clientBoard[i].value);
    }
    return values;
  }

  const isValid = (dataSet) => {
    return dataSet.sort().join('') === '123456789';
  }
})();
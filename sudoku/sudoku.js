function validSolution(board){
  let columns = [[],[],[],[],[],[],[],[],[]], grid = [[],[],[],[],[],[],[],[],[]], gridIndex = 0;
  for(let row = 0; row < board.length; row++) {
    for(let col = 0; col < board.length; col++) {
      gridIndex = Math.floor(row/3)*3 + Math.floor(col/3);
      grid[gridIndex].push(board[row][col]);
      columns[col].push(board[row][col]);
    }
  }
  
  return board.every(el => isValid(el)) && columns.every(el => isValid(el)) && grid.every(el => isValid(el))
        ? true
        : false;
}

function isValid(row) {
  return row.slice(0).sort().join("") === "123456789" ? true : false;
}

function printResult() {
  var board = [[],[],[],[],[],[],[],[],[]];
  for(let row = 0; row < board.length; row++) {
    for(let col = 0; col < board.length; col++) {
      var input = "sudoku" + row + col + "-input";
      board[row][col].push(document.getElementById(input).value);
    }
  }
  var output = document.getElementById("output-text");

  if(validSolution(board)) {
    output.innerHTML = '<img src="/resources/images/check.png" id="check-img" /> Finished!';
  } else {
    output.innerHTML = '<img src="/resources/images/close.png" id="cancel-img" /> Try again...';
  }
}

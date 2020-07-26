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
  return row.sort().join("") === "123456789" ? true : false;
}

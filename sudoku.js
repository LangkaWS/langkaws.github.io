function validSolution(board){
  let columns = [[],[],[],[],[],[],[],[],[]], grid = [[],[],[],[],[],[],[],[],[]];
  let row = 0, col = 0, gridIndex = 0;
  for(row = 0; row < 9; row++) {
    for(col = 0; col < 9; col++) {
      gridIndex = Math.floor(row/3)*3 + Math.floor(col/3);
      grid[gridIndex].push(board[row][col]);
      columns[col].push(board[row][col]);
    }
  }
  for(let i = 1; i <= 9; i++) {
    for(let j = 0; j < 9; j++) {
      if(board[j].filter(el => el == i).length !== 1 || columns[j].filter(el => el ==i).length !== 1 || grid[j].filter(el => el == i).length !== 1) {
        return false;
      }
    }
  }
  return true;
}

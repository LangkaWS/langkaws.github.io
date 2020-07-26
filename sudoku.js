function validSolution(board){
  let columns = [[],[],[],[],[],[],[],[],[]], grid = [[],[],[],[],[],[],[],[],[]], gridIndex = 0;
  for(let row = 0; row < board.length; row++) {
    for(let col = 0; col < board.length; col++) {
      gridIndex = Math.floor(row/3)*3 + Math.floor(col/3);
      grid[gridIndex].push(board[row][col]);
      columns[col].push(board[row][col]);
    }
  }
  for (let digit = 1; digit <= 9; digit++) {
    for(let i = 0; i < board.length; i++) {
      if (board[i].filter(el => el === digit).length !== 1 || columns[i].filter(el => el === digit).length !== 1 || grid[i].filter(el => el === digit).length !== 1) {
        return true;
      }
    }
  }
  return false;
}

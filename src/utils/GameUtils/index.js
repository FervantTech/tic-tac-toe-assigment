const checkForSequence = (option1, option2, option3) => {
  if (option1 === null || option2 === null || option3 === null) {
    return false;
  }

  return option1 === option2 && option2 === option3;
};

export const checkForWinner = (board) => {
  if (checkForSequence(board[0], board[4], board[8])) {
    return [0,4,8];
  }

  if (checkForSequence(board[2], board[4], board[6])) {
    return [2,4,6];
  }
  for (let i = 0; i < 9; i += 3) {
    if (checkForSequence(board[i], board[i + 1], board[i + 2])) 
      return [i,i+1,i+2];
  }

  for (let i = 0; i < 3; i += 1) {
    if (checkForSequence(board[i], board[i + 3], board[i + 6])) 
      return [i,i+3,i+6];
  }

  if (!board.includes(null)) {
    return "draw";
  }

  return false;
};

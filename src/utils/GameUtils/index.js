const checkForSequence = (option1, option2, option3) => {
        return option1 === option2 && option2 === option3
}

export const checkForWinner = (board) => {
  if (board(0) === board(4) && board(4) === board(8)) {
    return true;
  }
  if (board(2) === board(4) && board(4) === board(6)) {
    return true;
  }
  for (let i=0; i < 9; i+=3) {
    if(checkForSequence(board[i],board[i+1], board[i+2]))
        return true
    }

      for (let i=0; i < 3; i+=1) {
    if(checkForSequence(board[i],board[i+3], board[i+6]))
        return true
    }
};


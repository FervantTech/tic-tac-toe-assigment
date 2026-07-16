const checkForSequence = (option1, option2, option3) => {
  if(option1 === null || option2 === null  || option3 === null){
    return false
  }
  
  return option1 === option2 && option2 === option3;
};

export const checkForWinner = (board) => {
if(checkForSequence(board[0],board[4],board[8])) {
  
  return true;
}

 if(checkForSequence(board[2],board[4],board[6])) {
 
  return true;
}
  for (let i = 0; i < 9; i += 3) {
    if (checkForSequence(board[i], board[i + 1], board[i + 2]))
       return true;
  }

  for (let i = 0; i < 3; i += 1) {
    if (checkForSequence(board[i], board[i + 3], board[i + 6]))
       return true;
  }

  if(!board.includes(null)){
    return "draw"
  }
  
return false;
};

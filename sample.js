'use strict';


let board = []

//only run if five plays have been made

let game = function(){
    if(board[0] === board[1] && board[0] === board[2]){
      return 1;
    }
    else if (board[3]===board[4] && board[3] === board[5]) {
      return 1;
    }
    else if (board[6]===board[7] && board[6] === board[8]){
      return 1;
    }

    else if (board[0]===board[3] && board[0] === board[6]) {
      return 1;
    }
    else if (board[1]===board[4] && board[1] === board[7]) {
      return 1;
    }

    else if (board[2]===board[5] && board[2] === board[8]) {
      return 1;
    }

    else if (board[0]===board[4] && board[0] === board[8]) {
      return 1;
    }
    else if (board[2]===board[4] && board[2] === board[6]) {
      return 1;
    }
    need to use the next bit of code to loop through array
    and check to see if all of the game spaces are occupied
    and if they are then it is a draw
    else {
      for (let i = 0; i < board.length; i++) {
          if (board[i]==="")
            return false;
      }
        return draw
      }
    }

};


// need to have a function for each part of game board that adds
// ‘x’ or ‘o’ to correct index
// thinking of using something like arr.splice(index, 0, ‘x’) or arr.splice(index, 0, ‘x’)









//
// let computer = Math.floor(Math.random()*2);
//
// let compMove = function(){
//   while(computer===0){
//     console.log('X');
//   }
//   console.log('O');
//
// };

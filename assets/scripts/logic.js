'use strict';

const clickhandlers = require('./clickhandlers');
//only run if five plays have been made


let check_win = function(){
    if(clickhandlers.board[0] === clickhandlers.board[1] && clickhandlers.board[0] === clickhandlers.board[2]){
      console.log('win');
    }
    else if (clickhandlers.board[3]===clickhandlers.board[4] && clickhandlers.board[3] === clickhandlers.board[5]) {
      console.log('win');
    }
    else if (clickhandlers.board[6]===clickhandlers.board[7] && clickhandlers.board[6] === clickhandlers.board[8]){
      console.log('win');
    }

    else if (clickhandlers.board[0]===clickhandlers.board[3] && clickhandlers.board[0] === clickhandlers.board[6]) {
      console.log('win');
    }
    else if (clickhandlers.board[1]===clickhandlers.board[4] && clickhandlers.board[1] === clickhandlers.board[7]) {
      console.log('win');
    }

    else if (clickhandlers.board[2]===clickhandlers.board[5] && clickhandlers.board[2] === clickhandlers.board[8]) {
      console.log('win');
    }

    else if (clickhandlers.board[0]===clickhandlers.board[4] && clickhandlers.board[0] === clickhandlers.board[8]) {
      console.log('win');
    }
    else if (clickhandlers.board[2]===clickhandlers.board[4] && clickhandlers.board[2] === clickhandlers.board[6]) {
      console.log('win');
    }
    // need to use the next bit of code to loop through array
    // and check to see if all of the game spaces are occupied
    // and if they are then it is a draw
    else {
      for (let i = 0; i < clickhandlers.board.length; i++) {
          if (clickhandlers.board[i]===""){
            return false;
      }
        console.log('win');
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

module.exports = {
  check_win,
};

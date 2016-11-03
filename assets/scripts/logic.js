'use strict';

const clickhandlers = require('./clickhandlers');
//only run if five plays have been made


let check_win = function(board){
    if(true){
      for (let i = 0; i < clickhandlers.board.length; i++) {
        if (clickhandlers.board[i] === ''){
          return false;
        }
      }
    }
    else if(clickhandlers.board[0] === clickhandlers.board[1] && clickhandlers.board[0] === clickhandlers.board[2]){
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
    else{
      console.log('draw');
    }
  };


module.exports = {
  check_win,
};

'use strict';

const clickhandlers = require('./clickhandlers');
const reset = require('./reset');
//only run if five plays have been made

let check_win = function(board){
  if(board[0] !== '' && board[0] === board[1] && board[0] === board[2]){
      $('.win').text(board[0] + ' won!');
      return true;
    }
    else if (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) {
        $('.win').text(board[3] + ' won!');
        return true;
    }
    else if (board[6] !== '' && board[6] === board[7] && board[6] === board[8]){
      $('.win').text(board[6] + ' won!');
      return true;
    }

    else if (board[0] !== '' && board[0] === board[3] && board[0] === board[6]) {
      $('.win').text(board[0] + ' won!');
      return true;
    }
    else if (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) {
      $('.win').text(board[1] + ' won!');
      return true;
    }

    else if (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) {
      $('.win').text(board[2] + ' won!');
      return true;
    }

    else if (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) {
      $('.win').text(board[0] + ' won!');
      return true;
    }
    else if (board[2] !== '' && board[2] === board[4] && board[2] === board[6]) {
      $('.win').text(board[2] + ' won!');
      return true;
    }
    else if(board.indexOf('') < 0){
      ('.win').text('Tie Game!');
      return true;
    }
    else{
      console.log('nothing')
    }
  };

module.exports = {
  check_win,
};

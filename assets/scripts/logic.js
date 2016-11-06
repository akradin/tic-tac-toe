'use strict';

const clickhandlers = require('./clickhandlers');
const reset = require('./reset');

let check_win = function(board){
  if(board[0] !== '' && board[0] === board[1] && board[0] === board[2]){
      $('.win').text(board[0] + ' won! Click create game to start a new round!');
      $('.container').hide();
      return true;
    }
    else if (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) {
        $('.win').text(board[3] + ' won! Click create game to start a new round!');
        $('.container').hide();
        return true;
    }
    else if (board[6] !== '' && board[6] === board[7] && board[6] === board[8]){
      $('.win').text(board[6] + ' won! Click create game to start a new round!');
      $('.container').hide();
      return true;
    }

    else if (board[0] !== '' && board[0] === board[3] && board[0] === board[6]) {
      $('.win').text(board[0] + ' won! Click create game to start a new round!');
      $('.container').hide();
      return true;
    }
    else if (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) {
      $('.win').text(board[1] + ' won! Click create game to start a new round!');
      $('.container').hide();
      return true;
    }

    else if (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) {
      $('.win').text(board[2] + ' won! Click create game to start a new round!');
      $('.container').hide();
      return true;
    }

    else if (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) {
      $('.win').text(board[0] + ' won! Click create game to start a new round!');
      $('.container').hide();
      return true;
    }
    else if (board[2] !== '' && board[2] === board[4] && board[2] === board[6]) {
      $('.win').text(board[2] + ' won! Click create game to start a new round!');
      $('.container').hide();
      return true;
    }
    else if(board.indexOf('') < 0){
      $('.win').text('Tie Game! Click create game to start a new round!');
      return true;
    }
    else{
      return false;
    }
  };

module.exports = {
  check_win,
};

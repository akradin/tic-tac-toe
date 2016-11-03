'use strict';

const clickhandlers = require('./clickhandlers');
//only run if five plays have been made


let check_win = function(board){
  if(board[0] !== '' && board[0] === board[1] && board[0] === board[2]){
      console.log('Who wins: ' + board[0]);
      $('.content').unbind("click");
    }
    else if (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) {
      console.log('Who wins: ' + board[3]);
      $('.content').unbind("click");
    }
    else if (board[6] !== '' && board[6] === board[7] && board[6] === board[8]){
      console.log('Who wins: ' + board[6]);
      $('.content').unbind("click");
    }

    else if (board[0] !== '' && board[0] === board[3] && board[0] === board[6]) {
      console.log('Who wins: ' + board[0]);
      $('.content').unbind("click");
    }
    else if (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) {
      console.log('Who wins: ' + board[1]);
      $('.content').unbind("click");
    }

    else if (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) {
      console.log('Who wins: ' + board[2]);
      $('.content').unbind("click");
    }

    else if (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) {
      console.log('Who wins: ' + board[0]);
      $('.content').unbind("click");
    }
    else if (board[2] !== '' && board[2] === board[4] && board[2] === board[6]) {
      console.log('Who wins: ' + board[2]);
      $('.content').unbind("click");
    }
    else if(board.indexOf('') < 0){
      console.log('draw');
    }
    else{
      console.log('keep on truckin');
    }
  };

module.exports = {
  check_win,
};

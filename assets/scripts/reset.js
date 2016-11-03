'use strict';

const clickhandlers = require('./clickhandlers');

let game_reset = function(){
  clickhandlers.player_switch = 'x';
  clickhandlers.board = ['', '', '', '', '', '', '', '', ''];
  $('.content').text('');
  $('.content').css('background-color', 'white');
  console.log("clickhandlers.player_switch is " + clickhandlers.player_switch);
};




module.exports = {
  game_reset,
};

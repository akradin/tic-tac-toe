'use strict';
const logic = require('./logic');
const game_events = require('./game/game-events');

$('.game-board').hide();


let board = ['', '', '', '', '', '', '', '', ''];

let player_switch = 'x';

let player_turn = function(){
  if(player_switch==='x'){
    player_switch = 'y';
  }
  else  {
    player_switch = 'x';
  }
};

let check_game = function(){
  $.each($('.content'), function(index, value){
    let new_text = $(value).text();
    let i = index;
    board.splice(i, 1, new_text);
  });
};


let change_box= function(){
  $('.game-data').text('');
  if($(this).text()===''){
    let index = $('.content').index($(this));
    let value = '';
    if(player_switch==='x'){
      $(this).css('background-color','black');
      $(this).text('X');
      player_turn();
    }
    else  {
      $(this).css('background-color','blue');
      $(this).text('Y');
      player_turn();
    }
    value = $(this).text();
    check_game();
    let over = logic.check_win(board);
    game_events.onUpdateGame(index, value, over);
  }

};

$('.content').on("click", change_box);


let game_reset = function(){
  player_switch = 'x';
  board = ['', '', '', '', '', '', '', '', ''];
  $('.content').text('');
  $('.content').css('background-color', 'white');
  $('.win').text('');
};

//$('.reset').on("click", game_reset);

let show_board = function(){
  $('.game-board').show();
};

$('.get-game').on("click", game_events.onGetIndex);
$('.create-game').on("click", game_events.onCreateGame);
$('.create-game').on("click", show_board);
$('.create-game').on("click", game_reset);
$('.create-game').hide();
$('.get-game').hide();
$('.show-game').on("click", game_events.onShowGame);
$('.update-game').on("click", game_events.onUpdateGame);







module.exports = {
  change_box,
  board,
};

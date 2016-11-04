'use strict';
const logic = require('./logic');
const game_events = require('./game/game-events');


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
    let over = logic.check_win(board);
    game_events.onUpdateGame(index, value, over);
  }
  check_game();
  console.log(board);

};

$('.content').on("click", change_box);

// $('.box-0').on("click", change_box);
// $('.box-1').on("click", change_box);
// $('.box-2').on("click", change_box);
// $('.box-3').on("click", change_box);
// $('.box-4').on("click", change_box);
// $('.box-5').on("click", change_box);
// $('.box-6').on("click", change_box);
// $('.box-7').on("click", change_box);
// $('.box-8').on("click", change_box);


let game_reset = function(){
  player_switch = 'x';
  board = ['', '', '', '', '', '', '', '', ''];
  $('.content').text('');
  $('.content').css('background-color', 'white');
};

$('.reset').on("click", game_reset);

$('.get-game').on("click", game_events.onGetIndex);
$('.create-game').on("click", game_events.onCreateGame);
$('.show-game').on("click", game_events.onShowGame);
$('.update-game').on("click", game_events.onUpdateGame);




module.exports = {
  change_box,
  board,
};

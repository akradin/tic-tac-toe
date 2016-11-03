'use strict';
const logic = require('./logic');
const reset = require('./reset');


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
    if(player_switch==='x'){
      $(this).css('background-color','black');
      $(this).text('X');
      player_turn();
    }
    else  {
      $(this).css('background-color','blue');
      $(this).text('Y');
      player_turn();
      debugger;
    }
  }
  check_game();
  console.log(board);

  logic.check_win(board);
};


$('.box-0').on("click", change_box);
$('.box-1').on("click", change_box);
$('.box-2').on("click", change_box);
$('.box-3').on("click", change_box);
$('.box-4').on("click", change_box);
$('.box-5').on("click", change_box);
$('.box-6').on("click", change_box);
$('.box-7').on("click", change_box);
$('.box-8').on("click", change_box);

$('button').on("click", reset.game_reset);



module.exports = {
  change_box,
};

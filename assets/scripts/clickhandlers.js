'use strict';
const logic = require('./logic');

let board = ['', '', '', '', '', '', '', '', ''];

let player_switch = 'x';

let player_turn = function(){
  if(player_switch==='x'){
    player_switch = 'y';
  }
  else{
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
  if(player_switch==='x'){
    $(this).css('background-color','black');
    $(this).text('X');
    player_turn();
  }
  else{
    $(this).css('background-color','blue');
    $(this).text('Y');
    player_turn();
  }
  check_game();
  console.log(board);

  logic.check_win(board);
};

$('.content').one("click", change_box);

// $('.box-0').one("click", change_box);
// $('.box-1').one("click", change_box);
// $('.box-2').one("click", change_box);
// $('.box-3').one("click", change_box);
// $('.box-4').one("click", change_box);
// $('.box-5').one("click", change_box);
// $('.box-6').one("click", change_box);
// $('.box-7').one("click", change_box);
// $('.box-8').one("click", change_box);


module.exports = {
  change_box,
}

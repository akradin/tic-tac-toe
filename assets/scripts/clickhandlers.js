'use strict';
const logic = require('./logic');

let player_switch = 'x';

let player_turn = function(){
  if(player_switch==='x'){
    player_switch = 'y';
  }
  else{
    player_switch = 'x';
  }
};

let change_box= function(){
  if(player_switch==='x'){
    $(this).css('background-color','black');
    $(this).text('X');
    player_turn();
    console.log('x');
  }
  else{
    $(this).css('background-color','blue');
    $(this).text('Y');
    player_turn();
    console.log('y');
  }
};

let check_game = function(){
  let board = [];
  $.each($('.content'),function(index, value){
    board.push(value);
    console.log(board);

});
};

$('.box-0').one("click", change_box);
$('.box-1').one("click", change_box);
$('.box-2').one("click", change_box);
$('.box-3').one("click", change_box);
$('.box-4').one("click", change_box);
$('.box-5').one("click", change_box);
$('.box-6').one("click", change_box);
$('.box-7').one("click", change_box);
$('.box-8').one("click", change_box);

$('.box-0').one("click", check_game);
$('.box-1').one("click", check_game);
$('.box-2').one("click", check_game);
$('.box-3').one("click", check_game);
$('.box-4').one("click", check_game);
$('.box-5').one("click", check_game);
$('.box-6').one("click", check_game);
$('.box-7').one("click", check_game);
$('.box-8').one("click", check_game);





// let check_game = function(){
//   if ($('.content').is(':empty')){
//     $('.content').replaceWith(' ');
//   }
//     let game_board = $('.content').select().text();
//     console.log(game_board);
    // if (game_board.length > 5){
    //   check_win();
    // }

//};

//check_game();

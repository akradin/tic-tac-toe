'use strict';


let player_switch = true;

let player_turn = function(){
  if(player_switch){
    player_switch = false;
  }
  else{
    player_switch = true;
  }
};

let change_box= function(){
  if(player_switch){
    $(this).css('background-color','black');
    player_turn();
  }
  else{
    $(this).css('background-color','blue');
    player_turn();
  }
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

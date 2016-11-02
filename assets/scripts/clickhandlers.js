'use strict';

let box_0 = document.getElementsByClassName("box-0")[0];
let box_1 = document.getElementsByClassName("box-1")[0];
let box_2 = document.getElementsByClassName("box-2")[0];
let box_3 = document.getElementsByClassName("box-3")[0];
let box_4 = document.getElementsByClassName("box-4")[0];
let box_5 = document.getElementsByClassName("box-5")[0];
let box_6 = document.getElementsByClassName("box-6")[0];
let box_7 = document.getElementsByClassName("box-7")[0];
let box_8 = document.getElementsByClassName("box-8")[0];

let change_box = function (){
    console.log('clicked')
};

box_0.addEventListener("click", change_box);
box_1.addEventListener("click", change_box);
box_2.addEventListener("click", change_box);
box_3.addEventListener("click", change_box);
box_4.addEventListener("click", change_box);
box_5.addEventListener("click", change_box);
box_6.addEventListener("click", change_box);
box_7.addEventListener("click", change_box);
box_8.addEventListener("click", change_box);

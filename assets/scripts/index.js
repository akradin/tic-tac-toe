'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled

let box_0 = document.getElementsByClassName("box-0")[0];

let change_box_0 = function (){
    box_0.innerHTML = 'test';
};

box_0.addEventListener("click", change_box_0);


require('./example');

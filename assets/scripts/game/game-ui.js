'use strict';

const store = require('../store.js');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const index_success = function(data){
  $('.game-data').text('You have played ' + data.games.length + ' games!');
};

const create_success = function(data){
  store.id = data.game.id;
};


module.exports = {
  success,
  failure,
  index_success,
  create_success,
};

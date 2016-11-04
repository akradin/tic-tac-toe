'use strict';

const store = require('../store.js');

const success = (data) => {

};

const failure = (error) => {

};

const index_success = function(data){
  $('.game-data').text('You have played ' + data.games.length + ' games!');
};

const create_success = function(data){
  store.id = data.game.id;
  $('.game-data').text('Game created!');

};


module.exports = {
  success,
  failure,
  index_success,
  create_success,
};

'use strict';

const store = require('../store');
const config = require('../config');

const getIndex = function(){
  return $.ajax({
    url: config.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },

  });
};

 const createGame = function(){
   return $.ajax({
      url: config.host + '/games',
      method: 'POST',
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },

   });
 };

 const showGame = function(){
   return $.ajax ({
     url: config.host + '/games/',
     method: 'GET',
     headers: {
       Authorization: 'Token token=' + store.user.token,
     },
   });
 };

const updateGame = function(index, value, over){
  return $.ajax({
    url: config.host + '/games/' + store.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data: {
      "game": {
        "cell": {
          "index": index,
          "value": value,
          },
        "over": over,
        }
    }
  });
};

module.exports = {
  getIndex,
  createGame,
  showGame,
  updateGame,

};

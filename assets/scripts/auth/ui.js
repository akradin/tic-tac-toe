'use strict';

const store = require('../store.js');

const success = (data) => {

};

const failure = (error) => {

};

const signInSuccess = (data) => {
  store.user = data.user;
  success(data);
  $('.create-game').show();
  $('.get-game').show();
};


module.exports = {
  failure,
  success,
  signInSuccess,
};

'use strict';

const store = require('../store.js');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  $('#messages').text('fail');
  console.error(error);
};

const signInSuccess = (data) => {
  store.user = data.user;
  success(data);

};


module.exports = {
  failure,
  success,
  signInSuccess,
};

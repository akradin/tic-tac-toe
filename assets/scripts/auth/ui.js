'use strict';

const store = require('../store.js');

const success = (data) => {

};

const failure = (error) => {

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

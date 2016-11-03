'use strict';

const store = require('../store.js');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};


module.exports = {
  success,
  failure,
};

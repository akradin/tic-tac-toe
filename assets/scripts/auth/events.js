'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.signUp(data)
    .then((response) => {
      ui.success(response);
      return api.signIn(data);
    })
    .then(ui.signInSuccess)
    .catch(ui.failure);
};

const onSignIn = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.failure);
};

const onChangePassword = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.changePassword(data)
    .then(ui.success)
    .catch(ui.changePasswordSuccess);
};

const onSignOut = function (event){
    event.preventDefault();
    api.signOut()
      .then(ui.signOutSuccess)
      .catch(ui.failure);
};


const addHandlers = () => {
  $('.sign-up-form').on('submit', onSignUp);
  $('.sign-in-form').on('submit', onSignIn);
  $('.change-password-form').on('submit', onChangePassword);
  $('.log-out').on('submit', onSignOut);
};

module.exports = {
  addHandlers,
};

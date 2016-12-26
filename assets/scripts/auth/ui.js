'use strict';

const store = require('../store.js');

const success = (data) => {

  };

const failure = (error) => {
  $('.sign-up-fail').show();
  $('.sign-in-fail').show();
  $('.change-pw-fail').show();
  $('.sign-up-fail').html('Oops, something went wrong, make sure all of your info is correct.');
  $('.sign-in-fail').html('Oops, something went wrong, make sure all of your info is correct.');
  $('.change-pw-fail').html('Oops, something went wrong, make sure all of your info is correct.');
  };

  const signInSuccess = (data) => {
    store.user = data.user;
    success(data);
    $('.create-game').show();
    $('.get-game').show();
    $('#sign-in-form').modal('hide');
    $('.dropdown-toggle').text(data.user.email);
    $('#welcome-modal').modal('hide');
    $('.change-pw-button').show();
    $('.log-out-button').show();
    $('.sign-up-button').hide();
    $('.sign-in-button').hide();

  };

const signOutSuccess = () => {
  $('.create-game').hide();
  $('.get-game').hide();
  $('#log-out').modal('hide');
  $('.container').hide();
  $('.game-data').hide();
  $('.win').hide();
  $('.sign-up-button').show();
$('.sign-in-button').show();

  };


const changePasswordSuccess = () => {
   $('#change-password-form').modal('hide');
 };


module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
};

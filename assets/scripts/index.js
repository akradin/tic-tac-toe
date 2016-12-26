'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled

const authEvents = require('./auth/events.js');

$(() => {
  authEvents.addHandlers();
  $('#welcome-modal').modal('show');
  $('#welcome-modal').modal({
    keyboard: false,
    backdrop: 'static'
  });
  $('.change-pw-button').hide();
  $('.log-out-button').hide();
});



require('./example');
require('./clickhandlers');
require('./logic');

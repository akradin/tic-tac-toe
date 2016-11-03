'use strict';

const game_ui = require('./game-ui');
const game_api = require('./game-api');

const onGetIndex = function(e){
  e.preventDefault();
  game_api.getIndex()
    .then(game_ui.success)
    .catch(game_ui.failure);

};

const onCreateGame = function(e){
  e.preventDefault();
  game_api.createGame()
    .then(game_ui.success)
    .catch(game_ui.failure);

};

const onShowGame = function(e){
  e.preventDefault();
  game_api.showGame()
  .then(game_ui.success)
  .catch(game_ui.failure);

};

module.exports = {
  onGetIndex,
  onCreateGame,
  onShowGame,

};

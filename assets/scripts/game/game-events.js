'use strict';

const game_ui = require('./game-ui');
const game_api = require('./game-api');
const clicks = require('../clickhandlers');

const onGetIndex = function(e){
  e.preventDefault();
  game_api.getIndex()
    .then(game_ui.index_success)
    .catch(game_ui.failure);

};

const onCreateGame = function(e){
  e.preventDefault();
  game_api.createGame()
    .then(game_ui.create_success)
    .catch(game_ui.failure);

};

const onShowGame = function(e){
  e.preventDefault();
  game_api.showGame()
    .then(game_ui.data_success)
    .catch(game_ui.failure);
};

const onUpdateGame = function(index, value, over){
  game_api.updateGame(index, value, over)
    .then(game_ui.success)
    .catch(game_ui.failure);

};
module.exports = {
  onGetIndex,
  onCreateGame,
  onShowGame,
  onUpdateGame,

};

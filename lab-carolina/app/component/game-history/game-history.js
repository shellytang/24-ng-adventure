'use strict';

require('./_game-history.scss');

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.component('gameHistory', {
  template: require('./game-history.html'),
  controller: 'GameHistoryController',
  controllerAs: 'gameHistoryCtrl',
});

ngAdventure.controller('GameHistoryController', ['$log', 'playerService', GameHistoryController]);
function GameHistoryController($log, playerService){
  $log.debug('gameHistoryCtrl');
  this.history = playerService.history;
}

'use strict';

const angular = require('angular');
const scottAdventure = angular.module('scottAdventure');

scottAdventure.component('gameHistory', {
  template: require('./game-history.html'),
  controller: 'GameHistoryController',
  controllerAs: 'gameHistoryCtrl'
});

scottAdventure.controller('GameHistoryController', ['$log', 'playerService', GameHistoryController]);

function GameHistoryController($log, playerService) {
  $log.debug('GameHistoryController');
  this.history = playerService.history;
}

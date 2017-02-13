let angular = require('angular');
let mazeApp = angular.module('mazeApp');

mazeApp.component('player', {
  template: require('./player.scss'),
  controller: 'PlayerController',
  controllerAs: 'playerCtrl'
});

mazeApp.controller('PlayerController', ['$log', 'playerService', PlayerController]);

function PlayerController($log, playerService) {
  $log.debug('PlayerController');
  this.player = playerService.player;
}
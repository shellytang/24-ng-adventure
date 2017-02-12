let angular = require('angular');
let mazeApp = angular.module('mazeApp');

mazeApp.component('gamePad', {
  template: './gamePad.html',
  controller: 'GamePadController',
  controllerAs: 'gamePadCtrl'
});

mazeApp.controller('GamePadController', ['$log', 'playerService', GamePadController]);

function GamePadController($log, playerService) {
  $log.debug('GamePadController');

  this.directions = ['north', 'east', 'south', 'west'];
  this.moveDirection = this.directions[0];

  this.movePlayer = function() {
    playerService.movePlayer(this.moveDirection)
    .then(location => {
      $log.log(location);
    })
    .catch(err => {
      $log.error(err);
    });
  };
}
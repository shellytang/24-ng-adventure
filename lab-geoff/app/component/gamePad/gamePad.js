let angular = require('angular');
let mazeApp = angular.module('mazeApp');

mazeApp.component('gamePad', {
  template: './gamePad.html',
  controller: 'GamePadController',
  controllerAs: 'gamePadCtrl'
});

//player service needs to be added into array
mazeApp.controller('GamePadController', ['$log', GamePadController]);

//whatever service should be added in here
function GamePadController($log) {
  $log.debug('GamePadController');

  //other gamepad stuff here
  //choose direction

}
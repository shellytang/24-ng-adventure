let angular = require('angular');
let mazeApp = angular.module('mazeApp');

mazeApp.component('history', {
  template: require('./history.html'),
  controller: 'HistoryController',
  controllerAs: 'historyCtrl'
});

mazeApp.controller('HistoryController', ['$log', 'playerService', HistoryController]);

function HistoryController($log, playerService) {
  $log.debug('HistoryController');
  this.history = playerService.history;
}
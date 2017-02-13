let angular = require('angular');
let mazeApp = angular.module('mazeApp');

mazeApp.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('mapService');
  let service = {};

  service.mapData = {
    test: {
      desc: 'test location',
      north: 'test',
      south: 'test'
    }
  };

  return service;
}
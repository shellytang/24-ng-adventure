'use strict';

const angular = require('angular');
const scottAdventure = angular.module('scottAdventure');

scottAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('map service');

  let service = {}; //want to attach methods to this

  //Build map data object
  service.mapData = {
    cabin: {
      desc: 'message from the cabin',
      south: 'trail'
    },
    trail: {
      desc: 'message from the trail',
      north: 'cabin',
      east: 'gate',
      south: 'pit'
    },
    pit: {
      desc: 'message from the pit',
      north: 'trail'
    },
    gate: {
      desc: 'message from the gate',
      west: 'trail',
      east: 'castle'
    },
    castle: {
      desc: 'message from the castle',
      west: 'gate',
      south: 'corridor'
    },
    corridor: {
      desc: 'message from the corridor',
      north: 'castle',
      east: 'snackroom'
    },
    snackroom: {
      desc: 'message from the snack room',
      west: 'corridor'
    }
  };
  return service;
}

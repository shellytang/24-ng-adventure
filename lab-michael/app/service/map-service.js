'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('map service');

  let service = {};

  service.mapData = {
    Entrance: {
      desc: 'message from the entrance',
      south: 'AugustinerFestzelt'
    },
    AugustinerFestzelt: {
      desc: 'message from the AugustinerFestzelt',
      north: 'Entrance',
      east: 'LowenbrauFestzelt',
      south: 'PaulanerFestzelt'
    },
    PaulanerFestzelt: {
      desc: 'message from the PaulanerFestzelt',
      north: 'AugustinerFestzelt'
    },
    LowenbrauFestzelt: {
      desc: 'message from the LowenbrauFestzelt',
      west: 'AugustinerFestzelt',
      east: 'HofbrauhausFestzelt'
    },
    HofbrauhausFestzelt: {
      desc: 'message from the HofbrauhausFestzelt',
      west: 'LowenbrauFestzelt',
      south: 'SpatenhausFestzelt'
    },
    SpatenhausFestzelt: {
      desc: 'message from the SpatenhausFestzelt',
      north: 'HofbrauhausFestzelt',
      east: 'Toiletten'
    },
    Toiletten: {
      desc: 'message from the snack room',
      west: 'SpatenhausFestzelt'
    }
  };

  return service;
};

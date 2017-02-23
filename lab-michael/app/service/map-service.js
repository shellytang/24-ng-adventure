'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('map service');

  let service = {};

  service.mapData = {
    Entrance: {
      desc: 'Willkommen zum Oktoberfest!',
      south: 'Augustiner_Festzelt'
    },
    Augustiner_Festzelt: {
      desc: 'This is the Augustiner_Festzelt, Ein Prosit!',
      north: 'Entrance',
      east: 'Lowenbrau_Festzelt',
      south: 'Paulaner_Festzelt'
    },
    Paulaner_Festzelt: {
      desc: 'This is the Paulaner_Festzelt, Zicke zacke, zicke zacke, hoi hoi hoi!',
      north: 'Augustiner_Festzelt'
    },
    Lowenbrau_Festzelt: {
      desc: 'This is the Lowenbrau_Festzelt, Gemütlichkeit!',
      west: 'Augustiner_Festzelt',
      east: 'Hofbrauhaus_Festzelt'
    },
    Hofbrauhaus_Festzelt: {
      desc: 'This is the Hofbrauhaus_Festzelt, PROST!',
      west: 'Lowenbrau_Festzelt',
      south: 'Spatenhaus_Festzelt'
    },
    Spatenhaus_Festzelt: {
      desc: 'message from the Spatenhaus_Festzelt, Home of the Optimator!',
      north: 'Hofbrauhaus_Festzelt',
      east: 'Toiletten'
    },
    Toiletten: {
      desc: 'You have crawled your way to the Pissior!',
      west: 'Spatenhaus_Festzelt'
    }
  };

  return service;
};

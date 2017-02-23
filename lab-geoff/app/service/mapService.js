let angular = require('angular');
let mazeApp = angular.module('mazeApp');

mazeApp.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('mapService');
  let service = {};

  service.mapData = {
    entrance: {
      desc: 'You are at the maze entrance.',
      north: 'hallway',
    },
    hallway: {
      desc: 'You have entered the hallway.',
      north: 'stairs',
      east: 'door',
      south: 'entrance',
      west: '',
    },
    door: {
      desc: 'A large door is in front of you.',
      north: 'library',
      south: 'hallway',
    },
    library: {
      desc: 'A small library with one exit.',
      south: 'door',
    },
    stairs: {
      desc: 'A long staircase.',
      south: 'hallway',
      north: 'cellar',
    },
    cellar: {
      desc: 'A dark cellar with two exits',
      south: 'stairs',
      west: 'study',
    },
    study: {
      desc: 'A small study with a desk.',
      south: 'cellar',
      north: 'painting',
      east: 'desk',
      west: 'bookcase',

    },
    painting: {
      desc: 'A painting of a mountain',
      south: 'study',
    },
    desk: {
      desc: 'A small desk covered in papers.',
      south: 'study',
      north: 'key',
    },
    bookcase: {
      desc: 'An empty bookcase',
      south: 'study',
    },
    key: {
      desc: 'You found the key!'
    }
  };

  return service;
}
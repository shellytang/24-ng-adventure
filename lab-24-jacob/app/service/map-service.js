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
      msg: 'you\'re at the cabin where you started, go south to the farm',
      south: 'farm',
      gold: 0
    },
    farm: {
      msg: 'you\'re on the farm, go north to the cabin, east to the creamery, or south to Orange County',
      north: 'cabin',
      east: 'creamery',
      south: 'orangeCounty',
      gold: 1
    },
    orangeCounty: {
      msg: 'You\'re in Orange County. God this place sucks. Go north to the form, or south to the school',
      north: 'farm',
      south: 'school',
      gold: 6
    },
    creamery: {
      msg: 'you\'re at the creamery. go west to the farm, or east to the school',
      west: 'farm',
      east: 'school',
      gold: 1
    },
    school: {
      msg: 'You\'re at the school, go west to jail where Scott is being held prisoner, go south to the market, or north to Orange County',
      west: 'jail',
      south: 'market',
      north: 'orangeCounty',
      gold: 3

    },
    market: {
      msg: 'Welcome to the market! you can buy things here depending on how much gold you have. Try to think of what might be useful with regards to your mission of freeing Scott from jail. Go north for the creamery, east to the school, or south to the jail',
      north: 'creamery',
      east: 'market',
      south: 'jail',
      items: ['magazine', 'cat', 'bolt-cutters']
    },
    jail: {
      msg: 'you\'re at the jail where Scott is being held prisoner. Maybe you can free him. You can go west to return to the market or east to go to the school',
      west: 'market',
      east: 'School',
    }
  };
  return service;
}

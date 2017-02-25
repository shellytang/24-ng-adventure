'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService) {
  $log.debug('player service');

  let service = {};

  let turn = 0;
  let player = service.player = {
    name: 'Kitty Purry',
    location: 'bed',
    hp: 9
  };

  let history = service.history = [
    {
      turn,
      desc: mapService.mapData.bed.desc,
      location: player.location,
      hp: player.hp
    }
  ];

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn++;

      let current = player.location;
      let newLocation = mapService.mapData[current][direction];

      if(!newLocation) {
        history.unshift({
          turn,
          desc: 'Oops! You\'ve ran yourself into a wall.',
          location: player.location,
          hp: player.hp
        });
        reject('no room in that direction');
      }

      if(newLocation === 'pantry' || newLocation === 'bathroom') {
        player.hp = player.hp - 3;
      }

      if(newLocation === 'corner') {
        player.hp++;
      }

      history.unshift({
        turn,
        location: newLocation,
        desc: mapService.mapData[newLocation].desc,
        hp: player.hp
      });

      player.location = newLocation;
      return resolve(player.location);
    });
  };

  return service;
}

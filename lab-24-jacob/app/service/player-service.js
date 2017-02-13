'use strict';

const angular = require('angular');
const scottAdventure = angular.module('scottAdventure');

scottAdventure.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService) {
  $log.debug('player service');

  let service = {};

  let turn = 0;
  let player = service.player = {
    name: 'scott',
    location: 'cabin',
    hp: 16
  };

  let history = service.history = [
    {
      turn,
      desc: 'Welcome to Scott\'s wacky and crazy adventure!',
      location: 'cabin',
      hp: player.hp
    }
  ];

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn ++;

      let current = player.location;  //starting point
      let newLocation = mapService.mapData[current][direction];
      //user inputs 'direction' when playing game

      if(!newLocation) {
        history.unshift({  //adds this object to beginning of history array
          turn,
          desc: 'You have run into a wall',
          location: player.location,
          hp: player.hp
        });
        return reject('no room in that direction');
      }
      history.unshift ({
        turn,location: player.location,
        desc: mapService.mapData[newLocation].desc,
        hp: player.hp
      });
      //Reassign the player's location
      player.location = newLocation;
      return resolve(player.location);
    });
  };
  return service;
}

'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService){
  $log.debug('playerService');

  let service = {};

  let turn = 0;

  let player = service.player = {
    name: 'Finn',
    location: 'home',
  };

  let history = service.history = [
    {
      turn,
      desc: 'Welcome to the Land of Ooo. Let\'s get to that party!',
      location: 'home',
    },
  ];

  service.movePlayer = function(direction){
    return new $q((resolve, reject) => {
      turn++;
      let currentLocation = player.location;
      let newLocation = mapService.mapData[currentLocation][direction];
      if(!newLocation) {
        history.unshift({
          turn,
          desc: 'Trust me, you don\'t want to go that way..',
          location: player.location,
        });
        console.log('history', history);
        return reject('no room in that direction');
      }

      history.unshift({
        turn,
        location: newLocation,
        desc: mapService.mapData[newLocation].desc,
      });
      player.location = newLocation;
      return resolve(player.location);
    });
  };

  return service;
}

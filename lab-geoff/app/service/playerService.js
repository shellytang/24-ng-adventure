let angular = require('angular');
let mazeApp = angular.module('mazeApp');

mazeApp.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService) {
  $log.debug('playerService');

  let service = {};
  let turn = 0;

  let player = service.player = {
    name:'Player One',
    location:'entrance',
    hp: 10
  };

  let history = service.history = [
    {
      turn,
      desc: 'Find the key.',
      hp: player.hp
    }
  ];

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {

      turn++;
      let current = player.location;
      let newLocation = mapService.mapData[current][direction];

      if (!newLocation) {
        history.unshift({
          turn,
          desc: 'You have hit a wall.',
          location: player.location,
          hp: player.hp
        });
        return reject('Dead End');
      }

      history.unshift({
        turn,
        desc: mapService.mapData[newLocation].desc,
        location: player.location,
        hp: player.hp
      });

      player.location = newLocation;
      return resolve(player.location);
    });
  };

  return service;
}
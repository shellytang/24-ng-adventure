'use strict';

require('angular')
.module('ngAdventure')
.factory('playerService', ['$q', '$log', 'mapService', function($q, $log, mapService) {
  $log.debug('Player Service');

  let service = {};
  let turn = 0;

  let player = service.player = {
    name: 'Zach',
    location: 'office',
    hp: 5,
  };

  let history = service.history = [
    {
      turn,
      desc: 'You receive a Twitter nofication that zombies are on the loose nearby. Can you make it home before the zombies get you?',
      location: 'office',
      hp: player.hp,
    },
  ];

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {

      turn ++;
      let current = player.location;
      let newLocation = mapService.mapData[current][direction];

      if(!newLocation) {

        history.unshift({
          turn,
          desc: 'Bad turn, you have run into a traffic barricade',
          location: player.location,
          hp: --player.hp,
        });
        return reject('No room in that direction');
      }

      history.unshift({
        turn,
        location: newLocation,
        desc: mapService.mapData[newLocation].desc,
        hp: ++player.hp,
      });

      player.location = newLocation;
      return resolve(player.location);
    });
  };
  return service;
}]);

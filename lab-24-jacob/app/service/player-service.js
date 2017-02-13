'use strict';

const angular = require('angular');
const scottAdventure = angular.module('scottAdventure');

scottAdventure.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService) {
  $log.debug('player service');

  let service = {};

  let turn = 0;
  let player = service.player = {
    name: 'Charlie',
    location: 'cabin',
    desc: 'Scott Schmidt was caught hacking the mainframe from a computer in the public library. Rookie mistake Scott! Now you have to free him from his prison cell. Travel to the different areas and collect gold to buy something that could help free Scott!',
    gold: 0,
  };

  let history = service.history = [
    {
      turn,
      desc: 'Welcome to Scott\'s wacky and crazy adventure!',
      location: 'cabin',
      hp: player.gold
    }
  ];

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn ++;

      let current = player.location;  //starting point
      let newLocation = mapService.mapData[current][direction];
      let newDesc = mapService.mapData[newLocation].desc;
      console.log(newDesc);

      if(!newLocation) {
        history.unshift({  //adds this object to beginning of history array
          turn,
          desc: 'You have run into a wall',
          location: player.location,
          gold: player.gold
        });
        return reject('no room in that direction');
      }
      history.unshift ({
        turn,location: player.location,
        desc: mapService.mapData[current].desc,
      });
      //Reassign the player's location
      player.location = newLocation;
      player.desc = newDesc;
      return resolve(player.location);
    });
  };
  return service;
}

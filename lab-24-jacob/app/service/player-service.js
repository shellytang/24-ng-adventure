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
    msg: 'Scott Schmidt was caught hacking the mainframe from a computer in the public library. Rookie mistake Scott! Now you have to free him from his prison cell. Travel to the different areas and collect gold to buy something that could help free Scott!',
    gold: 0,
    items: [],
    market: false,
    jail: false
  };

  let history = service.history = [
    {
      turn,
      msg: 'Welcome to Scott\'s wacky and crazy adventure!',
      location: 'cabin',
      hp: player.gold
    }
  ];

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn ++;

      let current = player.location;  //starting point
      let newLocation = mapService.mapData[current][direction];
      if(!newLocation) {
        history.unshift({  //adds this object to beginning of history array
          turn,
          msg: 'You have run into a wall',
          location: player.location,
          gold: player.gold
        });
        return reject('no room in that direction');
      }
      let newMsg = mapService.mapData[newLocation].msg;
      history.unshift ({
        turn,location: player.location,
        msg: mapService.mapData[current].msg,
      });
      //Reassign the player's location
      player.location = newLocation;
      player.msg = newMsg;
      return resolve(player.location);
    });
  };

  service.takeGold = function() {
    return new $q((resolve, reject) => {
      let gold = mapService.mapData[player.location].gold; //not DRY I know...
      if(!gold) {
        player.msg = 'there is no gold to be taken';
        return reject('there is no gold to be taken');
      }

      player.gold += gold;
      player.msg = 'gold stolen! well done!';
      mapService.mapData[player.location].gold = 0;
      return resolve(player.gold);
    });
  };

  service.exchangeGold = function() {
    return new $q((resolve, reject) => {
      if (player.gold < 10) {
        player.msg = 'You don\'t have enough gold to buy that!';
        return reject('insufficient funds');
      }
      player.gold -= 10;
      player.msg = 'you purchased boltcutters!';
      player.items.push('bolt-cutters');
      return resolve(player.gold);
    });
  };
  service.freeScott = function() {
    return new $q((resolve, reject) => {
      if (player.items.length === 0) {
        player.msg = 'you have nothing with which to break Scott out of Jail. Might want to check the market';
        return reject('you\'re efforts are futile!');
      }
      player.msg = 'you freed Scott! Hooray! Game Over';
      player.items.pop();
      return resolve(player.location);
    });
  };
  return service;
}

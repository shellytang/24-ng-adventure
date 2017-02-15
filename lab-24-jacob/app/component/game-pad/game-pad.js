'use strict';

const angular = require('angular');
const scottAdventure = angular.module('scottAdventure');

scottAdventure.component('gamePad', {
  template: require('./game-pad.html'),
  controller: 'GamePadController',
  controllerAs: 'gamePadCtrl'
});

scottAdventure.controller('GamePadController', ['$log',  'playerService', GamePadController]);

function GamePadController($log, playerService) {
  $log.debug('GamePadController');

  this.directions = ['north', 'south', 'east', 'west'];
  this.moveDirection = this.directions[0];

  this.movePlayer = function() {
    playerService.movePlayer(this.moveDirection)
    .then(location => {
      $log.log(`player currently at: ${location}`);
    })
    .catch( err => {
      $log.error(err);
    });
  };
  this.takeGold = function() {
    playerService.takeGold()
    .then(gold => {
      $log.log(`player took ${gold} gold pieces`);
    })
    .catch(err => {
      $log.error(err);
    });
  };
  this.exchangeGold = function() {
    playerService.exchangeGold()
    .then(gold => {
      $log.log(`player bought boltcutters with ${gold} pieces of gold`);
    })
    .catch(err => {
      $log.error(err);
    });
  };
  this.freeScott = function() {
    playerService.freeScott()
    .then(scott => {
      $log.log(`you have freed ${scott}`);
    })
    .catch(err => {
      $log.error(err);
    });
  };
  this.checkMarket = function() {
    if (playerService.player.location === 'market') {
      return true;
    } else {
      return false;
    }
  };
  this.checkJail = function() {
    if(playerService.player.location === 'jail') {
      return true;
    } else {
      return false;
    }
  };
}

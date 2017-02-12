'use strict'

const angular = require('angular')
const ngAdventure = angular.module('ngAdventure')

ngAdventure.component('gamePad', {
  template: require('./game-pad.html'),
  controller: 'GamePadController',
  controllerAs: 'gamePadCtrl'
})

ngAdventure.controller('GamePadController', ['$log', 'playerService', GamePadController])

function GamePadController($log, playerService) {
  $log.debug('GamePadController')

  this.directions = ['north', 'south', 'east', 'west']
  this.moveDirection = this.directions[0]
  this.location = playerService.player.location

  this.movePlayer = function() {
    playerService.movePlayer(this.moveDirection)
      .then( location => {
        $log.log(`player at ${location}`)
        this.location = location
      })
      .catch(err => {
        $log.error(err)
      })
  }
}

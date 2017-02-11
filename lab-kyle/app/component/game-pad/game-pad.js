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

  this.directions = ['North', 'South', 'East', 'West']
  this.moveDirection = this.directions[0]

  this.movePlayer = function() {
    playerService.movePlayer(this.moveDirection)
      .then( location => {
        $log.log(`player at ${location}`)
      })
      .catch(err => {
        $log.errory(err)
      })
  }
}

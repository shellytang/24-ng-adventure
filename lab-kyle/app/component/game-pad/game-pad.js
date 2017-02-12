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
  this.showResult = true

  this.movePlayer = function() {
    playerService.movePlayer(this.moveDirection)
      .then( location => {
        $log.log(`player at ${location}`)
        if ((location === 'arena') && (playerService.player.pokemon.length >= 2)) {
          this.hidePad = true
          this.showResult = false
          this.result = 'You win. Contratulations, you rock!'
          return
        }
        if (location === 'arena') {
          this.hidePad = true
          this.showResult = false
          this.result = 'You lost. Did you have enough pokemon to win in the Arena?'
        }
      })
      .catch(err => {
        $log.error(err)
      })
  }
}

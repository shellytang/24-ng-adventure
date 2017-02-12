/* global expect*/

require('./lib/test-setup')

const angular = require('angular')

describe('Player Info Controller', function() {
  beforeEach(() => {
    angular.mock.module('ngAdventure')
    angular.mock.inject($controller => {
      this.playerCtrl = new $controller('PlayerInfoController')
    })
  })

  describe('initial properties', () => {
    it('has a player name property of Red', () => {
      expect(this.playerCtrl.player.name).toBe('Red')
    })

    it('has a player location property of home', () => {
      expect(this.playerCtrl.player.location).toBe('home')
    })

    it('has a player pokeballs property set to 0', () => {
      expect(this.playerCtrl.player.pokeballs).toBe(0)
    })

    it('has a player property called pokemon that is an empty array', () => {
      expect(Array.isArray(this.playerCtrl.player.pokemon)).toBe(true)
      expect(this.playerCtrl.player.pokemon.length).toBe(0)
    })

  })
})

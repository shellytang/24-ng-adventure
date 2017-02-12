/* global expect */

require('./lib/test-setup')

const angular = require('angular')

describe('App Controllers', function() {
  beforeEach(() => {
    angular.mock.module('ngAdventure')
  })

  describe('Game History Controller', () => {
    beforeEach(() => {
      angular.mock.inject($controller => {
        this.historyCtrl = new $controller('GameHistoryController')
      })
    })

    describe('inital properties', () => {
      it('has a history property that is an array with one item', () => {
        expect(Array.isArray(this.historyCtrl.history)).toBe(true)
        expect(this.historyCtrl.history.length).toBe(1)
      })

      it('history array item at index 0 has turn property set to 0', () => {
        expect(this.historyCtrl.history[0].turn).toBe(0)
      })

      it('history[0] has desc property equal to Welcome to your adventure! Good Luck!', () => {
        expect(this.historyCtrl.history[0].desc).toBe('Welcome to your adventure! Good luck!')
      })

      it('history[0] has a location property set to home', () => {
        expect(this.historyCtrl.history[0].location).toBe('home')
      })
    })
  })

  describe('Player Info Controller', function() {
    beforeEach(() => {
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

  describe('Game Pad Controller', function() {
    describe('initial properties', () => {
      beforeEach(() => {
        angular.mock.inject($controller => {
          this.padCtrl = new $controller('GamePadController')
        })
      })

      it('should have an array of directions', () => {
        expect(Array.isArray(this.padCtrl.directions)).toBe(true);
        expect(this.padCtrl.directions[0]).toEqual('north')
        expect(this.padCtrl.directions[3]).toEqual('west')
        expect(this.padCtrl.directions.length).toEqual(4)
      })

      it('should have an initial moveDirection proprety set to north', () => {
        expect(this.padCtrl.moveDirection).toBe('north')
      })
    })
  })
})

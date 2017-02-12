/* global expect */

require('./lib/test-setup')

const angular = require('angular')

describe('Game History Controller', function() {
  beforeEach(() => {
    angular.mock.module('ngAdventure')
    angular.mock.inject($controller => {
      this.historyCtrl = new $controller('GameHistoryController')
    })
  })

  describe('initial properties', () => {
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

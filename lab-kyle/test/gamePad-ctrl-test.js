/* global expect*/

require('./lib/test-setup')

const angular = require('angular')

describe('Game Pad Controller', function() {
  beforeEach(() => {
    angular.mock.module('ngAdventure')
    angular.mock.inject($controller => {
      this.padCtrl = new $controller('GamePadController')
    })
  })

  describe('initial properties', () => {
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

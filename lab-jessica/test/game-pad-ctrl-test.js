'use strict';

// require('./lib/test-setup.js');
//
// const angular = require('angular');

describe('Game Pad Controller', function() {
  beforeEach(() => {
    angular.mock.module('ngAdventure');
    angular.mock.inject($controller => {
      this.gamePadCtrl = new $controller('GamePadController');
    });
  });

  describe('initial properties', () => {
    it('directions property should equal array of directions', () => {
      expect(Array.isArray(this.gamePadCtrl.directions)).toBe(true);
      expect(this.gamePadCtrl.directions).toEqual(['north', 'south', 'east', 'west']);
    });

    it('moveDirection property should be north', () => {
      expect(this.gamePadCtrl.moveDirection).toBe('north');
    });
  });

});

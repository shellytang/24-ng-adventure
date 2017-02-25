'use strict';

// require('./lib/test-setup.js');
//
// const angular = require('angular');

describe('Player Info Controller', function() {
  beforeEach(() => {
    angular.mock.module('ngAdventure');
    angular.mock.inject($controller => {
      this.playerInfoCtrl = new $controller('PlayerInfoController');
    });
  });

  describe('initial properties', () => {
    it('player property', () => {
      expect(this.playerInfoCtrl.player).toEqual(
        {
          name: 'Kitty Purry',
          location: 'bed',
          hp: 9
        });
    });
  });

});

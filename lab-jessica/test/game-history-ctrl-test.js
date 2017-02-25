'use strict';

require('./lib/test-setup.js');

const angular = require('angular');

describe('Game History Controller', function() {
  beforeEach(() => {
    angular.mock.module('ngAdventure');
    angular.mock.inject($controller => {
      this.gameHistoryCtrl = new $controller('GameHistoryController');
    });
  });

  describe('initial properties', () => {
    it('history property', () => {
      expect(this.gameHistoryCtrl.history).toEqual([
        {
          turn: 0,
          desc: 'Time to wake up from your cat nap and find some food!',
          location: 'bed',
          hp: 9
        }
      ]);
    });
  });

});

'use strict';

require('./app/entry.js');
require('angular-mocks');

let angular = require('angular');
let cowsay = require('cowsay-browser');

describe('GamePadController', function() {
  beforeEach(function() {
    angular.mock.module('ngAdventure');
    angular.mock.inject(function($controller) {
      this.gamePadCtrl = new $controller('GamePadController')
    });
  });

  describe('should have directions array ', function() {
    it('should have an array of directions that are: = [north, south, east, west]', function() {
      console.log(this.gamePadCtrl);
      expect(this.directions)toBe('[north, south, east, west]');
    });
  });
});

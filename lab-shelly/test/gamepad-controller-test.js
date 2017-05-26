'use strict';

const angular = require('angular');
require('angular-mocks');

describe('testing the game-pad controller', function() {

  beforeEach(() => {
    angular.mock.module('ngAdventure');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.gamepadCtrl = new $controller('gamepadCtrl');
      this.gamepadCtrl.$onInit();
    });
  });

  afterEach(() => this.$rootScope.$apply());

  it('should pass', () => {
    expect(true).toEqual(true);
  });

});

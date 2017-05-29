'use strict';

const angular = require('angular');
require('angular-mocks');

describe('testing the history controller', function() {

  beforeEach(() => {
    angular.mock.module('ngAdventure');
    angular.mock.inject(($rootScope, $componentController, playerService) => {
      this.$rootScope = $rootScope;
      this.historyCtrl = $componentController('history');
      this.historyCtrl.playerService = playerService;
      this.historyCtrl.$onInit();
    });
  });

  afterEach(() => this.$rootScope.$apply());

  it('should pass', () => {
    expect(true).toEqual(true);
  });

  describe('testing initial state', () => {

  });

  describe('testing the movePlayer method', () => {

  });

});

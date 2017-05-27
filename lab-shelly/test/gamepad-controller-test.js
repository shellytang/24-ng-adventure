'use strict';

const angular = require('angular');
require('angular-mocks');

describe('testing the game-pad controller', function() {

  beforeEach(() => {
    angular.mock.module('ngAdventure');
    angular.mock.inject(($rootScope, $componentController, playerService) => {
      this.$rootScope = $rootScope;
      this.gamepadCtrl = $componentController('gamePad');
      this.gamepadCtrl.playerService = playerService;
      this.gamepadCtrl.$onInit();
    });
  });

  afterEach(() => this.$rootScope.$apply());

  it('should pass', () => {
    expect(true).toEqual(true);
  });

  describe('testing initial state', () => {

    it('the default direction should be set to "north"', () => {
      expect(this.gamepadCtrl.moveDirection).toBe('north');
    });

    it('the directions should be an array with values "north, south, east, west"', () => {
      expect(this.gamepadCtrl.directions[0]).toBe('north');
      expect(this.gamepadCtrl.directions[1]).toBe('south');
      expect(this.gamepadCtrl.directions[2]).toBe('east');
      expect(this.gamepadCtrl.directions[3]).toBe('west');
      expect(this.gamepadCtrl.directions).toEqual(jasmine.any(Array));
    });
  });

  describe('testing the functionality', () => {
    it('should log the proper location of player', () =>{
      this.gamepadCtrl.playerService.movePlayer('south');
      expect(this.gamepadCtrl.playerService.player.location).toEqual('park');
    });
  });
});

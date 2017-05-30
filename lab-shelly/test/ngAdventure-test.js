'use strict';

const angular = require('angular');
require('angular-mocks');

describe('Testing the ngAdventure App', function() {

  describe('testing the history component controller', function() {

    beforeEach(() => {
      angular.mock.module('ngAdventure');
      angular.mock.inject(($rootScope, $componentController, playerService) => {
        this.$rootScope = $rootScope;
        this.historyCtrl = $componentController('history', { $scope: this.$scope });
        this.historyCtrl.playerService = playerService;
        this.historyCtrl.$onInit();
      });
    });

    afterEach(() => this.$rootScope.$apply());

    describe('testing initial state', () => {

      it('should have 0 turns taken', () => {
        expect(this.historyCtrl.playerService.history[0].turn).toEqual(0);
      });

      it('should have 5 hp', () => {
        expect(this.historyCtrl.playerService.history[0].hp).toEqual(5);
      });

      it('should have "office" as the location', () => {
        expect(this.historyCtrl.playerService.history[0].hp).toEqual(5);
      });

      it('should have the correct inital location description', () => {
        let expectedDesc = 'You receive a Twitter nofication that zombies are on the loose nearby. Can you make it home before the zombies get you?';
        expect(this.historyCtrl.playerService.history[0].desc).toBe(expectedDesc);
      });

      it('should show the history of current and previous turn', () => {
        let secondDesc = 'You have made it across the Fremont Bridge - you are almost home!';
        let firstDesc = 'Good call - you have decided to take a shortcut through the park.';
        this.historyCtrl.playerService.movePlayer('south');
        this.historyCtrl.playerService.movePlayer('east');
        expect(this.historyCtrl.playerService.history).toEqual(jasmine.any(Array));
        expect(this.historyCtrl.playerService.history.length).toEqual(3);
        expect(this.historyCtrl.playerService.history[1].turn).toEqual(1);
        expect(this.historyCtrl.playerService.history[1].hp).toEqual(6);
        expect(this.historyCtrl.playerService.history[1].location).toBe('park');
        expect(this.historyCtrl.playerService.history[1].desc).toBe(firstDesc);
        expect(this.historyCtrl.playerService.history[0].turn).toEqual(2);
        expect(this.historyCtrl.playerService.history[0].hp).toEqual(7);
        expect(this.historyCtrl.playerService.history[0].location).toBe('bridge');
        expect(this.historyCtrl.playerService.history[0].desc).toBe(secondDesc);
      });

    });
  });


  describe('testing the game-pad component controller', function() {

    beforeEach(() => {
      angular.mock.module('ngAdventure');
      angular.mock.inject(($rootScope, $componentController, playerService) => {
        this.$rootScope = $rootScope;
        this.gamepadCtrl = $componentController('gamePad', { $scope: this.$scope });
        this.gamepadCtrl.playerService = playerService;
        this.gamepadCtrl.$onInit();
      });
    });

    afterEach(() => this.$rootScope.$apply());

    describe('testing the initial state', () => {

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

    describe('testing the movePlayer method', () => {

      it('should log the location of the player', () =>{
        this.gamepadCtrl.playerService.movePlayer('south');
        expect(this.gamepadCtrl.playerService.player.location).toEqual('park');
      });

      it('should increment the number of turns with each move', () =>{
        this.gamepadCtrl.playerService.movePlayer('south');
        this.gamepadCtrl.playerService.movePlayer('east');
        expect(this.gamepadCtrl.playerService.history[0].turn).toEqual(2);
      });

      it('should increment the player hp with each successful move', () =>{
        this.gamepadCtrl.playerService.movePlayer('south');
        expect(this.gamepadCtrl.playerService.player.hp).toEqual(6);
      });

      it('correct info should be added to history after each move with most recent move first', () => {
        let secondExpectDesc = 'You have made it across the Fremont Bridge - you are almost home!';
        let firstExpectDesc = 'Good call - you have decided to take a shortcut through the park.';
        this.gamepadCtrl.playerService.movePlayer('south');
        this.gamepadCtrl.playerService.movePlayer('east');
        expect(this.gamepadCtrl.playerService.history.length).toEqual(3);
        expect(this.gamepadCtrl.playerService.history).toEqual(jasmine.any(Array));
        expect(this.gamepadCtrl.playerService.history[0].turn).toEqual(2);
        expect(this.gamepadCtrl.playerService.history[0].hp).toEqual(7);
        expect(this.gamepadCtrl.playerService.history[0].location).toBe('bridge');
        expect(this.gamepadCtrl.playerService.history[0].desc).toBe(secondExpectDesc);
        expect(this.gamepadCtrl.playerService.history[1].turn).toEqual(1);
        expect(this.gamepadCtrl.playerService.history[1].hp).toEqual(6);
        expect(this.gamepadCtrl.playerService.history[1].location).toBe('park');
        expect(this.gamepadCtrl.playerService.history[1].desc).toBe(firstExpectDesc);
      });
    });

  });

  describe('testing the player-info component controller', function() {

    beforeEach(() => {
      angular.mock.module('ngAdventure');
      angular.mock.inject(($rootScope, $componentController, playerService) => {
        this.$rootScope = $rootScope;
        this.playerInfoCtrl = $componentController('playerInfo', { $scope: this.$scope });
        this.playerInfoCtrl.playerService = playerService;
        this.playerInfoCtrl.$onInit();
      });
    });

    afterEach(() => this.$rootScope.$apply());

    describe('testing the initial state', () => {

      it('should display the correct player name', () => {
        expect(this.playerInfoCtrl.playerService.player.name).toBe('Zach');
      });

      it('should display the correct player initial location', () => {
        expect(this.playerInfoCtrl.playerService.player.location).toBe('office');
      });

      it('should display the correct player initial hp', () => {
        expect(this.playerInfoCtrl.playerService.player.hp).toEqual(5);
      });

      it('should display the current player location with each move', () => {
        this.playerInfoCtrl.playerService.movePlayer('south');
        this.playerInfoCtrl.playerService.movePlayer('east');
        expect(this.playerInfoCtrl.playerService.player.location).toBe('bridge');
      });

      it('should display and increment the player hp with each successful move', () => {
        this.playerInfoCtrl.playerService.movePlayer('south');
        this.playerInfoCtrl.playerService.movePlayer('east');
        expect(this.playerInfoCtrl.playerService.player.hp).toEqual(7);
      });

    });
  });


});

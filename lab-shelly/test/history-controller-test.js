'use strict';

const angular = require('angular');
require('angular-mocks');

describe('testing the history controller', function() {

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

    it('it should initially display 0 turns', () => {
      expect(this.historyCtrl.playerService.history[0].turn).toEqual(0);
    });

    it('it should initially display 5 hp', () => {
      expect(this.historyCtrl.playerService.history[0].hp).toEqual(5);
    });

    it('it should initially display "office" as the location', () => {
      expect(this.historyCtrl.playerService.history[0].hp).toEqual(5);
    });

    it('it should initially display the correct starting location message', () => {
      let expectedDesc = 'You receive a Twitter nofication that zombies are on the loose nearby. Can you make it home before the zombies get you?';
      expect(this.historyCtrl.playerService.history[0].desc).toBe(expectedDesc);
    });

    it('it should store the player history for each turn', () => {
      this.historyCtrl.playerService.movePlayer('south');
      this.historyCtrl.playerService.movePlayer('east');
      expect(this.historyCtrl.playerService.history).toEqual(jasmine.any(Array));
      expect(this.historyCtrl.playerService.history.length).toEqual(3);
    });

    it('should display and track the correct number of turns taken', () => {
      this.historyCtrl.playerService.movePlayer('south');
      this.historyCtrl.playerService.movePlayer('east');
      expect(this.historyCtrl.playerService.history[0].turn).toEqual(2);
    });

    it('should display and track the hp', () => {
      this.historyCtrl.playerService.movePlayer('south');
      this.historyCtrl.playerService.movePlayer('east');
      expect(this.historyCtrl.playerService.history[0].hp).toEqual(7);
    });

    it('should display and track the location from the previous move', () => {
      this.historyCtrl.playerService.movePlayer('south');
      this.historyCtrl.playerService.movePlayer('east');
      expect(this.historyCtrl.playerService.history[0].location).toBe('bridge');
    });

    it('should track and display the location message from the previous move', () => {
      let expectDesc = 'You have made it across the Fremont Bridge - you are almost home!';
      this.historyCtrl.playerService.movePlayer('south');
      this.historyCtrl.playerService.movePlayer('east');
      expect(this.historyCtrl.playerService.history[0].desc).toBe(expectDesc);
    });

  });
});

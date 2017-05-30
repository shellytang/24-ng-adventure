// 'use strict';
//
// const angular = require('angular');
// require('angular-mocks');
//
// describe('testing the player-info controller', function() {
//
//   beforeEach(() => {
//     angular.mock.module('ngAdventure');
//     angular.mock.inject(($rootScope, $componentController, playerService) => {
//       this.$rootScope = $rootScope;
//       this.playerInfoCtrl = $componentController('playerInfo', { $scope: this.$scope });
//       this.playerInfoCtrl.playerService = playerService;
//       this.playerInfoCtrl.$onInit();
//     });
//   });
//
//   afterEach(() => this.$rootScope.$apply());
//
//   describe('testing the initial state', () => {
//
//     it('should display the correct player name', () => {
//       expect(this.playerInfoCtrl.playerService.player.name).toBe('Zach');
//     });
//
//     it('should display the correct player initial location', () => {
//       expect(this.playerInfoCtrl.playerService.player.location).toBe('office');
//     });
//
//     it('should display the correct player initial hp', () => {
//       expect(this.playerInfoCtrl.playerService.player.hp).toEqual(5);
//     });
//
//     it('should display the current player location', () => {
//       this.playerInfoCtrl.playerService.movePlayer('south');
//       this.playerInfoCtrl.playerService.movePlayer('east');
//       expect(this.playerInfoCtrl.playerService.player.location).toBe('bridge');
//     });
//
//     it('should display the increment the player hp with each successful move', () => {
//       this.playerInfoCtrl.playerService.movePlayer('south');
//       this.playerInfoCtrl.playerService.movePlayer('east');
//       expect(this.playerInfoCtrl.playerService.player.hp).toEqual(7);
//     });
//
//     xit('should decrement the player hp with each unsuccessful move', () => {
//       this.playerInfoCtrl.playerService.movePlayer('south');
//       this.playerInfoCtrl.playerService.movePlayer('south');
//       expect(this.playerInfoCtrl.playerService.player.hp).toEqual(4);
//     });
//
//   });
// });

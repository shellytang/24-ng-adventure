// 'use strict';
//
// const angular = require('angular');
// require('angular-mocks');
//
// describe('testing the game-pad controller', function() {
//
//   beforeEach(() => {
//     angular.mock.module('ngAdventure');
//     angular.mock.inject(($rootScope, $componentController, playerService) => {
//       this.$rootScope = $rootScope;
//       this.gamepadCtrl = $componentController('gamePad', { $scope: this.$scope });
//       this.gamepadCtrl.playerService = playerService;
//       this.gamepadCtrl.$onInit();
//     });
//   });
//
//   afterEach(() => this.$rootScope.$apply());
//
//   describe('testing initial state', () => {
//     it('the default direction should be set to "north"', () => {
//       expect(this.gamepadCtrl.moveDirection).toBe('north');
//     });
//     it('the directions should be an array with values "north, south, east, west"', () => {
//       expect(this.gamepadCtrl.directions[0]).toBe('north');
//       expect(this.gamepadCtrl.directions[1]).toBe('south');
//       expect(this.gamepadCtrl.directions[2]).toBe('east');
//       expect(this.gamepadCtrl.directions[3]).toBe('west');
//       expect(this.gamepadCtrl.directions).toEqual(jasmine.any(Array));
//     });
//   });
//
//   describe('testing the movePlayer method', () => {
//
//     it('should log the location of player', () =>{
//       this.gamepadCtrl.playerService.movePlayer('south');
//       expect(this.gamepadCtrl.playerService.player.location).toEqual('park');
//     });
//
//     it('should increment the player hp with each successful move', () =>{
//       this.gamepadCtrl.playerService.movePlayer('south');
//       expect(this.gamepadCtrl.playerService.player.hp).toEqual(6);
//     });
//
//     it('should increment the player turn count with each move', () =>{
//       this.gamepadCtrl.playerService.movePlayer('south');
//       expect(this.gamepadCtrl.playerService.history[0].turn).toEqual(1);
//     });
//
//     xit('should return an error message with an unsuccessful move', () => {
//
//     });
//
//     xit('should decrement player hp with an unsuccessful move', () => {
//     });
//
//   });
// });

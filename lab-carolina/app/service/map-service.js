'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngadventure');

ngAdventure.factory('mapService', ['$log', mapService]);
function mapService($log){
  $log.debug('mapService');

  let service = {};

  service.mapData = {
    home: {
      desc: 'Oh my glob! You are going to be late to Princess Bubblegum\'s party!',
      north: 'path',
      south: 'trail',
      east: 'candyKingdom',
      west: 'lumpySpace',
    },
    iceMountains: {
      desc: 'You arrived just in time to keep Ice King from forcing a Princess to marry him! Choose a path before you are late to Princess Bubblegum\'s party',
      north: 'raggenbonKingdom',
      east: 'trail',
    },
    candyKingdom: {
      desc: 'You\'ve made it to Candy Kingdom! Party on!',
    },
    raggenbonKingdom: {
      desc: 'You\'ve landed in the Ooo junkyard... I mean Raggenbone Kingdom. Princess Raggedy offers to help you patch up your tears, then send you on your way',
      east: 'lumpySpace',
      south: 'trail',
      north: 'path',
    },
    lumpySpace: {
      desc: 'You have run into LSP yet again! Quick, choose a path before she tries to tag along',
      south: 'candyKingdom',
      west: 'path',
      east: 'iceMountains',
    },
    trail: {
      desc: 'Ah, a nice trail! Don\'t make a wrong turn...',
      north: 'iceMountains',
      south: 'lumpySpace',
      east: 'raggenbonKingdom',
      west: 'path',
    },
    path: {
      desc: 'Being an adventurer is awesome! Excitement could be at any turn',
      north: 'raggenbonKingdom',
      south: 'trail',
      west: 'candyKingdom',
    },
  };

  return service;
}

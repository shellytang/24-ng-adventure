'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('map service');

  let service = {};

  service.mapData = {
    bed: {
      desc: 'Time to wake up from your cat nap and find some food!',
      north: 'rug'
    },
    rug: {
      desc: 'Stretch, stretch, stretch!',
      east: 'kitchen'
    },
    kitchen: {
      desc: 'Gasp! The kitchen is too clean, you can\'t find any delicious leftovers! Where do you go next?',
      north: 'pantry',
      east: 'hallway',
      west: 'rug'
    },
    pantry: {
      desc: 'Bark! Bark! Oh, no, you\'ve stumbled upon the annoying dog. You lose 3 of your nine lives.',
      south: 'kitchen',
      east: 'corner'
    },
    corner: {
      desc: 'A ball of yarn! Yay, let\'s add some hp for happy times.',
      south: 'hallway',
      west: 'pantry'
    },
    hallway: {
      desc: 'Is there anything to eat in this house? What\'s that? There\'s something scurrying down the hallway!',
      north: 'corner',
      south: 'bedroom',
      west: 'kitchen'
    },
    bedroom: {
      desc: 'You hear noises coming from the closet and the bathroom. Where do you go?',
      north: 'hallway',
      south: 'closet',
      east: 'bathroom'
    },
    bathroom: {
      desc: 'Bark! Bark! Ugh, not again. You lose 3 of your nine lives.',
      west: 'bedroom'
    },
    closet: {
      desc: 'You win! You\'ve found a mouse. NOMNOMNOM! It\'s time for another cat nap, you productive animal.',
      north: 'bedroom'
    }
  };

  return service;
}

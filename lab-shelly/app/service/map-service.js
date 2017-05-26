'use strict';

require('angular')
.module('ngAdventure')
.factory('mapService', ['$log', function($log) {
  $log.debug('Map Service');

  let service = {};

  service.mapData = {
    school: {
      desc: 'You receive a Twitter nofication that zombies are on the loose nearby. Run home to your basement before the zombies get you!',
      south: 'park',
    },
    park: {
      desc: 'Good call, take a shortcut through the park.',
      north: 'school',
      east: 'bridge',
      south: 'ditch',
    },
    ditch: {
      desc: 'Whoops, you fell into a ditch.',
      north: 'park',
    },
    bridge: {
      desc: 'Cross the Fremont Bridge - you are almost home!',
      west: 'park',
      east: 'store',
    },
    store:  {
      desc: 'Great idea - grab some zombie apocalypse supplies from QFC.',
      west: 'bridge',
      south: 'restaurant',
    },
    restaurant: {
      desc: 'This running is making you hungry. Grab a burger and milkshake to-go.',
      north: 'store',
      east: 'basement',
    },
    basement: {
      desc: 'Congrats, you\'ve escaped the zombies and made it to your basement safely',
      west: 'restaurant',
    },
  };
  return service;
}]);

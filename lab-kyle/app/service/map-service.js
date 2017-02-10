'use strict'

const angular = require('angular')
const ngAdventure = angular.module('ngAdventure')

ngAdventure.factory('mapService', ['$log', mapService])

function mapService($log) {
  $log.debug('map service')

  let service = {}

  service.mapData = {
    home: {
      desc: 'you are at home',
      south: 'town'
    },
    town: {
      desc: 'you are in town',
      north: 'home',
      west: 'route1',
      south: 'center'
    },
    route1: {
      desc: 'you are in route1',
      east: 'town',
      west: 'trail'
    },
    center: {
      desc: 'you are at the pokemon center',
      north: 'town'
    },
    trail: {
      desc: 'you are on the trail',
      north: 'route2',
      south: 'arena'
    },
    arena: {
      desc: 'you arrived at the arena',
      north: 'trail'
    }
  }

  return service
}

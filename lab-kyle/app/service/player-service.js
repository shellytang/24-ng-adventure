'use strict'

const angular = require('angular')
const ngAdventure = angular.module('ngAdventure')

ngAdventure.factory('playerService', ['$q', '$log', 'mapService', playerService])

function playerService($q, $log, mapService) {
  $log.debug('player service')

  let service = {}

  let turn = 0

  let player = service.player = {
    name: 'Red',
    location: 'home',
    pokemon: ['Charmander', 'Squirtle']
  }

  let history = service.history = [
    {
      turn,
      desc: 'Welcome to your adventure! Good luck!',
      location: 'home'
    }
  ]

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn ++

      let current = player.location
      let newLocation = mapService.mapData[current][direction]

      if (!newLocation) {
        history.unshift({
          turn,
          desc: 'you ran into a hedge',
          location: player.location
        })
        return reject('you cannot go in that direction')
      }

      history.unshift({
        turn,
        location: player.location,
        desc: mapService.mapData[newLocation].desc
      })

      player.location = newLocation
      return resolve(player.location)
    })
  }

  return service;
}

'use strict'

const angular = require('angular')
const ngAdventure = angular.module('ngAdventure')

ngAdventure.factory('playerService', ['$q', '$log', '$http', 'mapService', playerService])

function playerService($q, $log, $http, mapService) {
  $log.debug('player service')

  let service = {}

  let turn = 0

  let player = service.player = {
    name: 'Red',
    location: 'home',
    pokeballs: 0,
    pokemon: []
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

      let charSprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
      let squirSprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
      let pikaSprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'

      if (!newLocation) {
        history.unshift({
          turn,
          desc: 'you ran into a hedge',
          location: player.location
        })
        return reject('you cannot go in that direction')
      }

      if (newLocation === 'center') player.pokeballs ++

      if (newLocation === 'route1' && player.pokeballs) {
        if (player.pokemon.indexOf(charSprite) === -1) {
          $http.get('http://pokeapi.co/api/v2/pokemon/charmander')
            .then(response => {
              player.pokemon.push(response.data.sprites.front_default)
              player.pokeballs --
            })
        }
        if (player.pokemon.length === 2 && player.pokeballs) {
          if (player.pokemon.indexOf(pikaSprite) === -1 ) {
            $http.get('http://pokeapi.co/api/v2/pokemon/pikachu')
              .then(response => {
                $log.log(response)
                player.pokemon.push(response.data.sprites.front_default)
                player.pokeballs --
              })
          }
        }
      }

      if (newLocation === 'route2' && player.pokeballs) {
        if (player.pokemon.indexOf(squirSprite) === -1) {
          $http.get('http://pokeapi.co/api/v2/pokemon/squirtle')
            .then(response => {
              $log.log(response.data.sprites.front_default)
              player.pokemon.push(response.data.sprites.front_default)
              player.pokeballs --
            })
        }
      }

      history.unshift({
        turn,
        location: newLocation,
        desc: mapService.mapData[newLocation].desc
      })

      player.location = newLocation
      return resolve(player.location)
    })
  }

  return service
}

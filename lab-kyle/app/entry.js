'use strict'

require('./scss/main.scss')

const angular = require('angular')

angular.module('ngAdventure', [])

require('./service/player-service')
require('./service/map-service')

require('./component/player-info/player-info')
require('./component/game-pad/game-pad')
require('./component/game-history/game-history')

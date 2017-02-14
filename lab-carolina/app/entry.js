'use strict';

require('./scss/main.scss');

const angular = require('angular');

angular.module('ngAdventure', []);

//services
require('./service/map-service.js');
require('./service/player-service.js');

//components
require('./component/game-pad/game-pad.js');
require('./component/game-history/game-history.js');

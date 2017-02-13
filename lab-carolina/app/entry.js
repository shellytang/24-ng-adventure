'use strict';

require('./scss/main.scss');

const angular = require('angular');

angular.module('ngAdventure', []);

//services
require('./service/map-services.js');
require('./service/player-service.js');

//components

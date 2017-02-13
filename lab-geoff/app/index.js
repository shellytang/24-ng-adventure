require ('./scss/main.scss');

let angular = require('angular');
angular.module('mazeApp', []);

//require services
require('./service/playerService.js');
require('./service/mapService.js');

//require components
require('./component/gamePad/gamePad.js');
require('./component/history/history.js');
require('./component/player/player.js');
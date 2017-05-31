'use strict';

require('./_history.scss');

require('angular')
.module('ngAdventure')
.component('history', {
  template: require('./history.html'),
  controllerAs: 'historyCtrl',
  controller: ['$log', 'playerService', function($log, playerService) {
    $log.debug('#history controller');

    this.$onInit = () => {
      this.history = playerService.history;
    };

  }],
});

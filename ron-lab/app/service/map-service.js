'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('map service');

  let service = {};

  service.mapData = {
    Washington: {
      desc: "You are in the Evergreen State, visit Seattle The Emerald City",
      east: "NorthernIdaho",
      south: "Oregon"
    },
    Oregon: {
      desc: "Welocome to the Beaver State, visit Portland The City of Roses.",
      north: "Washington",
      east: "Southern Idaho",
      south: "NorthernCalifornia"
    },
    NorthernIdaho: {
      desc: "You are in Northern Idaho, enjoy the Rockies.",
      east: "Montana",
      south: "SouthernIdaho",
      west: "Washington"
    },
    Montana: {
      desc: "Welcome to Montana, you are in Big Sky Country.",
      south: "Wyoming",
      west: "NorthernIdaho"
    },
    SouthernIdaho: {
      desc: "You are in Southern Idaho, visit the capital city of Boise.",
      east: "Wyoming",
      south: "Nevada",
      north: "SouthernIdaho"
    },
    Wyoming: {
      desc: "Welcome to Wyoming, see the Tetons.",
      south: "Colorado",
      north: "Montana",
      west: "SouthernIdaho"
    },
    NorthernCalifornia: {
      desc: "Welcome to the Sunshine State.",
      east: "Nevada",
      north: "Oregon",
      south: "SouthernCalifornia"
    },
    Nevada: {
      desc: "Welcome to Nevada, remember what happens in Vegas, stays in Vegas",
      west: "NorthernCalifornia",
      south: "SouthernCalifornia",
      east: "Utah",
      north: "Oregon"
    },
    SouthernCalifornia: {
      desc: "Welocome to Southern California, enjoy the beaches.",
      east: "Arizona",
      north: "NorthernCalifornia"
    },
    Arizona: {
      desc: "Welcome to Arizona, our Universities are okay.",
      east: "NewMexico",
      north: "Utah",
      west: "SouthernCalifornia"
    },
    Utah: {
      desc: "Welcome to Utah, the Beehive State.",
      south: "Arizona",
      north: "SouthernIdaho",
      west: "Nevada"
    },
    NewMexico: {
      desc: "Welcome to New Mexico the land of enchantment",
      north: "Colorado",
      west: "Arizona",
    },
    Colorado: {
      desc: "Welcome to Colorado, The Centennial State. You have reached the highest point in the Rockies, Congratulations! Mount Elbert is 14,440 feet tall, enjoy the view.",
      south: "NewMexico",
      north: "Wyoming",
      west: "Utah"
    }
  };

  return service;
};

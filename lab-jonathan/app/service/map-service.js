'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('map service');

  let service = {};

  service.mapData = {
    great_hall: { //cabin
      desc: "Welcome to the Great Hall!  Watch out for Nearly Headless Nick.",
      south: "hagrid's hut"
    },
    hagrids_hut: { //trail
      desc: "You're in Hagrid's hut.  Watch out for spiders or the blast ended skrewt.",
      north: "great hall",
      east: "potions classroom",
      south: "forbidden forest"
    },
    forbidden_forest: { //pit
      desc: "The forest is strickly forbidden to all students.  There are worse things than Centaurs here.",
      north: "hagrid's hut"
    },
    potions_classroom: { //gate
      desc: "You are in the Potions Classroom.  Professor Snape is not happy that you're so late.",
      west: "hagrid's hut",
      east: "charms classroom"
    },
    charms_classroom: { //castle
      desc: "Professor Flitwick welcomes you to Charms.  Remember: it's Wingardium LeviOsa, not LevioSA.",
      west: "potions classroom",
      south: "divination classroom"
    },
    divination_classroom: { //corridor
      desc: "You are in Divination.  Hope you don't see a Grim in your tea leaves.",
      north: "charms classroom",
      east: "room of requirement"
    },
    room_of_requirement: { //snackroom
      desc: "The Room of Requirement.  If you have to ask, you'll never know.  If you know, you need only ask.",
      west: "divination classroom"
    }
  };

  return service;
};

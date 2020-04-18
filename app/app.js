'use strict';

// Declare app level module which depends on views, and core components
angular.module('londonAcademyApp', [
  'ngRoute',
  'londonAcademyApp.view2',
  'londonAcademyApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/testDev'});
}]);

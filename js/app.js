'use strict';

/* App Module */
// var debug = function(m){};
var debug = function(m){console.log(m);};
var App = angular.module('App', [
  'ngRoute',
  'ngAnimate',
  'ui.bootstrap',
  'timer',
  'AppCtrl',
  'AppServices'
]);

App.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'layouts/home.html',
        controller: 'homeCtrl'
      }).
      when('/new/:name', {
        templateUrl: 'layouts/new.html',
        controller: 'newCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);

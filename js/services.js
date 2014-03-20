'use strict';

/* Services */

var AppServices = angular.module('AppServices', ['ngResource']);

AppServices.factory('Table', ['$resource',
  function($resource){
    return $resource('json/:name', {}, {
    });
}]);

AppServices.factory('User', ['$resource',
  function($resource){
    return $resource('user', {}, {
    	auth: { url: 'user/auth', method: 'POST' },
    	put: {method: 'PUT' },
    });
}]);

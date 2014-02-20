'use strict';

angular.module('twittlerApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'TwitCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

'use strict';

/**
 * @ngdoc overview
 * @name marriageSettingsApp
 * @description
 * # marriageSettingsApp
 *
 * Main module of the application.
 */
angular
  .module('marriageSettingsApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'smart-table',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

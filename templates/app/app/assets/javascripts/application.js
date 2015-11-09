'use strict';

require('../bower_components/angular/angular');
require('../bower_components/angular-resource/angular-resource');
require('../bower_components/angular-ui-router/release/angular-ui-router');

angular.module('app', [
  'ui.router',
  'ngResource',
  'app.controllers',
  'app.directives',
  'app.services'
]);

require('./controllers');
require('./directives');
require('./routes');
require('./services');

angular.module('app')
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
  }]).run(['$state', function($state) {
    $state.go('home');
  }]);

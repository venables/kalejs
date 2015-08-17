'use strict';

angular.module('app.services')
  .factory('SINGULAR_NAME_CAPITALIZED', ['$resource', function($resource) {
    return $resource('/api/v1/PLURAL_NAME_LOWERCASE_DASHED/:id', { id: '@id' }, {
      update: {
        method: 'PUT'
      }
    });
  }]);
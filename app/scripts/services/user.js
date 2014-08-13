// Generated by CoffeeScript 1.7.1
(function() {
  'use strict';
  angular.module('bracketsApp').factory('User', function($resource) {
    return $resource('/api/users/:id', {
      id: '@id'
    }, {
      update: {
        method: 'PUT',
        params: {}
      },
      get: {
        method: 'GET',
        params: {
          id: 'me'
        }
      }
    });
  });

}).call(this);

//# sourceMappingURL=user.map

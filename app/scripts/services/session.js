'use strict';

angular.module('bracketsApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });

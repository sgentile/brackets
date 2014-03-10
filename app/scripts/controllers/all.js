'use strict';

angular.module('bracketsApp')
  .controller('AllCtrl', function ($scope, $http) {
    $http.get('/api/getAllBrackets').success(function(brackets) {
      $scope.brackets = brackets;
    });
  });

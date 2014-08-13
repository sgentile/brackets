'use strict'

angular.module('bracketsApp').controller 'AllCtrl', ($scope, $http) ->
  $http.get('/api/getAllBrackets').success (brackets) ->
    $scope.brackets = brackets
    return
  return
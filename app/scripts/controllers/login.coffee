'use strict'

angular.module('bracketsApp').controller 'LoginCtrl', ($scope, Auth, $location) ->
  $scope.user = {}
  $scope.errors = {}

  $scope.login = (form) ->
    $scope.submitted = true

    if form.$valid
      Auth.login(
        email: $scope.user.email
        password: $scope.user.password
      ).then () ->
        $location.path('/')
      .catch (err) ->
        err = err.data
        $scope.errors.other = err.message
        return
      return
    return
  return

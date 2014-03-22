"use strict"
angular.module("bracketsApp").controller "SettingsCtrl", ($scope, User, Auth) ->
  $scope.errors = {}
  $scope.changePassword = (form) ->
    $scope.submitted = true
    if form.$valid
      Auth.changePassword($scope.user.oldPassword, $scope.user.newPassword).then(->
        $scope.message = "Password successfully changed."
        return
      ).fail ->
        form.password.$setValidity "mongoose", false
        $scope.errors.other = "Incorrect password"
        return

    return

  return

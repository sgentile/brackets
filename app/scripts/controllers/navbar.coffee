"use strict"

angular.module('bracketsApp').controller 'NavbarCtrl', ($scope, $location, Auth) ->
  $scope.menu = [
    {
      title: 'Home',
      link: '/'
    }
    {
      title: 'Settings',
      link: '/settings'
    }
  ]

  $scope.logout = () ->
    Auth.logout().then () ->
      $location.path '/login'
      return
    return

  $scope.isActive = (route) ->
    route is $location.path()

  return


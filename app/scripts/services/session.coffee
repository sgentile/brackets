"use strict"

angular.module('bracketsApp').factory "Session", ($resource) ->
  $resource('/api/session/')


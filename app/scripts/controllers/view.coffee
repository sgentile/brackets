"use strict"
angular.module('bracketsApp').controller "ViewCtrl", ($scope, $http, $routeParams) ->
  $http.get("api/getBracketById/" + $routeParams.id).success (bracket) ->
    bracket.currentUser = $scope.currentUser
    $scope.bracket = bracket
    return

  $scope.$on "notification", () ->
    $scope.$apply ->
      $scope.bracket.bracket = JSON.stringify($scope.bracket)
      $http.post("/api/updateBracket", JSON.stringify($scope.bracket)).success (result) ->
        toastr.success "Successfully Saved!"
        return
      return
    return
  return
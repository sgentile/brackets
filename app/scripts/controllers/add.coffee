'use strict'

angular.module('bracketsApp').controller 'AddCtrl', ($scope, $http, $location) ->
  $scope.submit = (form) ->
    $scope.submitted = true
    if form.$invalid
      toastr.error 'Errors', 'Failed'
      return

    toastr.info 'Processing request...', 'Working...'

    $http.post('/api/addBracket', JSON.stringify(
      name: $scope.name
      user: $scope.currentUser
    )).success (result) ->
      toastr.success 'Successfully Added!', 'Success'
      $location.path '/view/' + result._id
      return
    return
  return
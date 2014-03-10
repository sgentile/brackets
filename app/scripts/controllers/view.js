'use strict';

angular.module('bracketsApp')
  .controller('ViewCtrl', function ($scope, $http, $routeParams) {

    $http.get('/api/getBracketById/' + $routeParams.id).success(function(bracket) {
      $scope.bracket = bracket;
    });

    $scope.$on('notification', function (evt, value) {
        $scope.$apply(function () {
            $scope.bracket.bracket = JSON.stringify(value);
            $http.post('/api/updateBracket', JSON.stringify($scope.bracket)).success(function(result){
                //$scope.messages = "Saved!";
                toastr.success("Successfully Saved!");
                //put toastr here
            });
        });
    });

//    $scope.saveChanges = function(){
//        $http.post('/api/updateBracket', JSON.stringify($scope.bracket)).success(function(result){
//            //$scope.messages = "Saved!";
//            toastr.success("Successfully Saved!");
//            //put toastr here
//        });
//    }
  });

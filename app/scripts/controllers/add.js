'use strict';

angular.module('bracketsApp')
  .controller('AddCtrl', function ($scope, $http, $location) {
    $scope.submit = function(form){
        //Trigger validation flag
        $scope.submitted = true;

        $scope.errormessages = "";
        $scope.messages = "";

        if(form.$invalid){
            $scope.errormessages = 'Your form is invalid!';
            return;
        }


        $scope.messages = 'Processing...';
        console.log($.param({name:$scope.name}));
        $http.post('/api/addBracket', JSON.stringify({name:$scope.name})).success(function(result){
            $location.path('/view/' + result._id);
        });
    }
  });

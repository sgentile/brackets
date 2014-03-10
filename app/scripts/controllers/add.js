'use strict';

angular.module('bracketsApp')
  .controller('AddCtrl', function ($scope, $http, $location) {
    $scope.submit = function(form){
        //Trigger validation flag
        $scope.submitted = true;

        if(form.$invalid){
            toastr.error('Errors, check validation errors', 'Failed');
            return;
        }


        toastr.info("Processing request...", "Working...");
        console.log($.param({name:$scope.name}));
        $http.post('/api/addBracket', JSON.stringify({name:$scope.name})).success(function(result){
            toastr.success("Successfully Add!", "Success");
            $location.path('/view/' + result._id);
        });
    }
  });

// Generated by CoffeeScript 1.7.1
(function() {
  'use strict';
  angular.module('bracketsApp').controller('ViewCtrl', function($scope, $http, $routeParams) {
    $http.get('api/getBracketById/' + $routeParams.id).success(function(bracket) {
      bracket.currentUser = $scope.currentUser;
      $scope.bracket = bracket;
    });
    $scope.$on('notification', function() {
      $scope.$apply(function() {
        $scope.bracket.bracket = JSON.stringify($scope.bracket);
        $http.post('/api/updateBracket', JSON.stringify($scope.bracket)).success(function() {
          toastr.success('Successfully Saved!');
        });
      });
    });
  });

}).call(this);

//# sourceMappingURL=view.map

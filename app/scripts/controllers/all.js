// Generated by CoffeeScript 1.7.1
(function() {
  'use strict';
  angular.module('bracketsApp').controller('AllCtrl', function($scope, $http) {
    $http.get('/api/getAllBrackets').success(function(brackets) {
      $scope.brackets = brackets;
    });
  });

}).call(this);

//# sourceMappingURL=all.map

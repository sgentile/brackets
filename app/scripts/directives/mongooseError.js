// Generated by CoffeeScript 1.7.1
(function() {
  'use strict';

  /*
  Removes server error when user updates input
   */
  angular.module('bracketsApp').directive('mongooseError', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {
        element.on('keydown', function() {
          return ngModel.$setValidity('mongoose', true);
        });
      }
    };
  });

}).call(this);

//# sourceMappingURL=mongooseError.map

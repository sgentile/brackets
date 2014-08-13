// Generated by CoffeeScript 1.7.1
(function() {
  'use strict';
  angular.module('bracketsApp').directive('bracketDir', function() {
    var postLink;
    return {
      template: '<div></div>',
      restrict: 'E',
      scope: {
        data: '='
      },
      link: postLink = function(scope, element) {
        scope.$watch('data', (function(newValue) {
          var brackets, saveFn;
          if (newValue) {
            brackets = JSON.parse(newValue.bracket);
            if (newValue.currentUser && (newValue.createdBy === newValue.currentUser.email)) {
              element.bracket({
                init: brackets,
                save: saveFn = function(updatedData) {
                  scope.$emit('notification', updatedData);
                }
              });
            } else {
              element.bracket({
                init: brackets
              });
            }
          }
        }), true);
      }
    };
  });

}).call(this);

//# sourceMappingURL=bracketdir.map

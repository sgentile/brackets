//'use strict';
//
//angular.module('bracketsApp')
//  .directive('bracketDir', function () {
//    return {
//      template: '<div></div>',
//      restrict: 'E',
//      scope: { data: "=" },
//      link: function postLink(scope, element, attrs) {
//        //element.text('this is the bracketDir directive');
//          scope.$watch('data', function(newValue, oldValue) {
//              if (newValue){
//                  console.log("I see a data change!", newValue.bracket);
//                  var brackets = JSON.parse(newValue.bracket);
//
//                  element.bracket({
//                      init: brackets //minimalData
//                  });
//              }
//          }, true);
//      }
//    };
//  });
'use strict';

angular.module('bracketsApp')
    .directive('bracketDir', function () {
        return {
            template: '<div></div>',
            restrict: 'E',
            scope: { data: "=" },
            link: function postLink(scope, element, attrs) {
                //element.text('this is the bracketDir directive');
                scope.$watch('data', function(newValue, oldValue) {
                    if (newValue){
                        var brackets = JSON.parse(newValue.bracket);

                        element.bracket({
                            init: brackets,
                            save: function saveFn(updatedData) {
                                scope.$emit('notification', updatedData);
                                //need to store data for saving
                            }
                        });
                    }
                }, true);
            }
        };
    });





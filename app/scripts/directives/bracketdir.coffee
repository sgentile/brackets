"use strict"
angular.module("bracketsApp").directive "bracketDir", ->
  template: "<div></div>"
  restrict: "E"
  scope:
    data: "="

  link: postLink = (scope, element) ->

    #element.text('this is the bracketDir directive');
    scope.$watch "data", ((newValue) ->
      if newValue
        brackets = JSON.parse(newValue.bracket)
        if newValue.currentUser and (newValue.createdBy is newValue.currentUser.email)
          element.bracket
            init: brackets
            save: saveFn = (updatedData) ->
              scope.$emit "notification", updatedData
              return
        else
          element.bracket init: brackets
      return
    ), true
    return

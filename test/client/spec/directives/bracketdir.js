'use strict';

describe('Directive: bracketDir', function () {

  // load the directive's module
  beforeEach(module('bracketsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bracket-dir></bracket-dir>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the bracketDir directive');
  }));
});

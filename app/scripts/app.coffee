"use strict"

angular.module('bracketsApp', [
  "ngCookies"
  "ngResource"
  "ngSanitize"
  "ngRoute"
]).config(($routeProvider, $locationProvider, $httpProvider) ->
  $routeProvider.when('/',
    templateUrl: 'partials/main'
    controller: 'MainCtrl'
  ).when('/login',
    templateUrl: 'partials/login'
    controller: 'LoginCtrl'
  ).when('/signup',
    templateUrl: 'partials/signup'
    controller: 'SignupCtrl'
  ).when('/settings',
    templateUrl: 'partials/settings'
    controller: 'SettingsCtrl',
    authenticate: true
  ).when('/all',
    templateUrl: 'partials/all'
    controller: 'AllCtrl'
  ).when('/view/:id',
    templateUrl: 'partials/view'
    controller: 'ViewCtrl'
    authenticate: true
  ).when('/add',
    templateUrl: 'partials/add'
    authenticate: true
  ).otherwise redirectTo: '/'

  $locationProvider.html5Mode true
  #intercept 401s and redirect to login
  $httpProvider.interceptors.push [
    "$q"
    "$location"
    ($q, $location) ->
      return responseError: (response) ->
        if response.status is 401
          $location.path '/login'
          $q.reject response
        else
          $q.reject response
  ]
  return
).run ($rootScope, $location, Auth) ->
  $rootScope.$on '$routeChangeStart', (event, next) ->
    $location.path "/login" if next.authenticate and not Auth.isLoggedIn()
    return
  return

#$locationProvider.html5Mode(true);
#
#// Intercept 401s and redirect you to login
#$httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
#return {
#'responseError': function(response) {
#  if(response.status === 401) {
#  $location.path('/login');
#    return $q.reject(response);
#}
#else {
#return $q.reject(response);
#}
#}
#};
#}]);
#})
#.run(function ($rootScope, $location, Auth) {
#
#// Redirect to login if route requires auth and you're not logged in
#  $rootScope.$on('$routeChangeStart', function (event, next) {
#
#    if (next.authenticate && !Auth.isLoggedIn()) {
#    $location.path('/login');
#}
#});
#});
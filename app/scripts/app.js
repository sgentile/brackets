// Generated by CoffeeScript 1.7.1
(function() {
  "use strict";
  angular.module('bracketsApp', ["ngCookies", "ngResource", "ngSanitize", "ngRoute"]).config(function($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/main',
      controller: 'MainCtrl'
    }).when('/login', {
      templateUrl: 'partials/login',
      controller: 'LoginCtrl'
    }).when('/signup', {
      templateUrl: 'partials/signup',
      controller: 'SignupCtrl'
    }).when('/settings', {
      templateUrl: 'partials/settings',
      controller: 'SettingsCtrl',
      authenticate: true
    }).when('/all', {
      templateUrl: 'partials/all',
      controller: 'AllCtrl'
    }).when('/view/:id', {
      templateUrl: 'partials/view',
      controller: 'ViewCtrl',
      authenticate: true
    }).when('/add', {
      templateUrl: 'partials/add',
      authenticate: true
    }).otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push([
      "$q", "$location", function($q, $location) {
        return {
          responseError: function(response) {
            if (response.status === 401) {
              $location.path('/login');
              return $q.reject(response);
            } else {
              return $q.reject(response);
            }
          }
        };
      }
    ]);
  }).run(function($rootScope, $location, Auth) {
    $rootScope.$on('$routeChangeStart', function(event, next) {
      if (next.authenticate && !Auth.isLoggedIn()) {
        $location.path("/login");
      }
    });
  });

}).call(this);

//# sourceMappingURL=app.map

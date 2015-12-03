'use strict';

var app = angular.module('entry_leveled', ['ui.router', 'ui.materialize']);

app.config(["$stateProvider", "$locationProvider", "$urlRouterProvider", function ($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');

  $stateProvider.state('home', { url: '/', templateUrl: '/public/html/home.html', controller: 'homeCtrl' }).state('users', { abstract: true, templateUrl: 'public/html/users/users.html' }).state('users.profile', { url: '/profile', templateUrl: '/public/html/users/profile.html', controller: 'profileCtrl' });

  $urlRouterProvider.otherwise('/');
}]);
"use strict";

app.controller("homeCtrl", ["$scope", "$rootScope", function ($scope, $rootScope) {
    $scope.collapsibleElements = [{
        icon: 'mdi-image-filter-drama',
        title: 'First',
        content: 'Lorem ipsum dolor sit amet.'
    }, {
        icon: 'mdi-maps-place',
        title: 'Second',
        content: 'Lorem ipsum dolor sit amet.'
    }, {
        icon: 'mdi-social-whatshot',
        title: 'Third',
        content: 'Lorem ipsum dolor sit amet.'
    }];
}]);
"use strict";

app.controller("navCtrl", ["$scope", "$rootScope", "$log", function ($scope, $rootScope, $log) {
  $scope.loggedIn = false;

  $scope.logout = function () {
    $log.info("logout");
  };
}]);
"use strict";

app.controller("profileCtrl", ["$scope", "$rootScope", function ($scope, $rootScope) {}]);
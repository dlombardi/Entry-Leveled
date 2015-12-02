var app = angular.module('entry_leveled', ['ui.router', 'ui.materialize']);


app.config(["$stateProvider", "$locationProvider", "$urlRouterProvider", ($stateProvider, $locationProvider, $urlRouterProvider) => {
  $locationProvider.html5Mode(true).hashPrefix('!');

  $stateProvider
    .state('home', { url: '/', templateUrl: '/public/html/home.html', controller: 'homeCtrl' })

    .state('users', { abstract: true, templateUrl: 'public/html/users/users.html'})
    .state('users.profile', { url: '/profile', templateUrl: '/public/html/users/profile.html', controller: 'profileCtrl' })

  $urlRouterProvider.otherwise('/');
}]);

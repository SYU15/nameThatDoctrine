var app = angular.module('app', ['ui.router', 'homeCtrl', 'player1Ctrl', 'timer']);

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('/', {
    url: '/',
    templateUrl: 'app/views/home.html',
  }).
  state('player1', {
      url: '/player1',
      templateUrl: 'app/views/player1.html',
  });
});

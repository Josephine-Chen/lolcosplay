angular.module('mvp', [
  'mvp.services',
  'mvp.champions',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
  .when('/champions', {
    templateUrl: 'app/champions/champions.html',
    controller: 'ChampionsController'
  });

})

angular.module('mvp', [
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

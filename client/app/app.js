angular.module('mvp', [
  'mvp.services',
  'mvp.champions',
  'mvp.champion',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
  .when('/champions', {
    templateUrl: 'app/champions/champions.html',
    controller: 'ChampionsController'
  })
  .when('/champions/:key', {
    //templateUrl: function(champ) { return 'app/champion/champion/' + champ.key; },
    templateUrl: 'app/champion/champion.html',
    controller: 'ChampionController'
  })
  .otherwise('/champions');

})

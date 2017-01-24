angular.module('mvp', [
  'mvp.services',
  'mvp.champions',
  'mvp.champion',
  'mvp.navigation',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
  .when('/champions', {
    templateUrl: 'app/champions/champions.html',
    controller: 'ChampionsController'
  })
  .when('/champions/:key', {
    templateUrl: 'app/champion/champion.html',
    controller: 'ChampionController'
  })
  .when('/faq', {
    templateUrl: 'app/faq.html'
  })
  .when('/themes', {
    templateUrl: 'app/themes.html'
  })
  .when('/gallery', {
    templateUrl: 'app/gallery/gallery.html'
  })
  .otherwise({redirectTo: '/champions'});

})
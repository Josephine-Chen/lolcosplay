angular.module('mvp.champions', [])
//.controller('ChampionsController', function($scope, $http, Champions) {
.controller('ChampionsController', function($scope, $http, Champions) {
  $scope.data = {};
  $scope.getAllChampions = function(){
    Champions.getAllChampions().then(function(champions) {
      $scope.data.champions = champions;
    }).catch(function(err) {
      console.log('error getting scope data champions', err);
    });
    }();

  $scope.addChampion = function(){

  }
  // $scope.addChampion = function(){
  //   for(var champ in $scope.data.champions) {
  //     $http.post('/api/champs', $scope.data.champions[champ]).success(function(data, status) {
  //       console.log('data posted successfully');
  //     });
  //   };
  // }
});
angular.module('mvp.champion', [])

.controller('ChampionController', function($scope, $http, $location, Champions) {
  console.log($location.$$path);
  var champ = $location.$$path.split('/')[2];
  // $scope.getChampion = function(champ){
  //   Champions.getChampion(champ).then(function(data) {
  //     console.log('champ data', data);
  //     $scope.data=data;
  //   }).catch(function(err) {
  //     console.log('error getting champion data', err);
  //   });
  // }();


  //Hardcoded
  $scope.data = {};
  $scope.getAllChampions = function(){
    Champions.getAllChampions().then(function(champions) {
      $scope.data = champions.data[0].data[champ];
      console.log(champions.data[0].data[champ]);
    }).catch(function(err) {
      console.log('error getting scope data champions', err);
    });
    }();
});
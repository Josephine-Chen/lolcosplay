angular.module('mvp.services', [])

.factory('Champions', function ($http) {
  // return function(){
  //   $.getJSON('../../_champions.json', function(data) {
  //     return data.data;
  //   });
  var getAllChampions = function() {
    return $http.get(__dirname + '/../server/_champions.js');
    // return $http({
    //   method: 'GET',
    //   url: 'https://na.api.pvp.net/api/lol/static-data/NA/v1.2/champion?champData=lore,skins,tags,image&api_key=process.env.LOL_API_TOKEN',
    // });
  };

  return {
    getAllChampions: getAllChampions
  }
})
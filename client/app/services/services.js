angular.module('mvp.services', [])

.factory('Champions', function ($http) {
  var getAllChampions = function() {
    return $http.get('/api/champions');
  };

  var getChampion = function(champion) {
    console.log('getting', champion);
    return $http({
      url: '/api/champion',
      method: 'GET',
      params: champion
      });
  }
  return {
    getAllChampions: getAllChampions,
    getChampion: getChampion
  }
})
//angular.module('mvp.champions', [])
var app = angular.module('mvp.champions', []);
app.controller('ChampionsController', function($scope, $http, $filter, Champions) {
  $scope.init = function (){
    $scope.data = {};
    $scope.getAllChampions = function(){
      Champions.getAllChampions().then(function(champions) {
        $scope.data.champions = champions.data[0].data;
      }).catch(function(err) {
        console.log('error getting scope data champions', err);
      });
    }();
    $scope.classFilter = '';
  }();
});

app.filter('tagFilter', function() {
  return function (items, classFilter) {
    if (!items) {
      return;
    }
    var filtered = [];
    for (var i = 0; i<Object.keys(items).length; i++) {
      var champ = items[Object.keys(items)[i]];
      if(champ.tags.indexOf(classFilter) !== -1 || classFilter === '') {
        filtered.push(champ);
      }
    }
    return filtered;
  };
});




// .filter('inTags', function($filter) {
//   return function(list, arrayFilter, element) {
//     if(arrayFilter) {
//       return $filter('filter')(list, function(listItem) {
//         return arrayFilter.indexOf(listItem[element]) != -1;
//       });
//     }
//   };
//});
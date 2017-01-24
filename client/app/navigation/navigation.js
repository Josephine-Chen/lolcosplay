angular.module('mvp.navigation', [])

.controller('NavigationController', function ($scope, $location) {
  $scope.navTo = function (location) {
    console.log('new location', location);
    $location.path("/champions/"+location);
  }
});

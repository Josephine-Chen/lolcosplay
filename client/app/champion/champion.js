var app = angular.module('mvp.champion', [])

app.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show:'='
    },
    replace:true,
    transclude:true,
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width) {
        scope.dialogStyle.width = attr.width;
      } else if (attrs.height) {
        scope.dialogStyle.height = attrs.height;
      }
      console.log('scope is', scope);
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
  };
});

app.controller('ChampionController', function($scope, $http, $location, Champions) {
  var champ = $location.$$path.split('/')[2];

  //Hardcoded
  $scope.data = {};
  $scope.getAllChampions = function(){
    Champions.getAllChampions().then(function(champions) {
      $scope.data = champions.data[0].data[champ];
      $scope.data.skins[0].name="Classic";
    }).catch(function(err) {
      console.log('error getting scope data champions', err);
    });
    }();

    $scope.modalShown = false;
    $scope.toggleModal = function(skin) {
      $scope.skin = skin;
      $scope.modalShown = !$scope.modalShown;
    };
});
angular.module('starter.controllers', [])
/**AppCtrl is the controller*/

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('DishesCtrl', function($scope, $stateParams) {
  $scope.dishesId = $stateParams.dishesId; 
});


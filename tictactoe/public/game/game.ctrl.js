(function() {
  'use strict';
  angular.module('app')
  .controller('GameCtrl', GameCtrl)

function GameCtrl (game, $scope, $timeout) {
  var model = this;
  $scope.showAlert = game.showAlert;
  $scope.alert = game.alert;
  $scope.matrix = game.matrix;
  $scope.movePlayer = game.movePlayer.bind(game);
  $scope.announceResult = game.announceResult;
}
})();
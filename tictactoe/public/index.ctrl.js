(function() {
  'use strict';
  angular.module('app')
  .controller('IndexCtrl', IndexCtrl)

function IndexCtrl ($scope, $rootScope) {
  $scope.rows = 3;
  $scope.columns = 3;
  $scope.matrix = _.range(3).map(function(val, idx, arr) {
    return _.range(3);
  });

  $scope.createArray = function (num) {
    return new Array(num);
  }

  $scope.playPlayer = function (row, column) {
    if ($scope.matrix[row][column] != 'X') {
      $scope.matrix[row][column] = 'X';
      $scope.playComputer(row, column);
    } else {
      console.log('already played this square');
    }

  $scope.playComputer = function (row, column) {
  }
}

})();
(function() {
  'use strict';
  angular.module('app')
  .controller('IndexCtrl', IndexCtrl)

function IndexCtrl ($scope, $rootScope) {
  var size = 3;
  $scope.matrix = _.range(size).map(function(val, idx, arr) {
    return _.range(size);
  });
  var turns = 0;

  $scope.createArray = function (num) {
    return new Array(num);
  }

  $scope.movePlayer = function (row, column) {
    var winner;
    if (($scope.matrix[row][column] != 'X') && ($scope.matrix[row][column] != 'O')) {
      $scope.matrix[row][column] = 'X';
      turns++;
      if (turns >= 3) {
        winner = checkWinner(row, column)
      }

      if (!winner) {
        moveComputer(row, column);
      }

    } else {
      console.log('square has already been played');
    }
  }

  function moveComputer (row, column) { 
    console.log('computer is playing');
    var randomRow = getRandomNumber(), randomColumn = getRandomNumber();
    while ( turns < 8 
            && (($scope.matrix[randomRow][randomColumn] === 'X') 
                || ($scope.matrix[randomRow][randomColumn] === 'O'))) {
      randomRow = getRandomNumber(), randomColumn = getRandomNumber();
    }
      $scope.matrix[randomRow][randomColumn] = 'O';
      turns++;
      console.log('turns is', turns);
      if (turns >= size) {
        checkWinner(randomRow, randomColumn);
      }
  }

  function getRandomNumber () {
    return Math.floor(Math.random() * 3);
  }

  function checkWinner (row, column) {
    console.log('checking winner for row:', row, 'with column:', column);
    var stack = [];
    // var result;

    // function checkStack (stack, i) {
    //   if (typeof stack[i-1] != 'undefined' && (stack[i-1] != stack[i])) {
    //     console.log('breaking out of row')
    //     stack.length = 0;
    //     return result = false;
    //   } else if (stack.length === size) {
    //     console.log('congratz you win in checkStack');
    //     return result = true;
    //   }
    // }

    for (let i = 0; i < $scope.matrix.length; i++) {
      console.log('stack at row is', stack);
      if (typeof stack[i-1] != 'undefined' && (stack[i-1] != stack[i])) {
        console.log('breaking out of row')
        stack.length = 0;
        break;
      } else if (stack.length === size) {
        console.log('congratz you win by row');
        return true;
      }
    }

    // check column
    for (let i = 0; i < $scope.matrix.length; i++) {
      stack.push($scope.matrix[i][column]);
      console.log('stack at column is', stack);
      if (typeof stack[i-1] != 'undefined' && (stack[i-1] != stack[i])) {
        console.log('breaking out of column');
        stack.length = 0;
        break;
      } else if (stack.length === size) {
        console.log(stack, 'congratz you win by column');
        return true;
      }
    }

    // check diagonal
    (function() {
      function checkDiagonal (start) {

      }
    })()
    for (let i = 0; i < $scope.matrix.length; i++) {
      stack.push($scope.matrix[i][i]);
      console.log('stack at diagonal is', stack);
      if (typeof stack[i-1] != 'undefined' && (stack[i-1] != stack[i])) {
        console.log('breaking out of diagonal');
        stack.length = 0;
        break;
      } else if (stack.length == size) {
        console.log('congratz you win diagonally');
        return true;
      }
    }


  }
}

})();
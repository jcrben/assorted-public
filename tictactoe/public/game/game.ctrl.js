(function() {
  'use strict';
  angular.module('app')
  .controller('GameCtrl', GameCtrl)

function GameCtrl ($scope, $timeout) {
  var size = 3;
  $scope.showAlert = false;
  $scope.matrix = _.range(size).map(function(val, idx, arr) {
    return _.range(size);
  });
  var turns = 0;

  $scope.createArray = function (num) {
    return new Array(num);
  }

  function announceResult (result) {
    console.log('annoucing result');
    var resultMapping = {
      'lost': 'danger',
      'draw': 'info',
      'win' : 'success'
    }

    var msgMapping = {
      'danger' : 'You lost! Pick yourself up and try it again.',
      'info'   : 'It was a draw. Better luck next time.',
      'success': 'Congratulations, you won!'
    }

    var type = resultMapping[result];
    var msg = msgMapping[type];
    $scope.showAlert = true;
    $scope.alert = {
      type: type,
      msg: msg
    }

    $timeout(function() {
      $scope.showAlert = false;
      $scope.alert = {};
      $scope.matrix = _.range(size).map(function(val, idx, arr) {
        return _.range(size);
      turns = 0;
      });
    }, 2500)
  }

  $scope.movePlayer = function (row, column) {
    var winner;
    if (($scope.matrix[row][column] != 'X') && ($scope.matrix[row][column] != 'O')) {
      $scope.matrix[row][column] = 'X';
      turns++;
      if (turns >= 3) {
        winner = checkWinner(row, column);
        console.log('winner is', winner);
      }

      if (winner) {
        var result = 'win';
        announceResult(result);
      } else if (turns === 9) {
        var result = 'draw';
        announceResult(result);
      }
      if (!winner) {
        moveComputer(row, column);
      }

    } else {
      console.log('square has already been played');
    }
  }

  function moveComputer (row, column) { 
    var winner = null;
    console.log('computer is playing');
    var randomRow = getRandomNumber(), randomColumn = getRandomNumber();
    while ( turns < 9 
            && (($scope.matrix[randomRow][randomColumn] === 'X') 
                || ($scope.matrix[randomRow][randomColumn] === 'O'))) {
      randomRow = getRandomNumber(), randomColumn = getRandomNumber();
    }
      $scope.matrix[randomRow][randomColumn] = 'O';
      turns++;
      winner = checkWinner(randomRow, randomColumn);

      if (winner) {
        var result = 'lost'
        announceResult(result);
      }
  }

  function getRandomNumber () {
    return Math.floor(Math.random() * 3);
  }

  function checkWinner (row, column) {
    console.log('checking winner for row:', row, 'with column:', column);
    var stack = [];
    var result;

    function checkStack (i) {
      console.log('stack in checkStack:', stack);
      console.log('i is:', i);
      console.log('stack boolean before check is:', stack[i-1] != stack[i]);
      if (typeof stack[i-1] != 'undefined' && (stack[i-1] != stack[i])) {
        stack.length = 0; // clear stack in closure scope
        return result = false;
      } else if (stack.length === size) {

        return result = true;
      }
    }

    // check row
    for (let i = 0; i < size; i++) {
      stack.push($scope.matrix[row][i]);
      result = checkStack(i);
      if (result === true) {
        return result;
      } else if (result === false) {
        break;
      }
    }

    // check column
    for (let i = 0; i < size; i++) {
      stack.push($scope.matrix[i][column]);
      console.log('stack at column is', stack);
      result = checkStack(i);
      if (result === true) {
        return result;
      } else if (result === false) {
        break;
      }
    }

    // check diagonal from left
    for (let i = 0; i < size; i++) {
      stack.push($scope.matrix[i][i]);
      console.log('stack at left diagonal is', stack);
      result = checkStack(i);
      if (result === true) {
        return result;
      } else if (result === false) {
        break;
      }
    }

    // check diagonal from right
    for (let i = size-1; i >= 0; i--) {
      stack.push($scope.matrix[2-i][i]);
      console.log('stack at right diagonal is', stack);
      result = checkStack(2-i);
      if (result === true) {
        console.log('winning from right diagonal');
        return result;
      } else if (result === false) {
        break;
      }
    }
  }
}

})();
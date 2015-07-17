/*
TODO: refactor into object-oriented event-driven architecture
Each square and each solution should be an object. Upon click,
squares will notify their potential solutions, which will record
that click and check if there's been a win, in which case the 
solution triggers a win.
*/

(function() {
  'use strict';
  angular.module('app')
         .value('size', 3)
         .service('game', game);

  function game (size, $timeout) {
    this.size = size || 3;
    this.showAlert = [false];
    this.alert = {};
    this.timeout = $timeout;
    this.matrix = _.range(size).map(function(val, idx, arr) {
      return _.range(size);
    });
    this.turns = 0;

    }

    game.prototype = {
      announceResult: function (result) {
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
        this.showAlert[0] = true;
        this.alert.type = type;
        this.alert.msg = msg;

        this.timeout(function() {
          this.showAlert[0] = false;
          this.alert = {};
          this.turns = 0;
          console.log(this.matrix);
          for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
              this.matrix[j][i] = 0;
            }
          }
        }.bind(this), 2500)
      },
      movePlayer: function (row, column) {
        var winner;
        if ((this.matrix[row][column] != 'X') && (this.matrix[row][column] != 'O')) {
          this.matrix[row][column] = 'X';
          this.turns++;
          var boundAnnounceResult = this.announceResult.bind(this);
          if (this.turns >= 3) {
            winner = this.checkWinner(row, column);
            console.log('winner is', winner);
          }

          if (winner) {
            var result = 'win';
            boundAnnounceResult(result);
          } else if (this.turns === 9) {
            var result = 'draw';
            boundAnnounceResult(result);
          }
          if (!winner) {
            this.moveComputer(row, column);
          }

        } else {
          console.log('square has already been played');
        }

      },
      moveComputer: function (row, column) { 
        var winner = null;
        console.log('computer is playing');
        var randomRow = this.getRandomNumber(), randomColumn = this.getRandomNumber();
        while ( this.turns < 9 
                && ((this.matrix[randomRow][randomColumn] === 'X') 
                    || (this.matrix[randomRow][randomColumn] === 'O'))) {
          randomRow = this.getRandomNumber(), randomColumn = this.getRandomNumber();
        }
          this.matrix[randomRow][randomColumn] = 'O';
          this.turns++;
          winner = this.checkWinner(randomRow, randomColumn);

          if (winner) {
            var result = 'lost'
            this.announceResult(result);
          }
      },
      getRandomNumber: function () {
        return Math.floor(Math.random() * 3);
      },
      checkWinner: function (row, column) {
        console.log('checking winner for row:', row, 'with column:', column);
        var stack = [];
        var result;
        var boundCheckStack;

        function checkStack (i) {
          console.log('stack in checkStack:', stack);
          console.log('i is:', i);
          console.log('stack boolean before check is:', stack[i-1] != stack[i]);
          if (typeof stack[i-1] != 'undefined' && (stack[i-1] != stack[i])) {
            stack.length = 0; // clear stack in closure scope
            return result = false;
          } else if (stack.length === this.size) {

            return result = true;
          }
        }

        boundCheckStack = checkStack.bind(this);

        // check row
        for (let i = 0; i < this.size; i++) {
          stack.push(this.matrix[row][i]);
          result = boundCheckStack(i);
          if (result === true) {
            return result;
          } else if (result === false) {
            break;
          }
        }

        // check column
        for (let i = 0; i < this.size; i++) {
          stack.push(this.matrix[i][column]);
          console.log('stack at column is', stack);
          result = boundCheckStack(i);
          if (result === true) {
            return result;
          } else if (result === false) {
            break;
          }
        }

        // check diagonal from left
        for (let i = 0; i < this.size; i++) {
          stack.push(this.matrix[i][i]);
          console.log('stack at left diagonal is', stack);
          result = boundCheckStack(i);
          if (result === true) {
            return result;
          } else if (result === false) {
            break;
          }
        }

        // check diagonal from right
        for (let i = this.size-1; i >= 0; i--) {
          stack.push(this.matrix[2-i][i]);
          console.log('stack at right diagonal is', stack);
          result = boundCheckStack(2-i);
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

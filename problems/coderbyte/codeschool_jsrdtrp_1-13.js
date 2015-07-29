
var puzzlers = [
  function ( a ) { return 8*a - 10; },
  function ( a ) { return (a-3) * (a-3) * (a-3); },
  function ( a ) { return a * a + 4; },
  function ( a ) { return a % 5; }
];
var start = 2;

var applyAndEmpty = function(num, Queue) {
  var x = num;
  var Qlength = Queue.length;
  for (var i=0; i<=Qlength; i++) {
    x = Queue[i](num)(x);
    Queue.shift();
  }
  return x;

alert(applyAndEmpty(2, puzzlers)());
};
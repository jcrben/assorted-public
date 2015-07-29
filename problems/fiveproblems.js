// https://blog.svpino.com/2015/05/07/five-programming-problems-every-software-\
// engineer-should-be-able-to-solve-in-less-than-1-hour

var _ = require('lodash');

// #1
function sumFor (list) {
  var sum = 0;
  for (var i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

function sumWhile (list) {
  var sum = 0;
  var count = 0;
  while (list.length > count) {
    sum += list[count];
    count++;
  }
  return sum;
}

function sumRecursion (list, count, sum) {
  console.log('count', count, 'sum', sum);
  sum = sum || 0;
  count = count || 0;

  if (list.length <= count) {
    return 0;
  } else {
    return list[count] + sumRecursion(list, count+1, sum)
  }
}

// #2 - should perhaps do non-library solution
function alternateLists (list1, list2) {
  if (list1.length != list2.length) {
    return 'lists do not match';
  }
  return _(_.zip(list1,list2)).flatten().value();  
}

// #3 - memoized fibonacci function
var fibonacci = (function() {
  results = {};
  function fibonacci (nthIndex) {
    var key = JSON.stringify(arguments);
    if (!results.hasOwnProperty(key)) {
      if (nthIndex === 0 || nthIndex === 1) {
        return results[key] = nthIndex;
      } else {
        return results[key] = fibonacci(nthIndex-1) + fibonacci(nthIndex-2);
      }
    } else {
      return results[key];
    }
  }

  return fibonacci;
})();

// #4
function largestNumber (arr) {
  return arr.map(function(val) {
    return val.toString();
  })
  .sort(function(a, b) {
    console.log(a, b);
    if (a[0]-b[0] > 0) {
      return -1;
    } else if (a[0]-b[0] < 0) {
      return 1;
    } else {
      return 0;
    }
  })
  .join('');
}

// #5

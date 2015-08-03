var _ = require('lodash');
var assert = require('assert');

function ArrayAdditionI(arr) { 
  var largest = _(arr).max();
  arr = _(arr).pull(largest).value();
  var result = false;

  function recursiveFn(sum, array) {
    // console.log('sum', sum, 'largest', largest);
    if (sum === largest) {
      return result = true;
    }
    for (var i = 0; i < array.length; i++) {
      recursiveFn(sum + array[i], array.slice(0, i).concat(array.slice(i+1)))
    }
  }
  // recursiveFn(arr[0], arr)
  for (var i = 0; i < arr.length; i++) {
    recursiveFn(arr[i], arr.slice(0, i).concat(arr.slice(i+1)));
  }
  return result; 
}
   
// Todo: figure out how to add a sliceAt function to lodash wrapped object
// function sliceAt (arr, index) {
//   return _.filter(arr, function () {
//     if ()
//   })
// }

assert.ok(ArrayAdditionI([3,5,-1,8,12]));
assert.ok(ArrayAdditionI([4, 6, 23, 10, 1, 3]));
assert.strictEqual(false, ArrayAdditionI([5,7,16,1,2]));
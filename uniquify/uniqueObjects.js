// Using whatever resources you want, please write a JavaScript function that 
// takes an array of objects and returns a unique-ified version of the same array.

// To be clear, there could be objects that are copies or duplicates of other 
// objects, but the goal is to just remove the duplicates, not the copies. 
// Duplicates means references to the same object in memory. Copies means different
// objects in memory with the same properties. The level of nesting in the object 
// should not matter.


var uniquifyObjects = function (arr) {
  var uniques = {}, key;
  for (var i = 0; i < arr.length; i++) {
    key = JSONfn.stringify(arr[i]);
    if (uniques[key] === arr[i]) {
      console.log('splicing out', JSONfn.stringify(arr[i]));
      arr.splice(i, 1);
      i--;
    } else if (uniques[key] && uniques[key] != arr[i]) {
      // no-op as this is a deep copy  
    } else {
      uniques[key] = arr[i];
    }
  }
  return arr;
};

// var uniquifyObjects = function (arr) {
//   var uniques = {};
//   var result = _.filter(arr, function(val, index, arr) {
//     key = JSON.stringify(val);
//     if (uniques[key] === val) {
//       return false;
//     } else if (uniques[key] && uniques[key] != val) {
//       return true;
//     } else {
//       uniques[key] = val;
//       return true;
//     }
//   });
//   arr = result;
//   return arr;
// }  
//TODO: fix this so that it filters out the array in place

// Using whatever resources you want, please write a JavaScript function that 
// takes an array of objects and returns a unique-ified version of the same array.

// To be clear, there could be objects that are copies or duplicates of other 
// objects, but the goal is to just remove the duplicates, not the copies. 
// Duplicates means references to the same object in memory. Copies means different
// objects in memory with the same properties. The level of nesting in the object 
// should not matter.


var uniquifyObjects = function (arr) {
  var uniques = {};
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var key = JSON.stringify(arr[i]);
    if (uniques[key] === arr[i]) {
      // no-op as this is a duplicate reference
    } else if (uniques[key] && uniques[key] != arr[i]) {
      uniques[key + i] = arr[i]; // add deep copy
    } else {
      uniques[key] = arr[i];
    }
  }

  for (var key in uniques) {
    result.push(uniques[key]);
  }

  return result;
}
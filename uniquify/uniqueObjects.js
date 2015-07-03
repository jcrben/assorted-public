//TODO: fix this so that it filters out the array in place

// Using whatever resources you want, please write a JavaScript function that 
// takes an array of objects and returns a unique-ified version of the same array.

// To be clear, there could be objects that are copies or duplicates of other 
// objects, but the goal is to just remove the duplicates, not the copies. 
// Duplicates means references to the same object in memory. Copies means different
// objects in memory with the same properties. The level of nesting in the object 
// should not matter.


var testObjects = [
  { first: function() {console.log('hi')} },
  { second: 'someString' },
  { 2: {nested: {nestedAgain: 'randomString'}} },
  { "&@$*": "weird key" },
  { 2: 25 }, // duplicate
  { second: 'someString'} // another duplicate
]

var array = [testObjects[0], _.cloneDeep(testObjects[0]), testObjects[1], testObjects[1],
            JSON.parse(JSON.stringify(testObjects[1])), testObjects[2],
            ];



var uniquifyObjects = function (objects) {
  var uniques = {};
  var result = [];
  for (var i = 0; i < objects.length; i++) {
    var key = JSON.stringify(objects[i]);
    if (uniques[key] === objects[i]) {
      // no-op as this is a duplicate reference
    } else if (uniques[key] && uniques[key] != objects[i]) {
      uniques[key + i] = objects[i]; // add deep copy
    } else {
      uniques[key] = objects[i];
    }
  }

  for (var key in uniques) {
    result.push(uniques[key]);
  }

  return result;
}
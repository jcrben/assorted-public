// Using the JavaScript language, have the function LetterCountI(str) take the 
// str parameter being passed and return the first word with the greatest number 
// of repeated letters. For example: "Today, is the greatest day ever!" should 
// return greatest because it has 2 e's (and 2 t's) and it comes before ever 
// which also has 2 e's. If there are no words with repeating letters return -1. 
// Words will be separated by spaces. 

// Use the Parameter Testing feature in the box below to test your code with 
// different arguments.

var assert = require('assert');

function LetterCountI(str) { 
  var result = -1;
  var currentRecord = 1;
  var words = str.split(' ');
  words = words.reduce(function(prev, current, index, arr) {
    obj = {};
    obj[current] = {};
    obj[current]["max"] = 0;
    prev.push(obj);
    return prev;
  }, []);

  words.forEach(function(word, idx, arr) {
    word = Object.keys(word)[0];
    word.split('').forEach(function(char, index, arr) {
      typeof words[idx][char] === "undefined" ? words[idx][char] = 1 : words[idx][char]++;

      if (words[idx][char] > currentRecord) {
        currentRecord = words[idx][char];
        result = Object.keys(words[idx])[0];
      }
    });

  });

  return result; 
         
}

LetterCountI('Today, is the greatest day ever!');
   
assert.equal('greatest', LetterCountI('Today, is the greatest day ever!'));
assert.equal('Hello', LetterCountI('Hello apple pie'));
assert.equal(-1, LetterCountI('No words'));


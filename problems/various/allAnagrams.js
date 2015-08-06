
/*
Classic permutations without repetition problem. Apparently this
solution is quite common; see https://ideone.com/alxloN and 
http://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/
for various solutions
  */

var assert = require('assert');

var allAnagramsQuiz = function(str) {
  var anagrams = [];

  (function recurse(ana, string) {
    if (string === '') {
      anagrams.push(ana);
      return;
    }
    for (var i = 0; i < string.length; i++) {
      // ana = ana += string[i];
      recurse(ana + string[i], string.slice(0, i) + string.slice(i + 1));
    }
  })('', str)

  return anagrams;
};

assert.deepEqual([ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ], allAnagramsQuiz('abc'))
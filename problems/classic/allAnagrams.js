
/*
Classic permutations without repetition problem. Apparently this
solution is quite common; see https://ideone.com/alxloN and
http://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/
for various solutions
  */

var assert = require('assert');
var _ = require('lodash');

var allAnagramsQuiz = function(str) {
  var anagrams = [];

  (function recurse(ana, string) {
    if (string === '') {
      anagrams.push(ana);
      return;
    }
    for (var i = 0; i < string.length; i++) {
      // ana = ana += string[i];
      recurse(ana + string[i], _(string).toArray().reject(function(val, idx) { return i == idx} ).values().join(''));
    }
  })('', str);

  return anagrams;
};

assert.deepEqual([ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ], allAnagramsQuiz('abc'));

'use strict';

// reverse and return an array in place (space complexity of O(1))
const reverseArrayInPlace = array => {
  // your code here
  var bucket=0;
  for(var i=0; i<array.length/2; i++){
    bucket = array[i];
    array[i] = array[array.length-1-i];
    array[array.length-1-i] = bucket;
  }
  return array;
};

module.exports = { reverseArrayInPlace };

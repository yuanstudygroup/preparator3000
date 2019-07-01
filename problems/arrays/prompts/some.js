'use strict';

// determine if some elements in the array pass a truth test
const some = (array, truthTest) => {
  // your code here
  return array.reduce(function(memo,item){
    if(truthTest === undefined){
      return memo || Boolean(item)
    }else{
      return memo || Boolean(truthTest(item))
    };
  },false)
};

module.exports = { some };

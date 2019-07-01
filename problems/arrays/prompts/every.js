'use strict';

// determine if every element in the array passes a truth test
const every = (array, truthTest) => {
  // your code here
  return array.reduce(function(memo, item){
      if(truthTest !== undefined){
        return memo && Boolean(truthTest(item))
      }else{
        return memo && Boolean(item)
      }
    },true)
};

module.exports = { every };

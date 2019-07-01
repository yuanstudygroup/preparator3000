'use strict';

// returns an array without duplicates
const removeDuplicates = (array) => {
  // your code here
  var obj={};
  var res=[];
  array.forEach(function(item){
    if(!obj[item]){
      obj[item] = item
    }
  })
  for(var key in obj){
    res.push(obj[key]);
  }
  return res;
};

module.exports = { removeDuplicates };

'use strict';

// flatten a nested array into a flat (1D) array
const flatten = arrays => {
	// your code here
  var arr=[];
  arrays.forEach(function(item){
    if(!Array.isArray(item)){
      arr.push(item);
    }else{
      arr = arr.concat(flatten(item));
    }
  })
  return arr;
};

module.exports = { flatten };


exports.min = function min (arr) {
    try {let result = 0;
    for(let i=0; i<arr.length; i++){
      if(arr[i] < result){
        result = arr[i];
      }
    }
   return(result);
  } catch(e){
    return 0;
  }
}

exports.max = function max (arr) {
  try{
    let result = 0;
    for(let i=0; i<arr.length; i++){
      if(arr[i] > result){
        result = arr[i];
      }
    }
    return(result);
  } catch(e){
    return 0;
  }
}

exports.avg = function avg (arr) {
  try{
    let result = 0;
    if(arr.length === 0){return 0;}
    for(let i=0; i<arr.length; i++){
      result += arr[i];
    }
    return(result/arr.length);
  } catch(e){
    return 0;
  }
}

module.exports = function check(str, bracketsConfig) {
  var brackArr = str.split("");
  var seq = [];

  for(let i = 0; i < brackArr.length; i++){
    if(i > 0){
      if(compare(brackArr[i], seq[seq.length-1], bracketsConfig)){
        seq.pop();
      }else{
        seq.push(brackArr[i]);
      }
    }else{
         seq.push(brackArr[i]);
    }
  }
  return seq.length === 0 ? true : false;
}


function compare(val1, val2, bracketsConfig){
  var isPair = false;
  bracketsConfig.forEach(function(item){
    if((val2 == item[0] && val1 == item[1])){
      isPair = true;
    }
  });
  return isPair;
}
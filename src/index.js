module.exports = function check(str, bracketsConfig) {
  const brackets = str.split("");
  let sequence = [];

  for(let i = 0; i < brackets.length; i++){
    if(i > 0){
      if(compare(sequence[sequence.length-1], brackets[i], bracketsConfig)){
        sequence.pop();
      }else{
        sequence.push(brackets[i]);
      }
    }else{
      sequence.push(brackets[i]);
    }
  }
  return sequence.length === 0 ? true : false;
}


function compare(firstBracket, secondBracket, bracketsConfig){
  let isPair = false;
  bracketsConfig.forEach(function(item){
    if((firstBracket === item[0] && secondBracket === item[1])){
      isPair = true;
    }
  });
  return isPair;
}
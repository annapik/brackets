module.exports = function check(str, bracketsConfig) {

  if (str.length % 2 !== 0) {
    return false;
  }

  let arr = [];
  for( let i=0; i<str.length; i++){
  let currentSymb = str.charAt(i);
    for( let j=0; j<bracketsConfig.length; j++) {
        if(currentSymb === bracketsConfig[j][0]){
        if(arr[arr.length-1] === bracketsConfig[j][1]) {
          arr.pop();
        } else {
          arr.push(currentSymb);
        }
       } else if(currentSymb === bracketsConfig[j][1]) {
       if(arr.length > 0) {
        if(arr[arr.length-1] === bracketsConfig[j][0]) {
          arr.pop();
        }
       }
      }
    }
  }
 return arr.length === 0;
}


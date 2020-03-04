module.exports = function check(str, bracketsConfig) {

  let newConfig = [], checkStr = str;

  for (let i = 0; i < bracketsConfig.length; i++) {
    newConfig.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
  }

  for (let j = 0; j < str.length; j+=2) {
    for (let k = 0; k < newConfig.length; k++) {
      checkStr = checkStr.replace(newConfig[k], "");  
    }
    if (checkStr.length == 0) {
      return true;
    }
  } 

  return false;
}
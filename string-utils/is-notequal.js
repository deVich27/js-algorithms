import { len } from "./len.js";
function isNotEqual(firstString, secondString) {
    if(typeof firstString!=='string' || typeof secondString!=='string'){
    throw new TypeError('Оба аргумента должны быть строками');
  }
  if(len(firstString) !== len(secondString)){
    return true
  }
  for(let i=0; i<len(firstString); i++ ){
    if(firstString[i].charCodeAt(0)!==secondString[i].charCodeAt(0)){
      return true
    }
  }
  return false
}     
export {isNotEqual}

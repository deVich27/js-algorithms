import {len} from './len.js'
function isMore(firstString, secondString) {
  if(typeof firstString!=='string' || typeof secondString!=='string'){
    throw new TypeError('Оба аргумента должны быть строками')  
  }
  const minLength = len(firstString) < len(secondString) ? len(firstString) : len(secondString); 
  for(let i=0; i<minLength; i++){
    if (firstString[i].charCodeAt(0)>secondString[i].charCodeAt(0)){
      return true
    }
    if(firstString[i].charCodeAt(0)<secondString[i].charCodeAt(0)){
      return false
    }
  } 
  return len(firstString)>len(secondString)   
}
export { isMore }

import { len } from './string-utils/len.js'
export function indexOf(str, search, start=0) {
  if(typeof str !== 'string' || typeof search !== 'string'){
    throw new TypeError('Оба аргумента должны быть строками')
  }
  
  if ( search ==='') return start <= len(str) ? start : len(str)
  
  for(let i = start; i<= len(str) - len(search); i++){
    
    let match = true
    
    for(let j = 0; j < len(search); j++)
    if (str[i+j] !== search[j]){
      match = false
      break
    }
    
    if (match) return i
  }
 
  return -1
}  


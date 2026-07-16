export function indexOf(str, search) {
  if(typeof str!=='string' || typeof search !== 'string'){
    throw new TypeError('Оба аргумента должны быть строками')
  }
  if ( search==='') return 0
  for(let i=0; i<=str.length - search.length; i++){
    let match=true
    for(let j=0; j<search.length; j++)
    if (str[i+j]!==search[j]){
      match=false
      break
    }
    
    if (match) return i
  }
 return -1
}  


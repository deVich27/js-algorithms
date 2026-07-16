function startsWith(str, search) {
  if(typeof str!=='string' || typeof search !== 'string'){
    throw new TypeError('Оба аргумента должны быть строками')
  }
  if (search==='') return true
  if (search.length > str.length) return false
  for(let i=0; i<search.length; i++){
      if (str[i]!==search[i]){
        return false  
      }
    }
  return true
}
export {startsWith}  

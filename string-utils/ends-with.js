function endsWith(str, search) {
  if(typeof str!=='string' || typeof search !== 'string'){
    throw new TypeError('Оба аргумента должны быть строками')
  }
  if (str==='' || search==='') return true
  if (search.length > str.length) return false
  const offset = str.length - search.length
  for(let i=0; i<search.length; i++){
      if (str[offset + i]!==search[i]){
        return false
      }
    }
  return true
}  
export {endsWith}

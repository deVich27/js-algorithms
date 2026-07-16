export function includes(str, search) {
  if(typeof str!=='string' || typeof search !== 'string'){
    throw new TypeError('Оба аргумента должны быть строками')
  }
  if (search==='') return 0
  for(let i=0; i<=str.length-search.length; i++){
  let match=true
  for(let newI=0; newI<search.length; newI++){
      if (str[i+newI]!==search[newI]){
        match=false 
        break
      }
      
    }
    if(match) return true
  }
  return false 
}

function isMore(a,b) {
  if(typeof a!=='string' || typeof b!=='string'){
    throw new TypeError('Аргументы должны быть строками')  
  }
  return a>b 
}
export { isMore }

function len(string) {
  if(typeof string!=='string'){
    throw new TypeError('Аргумент должен быть строкой')
  }
  let count=0
  for(const char of string){
    count++
  }
  return count
}
export {len}

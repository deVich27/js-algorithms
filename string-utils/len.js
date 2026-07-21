function len(value) {
  if(typeof value!=='string' && !Array.isArray(value)){
    throw new TypeError('Аргумент должен быть строкой или массивом')
  }
  let count=0
  for(const char of value){
    count++
  }
  return count
}
export { len }

function len(string) {
  if(typeof string!=='string'){
    throw new TypeError('Аргумент должен быть строкой')
  }
  return string.length
}
export {len}

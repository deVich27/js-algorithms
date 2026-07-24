function repeat(str, count=0) {
  if (typeof str !== 'string') throw new TypeError('Первый аргумент должен быть строкой')
  if (typeof count !== 'number') throw new TypeError('Второй аргумент должен быть числом')
  if(count<0) throw new RangeError('Второй аргумент должен быть больше 0')
  let result=''
  for(let i=0; i<Math.floor(count); i++){
    result+=str
  }
  return result
}
export {repeat}

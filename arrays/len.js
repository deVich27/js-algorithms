export function len(arr){
  if (!Array.isArray(arr) && typeof arr !== 'object'){ 
    throw new TypeError ('Аргумент должен быть массивом или объектом')
  }
  let count = 0
  for (const num of arr){
    if (num === undefined) break
    count++
  }
  return count
}

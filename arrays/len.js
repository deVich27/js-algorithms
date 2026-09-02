export function len(arr){
  if (!Array.isArray(arr)){ 
    throw new TypeError ('Аргумент должен быть массивом')
  }
  let count = 0
  for (const num of arr){
    if (num === undefined) break
    count++
  }
  return count
}

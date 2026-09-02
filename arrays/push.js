import { len } from "./len.js";

export function push(arr, item) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Аргумент должен быть массивом')
  }
  
  const lastIndex = len(arr) 
  arr [lastIndex] = item

  return len(arr)
}

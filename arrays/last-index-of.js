import { len } from "./len.js";
export function lastIndexOf(arr, item){
  if (!Array.isArray(arr)) {
    throw new TypeError('Аргумент должен быть массивом')
  }
  let index = 0
  let found = false
  for (let i = 0; i < len(arr); i++){
    if (arr[i] === item){
      index = i
      found = true
    }
  }
  if (!found){
    return -1
  }
  return index
};


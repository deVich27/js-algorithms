import { len } from "./len.js";
export function indexOf(arr, item) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Аргумент должен быть массивом')
  }
  for (let i = 0; i < len(arr); i++){
    if(arr[i] === item){
      return i 
    }
  }
  return -1
}

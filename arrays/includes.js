import { indexOf } from "./index-of.js";
export function includes(arr, item){
  if (!Array.isArray(arr)) {
    throw new TypeError('Аргумент должен быть массивом')
  }
  return indexOf(arr, item) !== -1
}

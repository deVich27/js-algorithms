import { len } from "./len.js";
export function shift(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Аргумент должен быть массивом');
  }
  const length = len(arr)
  const firstChar = arr[0]
  for (let i = length; i > 0; i--){
    arr[i - 1] = arr[i]
  }
  return firstChar
}


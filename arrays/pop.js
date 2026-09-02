import { len } from "./len.js";
export function pop(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Аргумент должен быть массивом')
  }

  const length = len(arr);

  if (length === 0) {
    return undefined;
  }
  const lastChar = arr[length - 1]
  
  delete arr[length - 1]
  
  return lastChar
}

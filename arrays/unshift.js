import { len } from "./len.js";

export function unshift(arr, item) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Аргумент должен быть массивом');
  }
  
  const length = len(arr)
  
  for (let i = length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = item;

  return len(arr)
}

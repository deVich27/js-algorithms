import { len } from "./len.js";

export function at(arr, index) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Аргумент должен быть массивом')
  }
  if (typeof index !== 'number') {
    throw new TypeError('Аргумент должен быть числом')
  }

  const realIndex = index < 0 ? len(arr) + index : index

  return arr[realIndex]
}

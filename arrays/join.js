import { len } from "./len.js";

/**
 * Склеивает элементы массива в строку (иммутабельная функция).
 * Исходный массив arr не изменяется.
 * @param {Array} arr
 * @param {string} [separator=',']
 * @returns {string}
 */
export function join(arr, separator = ',') {
  if (!Array.isArray(arr)) { throw new TypeError('Аргумент должен быть массивом') }
  if (typeof separator !== 'string') { throw new TypeError('Аргумент должен быть строкой') }

  const length = len(arr);
  let result = '';

  for (let i = 0; i < length; i++) {
    const el = arr[i];
    const str = (el === null || el === undefined) ? '' : String(el);
    result += str;
    if (i < length - 1) {
      result += separator;
    }
  }

  return result;
}

import { len } from "./len.js";

/**
 * Перебирает массив, вызывая callback для каждого элемента (иммутабельная функция).
 * @param {Array} arr - массив для перебора
 * @param {function} callback - вызывается как callback(элемент, индекс, массив)
 * @returns {undefined}
 */
export function forEach(arr, callback) {
  if (!Array.isArray(arr)) { throw new TypeError('Аргумент должен быть массивом') }
  if (typeof callback !== 'function') { throw new TypeError('Аргумент должен быть функцией') }

  const length = len(arr);
  for (let i = 0; i < length; i++) {
    callback(arr[i], i, arr);
  }

  return undefined;
}

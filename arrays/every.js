import { len } from "./len.js";

/**
 * Проверяет, удовлетворяют ли все элементы условию (иммутабельная функция).
 * Делает ранний выход при первом false.
 * @param {Array} arr - массив для проверки
 * @param {function} callback - предикат, вызывается как callback(элемент, индекс, массив)
 * @returns {boolean}
 */
export function every(arr, callback) {
  if (!Array.isArray(arr)) { throw new TypeError('Аргумент должен быть массивом') }
  if (typeof callback !== 'function') { throw new TypeError('Аргумент должен быть функцией') }

  const length = len(arr);
  for (let i = 0; i < length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }

  return true;
}

import { len } from "./len.js";
import { push } from "./push.js";

/**
 * Фильтрует массив по предикату (иммутабельная функция).
 * Исходный массив arr не изменяется.
 * @param {Array} arr - массив для фильтрации
 * @param {function} callback - предикат, вызывается как callback(элемент, индекс, массив)
 * @returns {Array} новый массив из элементов, для которых callback вернул true
 */
export function filter(arr, callback) {
  if (!Array.isArray(arr)) { throw new TypeError('Аргумент должен быть массивом') }
  if (typeof callback !== 'function') { throw new TypeError('Аргумент должен быть функцией') }

  const result = [];
  const length = len(arr);
  for (let i = 0; i < length; i++) {
    if (callback(arr[i], i, arr)) {
      push(result, arr[i]);
    }
  }

  return result;
}

import { len } from "./len.js";
import { push } from "./push.js";

/**
 * Трансформирует массив в новый через callback (иммутабельная функция).
 * Исходный массив arr не изменяется.
 * @param {Array} arr - массив для трансформации
 * @param {function} callback - вызывается как callback(элемент, индекс, массив), возвращает новое значение
 * @returns {Array} новый массив из результатов callback
 */
export function map(arr, callback) {
  if (!Array.isArray(arr)) { throw new TypeError('Аргумент должен быть массивом') }
  if (typeof callback !== 'function') { throw new TypeError('Аргумент должен быть функцией') }

  const result = [];
  const length = len(arr);
  for (let i = 0; i < length; i++) {
    push(result, callback(arr[i], i, arr));
  }

  return result;
}

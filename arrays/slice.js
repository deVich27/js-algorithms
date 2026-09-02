import { len } from "./len.js";
import { push } from "./push.js";

/**
 * Копирует часть массива в новый массив (иммутабельная функция).
 * Исходный массив arr не изменяется.
 * @param {Array} arr
 * @param {number} start
 * @param {number} [end=len(arr)]
 * @returns {Array} новый массив из скопированных элементов
 */
export function slice(arr, start, end) {
  if (!Array.isArray(arr)) { throw new TypeError('Аргумент должен быть массивом') }
  if (typeof start !== 'number') { throw new TypeError('Аргумент должен быть числом') }
  if (end !== undefined && typeof end !== 'number') { throw new TypeError('Аргумент должен быть числом') }

  const length = len(arr);

  const normalize = (index) => {
    let i = index < 0 ? length + index : index;
    if (i < 0) i = 0;
    if (i > length) i = length;
    return i;
  };

  const normalizedStart = normalize(start);
  const normalizedEnd = end === undefined ? length : normalize(end);

  const result = [];
  for (let i = normalizedStart; i < normalizedEnd; i++) {
    push(result, arr[i]);
  }

  return result;
}

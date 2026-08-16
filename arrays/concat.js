import { len } from "./len.js";
import { push } from "./push.js";

/**
 * Объединяет два массива в новый (иммутабельная функция).
 * Исходные массивы arr1 и arr2 не изменяются.
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array} новый массив из элементов arr1 и arr2
 */
export function concat(arr1, arr2) {
  if (!Array.isArray(arr1)) { throw new TypeError('Аргумент должен быть массивом') }
  if (!Array.isArray(arr2)) { throw new TypeError('Аргумент должен быть массивом') }

  const result = [];

  const len1 = len(arr1);
  for (let i = 0; i < len1; i++) {
    push(result, arr1[i]);
  }

  const len2 = len(arr2);
  for (let i = 0; i < len2; i++) {
    push(result, arr2[i]);
  }

  return result;
}

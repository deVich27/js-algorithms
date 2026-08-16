import { len } from "./len.js";

/**
 * Переворачивает массив на месте (мутабельная функция).
 * @param {Array} arr
 * @returns {Array} тот же массив arr, элементы в обратном порядке
 */
export function reverse(arr) {
  if (!Array.isArray(arr)) { throw new TypeError('Аргумент должен быть массивом') }

  const length = len(arr);
  for (let i = 0; i < Math.floor(length / 2); i++) {
    const j = length - 1 - i;
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
}



/**
 * Заполняет массив (или его часть) указанным значением.
 *
 * ВНИМАНИЕ: функция мутабельная — изменяет переданный массив `arr` на месте
 * и возвращает ту же самую ссылку на массив (не копию).
 *
 * Индексы `start` и `end` нормализуются так же, как в Array.prototype.fill:
 *  - отрицательный индекс трактуется как `len(arr) + индекс` (отсчёт с конца);
 *  - если после такого пересчёта индекс всё ещё отрицательный — он обнуляется;
 *  - если индекс больше длины массива — он обрезается до длины массива.
 *
 * @param {Array} arr - массив, который будет изменён
 * @param {*} value - значение, которым заполняется массив
 * @param {number} [start=0] - начальный индекс (включительно)
 * @param {number} [end=arr.length] - конечный индекс (не включая)
 * @returns {Array} тот же массив `arr`, изменённый на месте
 */
import { len } from "./len.js";
export function fill(arr, value, start = 0, end = len(arr)) {
  if (!Array.isArray(arr)) { throw new TypeError('Аргумент должен быть массивом') }
  if (typeof start !== 'number' || typeof end !== 'number') { throw new TypeError('Аргумент должен быть числом') }
  const length = len(arr);

  const normalize = (index) => {
    let i = index < 0 ? length + index : index;
    if (i < 0) i = 0;
    if (i > length) i = length;
    return i;
  };

  const normalizedStart = normalize(start);
  const normalizedEnd = normalize(end);

  for (let i = normalizedStart; i < normalizedEnd; i++) {
    arr[i] = value;
  }

  return arr;
}



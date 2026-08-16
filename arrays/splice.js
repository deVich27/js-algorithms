import { len } from "./len.js";
import { push } from "./push.js";
import { pop } from "./pop.js";

/**
 * Удаляет и/или вставляет элементы в массив на месте (мутабельная функция).
 * @param {Array} arr - массив, который будет изменён
 * @param {number} start - начальный индекс (поддержка отрицательных)
 * @param {number} [deleteCount] - сколько элементов удалить. Если не передан — удалить всё до конца
 * @param {...*} items - элементы для вставки на место удалённых
 * @returns {Array} массив удалённых элементов
 */
export function splice(arr, start, deleteCount, ...items) {
  if (!Array.isArray(arr)) { throw new TypeError('Аргумент должен быть массивом') }
  if (typeof start !== 'number') { throw new TypeError('Аргумент должен быть числом') }

  const length = len(arr);

  let normalizedStart = start < 0 ? length + start : start;
  if (normalizedStart < 0) normalizedStart = 0;
  if (normalizedStart > length) normalizedStart = length;

  let actualDeleteCount;
  if (deleteCount === undefined) {
    actualDeleteCount = length - normalizedStart;
  } else {
    actualDeleteCount = deleteCount < 0 ? 0 : deleteCount;
    if (actualDeleteCount > length - normalizedStart) {
      actualDeleteCount = length - normalizedStart;
    }
  }

  const removed = [];
  for (let i = 0; i < actualDeleteCount; i++) {
    push(removed, arr[normalizedStart + i]);
  }

  const tail = [];
  for (let i = normalizedStart + actualDeleteCount; i < length; i++) {
    push(tail, arr[i]);
  }

  while (len(arr) > normalizedStart) {
    pop(arr);
  }

  const itemsLen = len(items);
  for (let i = 0; i < itemsLen; i++) {
    push(arr, items[i]);
  }

  const tailLen = len(tail);
  for (let i = 0; i < tailLen; i++) {
    push(arr, tail[i]);
  }

  return removed;
}

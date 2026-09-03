import { len } from "./len.js";

/**
 * Последовательно применяет callback к элементам массива,
 * накапливая результат в аккумуляторе.
 *
 * @param {Array} arr - Массив, элементы которого обрабатываются.
 * @param {Function} callback - Функция, которая обновляет значение аккумулятора.
 * @param {*} callback.accumulator - Текущее накопленное значение.
 * @param {*} callback.element - Текущий элемент массива.
 * @param {number} callback.index - Индекс текущего элемента.
 * @param {Array} callback.array - Исходный массив.
 * @param {*} [initialValue] - Начальное значение аккумулятора.
 * @returns {*} Итоговое значение аккумулятора.
 * @throws {TypeError} Если arr не является массивом.
 * @throws {TypeError} Если callback не является функцией.
 * @throws {TypeError} Если массив пустой и initialValue не передан.
 */

export function reduce(arr, callback, initialValue) {
  
  if (!Array.isArray(arr)) { throw new TypeError('Аргумент должен быть массивом') }
  if (typeof callback !== 'function') { throw new TypeError('Аргумент должен быть функцией') }
  
  let acc = 0
  let i = 0
  const arrLength = len(arr)

  if (len(arguments)>=3){
    acc = initialValue
  }
  
  else {
    
    if (arrLength === 0) {
      throw new TypeError('Массив не должен быть пустым')
    }
    
    acc = arr[0]
    i = 1
  }
  

  
  for (; i < arrLength; i++){
    acc = callback(acc, arr[i], i, arr)
  }
  
  return acc
}  

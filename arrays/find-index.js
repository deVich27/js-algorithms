import { len } from './len.js'

/**
 * Находит индекс первого элемента массива, для которого callback возвращает true.
 *
 * @param {Array} arr - Массив, в котором выполняется поиск.
 * @param {Function} callback - Функция-проверка элемента.
 * @param {*} callback.element - Текущий элемент массива.
 * @param {number} callback.index - Индекс текущего элемента.
 * @param {Array} callback.array - Исходный массив.
 * @returns {number} Индекс первого найденного элемента или -1, если элемент не найден.
 * @throws {TypeError} Если arr не является массивом.
 * @throws {TypeError} Если callback не является функцией.
 */

export function findIndex(arr, callback) {
  
  if (!Array.isArray(arr)) { throw new TypeError('Аргумент должен быть массивом') }
  if (typeof callback !== 'function') { throw new TypeError('Аргумент должен быть функцией') }
  
  const arrLength = len(arr)
  
  for (let i = 0; i < arrLength; i++){
    
    const result = callback(arr[i], i, arr)
    
    if (result === true )
      
      return i
  }
  
  return -1
}

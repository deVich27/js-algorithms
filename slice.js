/**
 * Возвращает подстроку из str с индексами start и end.
 * Если start больше или равен end — возвращается пустая строка.
 * @param {string} str - строка
 * @param {number} [start=0] - индекс начала (может быть отрицательным)
 * @param {number} [end=len(str)] - индекс конца, не включается в результат (может быть отрицательным)
 * @returns {string} - вытащенная подстрока из str
 * @throws {TypeError} - если str не строка, либо start/end переданы, но не являются числом
 *
 * @example
 * slice('hello', 0, 5)   // 'hello'
 * slice('hello', 1, 4)   // 'ell'
 */

import {len} from './string-utils/len.js'
function slice(str, start=0, end=len(str)){
  if (typeof str !== 'string') throw new TypeError('Аргумент должен быть строкой')
  if (typeof start !== 'number' || typeof end !== 'number') throw new TypeError ('Аргументы должны быть числами')
  
  const length = len(str)
  if (start < 0) start = Math.max(length+start, 0)
  if (start > length) start = length
  
  if (end<0) end = Math.max(length+end, 0)
  if (end > length) end = length
  
  let result = ''
  for(let i = start; i < end; i++){
    result += str[i]
  }
  
  return result
}

export { slice }


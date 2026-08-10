/**
 * Возвращет подстроку из str с индексами start и end
 * @param {string} str - строка
 * @param {number} start - первый индекс
 * @param {number} end - второй индекс
 * @returns {string} result - возвращает вытащенную подстроку из str
 * @throws {TypeError} - если str не строка, либо start/end переданы, но не являются числом
 *
 * @example
 * substring('hello', 0, 5) // 'hello'
 * substring('hello', 1, 4) // 'ell'
 */ 
import {len} from './string-utils/len.js'
function substring(str, start, end) {
  if (typeof str !== 'string') throw new TypeError('Аргумент должен быть строкой')
  
  if (start === undefined) start = 0
  if (end == undefined) end = len(str)
  
  if (typeof start !== 'number' || typeof end !== 'number') throw new TypeError ('Аргументы должны быть числами')
  
  if (isNaN(start) || start < 0) start = 0 
  if (isNaN(end) || end < 0) end = 0
  
  if(end > len(str)){
    end = len(str)
  }
  
  if(start > end){
    let temp = start
    start = end
    end = temp
  }
  
  let result = ''
  for(let i = start; i < end; i++){
    result += str[i]
  }
  
  return result
}

export { substring }


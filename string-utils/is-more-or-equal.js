/**
 * Проверяет, больше или равна ли первая строка второй.
 *
 * @param {string} firstString - Первая строка.
 * @param {string} secondString - Вторая строка.
 * @returns {boolean} true, если первая строка больше или равна второй, иначе false.
 * @throws {TypeError} Если аргументы не являются строками.
 *
 * @example
 * isMoreOrEqual('b', 'a') // true
 * isMoreOrEqual('a', 'a') // true
 * isMoreOrEqual('a', 'b') // false
 */

import {len} from './len.js'

function isMoreOrEqual(firstString, secondString) {
  if (typeof firstString !== 'string' || typeof secondString !== 'string') {
    throw new TypeError('Оба аргумента должны быть строками')
  } 
  
  const minLength = len(firstString) < len(secondString) ? len(firstString) : len(secondString); 
  
  for(let i = 0; i < minLength; i++){
    if (firstString[i].charCodeAt(0) > secondString[i].charCodeAt(0)){
      return true
    }
    
    if(firstString[i].charCodeAt(0) < secondString[i].charCodeAt(0)){
      return false
    }

  } 
  
  return len(firstString) >= len(secondString)
}
export { isMoreOrEqual }

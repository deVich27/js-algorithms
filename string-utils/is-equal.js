/**
 * Сравнивает две строки посимвольно.
 *
 * @param {string} firstString - Первая строка.
 * @param {string} secondString - Вторая строка.
 * @returns {boolean} true, если строки равны, иначе false.
 * @throws {TypeError} Если аргументы не являются строками.
 *
 * @example
 * isEqual('hello', 'hello') // true
 * isEqual('hello', 'world') // false
 */

import {len} from './len.js'
function isEqual(firstString, secondString) {
  if(typeof firstString !== 'string' || typeof secondString !== 'string'){
    throw new TypeError('Оба аргумента должны быть строками');
  }

  if(len(firstString) !== len(secondString)){
    return false
  }

  for(let i = 0; i < len(firstString); i++ ){
    if(firstString[i].charCodeAt(0) !== secondString[i].charCodeAt(0)){
      return false
    }
  }

  return true
}    


export {isEqual}

/**
 * Удаляет пробелы (символ ' ') в начале и в конце строки.
 * Обратите внимание: удаляются только обычные пробелы, а не любые
 * "пробельные" символы (табуляция, перевод строки и т.п. не учитываются).
 * @param {string} str - строка
 * @returns {string} - строка без пробелов в начале и в конце
 * @throws {TypeError} - если str не строка
 *
 * @example
 * trim('  hello  ') // 'hello'
 * trim('hello')     // 'hello'
 */ 

import { len } from './string-utils/len.js'
import { slice } from './slice.js'

function trim(str){
  if (typeof str !== 'string') throw new TypeError ('Аргумент должен быть строкой')
  let start = 0 
  let end = len(str) - 1

  while (start <= end && str[start] === ' '){
    start++
  }

  while (end >= start && str[end] === ' '){
    end -- 
  }
  
  let result = "";

  for (let i = start; i <= end; i++) {
    result += str[i];
  }

  return result;
}
export { trim }

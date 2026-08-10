/**
 * Заменяет первое вхождение подстроки.
 *
 * @param {string} str - Исходная строка
 * @param {string} search - Что найти
 * @param {string} replacement - На что заменить
 * @returns {string} Новая строка
 * @throws {TypeError} Если аргументы не строки
 *
 * @example
 * replace('hello world', 'world', 'JS') // 'hello JS'
 *
 * replace('banana', 'na', 'to') // 'batona'
 */

import { len } from './string-utils/len.js'
import { slice } from './slice.js'

function replace(str, search, replacement) {
  if (typeof str !== 'string' || typeof search !== 'string' || typeof replacement !== 'string' ){
    throw new TypeError ('Аргументы должны быть строками')
  }
  let charIndex = -1
  for(let i = 0; i <= len(str) - len(search); i++){
    let found = true
    for(let j = 0; j < len(search); j++){
      if (str[i + j] !== search[j]){
        found = false
        break
      }
    }
    if (found){
      charIndex = i
      break
    }
    
  }
  if (charIndex === -1) return str
  let before = slice(str, 0, charIndex)
  let after = slice(str, charIndex + len(search))
  return before + replacement + after
}
export { replace }

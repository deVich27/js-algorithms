/**
 * Заменяет все вхождения подстроки на указанную строку.
 *
 * @param {string} str - Исходная строка
 * @param {string} search - Что найти
 * @param {string} replacement - На что заменить
 * @returns {string} Новая строка
 * @throws {TypeError} Если аргументы не строки
 *
 * @example
 * replaceAll('hello hello', 'hello', 'hi') // 'hi hi'
 */

import { len } from './string-utils/len.js'
import { slice } from './slice.js'
import { indexOf } from './index-of.js'
function replaceAll(str, search, replacement) {
  if (typeof str !== 'string' || typeof search !== 'string' || typeof replacement !== 'string' ){
    throw new TypeError ('Аргументы должны быть строками')
  }
  if (search === '') {
    let result = replacement
  
    for (let i = 0; i < len(str); i++) {
      result += str[i] + replacement
    }

    return result
  }

  let result = ""
  let start = 0
  let index

  while ((index = indexOf(str, search, start)) !== -1) {
    result += slice(str, start, index)
    result += replacement
    start = index + len(search)
  }

  result += slice(str, start)

  return result
}
export { replaceAll }

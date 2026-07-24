/**
 * Проверяет, меньше ли первая строка второй по порядковому сравнению.
 *
 * @param {string} firstString - Первая строка.
 * @param {string} secondString - Вторая строка.
 * @returns {boolean} true, если первая строка меньше второй, иначе false.
 *
 * @example
 * isLess('a', 'b') // true
 * isLess('b', 'a') // false
 */

import { isMore } from './is-more.js'
import { isEqual } from './is-equal.js'
import { len } from './len.js'

function isLess(firstString, secondString) {
  return !isMore(firstString, secondString) && !isEqual(firstString, secondString)
}
export { isLess }

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
import { isEqual } from "./is-equal.js"
import { isMoreOrEqual } from './is-more-or-equal.js'
import { len } from './len.js'
function isLessOrEqual(firstString, secondString) {
  return !isMoreOrEqual(firstString, secondString) || isEqual(firstString, secondString)
}
export {isLessOrEqual}

/**
 * Проверяет, что две строки не равны.
 *
 * @param {string} firstString - Первая строка.
 * @param {string} secondString - Вторая строка.
 * @returns {boolean} true, если строки не равны, иначе false.
 *
 * @example
 * isNotEqual('hello', 'world') // true
 * isNotEqual('hello', 'hello') // false
 */

import { isEqual } from './is-equal.js'
import { len } from "./len.js";

function isNotEqual(firstString, secondString) {
  return !isEqual(firstString, secondString)
}     

export {isNotEqual}

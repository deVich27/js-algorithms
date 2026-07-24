/**
 * Возвращает длину строки или массива.
 *
 * @param {string|Array} value - Строка или массив.
 * @returns {number} Длина значения.
 * @throws {TypeError} Если аргумент не строка и не массив.
 *
 * @example
 * len('hello') // 5
 * len([1, 2, 3]) // 3
 */

function len(value) {
  if(typeof value !== 'string'){
    throw new TypeError('Аргумент должен быть строкой')
  }

  let count = 0

  for(const char of value){
    count++
  }

  return count
}
export { len }

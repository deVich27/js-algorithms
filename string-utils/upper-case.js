/**
 * Преобразует строку в верхний регистр.
 *
 * @param {string} str - Исходная строка
 * @returns {string} Строка в верхнем регистре
 * @throws {TypeError} Если аргумент не строка
 *
 * @example
 * upperCase('hello мир') // 'HELLO МИР'
 */

function upperCase(str) {
  if (typeof str !== 'string') throw new TypeError ('Аргумент должен быть строкой')
  let result = ''
  for (let char of str){
    if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
      result += String.fromCodePoint(char.charCodeAt() - 32)
    }
    else if ((char.charCodeAt() >= 1072 && char.charCodeAt() <= 1103) || char.charCodeAt() === 1105){
      if (char.charCodeAt() === 1105) {
        result += String.fromCodePoint(char.charCodeAt() - 80)
      }
      else{
        result += String.fromCodePoint(char.charCodeAt() - 32)
      }
    }
    else{
      result += char
    }
  }
  return result
}
export { upperCase }

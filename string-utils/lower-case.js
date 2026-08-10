/**
 * Преобразует строку в нижний регистр.
 *
 * @param {string} str - Исходная строка
 * @returns {string} Строка в нижнем регистре
 * @throws {TypeError} Если аргумент не строка
 *
 * @example
 * lowerCase('HELLO МИР') // 'hello мир'
 */

function lowerCase(str) {
  if (typeof str !== 'string') throw new TypeError ('Аргумент должен быть строкой')
  let result = ''
  for (let char of str){
    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
      result += String.fromCodePoint(char.charCodeAt() + 32)
    }
    else if ((char.charCodeAt() >= 1040 && char.charCodeAt() <= 1071) || char.charCodeAt() === 1025){
      if (char.charCodeAt() === 1025) {
        result += String.fromCodePoint(char.charCodeAt() + 80)
      }
      else{
        result += String.fromCodePoint(char.charCodeAt() + 32)
      }
    }
    else{
      result += char
    }
  }
  return result
}
export { lowerCase }

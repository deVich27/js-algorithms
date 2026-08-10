/**
 * Добавляет символы до указанной длины строки.
 *
 * @param {string} str - Исходная строка
 * @param {number} length - Итоговая длина строки
 * @param {string} char - Символ для заполнения
 * @param {'left'|'right'|'both'} side - Сторона добавления символов
 * @returns {string} Строка с добавленными символами
 * @throws {TypeError} Если аргумент str не строка или неверно указан side
 *
 * @example
 * pad('hello', 10, '*', 'left') // '*****hello'
 */
import { len } from './string-utils/len.js'
import { slice } from './slice.js'
function pad(str, length, char, side){
  if (side !== 'left' && side !== 'right' && side !== 'both') {
    throw new TypeError('Неверно указан аргумент side');
  }
  if (typeof str !== 'string') throw new TypeError ('Аргумен должен быть строкой')
  
  const padding = length - len(str)
  
  let sharedStorage = ''
  let leftStorage = ''
  let rightStorage = ''
  
  let result = ''
  
  if (padding <= 0) return str
  
  if (side === 'left'){
    while (len( sharedStorage ) < padding){
      sharedStorage += char
    }
    
    sharedStorage = slice(sharedStorage, 0, padding)
    result = sharedStorage + str

    return result
  }
  if (side === 'right'){
    while (len(sharedStorage) < padding){
      sharedStorage += char
    }
    
    sharedStorage = slice(sharedStorage, 0, padding)
    result = str + sharedStorage
    
    return result 
  }
  if (side === 'both') {
    const left = Math.floor(padding / 2)
    const right = padding - left
    
    while (len(leftStorage) < left){
      leftStorage += char
    }
    leftStorage = slice(leftStorage, 0, left)
    while (len(rightStorage) < right){
      rightStorage += char
    }
    rightStorage = slice(rightStorage, 0, right)
    result = leftStorage + str + rightStorage
    
    return result
  }
}
export { pad }

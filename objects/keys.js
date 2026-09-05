import { push } from "../arrays/push.js";

/**

Возвращает массив собственных ключей объекта.


@param {object} obj - Объект, ключи которого нужно получить.
@returns {string[]} Массив ключей объекта.
@throws {TypeError} Если аргумент не является объектом или равен null.
*/

export function keys(obj) {
  if (typeof obj !== 'object' || obj === null) { throw new TypeError('Аргумент должен быть объектом')}
  
  const result = []
  
  for (const key in obj){
    
    if (obj.hasOwnProperty(key)) {
      push(result, key)
    }  
  }

  return result
}


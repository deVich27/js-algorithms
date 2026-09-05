import { push } from "./../arrays/push.js";
import { len } from "./../arrays/len.js"
import { keys } from "./keys.js"

/**

Возвращает массив пар ключ-значение объекта.


@param {object} obj - Объект, пары ключ-значение которого нужно получить.
@returns {Array<[string, any]>} Массив пар, где каждый элемент содержит ключ и его значение.
@throws {TypeError} Если аргумент не является объектом или равен null.
*/

export function entries(obj){
  if (typeof obj !== 'object' || obj === null) { throw new TypeError ('Аргумент должен быть объектом')}
  
  const objKeys = keys(obj)
  const result = []
      
  for (let i = 0; i < len(objKeys); i++){
    const arr = []
    const key = objKeys[i]
    
    push (arr, key)
    push (arr, obj[key])
    push (result, arr)
  }

  return result
}

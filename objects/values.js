import { push } from "../arrays/push.js";

/**

Возвращает массив собственных значений объекта.


@param {object} obj - Объект, значения которого нужно получить.
@returns {any[]} Массив значений объекта.
@throws {TypeError} Если аргумент не является объектом или равен null.
*/

export function values(obj) {
  if (typeof obj !== "object" || obj === null){ throw new TypeError("Аргументы должны быть объектом" )}
  
  const result = []
  
  for (const key in obj){
    
    if (obj.hasOwnProperty(key)) {
      push(result, obj[key])
    }
   
  }
  
  return result
}

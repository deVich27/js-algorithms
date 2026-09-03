import { push } from "./push.js"
import { len } from "./len.js";

/**
 * Рекурсивно разглаживает вложенные массивы на указанную глубину.
 *
 * @param {Array} arr - Массив, который необходимо разгладить.
 * @param {number} [depth=1] - Глубина разглаживания вложенных массивов.
 * @returns {Array} Новый массив с разглаженными элементами.
 * @throws {TypeError} Если arr не является массивом.
 * @throws {TypeError} Если depth не является числом.
 */

export function flat(arr, depth = 1) {
  
  if (!Array.isArray(arr)) { throw new TypeError('Аргумент должен быть массивом') }
  if (typeof depth !== 'number') { throw new TypeError('Аргумент должен быть числом')}
  
  const result = []
  
  for (let i = 0; i < len(arr); i++){
    
    if (Array.isArray(arr[i]) && depth > 0){
      const flattened = flat(arr[i], depth - 1)

      for (let j = 0; j < len(flattened); j++){
        push(result, flattened[j])
      }
     
    }
    
    else{
      push(result, arr[i])
    }
 
  }
return result

}

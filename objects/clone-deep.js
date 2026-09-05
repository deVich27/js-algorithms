import { keys } from "./keys.js";
import { len } from "./../arrays/len.js";
import { push } from "./../arrays/push.js";

/**

Создаёт глубокую копию значения.
Рекурсивно копирует вложенные массивы и объекты,
не изменяя исходное значение.


@param {any} value - Значение, которое нужно скопировать.
@returns {any} Глубокая копия значения.
*/

export function cloneDeep(value) {
  if (value === null) { return null }
  if (typeof value !== 'object' && !Array.isArray(value)) { return value }
  if (Array.isArray(value)){
    const arrClone = []
    for (let i = 0; i < len(value); i++){
      const element = cloneDeep(value[i])
      push( arrClone, element)
    }

    return arrClone
  }
  if (typeof value === 'object'){
    const objClone = {}
    const objKeys = keys(value)

    for (let i = 0; i < len(objKeys); i++){
      const objValue = cloneDeep(value[objKeys[i]])
      objClone[objKeys[i]] = objValue
    }

    return objClone
  }
  
}

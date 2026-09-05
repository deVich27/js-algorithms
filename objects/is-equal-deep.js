import { len } from "./../arrays/len.js";
import { keys } from "./keys.js"

/**

Глубоко сравнивает два значения.
Рекурсивно сравнивает вложенные массивы и объекты.


@param {any} firstElement - Первое значение для сравнения.
@param {any} secondElement - Второе значение для сравнения.
@returns {boolean} true, если значения глубоко равны, иначе false.
*/

export function isEqualDeep(firstElement, secondElement) {
  
  if ((typeof firstElement !== 'object' && typeof secondElement !== 'object') || (firstElement === null || secondElement === null)) {
    return firstElement === secondElement
  }
  if (Array.isArray(firstElement) !== Array.isArray(secondElement)){
    return false
  }

  const lengthFirst = len(firstElement)
  const lengthSecond = len(secondElement)
  
  if (Array.isArray(firstElement) && Array.isArray(secondElement)){
    if (lengthFirst !== lengthSecond) { return false }
    
    for (let i = 0; i < lengthFirst; i++){
      
      const elements = isEqualDeep(firstElement[i], secondElement[i])
      
      if (elements === false) { return false }
    
    }

    return true 
  }

  
  if (typeof firstElement === 'object' && typeof secondElement === 'object'){
    if (lengthFirst !== lengthSecond) { return false }
    
    const objKeys = keys(firstElement)
    
    for (let key = 0; key < len(objKeys); key++) {
      let match = objKeys[key] in secondElement
      
      if (match === false) { return false }
    
    }

    for (let i = 0; i < len(objKeys); i++) {
      
      const values = isEqualDeep(firstElement[objKeys[i]], secondElement[objKeys[i]])
      
      if (values === false) { return false }
    
    }

     return true
  }

  return false

}




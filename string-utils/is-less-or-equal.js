function isLessOrEqual(a, b) {
 if (typeof a!=='string' || typeof b !== 'string') {
    throw new TypeError('должны быть строками')
  } 
  return a<=b
}
export {isLessOrEqual}

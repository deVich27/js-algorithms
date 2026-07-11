function isMoreOrEqual(a,b) {
 if (typeof a!=='string' || typeof b!=='string') {
    throw new TypeError('строкой должен быть')
  } 
  return a>=b
}
export { isMoreOrEqual }

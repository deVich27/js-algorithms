function isEqual(firstString,secondString) {
  if(typeof firstString!=='string' || typeof secondString!=='string'){
    throw new TypeError('Оба аргумента должны быть строками');
  }
  return firstString===secondString
}

export {isEqual}

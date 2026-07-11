export function capitalize(str) {
  if(typeof str!=='string') {
    throw new TypeError ('Аргумент должен быть строкой')
  }
  if (str.length === 0) return '';
  return str[0].toUpperCase() + str.slice(1);
}

import { keys } from "./keys.js";
describe('Тесты для функции Keys', () => {
  
  test("Должна вернуть массив ключей: keys({ a: 1, b: 2, c: 3 }) → ['a', 'b', 'c']", () => {
    expect(keys({ a: 1, b: 2, c: 3 })).toEqual(['a', 'b', 'c'])
  })
  
  test("Должна вернуть пустой массив для пустого объекта: keys({}) → []", () => {
    expect(keys({})).toEqual([])
  })
  
  test("Должна вернуть ключи для объекта с одним свойством: keys({ x: 10 }) → ['x']", () => {
    expect(keys({ x: 10 })).toEqual(['x'])
  })
  
  test("Унаследованные свойства не должны попадать в результат (добавь свойство в Object.prototype перед вызовом и удали после — для чистоты теста).", () => {
    Object.prototype.custom = 'я унаследованное';
    
    const obj = { a: 1 }
    
    expect(keys(obj)).toEqual(['a'])
    
    delete Object.prototype.custom;
  })
  
  test("Должна выбросить TypeError если obj равен null", () => {
    expect(() => keys(null)).toThrow(TypeError)
  })
  
  test("Должна выбросить TypeError если obj не объект (число, строка, булево значение)", () => {
    expect(() => keys('Hello')).toThrow(TypeError)
  })

})

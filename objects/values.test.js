import { values } from "./values.js";
describe('Тесты для функции values', () => {
  
  test("Должна вернуть массив значений: values({ a: 1, b: 2, c: 3 }) → [1, 2, 3]", () => {
    expect(values({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3])
  })
  
  test("Должна вернуть пустой массив для пустого объекта: values({}) → []", () => {
    expect(values({})).toEqual([])
  })
  
  test("Должна вернуть значения разных типов: values({ name: 'Анна', age: 25, active: true }) → ['Анна', 25, true]", () => {
    expect(values({ name: 'Анна', age: 25, active: true })).toEqual(['Анна', 25, true])
  })
  
  test("Должна корректно обрабатывать null и undefined среди значений: values({ a: null, b: undefined }) → [null, undefined]", () => {
    expect(values({ a: null, b: undefined })).toEqual([null, undefined])
  })
  
  test("Унаследованные свойства не должны попадать в результат (добавь свойство в Object.prototype перед вызовом и удали после — для чистоты теста).", () => {
      
    Object.prototype.custom = 4
    
    const obj = { a: 1 }
    
    expect(values(obj)).toEqual([1])

    delete Object.prototype.custom
  })
  
  test("Должна выбросить TypeError если obj равен null", () => {
    expect(() => values(null)).toThrow(TypeError)
  })
  
  test("Должна выбросить TypeError если obj не объект", () => {
    expect(() => values('hello')).toThrow(TypeError)
  })

})

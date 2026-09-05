import { entries } from "./entries.js";

describe('Тесты для функции entries', () => {

  test("Должна вернуть массив пар: entries({ a: 1, b: 2 }) → [['a', 1], ['b', 2]]", () => {
    expect(entries({ a: 1, b: 2 })).toEqual([['a', 1], ['b', 2]])
  })

  test("Должна вернуть пустой массив для пустого объекта: entries({}) → []", () => {
    expect(entries({})).toEqual([])
  })

  test("Каждая пара должна быть массивом из двух элементов: ключ и значение", () => {
    const result = entries({ a: 1, b: 2 })
    
    expect(result[0]).toEqual(["a", 1])
    expect(result[1]).toEqual(["b", 2])

  })

  test("Должна корректно обрабатывать значения разных типов: числа, строки, null, массивы", () => {
    const result = entries({ a: null, b: 4, c: 'hello', d: [1, 2, 3, 4] })
    
    expect(result[0]).toEqual(['a', null])
    expect(result[1]).toEqual(['b', 4])
    expect(result[2]).toEqual(['c', 'hello'])
    expect(result[3]).toEqual(['d', [1, 2, 3, 4]])
  })

  test("Должна выбросить TypeError если obj равен null", () => {
    expect(() => entries(null)).toThrow(TypeError)
  })

  test("Должна выбросить TypeError если obj не объект", () => {
    expect(() => entries('hello')).toThrow(TypeError)
  })

})

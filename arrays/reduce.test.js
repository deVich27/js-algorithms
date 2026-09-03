import { reduce } from "./reduce.js";
import { push } from "./push.js"


describe('Функции для теста reduce', () => {
  
  test("Должна посчитать сумму без initialValue: reduce([1, 2, 3], (acc, x) => acc + x) → 6", () => {
    expect(reduce([1, 2, 3], (acc, x) => acc + x)).toBe(6)
  })
  
  test("Должна посчитать сумму с initialValue: reduce([1, 2, 3], (acc, x) => acc + x, 4) → 10", () => {
    expect(reduce([1, 2, 3], (acc, x) => acc + x, 4)).toBe(10)
  })
  
  test("Должна вернуть initialValue для пустого массива: reduce([], (acc, x) => acc + x, 42) → 42", () => {
    expect(reduce([], (acc, x) => acc + x, 42)).toBe(42)
  })
  
  test("Должна выбросить TypeError для пустого массива без initialValue: reduce([], (acc, x) => acc + x) — используй toThrow()", () => {
    expect(()=>reduce([], (acc, x) => acc + x)).toThrow(TypeError)
  })
  
  test("Должна сконкатенировать строки: reduce(['a', 'b', 'c'], (acc, s) => acc + s, '') → 'abc'", () => {
    expect(reduce(['a', 'b', 'c'], (acc, s) => acc + s, '')).toBe('abc')
  })
  
  test("Должна работать с массивом из одного элемента без initialValue: reduce([42], (acc, x) => acc + x) → 42", () => {
    expect(reduce([42], (acc, x) => acc + x)).toBe(42)
  })
  
  test("Должна передавать правильные аргументы в callback: собрать вызовы и проверить acc, element, index", () => {
    const calls = []
    reduce ([1, 2, 3], (acc, el, i) =>{
      push(calls, {acc, el, i})
      return acc + el
    })
    expect(calls).toEqual(([
      { el: 2, i: 1, acc: 1 },
      { el: 3, i: 2, acc: 3 },
    ]))
  })

  test("Должна выбросить TypeError если arr не массив", () => {
    expect(()=>reduce('hello', (acc, x) => acc + x)).toThrow(TypeError)
  })

  test("Должна выбросить TypeError если callback не функция", () => {
    expect(()=>reduce([1, 2, 3], 3)).toThrow(TypeError)
  })
})

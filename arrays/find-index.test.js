import { findIndex } from "./find-index.js";
describe('Тесты для функции findIndex', () => {
  
  test("Должна найти индекс первого подходящего элемента: findIndex([1, 2, 3, 4], x => x > 2) → 2", ()=>{
    expect(findIndex([1, 2 ,3 ,4], x => x > 2)).toBe(2)
  }) 

  test("Должна вернуть -1 если элемент не найден: findIndex([1, 2, 3], x => x > 10) → -1", ()=>{
    expect(findIndex([1, 2 ,3], x => x > 10)).toBe(-1)
  }) 

  test("Должна вернуть -1 для пустого массива: findIndex([], () => true) → -1", ()=>{
    expect(findIndex([], () => true)).toBe(-1)
  })

  test("Должна остановиться на первом совпадении: findIndex([1, 2, 3, 4], x => x > 1) → 1 (а не 2 или 3)", ()=>{
    expect(findIndex([1, 2 ,3 ,4], x => x > 1)).toBe(1)
  })

  test("Должна вернуть 0 если первый же элемент подходит: findIndex([5, 7, 3], x => x > 4) → 0", ()=>{
    expect(findIndex([5, 7, 3], x => x > 4)).toBe(0)
  })

  test("Должна выбросить TypeError если arr не массив", ()=>{
    expect(() => findIndex(1, x => x > 1)).toThrow(TypeError)
  })

  test("Должна выбросить TypeError если callback не функция", ()=>{
    expect(() => findIndex([1, 2 ,3 ,4], 'hello')).toThrow(TypeError)
  }) 

})

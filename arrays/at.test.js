import { at } from "./at.js";
describe('тесты для функции at', () => {
  test("Должна вернуть элемент по положительному индексу: at([10, 20, 30], 1) → 20", ()=>{
    expect(at([10, 20, 30], 1)).toBe(20)
  })
  test("Должна вернуть первый элемент: at([10, 20, 30], 0) → 10", ()=>{
    expect(at([10, 20, 30], 0)).toBe(10)
  })
  test("Должна вернуть последний элемент по отрицательному индексу: at([10, 20, 30], -1) → 30", ()=>{
    expect(at([10, 20, 30], -1)).toBe(30)
  })
  test("Должна вернуть предпоследний элемент: at([10, 20, 30], -2) → 20", ()=>{
    expect(at([10, 20, 30], -2)).toBe(20)
  })
  test("Должна вернуть первый через -len: at([10, 20, 30], -3) → 10", ()=>{
    expect(at([10, 20, 30], -3)).toBe(10)
  })
  test("Должна вернуть undefined при выходе за правую границу: at([10, 20, 30], 5) → undefined", ()=>{
    expect(at([10, 20, 30], 5)).toBe(undefined)
  })
  test("Должна вернуть undefined при выходе за левую границу: at([10, 20, 30], -5) → undefined", ()=>{
    expect(at([10, 20, 30], -5)).toBe(undefined)
  })
  test("Должна вернуть undefined для пустого массива: at([], 0) → undefined", ()=>{
    expect(at([], 0)).toBe(undefined)
  })
  test("Должна вернуть undefined для пустого массива и отрицательного: at([], -1) → undefined", ()=>{
    expect(at([], -1)).toBe(undefined)
  })
  test("Должна работать с массивом строк: at(['a', 'b', 'c'], 2) → 'c'", ()=>{
    expect(at(['a', 'b', 'c'], 2)).toBe('c')
  })
  test("Должна не мутировать исходный массив", ()=>{
    const arr = [1, 2, 3 ,4, 5]
    const snapshot = [...arr]
    at(arr, -1)
    expect(arr).toEqual(snapshot)
  })
  test("Должна выбросить TypeError если arr не массив", ()=>{
    expect(()=>at('hello', 1)).toThrow(TypeError)
  })
  test("Должна выбросить TypeError если index не число (at([1], 'a'))", ()=>{
    expect(()=>at([1], 'a')).toThrow(TypeError)
  })

})

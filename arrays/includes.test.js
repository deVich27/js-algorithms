import { includes } from "./includes.js";
import { describe, test, expect } from 'bun:test';
describe ('тесты для функции includes', () => {
  test("Должна вернуть true если элемент есть: includes([1, 2, 3], 2) → true", ()=>{
    expect(includes([1, 2, 3], 2)).toBe(true)
  })
  test("Должна вернуть false если элемента нет: includes([1, 2, 3], 9) → false", ()=>{
    expect(includes([1, 2, 3], 9)).toBe(false)
  })
  test("Должна вернуть false для пустого массива: includes([], 1) → false", ()=>{
    expect(includes([], 1)).toBe(false)
  })
  test("Должна вернуть true для первого элемента: includes([1, 2, 3], 1) → true", ()=>{
    expect(includes([1, 2, 3], 1)).toBe(true)
  })
  test("Должна вернуть true для последнего элемента: includes([1, 2, 3], 3) → true", ()=>{
    expect(includes([1, 2, 3], 3)).toBe(true)
  })
  test("Должна найти строку: includes(['a', 'b'], 'b') → true", ()=>{
    expect(includes(['a', 'b'], 'b')).toBe(true)
  })
  test("Должна различать 0 и false: includes([0], false) → false, includes([0], 0) → true", ()=>{
    expect(includes([0], false)).toBe(false)
    expect(includes([0], 0)).toBe(true)
  })
  test("Должна не мутировать исходный массив", ()=>{
    const arr = [1, 2, 3]
    const newArr = [...arr]
    includes(arr)
    expect(arr).toEqual(newArr)
  })
  test("Должна выбросить TypeError если arr не массив", ()=>{
    expect(()=>includes()).toThrow(TypeError)
  })
})

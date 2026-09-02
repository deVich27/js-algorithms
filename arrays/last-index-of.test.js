import { lastIndexOf } from "./last-index-of.js";
describe('тесты функции lastIndexOf', () => {
  test("Должна вернуть индекс последнего вхождения при дубликатах: lastIndexOf([1, 2, 1, 3], 1) → 2", ()=>{
    expect(lastIndexOf([1, 2, 1, 3], 1)).toBe(2)
  })
  test("Должна вернуть -1 если элемента нет: lastIndexOf([1, 2, 3], 9) → -1", ()=>{
    expect(lastIndexOf([1, 2, 3], 9)).toBe(-1)
  })
  test("Должна вернуть 0 для единственного вхождения в начале: lastIndexOf([5, 6, 7], 5) → 0", ()=>{
    expect(lastIndexOf([5, 6, 7], 5)).toBe(0)
  })
  test("Должна вернуть последний индекс для элемента в конце: lastIndexOf([5, 6, 7], 7) → 2", ()=>{
    expect(lastIndexOf([5, 6, 7], 7)).toBe(2)
  })
  test("Должна вернуть -1 для пустого массива: lastIndexOf([], 1) → -1", ()=>{
    expect(lastIndexOf([], 1)).toBe(-1)
  })
  test("Должна найти символ: lastIndexOf(['a', 'b', 'a'], 'a') → 2", ()=>{
    expect(lastIndexOf(['a', 'b', 'a'], 'a')).toBe(2)
  })
  test("Должна найти строку: lastIndexOf(['ab', 'cd', 'ab'], 'ab') → 2", ()=>{
    expect(lastIndexOf(['ab', 'cd', 'ab'], 'ab')).toBe(2)
  })
  test("Должна не мутировать исходный массив", ()=>{
    const arr = [1, 2, 3]
    const newArr = [...arr]
    lastIndexOf(arr)
    expect(arr).toEqual(newArr)
  })
  test("Должна выбросить TypeError если arr не массив", ()=>{
    expect(()=>lastIndexOf('Hello', 'l')).toThrow(TypeError)
  })
})


import { indexOf } from "./index-of.js";
describe('тесты для функции indexOf', () => {
  test("Должна найти элемент в середине: indexOf([10, 20, 30], 20) → 1", ()=>{
    expect(indexOf([10, 20, 30], 20)).toBe(1)
  })
  test("Должна найти первый элемент: indexOf([10, 20, 30], 10) → 0", ()=>{
    expect(indexOf([10, 20, 30], 10)).toBe(0)
  })
  test("Должна найти последний элемент: indexOf([10, 20, 30], 30) → 2", ()=>{
    expect(indexOf([10, 20, 30], 30)).toBe(2)
  })
  test("Должна вернуть -1 если элемента нет: indexOf([10, 20, 30], 99) → -1", ()=>{
    expect(indexOf([10, 20, 30], 99)).toBe(-1)
  })
  test("Должна вернуть индекс первого вхождения при дубликатах: indexOf([1, 2, 1, 3], 1) → 0", ()=>{
    expect(indexOf([1, 2, 1, 3], 1)).toBe(0)
  })
  test("Должна вернуть -1 для пустого массива: indexOf([], 1) → -1", ()=>{
    expect(indexOf([], 1)).toBe(-1)
  })
  test("Должна найти строку по значению: indexOf(['a', 'b', 'c'], 'b') → 1", ()=>{
    expect(indexOf(['a', 'b', 'c'], 'b')).toBe(1)
  })
  test("Должна корректно работать с массивом строк: indexOf(['abc', 'def', 'xyz'], 'def') → 1", ()=>{
    expect(indexOf(['abc', 'def', 'xyz'], 'def')).toBe(1)
  })
  test("Должна найти 0 (не спутать с false): indexOf([0, false], 0) → 0, indexOf([0, false], false) → 1", ()=>{
    expect(indexOf([0, false], 0)).toBe(0)
    expect(indexOf([0,false], false)).toBe(1)
  })
  test("Должна найти false: indexOf([true, false], false) → 1", ()=>{
    expect(indexOf([0, false], false)).toBe(1)
  })
  test("Должна не мутировать исходный массив", ()=>{
    const arr = [1, 2, 3]
    const newArr = [...arr]
    indexOf(arr)
    expect(arr).toEqual(newArr)
  })
  test("Должна выбросить TypeError если arr не массив", ()=>{
    expect(()=>indexOf('hello', 'h')).toThrow(TypeError)
  })

})

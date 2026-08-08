import { len } from "./len.js";
describe('тесты функции len', () => {
  test("Должна вернуть 3 для [1, 2, 3]", ()=>{
    expect(len([1, 2, 3])).toBe(3)
  })
  test("Должна вернуть 0 для пустого массива []", ()=>{
    expect(len([])).toBe(0)
  })
  test("Должна вернуть 1 для массива из одного элемента [42]", ()=>{
    expect(len([42])).toBe(1)
  })
  test("Должна вернуть 4 для массива строк ['a', 'b', 'c', 'd']", ()=>{
    expect(len(['a', 'b', 'c', 'd'])).toBe(4)
  })
  test("Должна вернуть 5 для массива с разными типами [1, 'two', true, null, 0]", ()=>{
    expect(len([1, 'two', true, null, 0])).toBe(5)
  })
  test("Должна вернуть 0 — исходный массив не изменился (проверь arr[0] до и после)", ()=>{
    const arr = [5, 3, 1, 4, 2]
    const original = arr[0]

    len(arr)

    expect(arr[0]).toBe(original)

    expect(arr).toEqual([5, 3, 1, 4, 2])
  })
  test("Должна остановить цикл если передать undefined", ()=>{
    expect(len([1, undefined, 3, 4])).toBe(1)
  })
  test("Должна выбросить TypeError если передать строку len('hello')", ()=>{
    expect(()=>len('hello')).toThrow(TypeError)
  })
  test("Должна выбросить TypeError если передать число len(123)", ()=>{
    expect(()=>len(123)).toThrow(TypeError)
  })
  test("Должна выбросить TypeError если передать объект len({0: 'a'})", ()=>{
    expect(()=>len({0: 'a'})).toThrow(TypeError)
  })
  test("Должна выбросить TypeError если аргумент не передан len()", ()=>{
    expect(()=>len()).toThrow(TypeError)
  })

})

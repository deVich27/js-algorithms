import { cloneDeep } from "./clone-deep.js";
import { push } from "./../arrays/push.js"
describe('Тесты для функции cloneDeep', () => {
  
  test("Должна вернуть тот же примитив: cloneDeep(42) → 42, cloneDeep('hello') → 'hello'", () => {
    expect(cloneDeep(42)).toEqual(42)
    expect(cloneDeep('hello')).toEqual('hello')

  })
  
  test("Должна вернуть null для null: cloneDeep(null) → null", () => {
    expect(cloneDeep(null)).toEqual(null)
  })
  
  test("Должна вернуть новый массив (не ссылку): const arr = [1, 2]; cloneDeep(arr) !== arr", () => {
    const arr = [1, 2]
    const something = cloneDeep(arr)
    
    expect(something).not.toBe(arr)
  })
  
  test("Должна создать копию плоского объекта: cloneDeep({ a: 1, b: 2 }) → { a: 1, b: 2 }", () => {
    expect(cloneDeep({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 })
  })
  
  test("Должна создать глубокую копию вложенного объекта: изменение copy.a.b.c не меняет original.a.b.c", () => {
    const original = { a: 1, b: 2, c: 3}
    const copy = cloneDeep(original)
    expect(copy).toEqual(original)
    expect(copy).not.toBe(original)
  })
  
  test("Должна создать копию массива: cloneDeep([1, 2, 3]) → [1, 2, 3], изменение копии не меняет оригинал", () => {
    const arr = [1, 2, 3]
    const copyArr = cloneDeep(arr)
    expect(copyArr).toEqual(arr)
    push(arr, 4)
    expect(copyArr).not.toEqual(arr)
  })
  
  test("Должна создать копию вложенного массива: cloneDeep([1, [2, [3]]]) — три уровня", () => {
    expect(cloneDeep([1, [2, [3]]])).toEqual([1, [2, [3]]])
  })
  
  test("Должна создать копию смешанной структуры: объект с массивами", () => {
    expect(cloneDeep({ a: [1, 2, 3], b: [4, [1, 2]], c: { a: 'hello' } })).toEqual({ a: [1, 2, 3], b: [4, [1, 2]], c: {a: 'hello'} })
  })
  
})

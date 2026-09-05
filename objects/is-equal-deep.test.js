import { isEqualDeep } from "./is-equal-deep.js";

describe('Тесты для функции isEqualDeep', () => {
  test("Должна вернуть true для одинаковых чисел: isEqualDeep(1, 1) → true", () => {
    expect(isEqualDeep(1, 1)).toEqual(true)
  })
  test("Должна вернуть false для разных типов: isEqualDeep(1, '1') → false", () => {
    expect(isEqualDeep(1, '1')).toEqual(false)
  })
  test("Должна вернуть true для двух null: isEqualDeep(null, null) → true", () => {
    expect(isEqualDeep(null, null)).toEqual(true)
  })
  test("Должна вернуть false для null и undefined: isEqualDeep(null, undefined) → false", () => {
    expect(isEqualDeep(null, undefined)).toEqual(false)
  })
  test("Должна вернуть true для одинаковых плоских объектов: isEqualDeep({ a: 1, b: 2 }, { a: 1, b: 2 }) → true", () => {
    expect(isEqualDeep({ a: 1, b: 2 }, { a: 1, b: 2})).toEqual(true)
  })
  test("Должна вернуть false для объектов с разными значениями: isEqualDeep({ a: 1 }, { a: 2 }) → false", () => {
    expect(isEqualDeep({ a: 1 }, { a: 2 })).toEqual(false)
  })
  test("Должна вернуть false для объектов с разным количеством ключей: isEqualDeep({ a: 1 }, { a: 1, b: 2 }) → false", () => {
    expect(isEqualDeep({ a: 1 }, { a: 1, b: 2 })).toEqual(false)
  })
  test("Должна вернуть true для глубоко вложенных одинаковых структур: isEqualDeep({ a: { b: [1, 2] } }, { a: { b: [1, 2] } }) → true", () => {
    expect(isEqualDeep({ a: { b: [1, 2] } }, { a: { b: [1, 2] } })).toEqual(true)
  })
  test("Должна вернуть false для глубоко вложенных разных структур: isEqualDeep({ a: { b: [1, 2] } }, { a: { b: [1, 3] } }) → false", () => {
    expect(isEqualDeep({ a: { b: [1, 2] } }, { a: { b: [1, 3] } })).toEqual(false)
  })
  test("Должна вернуть true для одинаковых массивов: isEqualDeep([1, 2, 3], [1, 2, 3]) → true", () => {
    expect(isEqualDeep([1, 2, 3], [1, 2, 3])).toEqual(true)
  })
  test("Должна вернуть false для массивов разной длины: isEqualDeep([1, 2], [1, 2, 3]) → false", () => {
    expect(isEqualDeep([1, 2], [1, 2, 3])).toEqual(false)
  })
  test("Должна вернуть false для массива и объекта: isEqualDeep([], {}) → false", () => {
    expect(isEqualDeep([], {})).toEqual(false)
  })
  test("Должна вернуть false для { x: undefined } и {} (проверка что свойство существует, а не просто undefined)", () => {
    expect(isEqualDeep({ x: undefined }, {})).toEqual(false)
  })
  test("Должна вернуть true для { x: undefined } и { x: undefined }", () => {
    expect(isEqualDeep({ x: undefined }, { x: undefined })).toEqual(true)
  })


})

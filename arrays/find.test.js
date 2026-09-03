import { push } from "./push.js"
import { find } from "./find.js";

describe('тесты для функции find', () => {
  
  test("Должна найти первый подходящий элемент: find([1, 2, 3, 4], x => x > 2) → 3", () => {
    expect(find([1, 2, 3, 4], x => x > 2)).toBe(3)
  })

  test("Должна вернуть undefined если элемент не найден: find([1, 2, 3], x => x > 10) → undefined", () => {
    expect(find([1, 2, 3], x => x > 10)).toBe(undefined)
  })

  test("Должна вернуть undefined для пустого массива: find([], () => true) → undefined", () => {
    expect(find([], () => true)).toBe(undefined)
  })

  test("Должна остановиться на первом совпадении: find([1, 2, 3, 4], x => x > 1) → 2 (а не 3 или 4)", () => {
    expect(find([1, 2, 3, 4], x => x > 1)).toBe(2)
  })

  test("Должна передавать правильные аргументы в callback (el, i, arr) => {...}", () => {
    const calls = []
    find([1, 2, 3], (el, i, arr) => {
      push(calls, {el, i, arr})
    })
    expect(calls).toEqual([
      { el: 1, i: 0, arr: [1, 2, 3] },
      { el: 2, i: 1, arr: [1, 2, 3] },
      { el: 3, i: 2, arr: [1, 2, 3] },
    ])
  })

  test("Должна выбросить TypeError если arr не массив", () => {
    expect(()=>find('hello', x => x > 3)).toThrow(TypeError)
  })

  test("Должна выбросить TypeError если callback не функция", () => {
    expect(()=>find([1, 2, 3], 2)).toThrow(TypeError)
  })

})

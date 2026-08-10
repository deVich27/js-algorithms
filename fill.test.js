import { fill } from "./fill.js";
describe('тесты для функции fill', () => {
  test("Должна заполнить весь массив: fill([1, 2, 3], 0) → массив [0, 0, 0]",()=>{
    expect(fill([1, 2, 3], 0)).toBe([0, 0, 0])
  })
})

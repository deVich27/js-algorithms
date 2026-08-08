import { len } from "./len.js"
import { pop } from "./pop.js";
describe('тесты для функции pop', () => {
  test("Должна удалить последний элемент и вернуть его: pop([1, 2, 3]) → 3, массив стал [1, 2]", ()=>{
    expect(pop([1, 2, 3])).toBe(3)
  })
  test("Должна вернуть undefined для пустого массива: pop([]) → undefined", ()=>{
    expect(pop([])).toBeUndefined()
  })
  test("Должна удалить единственный элемент: pop([42]) → 42, массив стал пустым (len === 0)", ()=>{
    expect(pop([42])).toBe(42)
  })
  test("Должна работать с массивом строк: pop(['a', 'b']) → 'b'", ()=>{
    expect(pop(['a', 'b'])).toBe('b')
  })
  test("Должна корректно удалить 0 или false (не спутать с undefined): pop([0]) → 0", ()=>{
    expect(pop([0])).toBe(0)
  })
  test("После двух pop подряд длина уменьшается на 2", ()=>{
    const arr = [1, 2, 3]
    const newArr = [...arr]

    pop(arr)
    pop(arr)

    expect(len(arr)).toBe(len(newArr)-2)
  })
  test("Должна выбросить TypeError если arr не массив", ()=>{
    expect(()=>pop('hello')).toThrow(TypeError)
  })

})

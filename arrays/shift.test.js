import { shift } from "./shift.js";

describe('тест для функции shift', () => {
  test("Должна удалить первый элемент и вернуть его: shift([1, 2, 3]) → 1, массив [2, 3]", ()=>{
    expect(shift([1, 2, 3])).toBe(1)
  })
  test("Должна вернуть undefined для пустого массива: shift([]) → undefined", ()=>{
    expect(shift([])).toBeUndefined()
  }) 
  test("Должна удалить единственный элемент: shift([42]) → 42, массив стал пустым", ()=>{
    expect(shift([42])).toBe(42)
  }) 
  test("Должна сохранить порядок остальных элементов: shift(['a', 'b', 'c']) → 'a', массив ['b', 'c']", ()=>{
    expect(shift(['a', 'b', 'c'])).toBe('a')
  }) 
  test("Должна корректно удалить falsy значение (не спутать с undefined): shift([0, 1]) → 0", ()=>{
    expect(shift([0, 1])).toBe(0)
  }) 
  test("Два shift подряд уменьшают длину на 2", ()=>{
    const arr = [3, 4]
    shift(arr, 2)
    const newArr = [...arr]
    shift(arr, 1)

    expect(arr[1]).toBe(newArr[0])
  }) 
  test("Должна выбросить TypeError если arr не массив", ()=>{
    expect(()=>shift()).toThrow(TypeError)
  }) 

})

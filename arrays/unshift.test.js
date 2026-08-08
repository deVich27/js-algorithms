import { unshift } from "./unshift.js";
describe('тесты для функции unshift', () => {
  test("Должна добавить элемент в начало и вернуть новую длину: unshift([2, 3], 1) → 3, массив [1, 2, 3]", ()=>{
    expect(unshift([2, 3], 1)).toBe(3)
  })
  test("Должна работать с пустым массивом: unshift([], 'a') → 1, массив ['a']", ()=>{
    expect(unshift([], 'a')).toBe(1)
  })
  test("Должна добавить в массив из одного элемента: unshift([20], 10) → 2, массив [10, 20]", ()=>{
    expect(unshift([20], 10)).toBe(2)
  })
  test("Должна сохранить порядок остальных элементов (ничего не затерлось): unshift(['b', 'c', 'd'], 'a') → ['a', 'b', 'c', 'd']", ()=>{
    const arr = ['b', 'c', 'd']
    unshift(arr, 'a')
    expect(arr).toEqual(['a', 'b', 'c', 'd'])
  })
  test("Два unshift подряд: первый элемент становится вторым", ()=>{
    const arr = [3, 4]
    unshift(arr, 2)
    const newArr = [...arr]
    unshift(arr, 1)

    expect(arr[1]).toBe(newArr[0])
  })
  test("Должна выбросить TypeError если arr не массив", ()=>{
    expect(()=>unshift('hello', 'a')).toThrow(TypeError)
  })

})

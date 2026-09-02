import { len } from './len.js'
import { push } from "./push.js";
describe('тесты для функции push', () => {
  test("Должна добавить элемент в конец и вернуть новую длину: push([1, 2], 3) → 3, массив [1, 2, 3]",()=>{
    expect(push([1, 2], 3)).toBe(3)
  })
  test("Должна работать с пустым массивом: push([], 'a') → 1, массив ['a']",()=>{
    expect(push([], 'a')).toBe(1)
  })
  test("Должна добавить несколько элементов по очереди (два push подряд в один массив)",()=>{
    const arr = [1, 2, 3]
    
    push(arr, 4)
    push(arr, 5)
    
    expect(arr).toEqual([1,2,3,4,5])
  })
  test("Должна добавить элемент в массив из одного элемента: push([10], 20) → 2, массив [10, 20]",()=>{
    expect(push([10], 20)).toBe(2)
  })
  test("Должна добавить 0, false, null как полноценные элементы (проверь, что len их учитывает)",()=>{
    const arr = [1, 2, 3]
    push(arr, 0)
    push(arr, false)
    push(arr, null)
    expect(len(arr)).toBe(6)
  })
  test("Должна добавить объект как элемент: push([], {a: 1}) → 1",()=>{
    expect(push([], {a: 1})).toBe(1)
  })
  test("Исходный массив изменился — проверь arr[len-1] после вызова",()=>{
    const arr = [1, 2, 3]
    push(arr, 4)
    const lastChar = arr[len(arr) - 1]
    expect(lastChar).toBe(4)
  })
  test("Должна выбросить TypeError если arr не массив (push('hello', 1))",()=>{
    expect(()=>push('hello', 2)).toThrow(TypeError)
  })

})

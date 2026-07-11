import { isNotEqual } from "./is-notequal.js";
describe('тесты функции isNotEqual', () => {
  test('Должна вернуть true для разных строк ', ()=>{
    expect(isNotEqual('hello', 'world')).toBe(true)
  })
test('Должна вернуть false для одинаковых строк ', ()=>{
    expect(isNotEqual('abc', 'abc')).toBe(false)
  })
test('Должна вернуть true для строк разной длины ', ()=>{
    expect(isNotEqual('hi', 'hello')).toBe(true)
  })
test('Должна вернуть false для пустых строк ', ()=>{
    expect(isNotEqual('', '')).toBe(false)
  })
test('Должна выбросить TypeError если аргумент(ы) не строка', ()=>{
    expect(()=>isNotEqual(6, 5)).toThrow(TypeError)
  })

})

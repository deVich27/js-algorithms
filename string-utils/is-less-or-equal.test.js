import {isLessOrEqual} from './is-less-or-equal.js'

describe('тесты функции isLessOrEqual', () => {
  test('Должна вернуть false если a больше', ()=>{
    expect(isLessOrEqual('cat', 'car')).toBe(false)
  })
  test('Должна вернуть true если строки равны', ()=>{
    expect(isLessOrEqual('hello', 'hello')).toBe(true)
  })
  test('Должна вернуть true если a меньше', ()=>{
    expect(isLessOrEqual('car', 'cat')).toBe(true)
  })
  test('Должна вернуть false если a длиннее и символы совпадают', ()=>{
    expect(isLessOrEqual('hello!', 'hello')).toBe(false)
  })
  test('Должна вернуть true если a короче и символы совпадают', ()=>{
    expect(isLessOrEqual('hello', 'hello!')).toBe(true)
  })
  test('Должна вернуть true если a короче и символы совпадают', ()=>{
    expect(isLessOrEqual('', '')).toBe(true)
  })
  test('Должна выбросить TypeError если аргумент(ы) не строка', ()=>{
    expect(()=>isLessOrEqual(1, 2)).toThrow(TypeError)
  })

})

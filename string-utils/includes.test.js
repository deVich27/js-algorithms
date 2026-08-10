import {includes } from "./includes.js"
describe('тесты функции includes', ()=>{
  test('Должна вернуть true для подстроки в начале', ()=>{
    expect(includes('hello', 'he')).toBe(true)
  })
  test('Должна вернуть true для подстроки в середине', ()=>{
    expect(includes('hello', 'll')).toBe(true)
  })
  test('Должна вернуть true для подстроки в конце', ()=>{
    expect(includes('hello', 'lo')).toBe(true)
  })
  test('Должна вернуть false если подстрока не найдена ', ()=>{
    expect(includes('hello', 'li')).toBe(false)
  })
  test('Должна вернуть 0 для пустой поисковой строки ', ()=>{
    expect(includes('hello', '')).toBe(0)
  })
  test('Должна вернуть false если поисковая строка длиннее исходной ', ()=>{
    expect(includes('hi', 'hello')).toBe(false)
  })
  test('Должна вернуть true для одинаковых строк', ()=>{
    expect(includes('abc', 'abc')).toBe(true)
  })
  test('Должна вернуть true при нескольких совпадениях ', ()=>{
    expect(includes('ababa', 'ba')).toBe(true)
  })
  test('Должна вернуть true, которая начинается внутри предыдущего почти-совпадения', ()=>{
    expect(includes('abababc', 'ababc')).toBe(true)
  })
  test(' Должна вернуть true для поиска одного символа', ()=>{
    expect(includes('hello', 'h')).toBe(true)
  })
  test('Должна вернуть true для поиска повторяющегося символа', ()=>{
    expect(includes('hello', 'l')).toBe(true)
  })
  test('Должна работать с кириллицей ', ()=>{
    expect(includes('привет', 'иве')).toBe(true)
  })
  test('Должна выбросить TypeError если первый аргумент не строка ', ()=>{
    expect(()=>includes(123, 'hello')).toThrow(TypeError)
  })
  test('Должна выбросить TypeError если второй аргумент не строка ', ()=>{
    expect(()=>includes('hello', 123)).toThrow(TypeError)
  })

})

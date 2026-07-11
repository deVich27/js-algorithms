import {isLess} from './is-less.js'
describe('тесты функции isLess', () => {
  test('Должна вернуть true если a явно меньше ', ()=>{
    expect(isLess('car', 'cat')).toBe(true)
  })

  test('Должна вернуть false если a больше ', ()=>{
    expect(isLess('cat', 'car')).toBe(false)
  })

  test('Должна вернуть false для равных строк', ()=>{
    expect(isLess('hello', 'hello')).toBe(false)
  })

  test('Должна вернуть true если a короче', ()=>{
    expect(isLess('hello', 'hello!')).toBe(true)
  })

  test('Должна вернуть true для заглавной vs строчной', ()=>{
    expect(isLess('A', 'a')).toBe(true)
  })

  test('Должна вернуть true для пустой vs непустой', ()=>{
    expect(isLess('', 'a')).toBe(true)
  })

  test('Должна выбросить TypeError если аргумент не строка', ()=>{
    expect(()=>isLess(1, 3)).toThrow(TypeError)
  })

})

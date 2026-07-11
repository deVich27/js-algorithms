import { isMore} from './is-more.js'
describe('Тесты функции isMore', () => {
  test('', ()=>{
    expect(isMore('cat', 'car')).toBe(true)
  })
   test('', ()=>{
    expect(isMore('car', 'cat')).toBe(false)
  })
 test('', ()=>{
    expect(isMore('hello', 'hello')).toBe(false)
  })
 test('', ()=>{
    expect(isMore('hello!', 'hello')).toBe(true)
  })
 test('', ()=>{
    expect(isMore('hello', 'hello!')).toBe(false)
  })
 test('', ()=>{
    expect(isMore('b', 'aaaaa')).toBe(true)
  })

 test('', ()=>{
    expect(isMore('Admin', 'admini')).toBe(false)
  })
 test('', ()=>{
    expect(isMore(' a', 'aa')).toBe(false)
  })
 test('', ()=>{
    expect(isMore('aa ', 'aa')).toBe(true)
  })
 test('', ()=>{
    expect(isMore('', '')).toBe(false)
  })
 test('', ()=>{
    expect(isMore('', 'a')).toBe(false)
  })
 test('', ()=>{
    expect(()=>isMore(2, 1)).toThrow(TypeError)
  })





}) 

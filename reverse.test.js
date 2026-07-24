import { reverse } from "./reverse.js";
describe('тесты функции reverse', () => {
  test('Должна вернуть \'\' для пустой строки', ()=>{
    expect(reverse('')).toBe('')
  })
  test('Должна перевернуть строку', ()=>{
    expect(reverse('hello')).toBe('olleh')
  })
  test('Должна вернуть \'a\' для строки из одного символа', ()=>{
    expect(reverse('a')).toBe('a')
  })
  test('Должна вернуть ту же строку для палиндрома', ()=>{
    expect(reverse('racecar')).toBe('racecar')
  })
  test('Должна перевернуть строку с пробелами', ()=>{
    expect(reverse('a b c')).toBe('c b a')
  })
  test('Должна работать с кириллицей', ()=>{
    expect(reverse('привет')).toBe('тевирп')
  })
  test('Должна выбросить TypeError если аргумент не строка', ()=>{
    expect(()=>reverse(123)).toThrow(TypeError)
  })
  test('Должна выбросить TypeError если аргумент null', ()=>{
    expect(()=>reverse(null)).toThrow(TypeError)
  })

})


import { len } from './len.js';

describe('Тесты len', () => {
  test('должна вернуть 5 для строки "hello"', () => {
    expect(len('hello')).toBe(5) 
  });

  test('Должна вернуть 0 для пустой строки', ()=>{
    expect(len('')).toBe(0)
  })

  test('Должна вернуть 3 для строки из трёх пробелов', ()=>{
    expect(len('   ')).toBe(3)
  })

  test('Должна корректно считать кириллицу', ()=>{
    expect(len('привет')).toBe(6)
  })

  test('Должен выбросить TypeError если аргумент не строка', ()=>{
    expect(()=>len(124)).toThrow(TypeError)
  })

});

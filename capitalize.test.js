import { capitalize } from './capitalize.js';

describe('description', () => {
  test('Принимает строку и возвращает её с заглавной первой буквой', ()=>{
    expect(capitalize('hello')).toBe('Hello')
  }) 

test('Должна возвращать пустую строку если в аргументе ничего нет', ()=>{
    expect(capitalize()).toBe('')
  }) 

test('Должна выбросить TypeError если аргумент(ы) не строка', ()=>{
    expect(()=>capitalize()).toThrow(TypeError)
  }) 

})

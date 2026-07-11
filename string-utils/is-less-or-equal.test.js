import {isLessOrEqual} from './is-less-or-equal.js'
describe('тесты функции isLessOrEqual', () => {
  test('', ()=>{
  expect(isLessOrEqual('cat', 'car')).toBe(false)})
test('', ()=>{
  expect(isLessOrEqual('hello', 'hello')).toBe(true)}) 
test('', ()=>{
  expect(isLessOrEqual('car', 'cat')).toBe(true)}) 
test('', ()=>{
  expect(isLessOrEqual('hello!', 'hello')).toBe(false)}) 
test('', ()=>{
  expect(isLessOrEqual('hello', 'hello!')).toBe(true)}) 
test('', ()=>{
  expect(isLessOrEqual('', '')).toBe(true)}) 
test('', ()=>{
  expect(()=>isLessOrEqual(1, 2)).toThrow(TypeError)}) 






})

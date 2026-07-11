import {isMoreOrEqual} from './is-more-or-equal.js'
describe('тесты функции isMoreOrEqual', () => {
  test('', ()=>{
  expect(isMoreOrEqual('cat', 'car')).toBe(true)}) 
test('', ()=>{
  expect(isMoreOrEqual('hello', 'hello')).toBe(true)}) 
test('', ()=>{
  expect(isMoreOrEqual('car', 'cat')).toBe(false)}) 
test('', ()=>{
  expect(isMoreOrEqual('hello!', 'hello')).toBe(true)}) 
test('', ()=>{
  expect(isMoreOrEqual('hello', 'hello!')).toBe(false)}) 
test('', ()=>{
  expect(isMoreOrEqual('', '')).toBe(true)}) 
test('', ()=>{
  expect(()=>isMoreOrEqual(1, 2)).toThrow(TypeError)}) 
})

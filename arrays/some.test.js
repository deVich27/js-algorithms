import { test, expect } from "bun:test";
import { some } from "./some.js";

test('должна вернуть true если хотя бы один подходит: some([1, 2, 3], x => x > 2) → true', () => {
  expect(some([1, 2, 3], x => x > 2)).toBe(true);
});

test('должна вернуть false если ни один не подходит: some([1, 2, 3], x => x > 10) → false', () => {
  expect(some([1, 2, 3], x => x > 10)).toBe(false);
});

test('должна вернуть false для пустого массива: some([], fn) → false', () => {
  expect(some([], x => true)).toBe(false);
});

test('должна остановиться при первом true', () => {
  let callCount = 0;
  const result = some([5, 10, 15], (x) => {
    callCount++;
    return x === 5;
  });
  expect(result).toBe(true);
  expect(callCount).toBe(1);
});

test('должна выбросить TypeError если arr не массив', () => {
  expect(() => some('not array', x => true)).toThrow(TypeError);
});

test('должна выбросить TypeError если callback не функция', () => {
  expect(() => some([1, 2, 3], 'not a function')).toThrow(TypeError);
});

import { test, expect } from "bun:test";
import { every } from "./every.js";

test('должна вернуть true если все подходят: every([2, 4, 6], x => x % 2 === 0) → true', () => {
  expect(every([2, 4, 6], x => x % 2 === 0)).toBe(true);
});

test('должна вернуть false если хотя бы один не подходит: every([2, 3, 4], x => x % 2 === 0) → false', () => {
  expect(every([2, 3, 4], x => x % 2 === 0)).toBe(false);
});

test('должна вернуть true для пустого массива: every([], fn) → true', () => {
  expect(every([], x => false)).toBe(true);
});

test('должна остановиться при первом false', () => {
  let callCount = 0;
  const result = every([5, 10, 15], (x) => {
    callCount++;
    return x < 10;
  });
  expect(result).toBe(false);
  expect(callCount).toBe(2);
});

test('должна выбросить TypeError если arr не массив', () => {
  expect(() => every('not array', x => true)).toThrow(TypeError);
});

test('должна выбросить TypeError если callback не функция', () => {
  expect(() => every([1, 2, 3], 'not a function')).toThrow(TypeError);
});

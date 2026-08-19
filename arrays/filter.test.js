import { test, expect } from "bun:test";
import { filter } from "./filter.js";

test('должна отфильтровать чётные: filter([1, 2, 3, 4], x => x % 2 === 0) → [2, 4]', () => {
  expect(filter([1, 2, 3, 4], x => x % 2 === 0)).toEqual([2, 4]);
});

test('должна вернуть пустой массив если ни один не прошёл: filter([1, 3, 5], x => x > 10) → []', () => {
  expect(filter([1, 3, 5], x => x > 10)).toEqual([]);
});

test('должна вернуть все элементы если все прошли: filter([2, 4, 6], x => x > 0) → [2, 4, 6]', () => {
  expect(filter([2, 4, 6], x => x > 0)).toEqual([2, 4, 6]);
});

test('должна вернуть новый массив (исходный не изменился)', () => {
  const arr = [1, 2, 3, 4];
  filter(arr, x => x % 2 === 0);
  expect(arr).toEqual([1, 2, 3, 4]);
});

test('должна вернуть пустой массив для пустого исходного: filter([], fn) → []', () => {
  expect(filter([], x => true)).toEqual([]);
});

test('должна передать правильные аргументы в callback', () => {
  const arr = [10, 20];
  const calls = [];
  filter(arr, (el, i, a) => {
    calls.push([el, i, a]);
    return true;
  });
  expect(calls).toEqual([
    [10, 0, arr],
    [20, 1, arr],
  ]);
});

test('должна выбросить TypeError если arr не массив', () => {
  expect(() => filter('not array', x => true)).toThrow(TypeError);
});

test('должна выбросить TypeError если callback не функция', () => {
  expect(() => filter([1, 2, 3], 'not a function')).toThrow(TypeError);
});

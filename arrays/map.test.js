import { test, expect } from "bun:test";
import { map } from "./map.js";

test('должна удвоить числа: map([1, 2, 3], x => x * 2) → [2, 4, 6]', () => {
  expect(map([1, 2, 3], x => x * 2)).toEqual([2, 4, 6]);
});

test('должна вернуть новый массив (исходный не изменился)', () => {
  const arr = [1, 2, 3];
  const result = map(arr, x => x * 2);
  expect(arr).toEqual([1, 2, 3]);
  expect(result).not.toBe(arr);
});

test('должна вернуть пустой массив для пустого исходного: map([], fn) → []', () => {
  expect(map([], x => x)).toEqual([]);
});

test('должна передать правильные аргументы в callback', () => {
  const calls = [];
  map([10, 20], (el, i, arr) => {
    calls.push({ el, i });
    return el;
  });
  expect(calls).toEqual([
    { el: 10, i: 0 },
    { el: 20, i: 1 },
  ]);
});

test("должна работать с преобразованием типов: map([1, 2], x => String(x)) → ['1', '2']", () => {
  expect(map([1, 2], x => String(x))).toEqual(['1', '2']);
});

test('должна выбросить TypeError если arr не массив', () => {
  expect(() => map('not array', x => x)).toThrow(TypeError);
});

test('должна выбросить TypeError если callback не функция', () => {
  expect(() => map([1, 2, 3], 'not a function')).toThrow(TypeError);
});

import { test, expect } from "bun:test";
import { forEach } from "./for-each.js";

test('должна вызвать callback для каждого элемента', () => {
  const calls = [];
  forEach([1, 2, 3], (el, i, arr) => {
    calls.push({ el, i, arr });
  });
  expect(calls).toEqual([
    { el: 1, i: 0, arr: [1, 2, 3] },
    { el: 2, i: 1, arr: [1, 2, 3] },
    { el: 3, i: 2, arr: [1, 2, 3] },
  ]);
});

test('должна передать правильные аргументы в callback', () => {
  const arr = [1, 2, 3];
  const calls = [];
  forEach(arr, (el, i, a) => {
    calls.push([el, i, a]);
  });
  expect(calls[0]).toEqual([1, 0, arr]);
  expect(calls[1]).toEqual([2, 1, arr]);
  expect(calls[2]).toEqual([3, 2, arr]);
});

test('должна не вызывать callback для пустого массива', () => {
  let callCount = 0;
  forEach([], () => { callCount++; });
  expect(callCount).toBe(0);
});

test('должна вернуть undefined', () => {
  expect(forEach([1], () => {})).toBe(undefined);
});

test('должна выбросить TypeError если arr не массив', () => {
  expect(() => forEach('not array', () => {})).toThrow(TypeError);
});

test('должна выбросить TypeError если callback не функция', () => {
  expect(() => forEach([1, 2, 3], 'not a function')).toThrow(TypeError);
});

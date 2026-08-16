import { test, expect } from "bun:test";
import { concat } from "./concat.js";

test("Должна объединить два непустых массива: concat([1, 2], [3, 4]) → [1, 2, 3, 4]", () => {
  expect(concat([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
});

test("Должна вернуть копию первого если второй пуст: concat([1, 2], []) → [1, 2]", () => {
  expect(concat([1, 2], [])).toEqual([1, 2]);
});

test("Должна вернуть копию второго если первый пуст: concat([], [3, 4]) → [3, 4]", () => {
  expect(concat([], [3, 4])).toEqual([3, 4]);
});

test("Должна вернуть пустой массив для двух пустых: concat([], []) → []", () => {
  expect(concat([], [])).toEqual([]);
});

test("Исходный arr1 не должен измениться после вызова", () => {
  const arr1 = [1, 2];
  concat(arr1, [3, 4]);
  expect(arr1).toEqual([1, 2]);
});

test("Исходный arr2 не должен измениться после вызова", () => {
  const arr2 = [3, 4];
  concat([1, 2], arr2);
  expect(arr2).toEqual([3, 4]);
});

test("Должна работать с массивами строк: concat(['a'], ['b', 'c']) → ['a', 'b', 'c']", () => {
  expect(concat(['a'], ['b', 'c'])).toEqual(['a', 'b', 'c']);
});

test("Должна работать с массивами смешанных типов", () => {
  expect(concat([1, 'two'], [null, true])).toEqual([1, 'two', null, true]);
});

test("Должна выбросить TypeError если arr1 не массив", () => {
  expect(() => concat('not array', [1, 2])).toThrow(TypeError);
});

test("Должна выбросить TypeError если arr2 не массив", () => {
  expect(() => concat([1, 2], 'not array')).toThrow(TypeError);
});

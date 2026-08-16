import { test, expect } from "bun:test";
import { slice } from "./slice.js";

test("Должна скопировать весь массив: slice([1, 2, 3], 0, 3) → [1, 2, 3]", () => {
  expect(slice([1, 2, 3], 0, 3)).toEqual([1, 2, 3]);
});

test("Должна скопировать часть с середины: slice([1, 2, 3, 4], 1, 3) → [2, 3]", () => {
  expect(slice([1, 2, 3, 4], 1, 3)).toEqual([2, 3]);
});

test("Должна скопировать от start до конца без end: slice([1, 2, 3, 4], 2) → [3, 4]", () => {
  expect(slice([1, 2, 3, 4], 2)).toEqual([3, 4]);
});

test("Должна поддерживать отрицательный start: slice([1, 2, 3, 4], -2) → [3, 4]", () => {
  expect(slice([1, 2, 3, 4], -2)).toEqual([3, 4]);
});

test("Должна поддерживать отрицательный end: slice([1, 2, 3, 4], 0, -1) → [1, 2, 3]", () => {
  expect(slice([1, 2, 3, 4], 0, -1)).toEqual([1, 2, 3]);
});

test("Должна работать с обоими отрицательными: slice([1, 2, 3, 4], -3, -1) → [2, 3]", () => {
  expect(slice([1, 2, 3, 4], -3, -1)).toEqual([2, 3]);
});

test("Должна вернуть пустой массив если start >= end: slice([1, 2, 3], 2, 2) → []", () => {
  expect(slice([1, 2, 3], 2, 2)).toEqual([]);
});

test("Должна вернуть пустой массив для пустого исходного: slice([], 0, 1) → []", () => {
  expect(slice([], 0, 1)).toEqual([]);
});

test("Исходный массив не должен измениться после вызова", () => {
  const arr = [1, 2, 3, 4];
  slice(arr, 1, 3);
  expect(arr).toEqual([1, 2, 3, 4]);
});

test("Должна нормализовать выходящий за границы start: slice([1, 2, 3], 5, 7) → []", () => {
  expect(slice([1, 2, 3], 5, 7)).toEqual([]);
});

test("Должна нормализовать уходящий за границы отрицательный start: slice([1, 2, 3], -10, 2) → [1, 2]", () => {
  expect(slice([1, 2, 3], -10, 2)).toEqual([1, 2]);
});

test("Должна работать с массивом строк", () => {
  expect(slice(['a', 'b', 'c', 'd'], 1, 3)).toEqual(['b', 'c']);
});

test("Должна выбросить TypeError если arr не массив", () => {
  expect(() => slice('not array', 0, 1)).toThrow(TypeError);
});

test("Должна выбросить TypeError если start не число", () => {
  expect(() => slice([1, 2, 3], '0', 1)).toThrow(TypeError);
});

test("Должна выбросить TypeError если end передан и не число", () => {
  expect(() => slice([1, 2, 3], 0, '1')).toThrow(TypeError);
});

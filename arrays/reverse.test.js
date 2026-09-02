// arrays/reverse.test.js
import { test, expect } from "bun:test";
import { reverse } from "./reverse.js";

test("Должна перевернуть массив из нечет. элементов: reverse([1, 2, 3]) → [3, 2, 1]", () => {
  expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
});

test("Должна перевернуть массив из чет. элементов: reverse([1, 2, 3, 4]) → [4, 3, 2, 1]", () => {
  expect(reverse([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
});

test("Должна вернуть тот же массив (проверь ===)", () => {
  const arr = [1, 2, 3];
  const result = reverse(arr);
  expect(result).toBe(arr);
});

test("Должна перевернуть массив из одного элемента: reverse([42]) → [42]", () => {
  expect(reverse([42])).toEqual([42]);
});

test("Должна вернуть пустой массив без изменений: reverse([]) → []", () => {
  expect(reverse([])).toEqual([]);
});

test("Должна работать с массивом строк: reverse(['a', 'b', 'c']) → ['c', 'b', 'a']", () => {
  expect(reverse(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);
});

test("Должна работать с массивом смешанных типов: reverse([1, 'two', null]) → [null, 'two', 1]", () => {
  expect(reverse([1, 'two', null])).toEqual([null, 'two', 1]);
});

test("Двойной reverse должен вернуть исходный порядок", () => {
  const original = [1, 2, 3];
  const copy = [...original];
  reverse(copy);
  reverse(copy);
  expect(copy).toEqual(original);
});

test("Должна выбросить TypeError если arr не массив", () => {
  expect(() => reverse('not an array')).toThrow(TypeError);
});

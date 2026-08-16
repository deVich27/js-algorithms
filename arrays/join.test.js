import { test, expect } from "bun:test";
import { join } from "./join.js";

test("Должна склеить с разделителем по умолчанию (запятая): join([1, 2, 3]) → '1,2,3'", () => {
  expect(join([1, 2, 3])).toBe('1,2,3');
});

test("Должна склеить с явным разделителем: join([1, 2, 3], '-') → '1-2-3'", () => {
  expect(join([1, 2, 3], '-')).toBe('1-2-3');
});

test("Должна склеить с пробелом: join(['a', 'b', 'c'], ' ') → 'a b c'", () => {
  expect(join(['a', 'b', 'c'], ' ')).toBe('a b c');
});

test("Должна склеить с пустым разделителем: join(['a', 'b', 'c'], '') → 'abc'", () => {
  expect(join(['a', 'b', 'c'], '')).toBe('abc');
});

test("Должна вернуть '' для пустого массива", () => {
  expect(join([])).toBe('');
});

test("Должна вернуть строку из одного элемента без разделителя: join([42], ',') → '42'", () => {
  expect(join([42], ',')).toBe('42');
});

test("Должна работать с булевыми значениями: join([1, true, false]) → '1,true,false'", () => {
  expect(join([1, true, false])).toBe('1,true,false');
});

test("Исходный массив не должен измениться", () => {
  const arr = [1, 2, 3];
  join(arr, '-');
  expect(arr).toEqual([1, 2, 3]);
});

test("Должна выбросить TypeError если arr не массив", () => {
  expect(() => join('not array')).toThrow(TypeError);
});

test("Должна выбросить TypeError если separator передана и не строка", () => {
  expect(() => join([1, 2, 3], 5)).toThrow(TypeError);
});

import { test, expect } from "bun:test";
import { splice } from "./splice.js";

test("Должна удалить элемент из середины: splice([1, 2, 3, 4], 1, 2)", () => {
  const arr = [1, 2, 3, 4];
  const removed = splice(arr, 1, 2);
  expect(removed).toEqual([2, 3]);
  expect(arr).toEqual([1, 4]);
});

test("Должна удалить с начала: splice([1, 2, 3], 0, 1)", () => {
  const arr = [1, 2, 3];
  const removed = splice(arr, 0, 1);
  expect(removed).toEqual([1]);
  expect(arr).toEqual([2, 3]);
});

test("Должна удалить с конца: splice([1, 2, 3], 2, 1)", () => {
  const arr = [1, 2, 3];
  const removed = splice(arr, 2, 1);
  expect(removed).toEqual([3]);
  expect(arr).toEqual([1, 2]);
});

test("Должна удалить всё от start до конца если deleteCount не передан: splice([1, 2, 3, 4], 2)", () => {
  const arr = [1, 2, 3, 4];
  const removed = splice(arr, 2);
  expect(removed).toEqual([3, 4]);
  expect(arr).toEqual([1, 2]);
});

test("Должна вернуть пустой массив если deleteCount = 0: splice([1, 2, 3], 1, 0)", () => {
  const arr = [1, 2, 3];
  const removed = splice(arr, 1, 0);
  expect(removed).toEqual([]);
  expect(arr).toEqual([1, 2, 3]);
});

test("Должна поддерживать отрицательный start: splice([1, 2, 3, 4], -2, 1)", () => {
  const arr = [1, 2, 3, 4];
  const removed = splice(arr, -2, 1);
  expect(removed).toEqual([3]);
  expect(arr).toEqual([1, 2, 4]);
});

test("Должна обрезать deleteCount если он больше оставшихся элементов: splice([1, 2, 3], 1, 5)", () => {
  const arr = [1, 2, 3];
  const removed = splice(arr, 1, 5);
  expect(removed).toEqual([2, 3]);
  expect(arr).toEqual([1]);
});

test("Должна вернуть пустой массив если start >= len: splice([1, 2, 3], 5, 1)", () => {
  const arr = [1, 2, 3];
  const removed = splice(arr, 5, 1);
  expect(removed).toEqual([]);
  expect(arr).toEqual([1, 2, 3]);
});

test("Должна вставить элементы на место удалённых: splice([1, 2, 3], 1, 1, 'a', 'b')", () => {
  const arr = [1, 2, 3];
  const removed = splice(arr, 1, 1, 'a', 'b');
  expect(removed).toEqual([2]);
  expect(arr).toEqual([1, 'a', 'b', 3]);
});

test("Должна вставить элементы без удаления: splice([1, 2, 3], 1, 0, 'x')", () => {
  const arr = [1, 2, 3];
  const removed = splice(arr, 1, 0, 'x');
  expect(removed).toEqual([]);
  expect(arr).toEqual([1, 'x', 2, 3]);
});

test("Должна вставить в начало: splice([2, 3], 0, 0, 0, 1)", () => {
  const arr = [2, 3];
  const removed = splice(arr, 0, 0, 0, 1);
  expect(removed).toEqual([]);
  expect(arr).toEqual([0, 1, 2, 3]);
});

test("Должна вставить в конец: splice([1, 2], 2, 0, 3, 4)", () => {
  const arr = [1, 2];
  const removed = splice(arr, 2, 0, 3, 4);
  expect(removed).toEqual([]);
  expect(arr).toEqual([1, 2, 3, 4]);
});

test("Должна заменить элементы: splice([1, 2, 3], 0, 2, 'a')", () => {
  const arr = [1, 2, 3];
  const removed = splice(arr, 0, 2, 'a');
  expect(removed).toEqual([1, 2]);
  expect(arr).toEqual(['a', 3]);
});

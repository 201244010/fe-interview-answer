/**
 * 写一个数组去重的方法（支持多维数组）
 * ES6 可以利用 set,
 */

// 使用 set 时，如果数据是 object，是没法去重的
// 如 new Set([{a:1},{a:1},{a:1}]) set 的 size 为 3

// 打平多维数组的情况
// ES6
const uniqueArr = (arr) => [
  ...new Set(
    arr.reduce(
      (prev, cur) =>
        Array.isArray(cur) ? prev.concat(...uniqueArr(cur)) : prev.concat(cur),
      []
    )
  )
];

console.log(uniqueArr([1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 5, 6]));
console.log(uniqueArr([1, 2, 3, 4, 4, 3, 2, 1, [1, 2, 3, [4, 3, 2, 1]]]));
console.log(
  uniqueArr([
    1,
    2,
    3,
    [1, 2, 3, [1, 2, 3, [1, 2, 3, [1, 2, 3, [1, 2, 3, [1, 2, 3]]]]]]
  ])
);

// ES5
const uniqueArrES5 = (arr) => {
  const unique = [];
  const flattedArr = arr.reduce(
    (prev, cur) =>
      Array.isArray(cur)
        ? prev.concat(uniqueArrES5(cur))
        : prev.concat(cur),
    []
  );

  while (flattedArr.length > 0) {
    const head = flattedArr.shift();
    if (flattedArr.indexOf(head) < 0) {
      unique.push(head);
    }
  }
  return unique;
};

console.log(
  uniqueArrES5([1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1, 5, 6])
);
console.log(uniqueArrES5([1, 2, 3, 4, 4, 3, 2, 1, [1, 2, 3, [4, 3, 2, 1]]]));
console.log(
  uniqueArrES5([
    1,
    2,
    3,
    [1, 2, 3, [1, 2, 3, [1, 2, 3, [1, 2, 3, [1, 2, 3, [1, 2, 3]]]]]]
  ])
);

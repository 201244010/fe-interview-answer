/**
 * 请实现一个flattenDeep函数，把多维数组扁平化
 */

const deepFlatten = (arr) => {
  let result = [];
  arr.forEach((item) => {
    Array.isArray(item)
      ? (result = [...result, ...deepFlatten(item)])
      : (result = [...result, item]);
  });

  return result;
};

// ES5
// const deepFlattenES5 = (arr) => {
//   let result = [];
//   arr.forEach((item) => {
//     Array.isArray(item)
//       ? result = result.concat(deepFlattenES5(item))
//       : result.push(item);
//   });

//   return result;
// };

// 最优雅的方法
// const deepFlatten = (arr) =>
//   [].concat(
//     ...arr.map((item) => (Array.isArray(item) ? deepFlatten(item) : item))
//   );

const arr = [
  1,
  [2, 3, "a", ["b"], ["c", "d", "e"]],
  [4, 5, 6, [7, 8, 9, [10, 11, 12]]]
];
console.log(deepFlatten(arr));
// console.log(deepFlattenES5(arr));

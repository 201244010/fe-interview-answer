/**
 * 写一个函数找出给定数组中的最大差值
 * 思路： 找最大值和最小值做差
 * 方法1: 排序
 * 方法2: 利用 Math.max 和 Math.min
 */

// 使用 Math.max 和 Math.min 会更加优雅
const getMaxDiff = arr => Math.max(...arr) - Math.min(...arr);

// const getMaxDiff = arr => {
//   const sortedArr = arr.sort((a, b) => a - b);
//   return sortedArr[sortedArr.length - 1] - sortedArr[0];
// };

console.log(getMaxDiff([1, 2, 3, 4, 5]));
console.log(getMaxDiff([7, 8, 3, 2, 0, 9, 12]));
console.log(getMaxDiff([100, 2, 3, 6, 101, 33, 76]));
console.log(getMaxDiff([1, 2, 2, 2, 2, 2, 2, 2, 2]));

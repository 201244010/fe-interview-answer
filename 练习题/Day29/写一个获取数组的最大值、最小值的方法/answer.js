/**
 * 写一个获取数组的最大值、最小值的方法
 */

const getMinAndMax = arr => ({
  // 数组展开在 ES5 中可以用 apply 代替
  // ES5: Math.min.apply(null, arr)
  min: Math.min(...arr),
  max: Math.max(...arr)
});

console.log(getMinAndMax([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(getMinAndMax([12, 223, 13, 4, 25, 36, 7, 18, 90]));

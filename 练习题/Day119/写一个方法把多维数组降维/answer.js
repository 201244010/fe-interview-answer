/**
 * 写一个方法把多维数组降维
 */

const flatArr = (arr, deep = false) =>
  arr.reduce((prev, cur) => {
    if (deep && Array.isArray(cur)) {
      return prev.concat(flatArr(cur, deep));
    } else {
      return prev.concat(cur);
    }
  }, []);

const arr = [1, [2, [3, [4, [5], 6], 7], 8], 9];
const arr2 = [{}, [{}, {}, {}, [2, 3, 4, [5, 6, 7, [{}, {}]]]]];
console.log(flatArr(arr, true));

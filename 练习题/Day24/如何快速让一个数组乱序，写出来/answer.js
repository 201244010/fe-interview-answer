/**
 * 如何快速让一个数组乱序，写出来
 */

// sort + 随机数是个比较方便的方法。
// 增大样本进行实验之后可以发现这种乱序方案并不是完全随机的（所有元素会大概率停留在自己的初始位置)
const randomSort = () => (Math.random() > 0.5 ? 1 : -1);

// 可以使用洗牌算法进行排序，效果会比较好
// 洗牌算法的原理是交换数组中随机的两个位置
const shuffle = (arr) => {
  const arrLen = arr.length;
  for (let i = 0; i < arrLen; i++) {
    const randomIndex = Math.floor(Math.random() * arrLen);
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
};

console.log([1, 2, 3, 4, 5].sort(randomSort));
console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

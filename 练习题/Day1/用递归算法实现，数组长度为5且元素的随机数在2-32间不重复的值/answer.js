/**
 * 这是一道大题目，把考点拆成了4个小项；需要侯选人用递归算法实现（限制15行代码以内实现；限制时间10分钟内完成）：
 * a) 生成一个长度为5的空数组arr。
 * b) 生成一个（2－32）之间的随机整数rand。
 * c) 把随机数rand插入到数组arr内，如果数组arr内已存在与rand相同的数字，则重新生成随机数rand并插入到arr内[需要使用递归实现，不能使用for/while等循环]
 * d) 最终输出一个长度为5，且内容不重复的数组arr。
 */

const getRandomNumber = (min = 2, max = 32) =>
  parseInt(Math.random() * (max - min + 1) + min, 10);

const arr = new Array(5);

// 如果不是要求先创建长度为 5 的空数组可以少传 index 参数
const getUniqNumber = (arr, index, num, limit = 5) => {
  if (index >= limit) {
    return arr;
  }

  if (arr.includes(num)) {
    return getUniqNumber(arr, index, getRandomNumber(), limit);
  } else {
    arr[index] = num;
    return getUniqNumber(arr, index + 1, getRandomNumber(), limit);
  }
};

const res = getUniqNumber(arr, 0, getRandomNumber());

console.log(res);

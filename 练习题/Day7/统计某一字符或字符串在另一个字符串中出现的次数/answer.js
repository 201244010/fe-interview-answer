/**
 * 统计某一字符或字符串在另一个字符串中出现的次数
 */

const countAppears = (str, target) => {
  let count = 0;

  if (!str || !target) {
    return count;
  }

  const keyIndex = target.indexOf(str);
  if (keyIndex > -1) {
    count = 1 + countAppears(str, target.slice(keyIndex + 1));
  }

  return count;
};

const str = "abcaaadefg2333333333334abcddddea";

console.log(countAppears("2", str));
console.log(countAppears("b", str));
console.log(countAppears("d", str));
console.log(countAppears("a", str));
console.log(countAppears("f", str));

// 更优雅
const countBySplit = (str, target) => target.split(str).length - 1;

/**
 * 写一个方法随机生成指定位数的字符串
 */

 /**
  * Math.random() => 生成 0-1 之间的小数
  * toString(radix) => radix 为进止，默认为 10（0-9）最大为 36(0-9, a-z)
  * Math.random().toString(36) => 最前面会有 0. 两位，因此要用 substr 去掉前两位
  */
const createRandomString = () =>
  Math.random()
    .toString(36)
    .substr(2);

const getRandomString = (len) => {
  let randomStr = "";
  while (randomStr.length < len) {
    randomStr += createRandomString();
  }
  return randomStr.slice(randomStr.length - len);
};

console.log(getRandomString(2));
console.log(getRandomString(4));
console.log(getRandomString(6));
console.log(getRandomString(12));
console.log(getRandomString(30));

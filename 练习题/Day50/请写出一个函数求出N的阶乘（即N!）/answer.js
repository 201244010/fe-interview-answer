/**
 * 请写出一个函数求出N的阶乘（即N!）
 */

const stepNum = (num) => (num === 1 ? num : num * stepNum(num - 1));

console.log(stepNum(3))
console.log(stepNum(4))
console.log(stepNum(5))
console.log(stepNum(6))

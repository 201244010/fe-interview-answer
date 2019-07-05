/**
 * 写一个判断数据类型的方法
 */

const typeCheck = (obj) => {
  const typeStr = Object.prototype.toString.call(obj);
  return typeStr.toLowerCase().slice(8, typeStr.length - 1);
};

console.log(typeCheck("str"));
console.log(typeCheck(1));
console.log(typeCheck(() => null));
console.log(typeCheck({a: 1}));
console.log(typeCheck([1, 2, 3]));
console.log(typeCheck(new Set([1,2,3])));

/**
 * 写一个方法，使得sum(x)(y)和sum(x,y)返回的结果相同
 * 思路: 泛柯理化的应用
 */

const sum = (x, y) => x + y;
const sum3 = (x, y, z) => x + y + z;
const pow = (x, y) => Math.pow(x, y);

const curry = (fn, args) => {
  const argLen = fn.length;
  const tempArgList = args || [];
  console.log("temp arg list: ", tempArgList);
  return (...input) => {
    const _args = tempArgList.concat(input);
    console.log("input arg list: ", _args);
    if (_args.length < argLen) {
      return curry(fn, _args);
    } else {
      return fn(..._args);
    }
  };
};

const currySum = curry(sum);
console.log(currySum(1)(2));
console.log(currySum(1, 2));

const curryPow = curry(pow);
console.log(curryPow(2)(2));
console.log(curryPow(2, 2));

const currySum3 = curry(sum3);
console.log(currySum3(1)(2)(3));
console.log(currySum3(1)(2, 3));
console.log(currySum3(1, 2)(3));
console.log(currySum3(1, 2, 3));

/**
 * 写一个验证身份证号的方法
 * 思路: 
 * 1. 粗暴型: 只考虑位数、最后的 x \d{17}[\dXx]
 * 2. 一般型: 前 6 位区号 \d{6} 
 *           中间年份 \d{4} 可以增加年份判断
 *           月份 01-12 月 0[1-9]|1[0-2]
 *           日期 01-31 日 0[1-9]|[12][0-9]|3[01]
 *           顺序码 \d{3}
 *           校验码 [\dXx] 其实有校验算法，可以根据算法再做一次检查
 *           https://zhuanlan.zhihu.com/p/21286417
 */

const isValidIdentity = (id) => {
  if (
    /^\d{6}\d{4}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])\d{3}[\dXx]$/.test(id)
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(isValidIdentity(123456789012345678));
console.log(isValidIdentity(123456190011301234));
console.log(isValidIdentity("123456190013301234"));
console.log(isValidIdentity("123456190010321234"));
console.log(isValidIdentity('12345619001130123x'));
console.log(isValidIdentity('12345619001130123X'));

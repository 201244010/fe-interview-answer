/**
 * 写一个把字符串大小写切换的方法
 */

const convertCase = (str) =>
  str
    .split("")
    .map((s) => (/[A-Z]/.test(s) ? s.toLowerCase() : s.toUpperCase()))
    .join("");

console.log(convertCase('AbCdE'))
console.log(convertCase('aaabbbCCCDDDeeefff'))
console.log(convertCase('aBcDe'))
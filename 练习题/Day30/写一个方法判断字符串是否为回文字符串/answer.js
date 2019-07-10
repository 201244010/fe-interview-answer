/**
 * 写一个方法判断字符串是否为回文字符串
 */

const isPalindrome = (str) =>
  str ===
  str
    .split("")
    .reverse()
    .join("");

console.log(isPalindrome("abc"));
console.log(isPalindrome("abcdcba"));
console.log(isPalindrome("abccba"));
console.log(isPalindrome("abccbaabc"));

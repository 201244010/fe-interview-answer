/**
 * 写一个方法把下划线命名转成大驼峰命名
 * 正好自己项目中有用到，为此写了个库 milk-shake
 * https://github.com/Konata9/milk-shake
 */

const toCamel = str =>
  str
    .split("_")
    .filter(s => !!s)
    .map((s, index) => (index === 0 ? s : s[0].toUpperCase() + s.slice(1)))
    .join("");

console.log(toCamel("a_bc_d"));
console.log(toCamel("bc_d"));
console.log(toCamel("bc___________ed"));
console.log(toCamel("_______a_bc_d__"));

// 顺便写的驼峰转下划线
const toSnake = str => {
  const target = str[0].toLowerCase() + str.slice(1);
  let result = target;
  (target.match(/[A-Z]/g) || []).forEach(word => {
    result = result.replace(word, `_${word.toLowerCase()}`);
  });
  return result;
};

console.log(toSnake("aBcDeFg"));
console.log(toSnake("ABCDEFG"));

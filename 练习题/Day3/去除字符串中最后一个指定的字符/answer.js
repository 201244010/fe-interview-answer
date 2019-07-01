/**
 * 去除字符串中最后一个指定的字符
 */

const removeRight = (str, target) => {
  if (!str || !target) {
    return str;
  }

  const idx = str.lastIndexOf(target);
  if (idx > -1) {
    return str.slice(0, idx) + str.slice(idx + 1);
  } else {
    return str;
  }
};

const str = "aaa1 bc de a 2";

console.log(removeRight(str, "e"));
console.log(removeRight(str, "a"));
console.log(removeRight(str, "c"));

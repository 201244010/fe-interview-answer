/**
 * 写一个方法去掉字符串中的空格，要求传入不同的类型分别能去掉前、后、前后、中间的空格
 */

const trimString = ({str = "", position = "both"}) => {
  if (!str) {
    return str;
  }

  const removePos = {
    left: () => str.replace(/^\s+/, ""),
    right: () => str.replace(/\s+$/, ""),
    both: () => str.replace(/(^\s+)|(\s+$)/g, ""),
    middle: () =>
      str
        .split(" ")
        .map((item) => (item ? item : " "))
        .join(""),
    all: () => str.split(" ").join("")
  };

  return removePos[position]();
};

const a = "  12a b cde fff ";
console.log("trim left:", trimString({str: a, position: "left"}));
console.log("trim right:", trimString({str: a, position: "right"}));
console.log("trim middle", trimString({str: a, position: "middle"}));
console.log("trim both:", trimString({str: a}));
console.log("trim all:", trimString({str: a, position: "all"}));

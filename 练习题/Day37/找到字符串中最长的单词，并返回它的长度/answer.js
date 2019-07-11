/**
 * 找到字符串中最长的单词，并返回它的长度
 * 思路: 如果是英文字符串的话，通常是空格进行分割（可以对分割符做一个拓展）
 *      分割完之后循环数组即可
 */

const getLongestWord = (str, sperator = " ") => {
  if (!str) {
    return str;
  }

  let longestWord = {
    len: 0,
    word: ""
  };

  str
    .replace(/[,\.;'"]/g, "")
    .split(sperator)
    .forEach(word => {
      const { len } = longestWord;
      if (word.length > len) {
        longestWord = {
          len: word.length,
          word
        };
      }
    });
  return longestWord;
};

console.log(getLongestWord("I have an apple."));
console.log(getLongestWord("I have a pen."));

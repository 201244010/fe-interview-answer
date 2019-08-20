## Day 102 解答

### 准确说出'1,2,3,4'.split()的结果是什么（包括类型和值）？

答案为 `['1,2,3,4']` 即长度为 1 的数组，里面内容为字符串。

`split([separator[, limit]])` 方法接受两个参数（做这题之前只知道一个）

- separator 为分隔符，用来做分割。如果不传，则返回包含整个字符串的数组（像本题）。如果传了 `""` 则会分割每个字符，经常用此方法来转化程数组。`separator` 接受正则表达式。一般来说分隔符不会出现在返回的数组中，但如果正则使用了`()`（捕获符）那么返回值中就会包含匹配的内容。

- limit 是对分割后的数组长度做限制的。当分割出的数组长度大于 `limit` 时，就会被截断。比如 `'123456'.split('',3) => ['1','2','3']`。

参考文档： [MDN String.prototype.split()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split)

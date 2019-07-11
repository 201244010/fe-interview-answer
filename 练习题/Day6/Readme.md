## Day 6 解答

### 用css创建一个三角形，并简述原理
与 Day33 一样。CodePen 例子: https://codepen.io/Konata9/pen/WqPxML

### 写一个去除制表符和换行符的方法

一般去除字符串中字符使用正则 + `str.replace` 居多。

制表符正则: `\t`，换行符正则: `\n\r`

制表符 + 换行符正则: `\t|\n\r`
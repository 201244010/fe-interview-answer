## Day 6 解答

### label 都有哪些作用？并举相应的例子说明

HTML 的 `label` 标签一般用在 `form` 表单中，通过 `for` 属性与对应的 `id` 进行绑定。此时点击 `label` 会自动聚焦到对应的 DOM 上。

```html
<label for="inputText">input</label> <input id="inputText" />
```

利用关联性这一点，可以使用 `label` 对 `checkBox`, `radio` 进行美化和自定义。

`input` 的 `focus` 事件会触发锚点定位，我们可以利用 `label` 当触发器实现选项卡切换效果。[效果地址](https://demo.cssworld.cn/6/4-3.php)

### 用 css 创建一个三角形，并简述原理

与 Day33 一样。CodePen 例子: https://codepen.io/Konata9/pen/WqPxML

### 写一个去除制表符和换行符的方法

一般去除字符串中字符使用正则 + `str.replace` 居多。

制表符正则: `\t`，换行符正则: `\n\r`

制表符 + 换行符正则: `\t|\n\r`

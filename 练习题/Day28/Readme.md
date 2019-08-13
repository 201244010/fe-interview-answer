## Day28 解答

### 说说你对<meta>标签的理解

### rgba()和 opacity 这两个的透明效果有什么区别呢？

### 解释下这段代码的意思！

```javascript
// $$('*') 为获取所有 dom 元素，返回数组
[].forEach.call($$("*"), function(a) {
  // forEach 的回调函数，这里的 a 是数组中每个 dom 元素，不是 a 标签
  a.style.outline =
    // ～～是取整 1<<24 是位运算 结果为 16777216
    // 之后的 toString(16) 为进行 16 进制的转换 即颜色
    "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
});
```

因此这段代码的意思为，给页面所有 `dom` 元素添加随机颜色的边框。

### 在浏览器中输入 url 到页面显示出来的过程发生了什么？

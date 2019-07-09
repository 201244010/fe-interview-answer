## Day28 解答

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

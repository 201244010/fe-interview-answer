## Day28 解答

### 说说你对<meta>标签的理解

`<meta>` 标签放在 `<head>` 中间，不会在网页中显示，主要是给机器以及爬虫来阅读的。

比较常用的属性有下面几个：

- charset: 在 HTML5 中推荐的用法，一般设为 UTF-8 防止出现乱码。 `<meta charset="UTF-8" />`
- name 与 content 的搭配使用: `<meta name="xxx" content="xxx" />`
  - name=viewport: 移动端开发使用的属性，用来设置视窗的宽度，是否允许缩放等。与 _Day 10 viewport 常见设置都有哪些？_ 相关
  - name=author: 用来设置作者，给 SEO 使用
  - name=description: 页面的描述，在浏览器用作书签时会显示对应的内容
  - name=keywords: 网页的关键字，给 SEO 使用
- http-equiv 与 content 的搭配使用
  - refresh: 允许页面在一定时间后刷新或者重定向到另一个地址

参考文章：
[HTML meta 标签总结与属性使用介绍](https://segmentfault.com/a/1190000004279791)
[`<meta>` MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta)

### rgba()和 opacity 这两个的透明效果有什么区别呢？

`rgba` 只对颜色有影响。如果放在 `background` 上的话，只对背景颜色有影响。不会影响元素中的其他内容以及子元素内容。

`opacity` 的透明效果是作用整个元素以及其子元素上的。

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

## Day 29 解答

### 你了解什么是无障碍 web（WAI）吗？在开发过程中要怎么做呢？

无障碍 web 是指能让视觉障碍的人也能根据屏幕阅读器的提示阅读网页。这一块只知道一个大致概念，国内使用较少（甚至还遇到过加了 `title` 被测试提 bug 的情况）

目前能想到的只有下面几点：

- 尽可能地使用语义化标签，如 `<section>`, `<article>` 等标签
- `img` 标签添加 `alt`
- `button` 或者按钮上添加 `title`
- 表单尽量使用 `label` for 可以和控件的 id 进行关联

参考文章：
[无障碍 Web](https://mp.weixin.qq.com/s/3QNXBpGB0ZiroV8OGnXCbA)

### 请描述 css 的权重计算规则

一般的权重规则如下。

`!important (正无穷) > 内联样式(1000) > #id(100) > .class(10) > tag(1) > *(0)`

其中伪类和属性选择器([type='xxx']) 的权重与 class 相同；伪元素的权重与 tag 相同。

权重从左往右进行比较，只有前一级相等时才会向后比较。当权重相同时，靠后的样式会覆盖靠前的样式（这里的靠后是 CSS 文件中的顺序，不是 class 中的顺序）

```css
.title {
  color: red;
}

.title {
  /* 真正生效的是这个 */
  color: green;
}
```

```html
<h1 class="title">2333</h1>
```

这题与 _Day23 说说 CSS 的优先级是如何计算的？_ 是类似的。

## Day 16 解答

### 元素的 alt 和 title 有什么区别？

`alt` 用在 `img` 标签上，当图像加载不出时用作说明文字。另外视觉障碍者也可以从 `alt` 中获取到相关的信息。一般情况下，在使用 `img` 标签的时候都应该加上 `alt` 属性。

`title` 属性则是对于内容的补充，除了 `img` 之外还能用在其他标签上。当鼠标移到某个文字、图片上停留一会时，出现的小方框就是 `title`。还记得 antd 那个圣诞“彩蛋”么，那时的 `Button` 组件都会有 `HOHOHO` 的 `title`。同样，对于视觉障碍者也可以从 `title` 上获取信息。一般情况下，我们是不需要使用到 `title` 这个属性的。

参考文章：[知らないと恥ずかしい？ title 属性と alt 属性の役割と違い・使い分け方【HTML】](https://jill-tone.com/html_title_alt/#toc_id_1)

### 请描述 margin 边界叠加是什么及解决方案

`margin` 的边界叠加发生在竖直方向上（左右方向上不会叠加）。兄弟 DOM 节点、父元素中的第一个子节点、以及最后一个尾节点都会产生 `margin` 边界叠加的现象。由于 CSS 早期主要用在文字、图片排版上，因此上下 `margin` 的叠加是符合预期效果的。

`margin` 边界叠加从结果上来看就是以最大的值为准。

```html
<style>
  .b1 {
    width: 100px;
    height: 100px;
    margin-bottom: 30px;
  }
  // 最终两个 div 的 margin 为 40px，以最大的值为准。
  .b2 {
    width: 100px;
    height: 100px;
    margin-bottom: 40px;
  }
</style>

<div class="b1"></div>
<div class="b2"></div>
```

`margin` 边界叠加只会出现在普通文档流中，所以可以触发 BFC 来解决。
除此之外，也可以使用 `padding` 来代替 `margin` 或者增加 `border` 的值。

参考文章: [余白が消える margin の相殺って何?回避策を徹底解説](https://www.webnoiroha.net/webdesign/css/margin-offset/#margin-4)

### 返回到顶部的方法有哪些？把其中一个方法出来

1. 利用 `a` 标签的锚点。在顶部放一个 `a` 标签 `<a name="top">顶部</a>`，在需要回到顶部的位置放置一个 `a` 标签，地址为 `top`。 `<a href="#top">回到顶部</a>`。要做成隐藏的锚点，可以把内部的内容去掉，`name` 是必须的。

2. 利用 `#`，在 url 后增加 `#` 不会让页面刷新，并且可以回到顶部。可以对 `location.href` 进行设置 `location.href += '#'`。当这个方法执行多次即有多个 `#` 时，页面不会有响应。

3. 利用 `javascript` 设置 `scrollTop = 0`，一般设置在最外层，即 `document.documentElement.scrollTop = 0` 就可以返回顶部。

## Day 7 解答

### iframe 框架都有哪些优缺点？

#### 优点：

- 可以实现异步刷新，单个 `iframe` 刷新不影响整体窗口的刷新（可以实现无刷新上传，在 `FormData` 无法使用时）
- 可以实现跨域，每个 `iframe` 的源都可以不相同（方便引入第三方内容）
- 多页面应用时，对于共同的 `header`, `footer` 可以使用 `iframe` 加载，拆分代码（导航栏的应用）

#### 缺点：

- 每一个 `iframe` 都对应着一个页面，也就意味着多余的 `css`, `js` 文件的载入，会增加请求的开销
- 如果 `iframe` 内还有滚动条，会严重影响用户体验
- `window.onload` 事件会在所有 `iframe` 加载完成后才触发，因此会造成页面阻塞

参考文章: [Iframe 有什么好处，有什么坏处？国内还有哪些知名网站仍用 Iframe，为什么？有哪些原来用的现在抛弃了？又是为什么？](https://www.zhihu.com/question/20653055)

### 简述你对 BFC 规范的理解

BFC 全称“块级格式化上下文”(Block Formatting Context)，对应的还有 IFC。BFC 类似一个“结界”，如果一个 DOM 元素具有 BFC，那么它内部的子元素不会影响外面的元素；外面的元素也不会影响到其内部元素。

最常见的例子就是清除 `float` 的 `overflow: hidden;` 属性。`overflow: hidden;` 会触发元素的 BFC，因此其内部的 `float` 元素不会影响到外部元素的布局。

触发 BFC 的条件：

- `<html>` 根元素
- `float` 不为 `none`
- `overflow` 为 `auto`,`scroll`,`hidden`
- `display` 的值为 `table-cell`, `table-caption`,`inline-block` 中任何一个
- `position` 的值不为 `static` 和 `relative`

BFC 可以实现更加健壮的自适应布局。

参考文章：《CSS 世界》

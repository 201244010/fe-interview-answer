## Day 11 解答

### 你对标签语义化的理解是什么？

标签语义化的初衷是让正确的标签做正确的事情，但对于人来说，标签的语义除了在 `tag` 上体现，还可以从 `id`, `class` 上体现出来。

而每个人对于标签的理解都会存在不同，因此强制规定哪个标签怎么用就不是很好。我的理解标签语义化更多的是为 SEO 进行服务。让爬虫更方便地找到想要的信息。

### css 常用的布局方式有哪些？

- 流式布局: 最基本的布局，就是顺着 html 像流水一样流下来
- 绝对定位: 利用 `position: absolute` 进行绝对定位的布局
- float 布局: 最初用来解决多栏布局的问题。比如圣杯、双飞燕的布局都可以用 `float` 来实现
- 珊格布局: bootstrap 用的布局，把页面分为 24 分，通过 row 和 col 进行布局
- flex 布局: css3 的布局可以非常灵活地进行布局和排版
- grid 布局: 网格布局

### 简要描述下 JS 有哪些内置的对象

JS 的内置对象也称为“全局作用域里的对象”。与“全局对象”不同，全局对象是通过 `this` 访问（在浏览器里也就是 `window` 对象）。

标准的内置对象可以理解为可以直接调用的对象。常用的有下面这些:

- undefined
- NaN
- null
- eval()
- parseInt() / parseFloat()
- encodeURI() / encodeURIComponent()
- decodeURI() / decodeURIComponent()
- Number / Math / Date / RegExp / Array / String / Map / WeekMap / Set / WeekSet / Symbol / Object / Function / Error (都是可以 `new` 出来的对象)
- JSON

完整的对象要参考 MDN：[JavaScript 标准内置对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)

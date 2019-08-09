## Day 25 解答

### 请说说 `<script>`、`<script async>` 和 `<script defer>` 的区别

单纯的 `<script>` 会阻塞 DOM 的渲染，如果放在 `<head>` 标签中，对页面的显示会有延迟。如果是用过 `src` 引入外部资源时，浏览器会先停止解析下载外部资源，之后再执行其中的 `javaScript`（即立即加载并渲染）。

在添加 `async` 或者 `defer` 之后，`<script>` 的下载不会阻塞 DOM 的渲染。两者的区别如下：

- `async` 在脚本下载完成后立即执行（此时会阻塞 DOM 的渲染），并且多个 `async` 脚本存在时，执行的顺序取决于下载完成的顺序。因此对于有前后依赖关系的脚本（比如 jQuery 以及依赖 jQuery 的组件库，就不适合 `async`）
- `defer` 在的脚本执行放在 DOM 渲染之后（对于老的浏览器如果不支持 `defer` 就不行了）。并且多个脚本时，其执行顺序时按照引入顺序执行的。比较符合实际项目众多的需求，但为了兼容老版本浏览器，最佳的实践还是把 `<script>` 放在 `</body>` 前。

三者在浏览器渲染时的区别：
![](http://segmentfault.com/img/bVcQV0)

参考文章：
[スクリプトの非同期読み込み(async, defer の違い)](https://www.wakuwakubank.com/posts/614-javascript-async-defer/)
[defer 和 async 的区别](https://segmentfault.com/q/1010000000640869)

### 在页面中的应该使用奇数还是偶数的字体？为什么呢？

在网页中通常使用偶数号字体。使用偶数号字体的好处有以下几点：

- 容易与网页上的元素形成倍数布局
- 设计师给出的设计稿通常为偶数字体
- Chrome 对于最小字体限制在 12px
- 部分字体在奇数号字体下与偶数字体表现形式相差不大

参考文章：[谈谈网页中使用奇数字体和偶数字体](https://blog.csdn.net/jian_xi/article/details/79346477)

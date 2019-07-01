## Day1 解答

### 页面导入样式时，使用 link 和@import 有什么区别？

1. link 是 XHTML 标签；@import 属于 CSS 范畴，只能加载 CSS
2. link 在页面载入时同时加载；@import 在页面完全载入后加载（网速较差的情况下会出现闪屏情况）
3. link 不存在兼容问题；@import 存在兼容问题（IE 5 以下有问题，但现在基本不存在问题
4. link 支持使用 JS 控制 DOM 改变样式；@import 不支持

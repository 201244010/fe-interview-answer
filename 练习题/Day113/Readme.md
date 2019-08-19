## Day 113 解答

### 标签、class和id选择器三者的区别是什么？分别在什么时候用？

三者的权重不同，都可以作为 CSS 的选择器使用。id > class > tag。

不过在一般的使用中，`id` 会留给 JavaScript 使用，用来进行 DOM 的操作并且 `id` 不允许重复。`class` 和 `tag` 一般用在 CSS 上，用来进行样式的编辑。
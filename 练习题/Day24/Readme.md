## Day 24 解答

### 说说你对属性 data-的理解

原本 HTML 也允许自定义 `attributes` 因此在早期前端，为了将数据塞在标签中，往往会采用自定义属性存放数据的方法。

而 `data-` 便是 HTML 5 中用来存放数据的标签。使用 `data-*` 时，需要注意，`data-` 之后的单词必须是小写的，但是可以用多个 `-` 连接。而在对应的 DOM 方法中，我们可以通过 `ele.dataset[属性名]` 进行访问。在这里的属性名可以使用驼峰（转换规则和 vue 的组件名称转换一样）。

相比之前的自定义属性存放数据，使用 `data-*` 的方法，在数据的获取上会比较方便。

参考文章：
[使用数据属性](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Using_data_attributes)

### 你有用过 CSS 预处理器吗？喜欢用哪个？原理是什么？

使用过 less 和 Scss。更加喜欢 Scss 一点，因为语法比较接近原生 CSS，又带了嵌套继承的写法看起来十分方便。

其原理应该是把 `.less` 和 `.scss` 文件进行解析，然后按照 CSS 语法再进行编译回去。

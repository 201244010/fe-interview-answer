## Day 15 解答

### title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别？

### style 标签写在 body 前和 body 后的区别是什么？

在 HTML4 的时候，不应该把 `style` 放到 `body` 中间。

浏览器在渲染页面时 DOM 和 CSSOM 是并行的，然后两者结合形成 Render Tree 显示页面。从直觉上来说，`style` 写在 `body` 前不会对 DOM 的渲染进行阻塞；而写在 `body` 内会对 DOM 渲染进行阻塞。会产生 FOUC（Flash of Unstyled Content) 的现象，既一瞬间的白屏或者样式的突然变化（原因是 Render Tree 重新生成了）。

不过 W3C 在 HTML5.2 的定义中对于 `style` 标签的使用的定义中是允许将 `style` 放到 `body` 中的。

> Contexts in which this element can be used:
> Where metadata content is expected.
> In a noscript element that is a child of a head element.
> In the body, where flow content is expected.

参考文章：
[Will it be a wrong idea to have \<style> in \<body>?](https://softwareengineering.stackexchange.com/questions/224422/will-it-be-a-wrong-idea-to-have-style-in-body)
[W3C The style element](https://www.w3.org/TR/html52/document-metadata.html#the-style-element)
[什么是 FOUC？如何避免 FOUC？](https://www.cnblogs.com/xianyulaodi/p/5198603.html)
[Understanding the Critical Rendering Path](https://bitsofco.de/understanding-the-critical-rendering-path/)

## Day 4 解答

### HTML5 的文件离线储存怎么使用，工作原理是什么？

HTML5 的离线存储
[HTML5 存储方式](https://segmentfault.com/a/1190000011516871)
[HTML5 离线存储原理](https://segmentfault.com/a/1190000006984353)

### CSS 选择器有哪些？哪些属性可以继承？

CSS 选择器可以用来控制 HTML 中的 HTML 元素。目前常用的是 `class` 选择器。配合 `saas`、`less` 结合嵌套继承写法会比较方便。

- CSS 选择器：
  单独使用的选择器

  - #id
  - .class
  - tag
  - \*

  组合选择器(element1, element2 为上面的选择器)

  - element1, element2 : 选择所有匹配 element1 和 element2 的元素
  - element1 element2 : 选择在 element1 内的 element2 元素（只要满足包含关系即可，不用关层级）
  - element1>element2 : 子代选择器，选择父元素是 element1 的 element2 元素（子代，孙子代的 element2 不会被选择）
  - element1+element2 : 相邻选择器，选择 element1 相邻（之后）的 element2 元素（紧邻的一个，相隔的不会被选择）

  属性选择器(对应 HTML 元素中的 attribute)

  - [attribute] : 所有满足 attribute 的元素
  - [attribute=value] : 所有满足 attribute=value 的元素。这里是支持正则的语法如 attribute^=value / attribute\$=value / attribute!=value / attribute~=value

  伪元素选择器(伪元素使用`:`，伪类使用`::`)

  伪类和伪元素是用来修饰不在文档树中的部分。伪类是当元素处于某个状态时的样式，比如 `hover`、`active`、`visited`。伪元素创建一些不在 DOM 树的元素，如 `::before`、`::after`。使用伪类和伪元素可以减少 DOM 节点。

  伪类选择器

  - :hover/:active/:visited : 表示状态
  - :first-child/:last-child/:not : 与结构相关

  伪元素选择器

  - ::before/::after : 为某个元素添加修饰，一般在元素前添加装饰。

更完整的伪类和伪元素可以参考 [MDN 相关内容](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements) 和 [总结伪类和伪元素](http://www.alloyteam.com/2016/05/summary-of-pseudo-classes-and-pseudo-elements/)


## Day 5 解答

### 简述超链接 target 属性的取值和作用

`a` 标签的 `target` 属性一共有四个值。

- `_self`

      	默认属性。在当前窗口或者框架中加载目标文档。

- `_blank`

      	打开新的窗口或者新的标签页。在使用这个属性时，最好添加 `rel="noopener norefferrer"` 属性，防止打开的新窗口对原窗口进行篡改。防止 `window.opener` API 的恶意行为。因为在新开的标签页里可以通过 `window.opener.location` 来获取原窗口的信息。

- `_parent`

      	在 `frame` 或者 `iframe` 中使用较多。在父级框架中载入目标文档，当 `a` 标签本身在顶层时，与 `_self` 相同。

- `_top`

      	在 `frame` 或者 `iframe` 中使用较多。直接在顶层的框架中载入目标文档，加载整个窗口。

### CSS3 新增伪类有哪些并简要描述

CSS3 中规定伪类使用一个 `:` 来表示；伪元素则使用 `::` 来表示。

CSS3 中新增的伪元素有以下这些:

- `:first-child / :last-child` 表示子元素结构关系的
- `:nth-child() / nth-last-child()` 用来控制奇数、偶数行的（控制表单奇数、偶数行的样式）
- `:first-of-type / :last-of-type` 表示一组兄弟元素中其类型的第一个元素 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first-of-type)
- `:nth-of-type() / :nth-last-of-type()` 这个选择器匹配那些在相同兄弟节点中的位置与模式 an+b 匹配的相同元素` [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-of-type)
- `:root` html 根元素
- `:not()` 否定选择器，用的比较多
- `:only-child` 只有一个子元素时才会生效
- `:empty` 选择连空格都没有的元素

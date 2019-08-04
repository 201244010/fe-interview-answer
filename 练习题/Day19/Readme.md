## Day 19 解答

### 说说你对 html 中的置换元素和非置换元素的理解

置换元素的定义如下：

> 一个 内容 不受 CSS 视觉格式化模型控制，CSS 渲染模型并不考虑对此内容的渲染，且元素本身一般拥有固有尺寸（宽度，高度，宽高比）的元素，被称之为置换元素。

一般来说 `span` 这种行内非置换元素设置宽高是没有意义的，除非修改 `display: inline-block`。对于行内置换元素，是可以设置宽高的。比如常用的 `img` 标签自适应图片时，我们只需要定义一个宽或者高，剩下的就会自动帮我们计算。

参考文章：[置换和非置换元素](https://blog.doyoe.com/2015/03/15/css/%E7%BD%AE%E6%8D%A2%E5%92%8C%E9%9D%9E%E7%BD%AE%E6%8D%A2%E5%85%83%E7%B4%A0/)

### css 的属性 content 有什么作用呢？有哪些场景可以用到？

CSS 的 `content` 一般用在 `::before/after` 这类的伪元素中。并且如果 `::before` 和 `::after` 元素如果不设置 `content` 属性的话，也是没有效果的。

| 序号 | 属性                          | 用法                                                                                                                |
| ---- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| 1    | '字符串'                      | content: 'xxx' 单纯显示内容。一般在文字的前后添加内容或者图标。                                                     |
| 2    | `attr()`                      | content: attr(attributes) 动态显示对应标签的属性                                                                    |
| 3    | `url()`                       | content: url(url) 插入图片                                                                                          |
| 4    | `counter()`                   | content: counter(name) `counter` 的 `name` 可以自己定义。需要配合 `counter-increment` 和 `counter-reset` 一起使用。 |
| 5    | `open-quote` 和 `close-quote` | content: open-quote; 实现自定义的引号，一般用来匹配多语言的情况。                                                   |

参考文章：
[CSS content 内容生成技术以及应用](https://www.zhangxinxu.com/wordpress/2010/04/css-content%E5%86%85%E5%AE%B9%E7%94%9F%E6%88%90%E6%8A%80%E6%9C%AF%E4%BB%A5%E5%8F%8A%E5%BA%94%E7%94%A8/)
[CSS 伪元素 content 属性的诸多取值](http://jimyuan.github.io/blog/2018/01/05/content-property-of-pseudo-element.html)

### "attribute"和"property"有什么不同？

在操作 DOM 时，我们经常会操作 `attribute` 和 `property`。不过从两者的所属关系上来说： `property` 属于 DOM Object，而 `atrribute` 属于 HTML。

`property` 通常比较容易获取，并且有固定的值（当然，类似 JavaScript 的对象，我们可以添加自定义的值，只是这些不会被 DOM 所认识）。比如 `el.id`、`el.value`、`el.style` 都是 `property` 而设置也只需要 `el.id=newId` 即可。`attribute` 的值不是固定的，我们可以自己为 DOM 添加需要的属性（以前常常用来存放数据或者标志位，在 HTML5 有了 `data-*` 的属性后，一般就利用 `data-*` 来存放数据了）。对于 `attribute` 的设定和获取我们使用 `setAttribute` 和 `getAttribute` 两个方法。

在书写方面 `property` 对于大小写敏感；而 `attribute` 对于大小写不敏感。

总的来看 `property` 的值更偏向于标准而 `attribute` 的值更偏向于自定义和非标准。

参考文章：
[Attribute と Property](https://qiita.com/jkr_2255/items/66a16bd969454ee8b114)
[属性とプロパティ](https://ja.javascript.info/dom-attributes-and-properties)

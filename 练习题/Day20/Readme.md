## Day 20 解答

### 请描述 HTML 元素的显示优先级

HTML 元素显示优先级简单来说就是：帧元素（frameset) 优先级最高（frameset 已经不提倡使用了）。其次**表单元素** > **非表单元素**，即 `input type="radio"` 之类的表单控件 > 普通的如 `a`,`div` 等元素。

从有窗口和无窗口元素来分，有**窗口元素** > **无窗口元素**。有窗口元素如 Select 元素、Object 元素。

另外 `z-index` 属性也可以改变显示优先级，但只对同种类型的元素才有效。如果两个元素分别为 **表单元素** 和 **非表单元素** 那么 `z-index` 是无效的。[在这个例子中可以看到，select 就是在 div 的上面，尽管 div 设置了 `z-index:100;`](https://codepen.io/Konata9/pen/VVoJKM)

参考文章：[HTML 元素的优先级](https://blog.csdn.net/wulex/article/details/76222563)

### 要让 Chrome 支持小于 12px 的文字怎么做？

Chrome 中有最小字号的限制，一般为 12px。原因是 Chrome 认为小于这个字号会影响阅读。

当需要小于 12px 字体的时候，有以下几个方法可以使用。

- -webkit-text-size-adjust:none; 这个属性在高版本的 Chrome 中已经被废除。
- 使用 `transform: scale(0.5, 0.5)`，但使用 `transform` 需要注意下面几点：
  - `transform` 对行内元素无效，因此要么使用 `display: block;` 要么使用 `display: inline-block;`
  - `transform` 即使进行了缩放，原来元素还是会占据对应的位置。因此需要做调整，最好是在外面再包一层元素，以免影响其他元素。
- 作为图片。

最好的办法还是进行切图，或者就不要使用小于 12px 的字体。

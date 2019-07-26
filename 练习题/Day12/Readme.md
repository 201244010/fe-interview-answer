## Day 12 解答

### 常见的浏览器内核都有哪些？并介绍下你对内核的理解

### 说说你对 css 盒子模型的理解

一个元素的大小由，`border`、`margin`、`padding` 和 `width / hegiht` 决定。

盒模型一共有两种，由 `box-sizing` 来控制，不同的 `box-sizing` 对于盒子大小的计算有所不同。
默认为 `content-box`，此时整个盒子的宽度为 `border + width + padding` 组成（注意 `border` 和 `padding` 有两边）。
而早期 IE 和 `border-box` 属性的宽度就为 `width` 的宽度，内部的大小会由浏览器减去 `border` 和 `padding` 来控制。

有关于 `border` 可以查看 [Day 33](https://codepen.io/Konata9/pen/WqPxML)

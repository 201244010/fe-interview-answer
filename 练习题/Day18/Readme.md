## Day 18 解答

### 怎样在页面上实现一个圆形的可点击区域？

- DOM 元素配合 `border-radius: 50%` 即可实现圆形点击区域。[例子](https://codepen.io/Konata9/pen/zgNJVy?editors=1111)

- 利用 `<map>` 和 `<area>` 标签设置圆形点击区域。参考文章:[HTML <area><map>标签及在实际开发中的应用](https://www.zhangxinxu.com/wordpress/2017/05/html-area-map/)

- 利用 SVG 作出圆形，然后添加点击事件。

- 如果在 `canvas` 上，就需要画出圆形，然后计算鼠标的坐标是否落在圆内。

### 什么是 FOUC？你是如何避免 FOUC 的？

### 你理解的"use strict";是什么?使用它有什么优缺点？

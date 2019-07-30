## Day 18 解答

### 怎样在页面上实现一个圆形的可点击区域？

- DOM 元素配合 `border-radius: 50%` 即可实现圆形点击区域。[例子](https://codepen.io/Konata9/pen/zgNJVy?editors=1111)

- 利用 `<map>` 和 `<area>` 标签设置圆形点击区域。参考文章:[HTML <area><map>标签及在实际开发中的应用](https://www.zhangxinxu.com/wordpress/2017/05/html-area-map/)

- 利用 SVG 作出圆形，然后添加点击事件。

- 如果在 `canvas` 上，就需要画出圆形，然后计算鼠标的坐标是否落在圆内。

### 什么是 FOUC？你是如何避免 FOUC 的？

FOUC 既 Flash of Unstyled Content。当我们有样式是通过 `@import` 或者在 `body` 中间写 `style` 时，由于样式晚于渲染完成会再次触发渲染从而产生一瞬间的白屏现象。解决此问题的方法就是把 `style` 样式用 `link` 标签放在 `head` 中，确保样式下载完成后在与 DOM 一起进行渲染。

参考文章：[什么是 FOUC？如何避免 FOUC？](https://www.cnblogs.com/xianyulaodi/p/5198603.html)

### 你理解的"use strict";是什么?使用它有什么优缺点？

由于历史原因 JavaScript 在错误提示方面做的并不完善。比如允许定义未声明的变量、不允许使用八进制数字、不允许函数参数重名、不允许删除不可删除的属性。

使用严格模式的好处在于

- 消除 Javascript 语法的一些不合理、不严谨之处，减少一些怪异行为;
- 消除代码运行的一些不安全之处，保证代码运行的安全；
- 提高编译器效率，增加运行速度；
- 为未来新版本的 Javascript 做好铺垫。

总的来说，使用严格模式会让我们的代码更加健壮。不过随着 TypeScript 的出现，我们更应该使用 TS 来规范我们的代码。

参考文章: [JavaScript 严格模式(use strict)](https://www.runoob.com/js/js-strict.html)

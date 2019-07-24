## Day 8 解答

### 简述下html5的离线储存原理，同时说明如何使用？
[同 Day 4 问题](./../Day4/Readme.md)

### 清除浮动的方式有哪些及优缺点？
- 外层父元素使用 `overflow:hidden;` 属性触发 BFC，让内层的 `float` 不会影响外层的布局
- 使用 `clear: both;` 即 `clearfix` 类的方法，在浮动元素后面添加一个空的 `div`，使其 `clear:both;` 清除上层浮动元素带来的影响。缺点是会增加 DOM 元素；可以使用伪类 `::after` + `clear:both;`。

	```html
	<div class="float"></div> // float: left 的元素
	<div class="clearfix"></div> // clear: both 的元素
	```
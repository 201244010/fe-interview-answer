## Day 3 解答

### HTML 全局属性(global attribute)有哪些

全局属性指可以用在所有 `HTML` 元素上的属性，尽管有些不会生效。

[MDN 资料](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

- 常用的全局属性

	- `id/class`: 用于标示元素，方便 `js` 去获取。
	- `width/height`: `canvas` 上会用到，并且无法被 `css` 设置的宽高覆盖。其他如 `img` 也会用到。
	- `data-*`: 可以在 HTML 元素上存放数据，可以通过 `dataSet()` 接口获取数据。`Bootstrap` 中常用到
	- `contenteditable`: 让元素可编辑。允许 `div` 模拟 `textarea`，富文本编辑器会使用到。
	- `draggable`: 让元素可拖拽，配合 HTML5 新提供的 `drag & drop` 接口。
	- `title`: 鼠标移上时显示的内容，会用于无障碍。
	- `style`: 允许设置行内样式。
	- `onClick/onDbClick/onMouseOver/onMouseLeave`: 等事件监听。

### 在页面上隐藏元素的方法有哪些？

- 视区内方法：
	- `display: none;`: 元素不会被浏览器渲染。
	- `visibility: hidden;`: 元素不显示，但是会渲染并且占位。
	- `opacity: 0;`: 元素会被渲染，不显示，但是元素会占位。

- 移出视区操作（元素为 `position:absolute;`）：
	- `left/right/top/bottom`: 给出一个极大极小值，让元素出现在视区外。
	- `z-index`: 设置为负值，让其他元素在相同位置覆盖掉。
	- `overflow: hidden;`: 外层为 `overflow:hidden` 时，内部元素只要移到外部元素范围外即可。
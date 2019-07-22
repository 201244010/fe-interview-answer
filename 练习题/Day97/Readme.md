## Day 97 解答

### 写例子说明如何给li绑定事件（ul下有1000+个li）？

在不考虑任何情况时，直接使用 `$('li').addEventListener(event, fun)` 就可以对 `li` 进行事件绑定。

当子元素过多时，可以利用“事件冒泡”在 `ul` 上进行绑定，实现事件委托。可以利用 `event.target` 对被触发的子元素进行操作。
```html
document.getElementsByTag('ul')[0].addEventListener('event', (e) => {
	// 利用 e.target 对冒泡上来的元素做区分
	// e.target.nodeName, e.target.id 等
})
```

参考文章：[实例分析JavaScript中的事件委托和事件绑定](https://www.diguage.com/archives/71.html)
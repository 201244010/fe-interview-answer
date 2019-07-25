## Day 10 解答

### viewport 常见设置都有哪些？

在移动端做开发时，必须要搞清楚 `viewport` 这一设置。

`viewport` 就是视区窗口，也就是浏览器中显示网页的部分。PC 端上基本等于设备显示区域，但在移动端上 `viewport` 会超出设备的显示区域（即会有横向滚动条出现）。
设备默认的 `viewport` 在 980 - 1024 之间。

为了让移动端可以很好地显示页面，因此需要对 `viewport` 进行设置。相关的设置值如下：

| 设置          | 解释                                                               |
| ------------- | ------------------------------------------------------------------ |
| width         | 设置 layout viewport 的宽度，为一个正整数，或字符串"width-device"  |
| initial-scale | 设置页面的初始缩放值，为一个数字，可以带小数                       |
| minimum-scale | 允许用户的最小缩放值，为一个数字，可以带小数                       |
| maximum-scale | 允许用户的最大缩放值，为一个数字，可以带小数                       |
| height        | 设置 layout viewport 的高度，这个属性对我们并不重要，很少使用      |
| user-scalable | 是否允许用户进行缩放，值为"no"或"yes", no 代表不允许，yes 代表允许 |

`viewport` 是在 `meta` 标签内进行控制。

```html
// width=device-width, initial-scale=1.0 是为了兼容不同浏览器
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
/>
```

相关的衍生知识： dpr 与 CSS 像素。CSS 像素的 `1px` 在 PC 端上与设备的物理像素基本一致，而到手机端就会有两个物理像素对应一个 CSS 像素的情况出现（如 iPhone 的视网膜屏）。
所以 iPhone 上的 dpr = 2 即 2 个物理像素 / 一个 CSS 像素（独立像素）

参考文章：[移动前端开发之 viewport 的深入理解](https://www.cnblogs.com/2050/p/3877280.html)

### 对比下 px、em、rem 有什么不同？

- px: 绝对固定的值，无论页面放大或者缩小都不会改变。
- em: 相对父元素字体大小的倍数。如果父元素的字体为 `12px`，那么子元素 `1em` 就是 `24px`。由于是相对父级的倍数，所以多层嵌套时，倍数关系的计算会很头痛。
- rem: 相对根元素字体大小的倍数。相对于 `html` 的字体大小，如果不做任何修改，浏览器默认字体大小为 `16px`。

#### 小技巧

如果为了方便计算 `rem`，可以设置 `font-size= 62.5%` 这样一来默认的字体就变成 `10px` 了。之后的 `rem` 就是以 `10` 为基准了。

### 简要描述下什么是回调函数并写一个例子出来

回调函数首先作为一个函数的参数传入，当这个函数执行后再执行的函数，往往会依赖前一个函数执行的结果。
在 `javascript` 中，对于 I/O、HTTP 请求等异步操作，为了控制执行的顺序就需要使用回调的方法。

```javascript
// 第三个参数就是回调函数
function func1(param1, param2, ..., callback){
  // To do some action
  // 往往会在最后调用 callback 并且传入操作过的参数
  callback(cbParam1, cbParam2, ...)
}

// 实际调用的时候
func1(param1, param2, ..., (cbParam1, cbParam2, ...) => {
  // To do some action
})
```

当有过个任务需要顺序执行时，如果采用回调函数的形式就会出现我们熟悉的“回调地狱”的情况。为了解决这个问题，在 ES6 中就有了 `Promise` 和 `async/await` 方法。
目前看来 `async/await` 在异步写法上较为优雅。

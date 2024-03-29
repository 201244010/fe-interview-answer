## Day 14 解答

### 为什么 HTML5 只需要写<!DOCTYPE HTML>就可以？

因为 HTML5 与 HTML4 基于的基准不同。HTML4 基于 SGML 因此需要除了 `DOCTYPE` 外还需要引入 DTD 来告诉浏览器用什么标准进行渲染。DTD 还分为标准模式、严格模式。如果什么都不写，就完全让浏览器自我发挥，会变成怪异模式。

HTML5 不基于 SGML，因此后面就不要跟 DTD，但是需要 `DOCTYPE` 来规范浏览器的渲染行为。

注：SGML 是通用标记语言的集合。其中有 HTML、XML，因此需要用 DTD 来指定使用那种规范。

### position:fixed;在 ios 下无效该怎么办？

当采用 `fixed` 做吸底、吸顶布局时，如果触发键盘弹出事件则 `fixed` 属性会失效，布局就会被扰乱。其原因解释如下：

> 软键盘唤起后，页面的 fixed 元素将失效（即无法浮动，也可以理解为变成了 absolute 定位），所以当页面超过一屏且滚动时，失效的 fixed 元素就会跟随滚动了。

\*\* 第三方库 `isScroll.js` 可以解决此问题。

![](https://efe.baidu.com/blog/mobile-fixed-layout/img/fixed_bug_0.png)
![](https://efe.baidu.com/blog/mobile-fixed-layout/img/fixed_bug_1.png)

解决的思路就是避免最外层出现滚动，即最外层使用 `fixed` 并且不让其可以滚动。让滚动仅在内部内容部分。

参考文章: [Web 移动端 Fixed 布局的解决方案](https://efe.baidu.com/blog/mobile-fixed-layout/)

### 什么是闭包？优缺点分别是什么？

闭包是可以访问另一个函数作用域的函数。由于 `javascript` 的特性，外层的函数无法访问内部函数的变量；而内部函数可以访问外部函数的变量（即作用域链）。

```javascript
function a() {
  var b = 1;
  var c = 2;
  // 这个函数就是个闭包，可以访问外层 a 函数的变量
  return function() {
    var d = 3;
    return b + c + d;
  };
}

var e = a();
console.log(e());
```

因此，使用闭包可以隐藏变量以及防止变量被篡改和作用域的污染，从而实现封装。
而缺点就是由于保留了作用域链，会增加内存的开销。因此需要注意内存的使用，并且防止内存泄露的问题。

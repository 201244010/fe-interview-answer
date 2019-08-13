## Day 27 解答

### 说说你对影子(Shadow)DOM 的了解

### 怎样修改 chrome 记住密码后自动填充表单的黄色背景？

开启自动填充后，Chrome 会给 `input` 添加私有属性 `input:-webkit-autofill`。会让 `input` 变为黄色背景。在新版本的 Chrome 中，已经不允许通过 CSS 来修改背景了。

如果需要修改 `input` 的背景，只能考虑放弃自动填充功能，设置 `autocomplete="off"`，但这个属性在其他浏览器下会有兼容问题（比如 Firefox)。或者变更 `autocomplete="new-password"`（网易邮箱有使用这个方法）来关闭自动填充。

参考文章：
[去掉chrome浏览器表单自动填充时的黄色背景](https://www.jianshu.com/p/65bc21374460)

### 说说你对 arguments 的理解，它是数组吗？

`arguments` 并不是数组，是一个 array like 对象，它有 `length` 这个属性。通常情况下，为了使用方便我们会把 `arguments` 转成数组，方法有下面几种。即使不转为数组，可以使用下标访问。如 `arguments[0]`。

- `[...arguments]`
- `Array.from(arguments)`
- `[].slice.call(arguments)`

一般情况下不会对 `arguments` 进行操作。但在实现一些低级或者通用功能时候会使用到，如实现一个泛柯理化的函数，或者根据参数的数量执行不同的方法（类似函数的重载）。

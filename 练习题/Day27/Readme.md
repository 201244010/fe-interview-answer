## Day 27 解答

### 说说你对影子(Shadow)DOM 的了解

### 怎样修改 chrome 记住密码后自动填充表单的黄色背景？

### 说说你对 arguments 的理解，它是数组吗？

`arguments` 并不是数组，是一个 array like 对象，它有 `length` 这个属性。通常情况下，为了使用方便我们会把 `arguments` 转成数组，方法有下面几种。即使不转为数组，可以使用下标访问。如 `arguments[0]`。

- `[...arguments]`
- `Array.from(arguments)`
- `[].slice.call(arguments)`

一般情况下不会对 `arguments` 进行操作。但在实现一些低级或者通用功能时候会使用到，如实现一个泛柯理化的函数，或者根据参数的数量执行不同的方法（类似函数的重载）。

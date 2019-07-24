## Day 10 解答

### viewport 常见设置都有哪些？

### 对比下 px、em、rem 有什么不同？

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

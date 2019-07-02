### Day 77 解答

### 请快速答出此题的答案并解释：var x, y = 1; x + y = ?

答案：`NaN`
解释：`var x,y =1` 是赋值操作，可以拆开理解为 `var x; var y = 1`。那么由此可以看出 `x` 仅定义，未进行赋值，因此 `x` 的值为 `undefined`。`y` 正常被赋值为 `1`。

所以 `x + y` 实际为 `undefined + 1`，`Numebr` 类型与 `undefined` 结果为 `NaN`。


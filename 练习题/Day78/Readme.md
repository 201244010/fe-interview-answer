## Day 78 解答

### 举例说明数组和对象的迭代方法分别有哪些

- Array:
	1. `arr.forEach((item, index))`: 没有返回值，无法中断遍历。
	2. `arr.map((item, index))`: 在处理的方法中需要提供返回值，最后返回经过处理的长度与输入数组相同的数组。如果没有提供返回值，默认返回 `undefined`。
	3. `arr.filter((item, index))`:  根据处理的条件，返回值为 `true` 的数组。
	4. `arr.some((item, index))/arr.every((item, index))`: 根据处理的条件，返回 `true` 或 `false`。`some` 只要有一项符合条件就返回 `true`;`every` 需要每一项都符合才会返回 `true`。
	5. `arr.reduce((prev, cur, index))/arr.reduceRight((prev, cur, index))`: 可以对数组的前后项进行处理，返回值需要自己定义。

- Object:
	1. `for in`: 可以对 `Object` 进行遍历

	- 可以使用 `Object.keys(obj)` 转换为 `array` 后进行遍历 
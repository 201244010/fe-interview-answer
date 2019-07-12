## Day 72 解答

### 怎么改变选中文本的文字颜色和背景色？

CSS 的 `::selection` 伪类来控制选中文本的背景色和字体。

```css
p::selection{
	background: red;
	color: white;
}
```
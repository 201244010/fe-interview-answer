## Day 123 解答

### 什么是zoom？它有什么作用？

`zoom` 最初是 IE 的私有属性，现在除了 Firefox 之外的浏览器基本都支持 `zoom`。不过，`zoom` 依旧不是正式的属性。与之对应的 `transform` 的 `scale` 属性是正式的 CSS 属性。

`zoom` 主要的作用是用于元素或者页面的缩放；`transform` 的 `scale` 也有同样的作用，两者有如下的区别。
- `zoom` 的缩放点在元素左上角。在 Chrome 下，文字如果缩小后小于 12px 的情况仍然会显示 12px。并且 `zoom` 缩放会影响元素实际的位置，这样就会造成页面的重排和重绘，在性能上会有影响。
- `transform` 的 `scale` 缩放点在元素中心。缩放会对文字有影响，可以利用此属性实现 Chrome 下小于 12px 的字体。但是 `transform` 缩放后不会改变元素的位置，即如果元素原来是 200px 宽，缩小 50% 后虽然看上去只有 100px 宽了，但是仍然占 200px。

示例：https://codepen.io/Konata9/pen/jONrgVg

参考文章：[小tips: zoom和transform:scale的区别](https://www.zhangxinxu.com/wordpress/2015/11/zoom-transform-scale-diff/)

### 分析('b' + 'a' + +'a' + 'a').toLowerCase()返回的结果

- `'b'+'a'` 为字符串拼接 => `ba`
- `+ +'a'` 第一个 `+` 为字符串拼接的 `+`, `+'a'` 是把 `'a'` 转为数字 => 由于 `'a'` 无法转为数字，因此为 `NaN`
- `+'a'` 为字符串拼接

因此结果为 `'baNaNa'.toLowerCase()` => `banana`
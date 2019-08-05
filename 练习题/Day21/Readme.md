## Day 21 解答

### 谈谈你对 input 元素中 readonly 和 disabled 属性的理解

在表现上 `readonly` 和 `disabled` 都不能让用户对 `input` 进行编辑。但从含义上两者还是有较大的差别的。

`readonly` 直译为 “只读”，一般用于只允许用户填写一次的信息，提交过一次之后，就不允许再次修改了。

`disabled` 直译为 “禁用”，即这个 `input` 就是不允许填写和使用的（可能是因为权限或者其他原因）。

因此在外观上，`readonly` 与普通 `input` 无异，只是点击后无法进行编辑；而 `disabled` 的 `input` 呈灰色，也不允许点击。从这两点其实也可以看出，对于 `input` 的事件，`readonly` 会响应，而 `disabled` 是不响应的。并且在传输数据上，`disabled` 的数据是不会被获取和上传，`readonly` 的数据会被获取和上传。

### 说说你对 line-height 是如何理解的？

`line-height` 在日常用的最多的是让单行文字垂直居中（其实不需要设置 `height`，一个 `line-height` 即可）。因为 `line-height - font-size` 为行距，一般会近似平分到文字的上下两边，使文字看上去垂直居中。如果需要多行文字的垂直居中，还需要加上 `vertical-align: middle;`。

`line-height` 可以不设置单位，表示 `font-size` 的倍数。

另外对于非替换元素的纯内联元素，其高度是由 `line-height` 所决定的。

参考文章：
张鑫旭大神 《CSS 世界》
[CSS 深入理解之 line-height](https://juejin.im/post/5bf805fde51d453a68008e32)

### 写一个方法验证是否为中文

由于中文比较特殊，最稳妥的还是使用 `unicode` 来进行匹配。这两个 `unicode` 分别表示第一个和最后一个汉字。

```javascript
const isChinese = str => /^[\u4e00-\u9fa5]+$/.test(str);

isChinese("绊爱初号机最高");
isChinese("我完全爱上Warma了");
```

如果只是很粗暴的需要匹配汉字的话，可以使用 `\W`，这样也能摘出汉字。不过会混杂逗号、句号等符号。

```javascript
const isRawChinese = str => /^\W+$/.test(str);

isRawChinese("绊爱初号机最高");
isRawChinese("我完全爱上Warma了");
```

### 来说说你对重绘和重排的理解，以及如何优化？

## Day 124 解答

### 如何实现文件拖动上传？
利用 HTML5 的 `drag & drop` API 来实现。需要注意的是，必须要设置 `dragover` 事件，不然不会触发 `drop` 事件。

示例：https://codepen.io/Konata9/pen/BaBzExe?editors=1011
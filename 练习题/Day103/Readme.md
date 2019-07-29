## Day 103 解答

### 请描述一下 cookies、sessionStorage 和 localStorage 的区别？

- cookies: 
	
	历史最悠久的客户端存储手段。由于 HTTP 是无状态的，服务端为了记住用户（如登录后的状态）的状态，会把一个 `token` 在用户登录后发给客户端。客户端在之后的请求中会带着这个 `token` 表明自己的身份。`cookie` 可以在浏览器中查看到，因此不应该存储敏感信息，并且浏览器对 `cookie` 有大小限制（一般为 5KB 左右），因此也不宜存储过多信息。

	可以通过 `document.cookie` 访问到 `cookie`。同一个域名下，`cookie` 是共享的，即可以作为跨标签共享数据的手段之一。

	可以通过 `document.cooke=newCookie` 来对 `cookie` 进行设置。`cookie` 的值是 `key=value` 的键值对。同时可以给 `cookie` 设置相应的过期事件、domain、是否通过 `https` 来传输。

- sessionStorage / localStorage

	HTML5 中增加的存储手段。两者之间的差别就是 `sessionStorage` 在网页关闭后就自动销毁了，而 `localStorage` 则会一直存在直到用户手动清除。`sessionStorage` 在跨标签页数据共享时会遇到问题（当 a 标签为 target="_blank" 的时候可以使用 `sessionStorage` 进行数据共享）。`localStorage` 则没有这个限制。两者都是存储 `key=value` 的键值对，其中 `value` 必须是字符串，一般在存储前会通过 `JSON.stringify` 进行转化。

参考文章: [MDN Cookie](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie)
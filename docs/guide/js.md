# JS
## Fetch API

### fetch规范与jQuery.ajax()主要有两种方式的不同
1. 当接收到一个代表错误的 HTTP 状态码时，从 fetch()返回的 Promise 不会被标记为 reject， 即使该 HTTP 响应的状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve （但是会将 resolve 的返回值的 ok 属性设置为 false ），仅当网络故障时或请求被阻止时，才会标记为 reject。
2. 默认情况下，fetch 不会从服务端发送或接收任何 cookies, 如果站点依赖于用户 session，则会导致未经认证的请求要发送 cookies，必须设置 credentials 选项）。

### fetch支持的请求参数
- fetch() 接受第二个可选参数，一个可以控制不同配置的 init 对象：
``` js
  postData('http://example.com/answer', {answer: 42})
  .then(data => console.log(data)) // JSON from `response.json()` call
  .catch(error => console.error(error))

  function postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
      body: JSON.stringify(data), // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, same-origin, *omit
      headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json'
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // *client, no-referrer
    })
    .then(response => response.json()) // parses response to JSON
  }
```
### 发送带凭据的请求
``` js{3,8,13}
  //让浏览器发送包含凭据的请求（即使是跨域源）。
  fetch('https://example.com', {
    credentials: 'include'  
  })

  //只想在请求URL与调用脚本位于同一起源处时发送凭据。
  fetch('https://example.com', {
    credentials: 'same-origin'  
  })

  //确保浏览器不在请求中包含凭据。
  fetch('https://example.com', {
    credentials: 'omit'  
  })
```
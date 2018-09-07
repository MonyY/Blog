# HTTP协议

## URI-URL和URN

::: tip URI
- 统一资源标志符
- 用来标识互联网上的信息资源
- 包括`URL`和`URN`
:::

::: tip URL
- 统一资源定位器
``` http
https://host.com:80/path?query=string#hash
```
- http://  协议
- host.com 用来定位资源的服务器在互联网中的位置(可以是IP 也可以是 域名)
- 默认80端口    每台物理服务器可以跑很多软件的web服务，端口就是监听物理服务器上面某个具体的web服务
- /path路由 web 服务器里面的内容可以通过路由进行定位
- ?query=string 搜索参数
- #hash    查找文档的某个片段
:::

::: tip URN
- 永久统一资源定位符
- 在资源移动后还能被找到
- 目前应用并不广泛
:::
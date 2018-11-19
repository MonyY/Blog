# Vue-cli 3.0 分环境打包

1. 在根目录下创建.env.[mode]文件,git会忽略`.local`后缀的文件。
2. 在文件中写入api-prefix,格式为“键=值”对,只有以`VUE_APP_`开头的变量会被`webpack.DefinePlugin`静态嵌入到客户端侧的包中:
```js
VUE_APP_URL = 'http://.......'
```
3. 然后项目中可以通过`process.env.VUE_APP_URL`访问到变量。
4. 最后在`package.json`中配置打包命令即可。
```js
"scripts": {
  "start": "vue-cli-service serve",
  // --mode后的参数对应.env.[mode]中的mode
  "build:dev": "vue-cli-service build --mode development",
  "build:test": "vue-cli-service build --mode test",
  "build:prod": "vue-cli-service build --mode production",
  "lint": "vue-cli-service lint"
}
```
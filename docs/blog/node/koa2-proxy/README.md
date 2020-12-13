---
title: 服务端代理工具--koa2-proxy
permalink: /koa2-proxy
---

功能:
- 代理http和https
- 转发本地请求到网络
- 本地服务器
- 本地模拟数据配置
- 解析smarty模板
- 随意修改请求和响应结果
---

安装:
<p>安装node之后执行</p>
``` js{0}
npm install koa2-proxy
```
使用：
``` js{0}
var proxy = require('koa2-proxy');

// 本地静态服务器
proxy.static(__dirname);

// 本地模拟文件
proxy.mockfile(__dirname + '/mockfile.txt');

// 解析smarty模板
proxy.smarty({ext: '.html', data: {data: 'smarty html'}});

// 转发请求到指定host
proxy.when('/api', function(ctx) {
    ctx.request.host = 'www.test.com';
    ctx.request.protocol = 'http';
});

// 配置代理请求结束后修改body
proxy.when({'.html', phase: 'response'}, function(ctx) {
    ctx.response.body += '<div>test</div>';
});

// 请求开始时转发本地请求到网络
proxy.on('start', function (ctx) {
    console.log('start: ', ctx.request.url, ctx.isLocal());
    ctx.request.host = 'www.koa2.com';
});
// 请求结束时输出状态
proxy.on('end', function (ctx) {
    console.log('end: ' + ctx.response.status);
    console.log('end: ' + ctx.response.get('content-type'));
    // console.log('end: ' + ctx.response.body);
});

// 监听端口
proxy.listen(3010);
```
增加函数:
 - proxy.app koa的实例:proxy.app = new koa();
 - proxy.httpServer http服务器， 只有当http服务器启动后才会赋值（http-server-start事件）
 - proxy.httpsServer https服务器， 只有当http服务器启动后才会赋值（https-server-start事件）
 - proxy.localip 本地ip地址,listen后生效
 - proxy.localhost 本地ip地址+监听host, listen后生效
 - ctx.proxy proxy
 - request.body 请求的form表单数据

新增函数：
 - proxy.app koa的实例:proxy.app = new koa();
 - proxy.httpServer http服务器， 只有当http服务器启动后才会赋值（http-server-start事件）
 - proxy.httpsServer https服务器， 只有当http服务器启动后才会赋值（https-server-start事件）
 - proxy.localip 本地ip地址,listen后生效
 - proxy.localhost 本地ip地址+监听host, listen后生效
 - ctx.proxy proxy
 - request.body 请求的form表单数据
---

实际运用：
- 本地目录结构
```
.
└─ KOA-PROXY
   └─ app.js
   └─package.json
   └─ node_modules
```
- app.js文件
``` js{0}
var proxy = require('koa2-proxy');
var domain = `jcp.yilvbao.cn`;// 请求开始时转发本地请求到网络
proxy.on('start', function (ctx) {
  console.log('start: ', ctx.request.url, ctx.isLocal());
  ctx.request.url = ctx.request.url.replace('127.0.0.1', domain)
  // ctx.request.url = ctx.request.url.replace('192.168.80.74:8080', 'jcp.yilvbao.cn')
  // ctx.load_remote = ctx.load_remote.replace('192.168.80.74:8080', 'jcp.yilvbao.cn')
  ctx.header["Content-Type"] = ctx.header["content-type"]
  delete ctx.header["content-type"]
  if ('url' in ctx.request.body) {
    ctx.request.body.url = domain
  }
  ctx.request.host = domain;
});
// 请求结束时输出状态
proxy.on('end', function (ctx) {
  // console.log('end: ' + ctx.response.status);
  // console.log('end: ' + ctx.response.get('content-type'));
  // console.log('end: ' + ctx.response.body);
});

// 监听端口
proxy.listen(10000);
```
- package.json文件
``` json{0}
{
  "name": "koa",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "koa2-proxy": "^1.1.7"
  }
}
```
事件(proxy.on(event,function(data){})):
 - http-server-start http服务器启动完成后触发
 - https-server-start https服务器启动完成后触发
 - start: 请求开始时触发
 - end: 请求结束时触发

::: warning
<a href="https://www.npmjs.com/package/koa2-proxy" target="_Blank" color="#fe6e6d">原文地址：https://www.npmjs.com/package/koa2-proxy</a>
:::
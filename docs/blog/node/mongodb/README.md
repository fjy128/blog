---
title: 服务端环境搭建--mongodb
permalink: /mongodb
---

<p>我们编写js代码时经常遇到复杂逻辑判断的情况，通常大家可以用if/else或者switch来实现多个条件判断，但这样会有个问题，随着逻辑复杂度的增加，代码中的if/else/switch会变得越来越臃肿，越来越看不懂，那么如何更优雅的写判断逻辑，本文带你试一下。
</p>

1、mongodb的概念
---
<ul>
<li>MongoDB 是由C++语言编写的，是一个基于分布式文件存储的开源数据库系统。</li>
<li>在高负载的情况下，添加更多的节点，可以保证服务器性能。</li>
<li>MongoDB 旨在为WEB应用提供可扩展的高性能数据存储解决方案。</li>
<li>MongoDB 将数据存储为一个文档，数据结构由键值(key=>value)对组成。MongoDB 文档类似于 JSON 对象。字段值可以包含其他文档，数组及文档数组。</li>
</ul>

``` js{0}
{
  name:'userName',
  age:25,
  status:'A',
  groups:['news','sports']
}
```
2、mongodb的安装
---
<p>使用 brew 安装，如本地没有brew，自行安装 <a href="https://brew.sh/index_zh-cn.html">点击这里</a></p>

``` js{0}
//使用 OSX 的 brew 来安装 mongodb：
brew install mongodb

//如果要安装支持 TLS/SSL 命令如下：
brew install mongodb --with-openssl

//安装最新开发版本：
brew install mongodb --devel

//检测monogodb 安装成功与否
which mongod
```
<p>运行 MongoDB</p>

``` js{0}
//首先我们创建一个数据库存储目录
mkdir+文件名

//在当前数据库目录下查看路径
pwd
// /Users/a/Desktop/data

//启动mongodb
mongod --dbpath 当前文件夹路径
//eg:mongod --dbpath /Users/a/Desktop/data
```
::: warning
安装地址： <a href="https://www.runoob.com/mongodb/mongodb-osx-install.html" target="_Blank" color="#fe6e6d">点击这里</a>
:::

3、mongodb可视化工具RoBo 3T安装及应用
---
自行安装 <a href="https://robomongo.org/download">点击这里</a></p>
<p>安装完成之后启动RoBo 3T,默认自动连接localhost:27017</p>

4、安装koa2脚手架 koa-generator
---
``` js{0}
//全局安装
npm install -g koa-generator 

//创建项目 koa2 koa2-learn 
koa2 koa2-learn 

//进入项目
cd koa2-learn

//初始化项目
npm install 

//启动项目
npm run dev //实现热更新
```
5、mongoose的作用
---
经过上面的步骤，我们已经搭建了一个koa项目，进入koa项目，安装mongoose
``` js{0}
npm install mongoose
```
<h2>mongoose的作用</h2>
<p>Mongoose是在node.js异步环境下对mongodb进行便捷操作的对象模型工具</p>
<p>那么要使用它，首先你得装上node.js和mongodb,关于mongodb的安装和操作介绍可以参考：<a href="http://www.cnblogs.com/zhongweiv/p/node_mongodb.html">查看点击这里</a></p>

6、mongoose的应用
---
<p>
<a href="https://mongoose.kkfor.com/quickstart.html">在线学习地址</a>
<a href="https://www.cnblogs.com/jayruan/p/5123754.html">参考地址</a>
</p>
<ul>
<li>1、首先在koa2-learn项目下创建一个文件夹dbs，用来操作数据库，</li>
<li>2、在dbs文件下创建一个文件夹models和config.js,models用来存放数据表，config.js暴露数据库连接地址</li>
<p>config.js 代码：</p>

``` js{0}
module.exports = {
  dbs: 'mongodb://127.0.0.1:27017/dbs'
}
```
<li>3、在models下面创建一个数据表文件person.js</li>
<p>person.js 代码：</p>

``` js{0}
// const mongoose = require('mongoose')

// let personSchema = new mongoose.Schema({name: String, age: Number})

// module.exports = mongoose.model('Person', personSchema)

var mongoose = require('mongoose');
var Schema = mongoose.Schema;//创建schemas的方式

var blogSchema = new Schema({
  name:String,
  age:Number,
  // title: String,
  // author: String,
  // body: String,
  // comments: [{
  //   body: String,
  //   date: Date
  // }],
  // date: {
  //   type: Date,
  //   default: Date.now
  // },
  // hidden: Boolean,
  // meta: {
  //   votes: Number,
  //   favs: Number
  // }
});
module.exports = mongoose.model('Person', blogSchema)
```
<ul>
<h4>schemas中的数据类型有以下几种：</h4>
<li>• String</li>
<li>• Number</li>
<li>• Date</li>
<li>• Boolean</li>
<li>• Buffer</li>
<li>• ObjectId</li>
<li>• Mixed</li>
<li>• Array</li>
</ul>
<p>特别需要说明一下ObjectId类型和Mixed类型以及Array类型，在schemas中声明这几种类型的方式如下：</p>

``` js{0}
//ObjectId就类似于唯一键值
 projectSchema.add({
     owner: mongoose.Schema.Types.ObjectId
 });
 //混合类型，顾名思义，就是说里面可以放置任意类型的数据，有两种方式创建该类型数据
 //方式一：直接赋予一个空的字面量对象
 vardjSchema= new mongoose.Schema({
     mixedUp: {}
 });
 //方式二：根据Schemas.Types中值来赋予
 vardjSchema= new mongoose.Schema({
     mixedUp: Schema.Types.Mixed
 });
 //Array类型数据有两种创建方式，一种是简单数组创建：
 var userSchema = new mongoose.Schema({
     name: String,
     emailAddresses: [String]
 });
 //第二种方式就是复杂类型数据数组，例如我们可以再数组中添加不同类型的schemas:
 var emailSchema = new mongoose.Schema({
     email: String,
     verified: Boolean
 });
 var userSchema = new mongoose.Schema({
     name: String,
     emailAddresses: [emailSchema]
 });
 //注意：如果定义一个空的数据的话，则会创建为一个混合类型数据的数组：
 var emailSchema = new mongoose.Schema({
     email: String,
     verified: Boolean
 });
 var userSchema = new mongoose.Schema({
     name: String,
     emailAddresses: [emailSchema]
 });
```

<p>修改koa2-learn下面的app.js</p>

``` js{0}

const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const pv = require('./middleware/koa-pv')
const m1 = require('./middleware/m1')
const m2 = require('./middleware/m2')
const m3 = require('./middleware/m3')

const mongoose = require('mongoose')//引入mongoose
const dbConfig = require('./dbs/config')//引入数据库连接地址
const index = require('./routes/index')
const users = require('./routes/users')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
// app.use(pv())
// app.use(m1())
// app.use(m2())
// app.use(m3())
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

//连接数据库
mongoose.connect(dbConfig.dbs,{
  useNewUrlParser:true
})

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app

```
<li>4、修改user.js</li>

``` js{0}
const router = require('koa-router')()
const Person = require('../dbs/models/person')//引进模型

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

//向数据库添加数据
router.post('/addPerson', async function (ctx, next) {
  // ctx.body = 'this is a users/bar response'
  const person = new Person({
    name:ctx.request.body.name,
    age:ctx.request.body.age
  })
  let code;
  try{
     await person.save();//models已经定义好的方法，说不需要定义
     code = 0
     console.log(1111)
  }catch(e){
    code =-1
    console.log(2222222)
  }
  ctx.body = {
    code
  }
  console.log(ctx)
})
//adeMacBook-Air:dbs a$ curl -d 'name=fjy128&age=25' http://localhost:3000/users/addPerson

//向数据库查询数据
router.post('/getPerson', async function(ctx){
  const result = await Person.findOne({name:ctx.request.body.name})
  const results = await Person.find({name:ctx.request.body.name})
  ctx.body = {
    code:0,
    result,
    results
  }
})
//adeMacBook-Air:dbs a$ curl -d 'name=fhanmeime' http://localhost:3000/users/getPerson

//向数据库修改数据
router.post('/updatePerson', async function(ctx){
  const result = await Person.where({
    name:ctx.request.body.name
  }).update({
    age:ctx.request.body.age
  })
  ctx.body = {
    code:0,
  }
})
//adeMacBook-Air:dbs a$ curl -d 'name=fjy128&age=11' http://localhost:3000/users/updatePerson

//向数据库删除数据，一般不建议
router.post('/removePerson', async function(ctx){
  const result = await Person.where({
    name:ctx.request.body.name
  }).remove()
  ctx.body = {
    code:0,
  }
})
//adeMacBook-Air:dbs a$ curl -d 'name=xm8' http://localhost:3000/users/removePersn
module.exports = router

```
</ul>

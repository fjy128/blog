---
title: JavaScript复杂判断的更优雅写法
permalink: /youyaxunhuan
---

<h5>前提</h5>
<p>我们编写js代码时经常遇到复杂逻辑判断的情况，通常大家可以用if/else或者switch来实现多个条件判断，但这样会有个问题，随着逻辑复杂度的增加，代码中的if/else/switch会变得越来越臃肿，越来越看不懂，那么如何更优雅的写判断逻辑，本文带你试一下。
</p>

1、一元
---
<p>通过代码可以看到这个按钮的点击逻辑：根据不同活动状态做两件事情，发送日志埋点和跳转到对应页面，</p>

``` js{0}
/**
 * 按钮点击事件
 * @param {number} status 活动状态：1 开团进行中 2 开团失败 3 商品售罄 4 开团成功 5 系统取消
 */
const onButtonClick = (status)=>{
  if(status == 1){
    sendLog('processing')
    jumpTo('IndexPage')
  }else if(status == 2){
    sendLog('fail')
    jumpTo('FailPage')
  }else if(status == 3){
    sendLog('fail')
    jumpTo('FailPage')
  }else if(status == 4){
    sendLog('success')
    jumpTo('SuccessPage')
  }else if(status == 5){
    sendLog('cancel')
    jumpTo('CancelPage')
  }else {
    sendLog('other')
    jumpTo('Index')
  }
}
```

<p>大家可以很轻易的提出这段代码的改写方案，switch出场：</p>

``` js{0}
/**
 * 按钮点击事件
 * @param {number} status 活动状态：1 开团进行中 2 开团失败 3 商品售罄 4 开团成功 5 系统取消
 */
const onButtonClick = (status)=>{
  switch (status){
    case 1:
      sendLog('processing')
      jumpTo('IndexPage')
      break
    case 2:
    case 3:
      sendLog('fail')
      jumpTo('FailPage')
      break  
    case 4:
      sendLog('success')
      jumpTo('SuccessPage')
      break
    case 5:
      sendLog('cancel')
      jumpTo('CancelPage')
      break
    default:
      sendLog('other')
      jumpTo('Index')
      break
  }
}
```
<p>这样看起来比if/else清晰多了，细心的同学也发现了小技巧，case 2和case 3逻辑一样的时候，可以省去执行语句和break，则case 2的情况自动执行case 3的逻辑</p>
<p>下面代码方法的聪明之处在于：将判断条件作为对象的属性名，将处理逻辑作为对象的属性值，在按钮点击的时候，通过对象属性查找的方式来进行逻辑判断，这种写法特别适合一元条件判断的情况</p>

``` js{0}
const actions = {
  '1': ['processing','IndexPage'],
  '2': ['fail','FailPage'],
  '3': ['fail','FailPage'],
  '4': ['success','SuccessPage'],
  '5': ['cancel','CancelPage'],
  'default': ['other','Index'],
}
/**
 * 按钮点击事件
 * @param {number} status 活动状态：1开团进行中 2开团失败 3 商品售罄 4 开团成功 5 系统取消
 */
const onButtonClick = (status)=>{
  let action = actions[status] || actions['default'],
      logName = action[0],
      pageName = action[1]
  sendLog(logName)
  jumpTo(pageName)
}
```

<p>使用es6里的Map对象</p>

``` js{0}
const actions = new Map([
  [1, ['processing','IndexPage']],
  [2, ['fail','FailPage']],
  [3, ['fail','FailPage']],
  [4, ['success','SuccessPage']],
  [5, ['cancel','CancelPage']],
  ['default', ['other','Index']]
])
/**
 * 按钮点击事件
 * @param {number} status 活动状态：1 开团进行中 2 开团失败 3 商品售罄 4 开团成功 5 系统取消
 */
const onButtonClick = (status)=>{
  let action = actions.get(status) || actions.get('default')
  sendLog(action[0])
  jumpTo(action[1])
}
```
<p>Map对象和Object对象有什么区别呢？</p>
<p>一个对象通常都有自己的原型，所以一个对象总有一个"prototype"键。</p>
<p>一个对象的键只能是字符串或者Symbols，但一个Map的键可以是任意值。</p>
<p>你可以通过size属性很容易地得到一个Map的键值对个数，而对象的键值对个数只能手动确认。</p>

2、二元
---

<p>把问题升级一下，以前按钮点击时候只需要判断status，现在还需要判断用户的身份：</p>

```js{0}

/**
 * 按钮点击事件
 * @param {number} status 活动状态：1开团进行中 2开团失败 3 开团成功 4 商品售罄 5 有库存未开团
 * @param {string} identity 身份标识：guest客态 master主态
 */
const onButtonClick = (status,identity)=>{
  if(identity == 'guest'){
    if(status == 1){
      //do sth
    }else if(status == 2){
      //do sth
    }else if(status == 3){
      //do sth
    }else if(status == 4){
      //do sth
    }else if(status == 5){
      //do sth
    }else {
      //do sth
    }
  }else if(identity == 'master') {
    if(status == 1){
      //do sth
    }else if(status == 2){
      //do sth
    }else if(status == 3){
      //do sth
    }else if(status == 4){
      //do sth
    }else if(status == 5){
      //do sth
    }else {
      //do sth
    }
  }
}

```

<p>代码核心逻辑是：把两个条件拼接成字符串，并通过以条件拼接字符串作为键，以处理函数作为值的Map对象进行查找并执行，这种写法在多元条件判断时候尤其好用。</p>

```js{0}
const actions = new Map([
  ['guest_1', ()=>{/*do sth*/}],
  ['guest_2', ()=>{/*do sth*/}],
  ['guest_3', ()=>{/*do sth*/}],
  ['guest_4', ()=>{/*do sth*/}],
  ['guest_5', ()=>{/*do sth*/}],
  ['master_1', ()=>{/*do sth*/}],
  ['master_2', ()=>{/*do sth*/}],
  ['master_3', ()=>{/*do sth*/}],
  ['master_4', ()=>{/*do sth*/}],
  ['master_5', ()=>{/*do sth*/}],
  ['default', ()=>{/*do sth*/}],
])

/**
 * 按钮点击事件
 * @param {string} identity 身份标识：guest客态 master主态
 * @param {number} status 活动状态：1 开团进行中 2 开团失败 3 开团成功 4 商品售罄 5 有库存未开团
 */
const onButtonClick = (identity,status)=>{
  let action = actions.get(`${identity}_${status}`) || actions.get('default')
  action.call(this)
}
```

<p>d) flex + justify-content</p>

``` css{0}
<style>
  .parent{
    display: flex;
    justify-content: center;
  }
  .child{
    margin: 0 auto;
  }

</style>
```

<p>Object对象来实现也是类似的：</p>

``` js{0}
const actions = {
  'guest_1':()=>{/*do sth*/},
  'guest_2':()=>{/*do sth*/},
  //....
}

const onButtonClick = (identity,status)=>{
  let action = actions[`${identity}_${status}`] || actions['default']
  action.call(this)
}
```
<p>如果有些同学觉得把查询条件拼成字符串有点别扭，那还有一种方案，就是用Map对象，以Object对象作为key：</p>


``` js{0}
const actions = new Map([
  [{identity:'guest',status:1},()=>{/*do sth*/}],
  [{identity:'guest',status:2},()=>{/*do sth*/}],
  //...
])

const onButtonClick = (identity,status)=>{
  let action = [...actions].filter(([key,value])=>(key.identity == identity && key.status == status))
  action.forEach(([key,value])=>value.call(this))
}
```
<p>这里也看出来Map与Object的区别，Map可以用任何类型的数据作为key。</p>

<p>我们现在再将难度升级一点点，假如guest情况下，status1-4的处理逻辑都一样怎么办，最差的情况是这样：</p>

``` js{0}

const actions = new Map([
  [{identity:'guest',status:1},()=>{/* functionA */}],
  [{identity:'guest',status:2},()=>{/* functionA */}],
  [{identity:'guest',status:3},()=>{/* functionA */}],
  [{identity:'guest',status:4},()=>{/* functionA */}],
  [{identity:'guest',status:5},()=>{/* functionB */}],
  //...
])
```
<p>好一点的写法是将处理逻辑函数进行缓存：</p>


``` js{0}

const actions = ()=>{
  const functionA = ()=>{/*do sth*/}
  const functionB = ()=>{/*do sth*/}
  return new Map([
    [{identity:'guest',status:1},functionA],
    [{identity:'guest',status:2},functionA],
    [{identity:'guest',status:3},functionA],
    [{identity:'guest',status:4},functionA],
    [{identity:'guest',status:5},functionB],
    //...
  ])
}

const onButtonClick = (identity,status)=>{
  let action = [...actions()].filter(([key,value])=>(key.identity == identity && key.status == status))
  action.forEach(([key,value])=>value.call(this))
}
```
<p>这样写已经能满足日常需求了，但认真一点讲，上面重写了4次functionA还是有点不爽，假如判断条件变得特别复杂，比如identity有3种状态，status有10种状态，那你需要定义30条处理逻辑，而往往这些逻辑里面很多都是相同的，这似乎也是笔者不想接受的，那可以这样实现:
 </p>

``` js{0}

const actions = ()=>{
  const functionA = ()=>{/*do sth*/}
  const functionB = ()=>{/*do sth*/}
  return new Map([
    [/^guest_[1-4]$/,functionA],
    [/^guest_5$/,functionB],
    //...
  ])
}

const onButtonClick = (identity,status)=>{
  let action = [...actions()].filter(([key,value])=>(key.test(`${identity}_${status}`)))
  action.forEach(([key,value])=>value.call(this))
}

```

<p>这里Map的优势更加凸显，可以用正则类型作为key了，这样就有了无限可能，假如需求变成，凡是guest情况都要发送一个日志埋点，不同status情况也需要单独的逻辑处理，那我们可以这样写:</p>

```js{0}

const actions = ()=>{
  const functionA = ()=>{/*do sth*/}
  const functionB = ()=>{/*do sth*/}
  const functionC = ()=>{/*send log*/}
  return new Map([
    [/^guest_[1-4]$/,functionA],
    [/^guest_5$/,functionB],
    [/^guest_.*$/,functionC],
    //...
  ])
}

const onButtonClick = (identity,status)=>{
  let action = [...actions()].filter(([key,value])=>(key.test(`${identity}_${status}`)))
  action.forEach(([key,value])=>value.call(this))
}

```


::: warning
出处： <a href="https://juejin.im/post/5bdfef86e51d453bf8051bf8?utm_source=gold_browser_extension" target="_Blank" color="#fe6e6d">点击这里</a>
:::
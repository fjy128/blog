---
title: 前端 100 问
permalink: /javascript
---
- 第 1 题：（滴滴、饿了么）写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？
- 第 2 题：`['1', '2', '3'].map(parseInt)` what & why ?
- 第 3 题：（挖财）什么是防抖和节流？有什么区别？如何实现？
- 第 4 题：介绍下 Set、Map、WeakSet 和 WeakMap 的区别？
- 第 5 题：介绍下深度优先遍历和广度优先遍历，如何实现？
- 第 6 题：请分别用深度优先思想和广度优先思想实现一个拷贝函数？
- 第 7 题：ES5/ES6 的继承除了写法以外还有什么区别？
- 第 8 题：setTimeout、Promise、Async/Await 的区别
- 第 9 题：（头条、微医）Async/Await 如何通过同步的方式实现异步
- 第 10 题：（头条）异步笔试题(请写出下面代码的运行结果)
```js
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
}, 0)
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');
```
- 第 11 题：（携程）算法手写题

<p>已知如下数组：
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组</p>

- 第 12 题：（滴滴、挖财、微医、海康）JS 异步解决方案的发展历程以及优缺点。
- 第 13 题：（微医）Promise 构造函数是同步执行还是异步执行，那么 then 方法呢？
- 第 14 题：（兑吧）情人节福利题，如何实现一个 new
- 第 15 题：（网易）简单讲解一下http2的多路复用
- 第 16 题：谈谈你对TCP三次握手和四次挥手的理解
- 第 17 题：A、B 机器正常连接后，B 机器突然重启，问 A 此时处于 TCP 什么状态如果A 与 B 建立了正常连接后，从未相互发过数据，这个时候 B 突然机器重启，问 A 此时处于 TCP 什么状态？如何消除服务器程序中的这个状态？（超纲题，了解即可）
- 第 18 题：（微医）React 中 setState 什么时候是同步的，什么时候是异步的？
- 第 19 题：React setState 笔试题，下面的代码输出什么？
```js
class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }

  componentDidMount() {
    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 1 次 log

    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 2 次 log

    setTimeout(() => {
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 3 次 log

      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 4 次 log
    }, 0);
  }

  render() {
    return null;
  }
};
```

- 第 20 题：介绍下 npm 模块安装机制，为什么输入 npm install 就可以自动安装对应的模块？
- 第 21 题：有以下 3 个判断数组的方法，请分别介绍它们之间的区别和优劣Object.prototype.toString.call() 、 instanceof 以及 Array.isArray()
- 第 22 题：介绍下重绘和回流（Repaint & Reflow），以及如何进行优化
- 第 23 题：介绍下观察者模式和订阅-发布模式的区别，各自适用于什么场景
- 第 24 题：聊聊 Redux 和 Vuex 的设计思想
- 第 25 题：说说浏览器和 Node 事件循环的区别
- 第 26 题：介绍模块化发展历程
```html
可从IIFE、AMD、CMD、CommonJS、UMD、webpack(require.ensure)、ES Module、<script type="module"> 这几个角度考虑。
```
- 第 27 题：全局作用域中，用 const 和 let 声明的变量不在 window 上，那到底在哪里？如何去获取？。
- 第 28 题：cookie 和 token 都存放在 header 中，为什么不会劫持 token？
- 第 29 题：聊聊 Vue 的双向数据绑定，Model 如何改变 View，View 又是如何改变 Model 的
- 第 30 题：两个数组合并成一个数组

<p>请把两个数组 ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 和 ['A', 'B', 'C', 'D']，合并为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']。</p>

- 第 31 题：改造下面的代码，使之输出0 - 9，写出你能想到的所有解法。
```js
for (var i = 0; i< 10; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000)
}
```
- 第 32 题：Virtual DOM 真的比操作原生 DOM 快吗？谈谈你的想法。
- 第 33 题：下面的代码打印什么内容，为什么？
```js
var b = 10;
(function b(){
    b = 20;
    console.log(b); 
})();
```
- 第 34 题：简单改造下面的代码，使之分别打印 10 和 20
```js
var b = 10;
(function b(){
    b = 20;
    console.log(b); 
})();
```
- 第 35 题：浏览器缓存读取规则

可以分成 Service Worker、Memory Cache、Disk Cache 和 Push Cache，那请求的时候 from memory cache 和 from disk cache 的依据是什么，哪些数据什么时候存放在 Memory Cache 和 Disk Cache中？
- 第 36 题：使用迭代的方式实现 flatten 函数。
- 第 37 题：为什么 Vuex 的 mutation 和 Redux 的 reducer 中不能做异步操作？
- 第 38 题：（京东）下面代码中 a 在什么情况下会打印 1？
```js
var a = ?;
if(a == 1 && a == 2 && a == 3){
     console.log(1);
}
```
- 第 39 题：介绍下 BFC 及其应用。
- 第 40 题：在 Vue 中，子组件为何不可以修改父组件传递的 Prop如果修改了，Vue 是如何监控到属性的修改并给出警告的。
- 第 41 题：下面代码输出什么
```js
var a = 10;
(function () {
    console.log(a)
    a = 5
    console.log(window.a)
    var a = 20;
    console.log(a)
})()
```
- 第 42 题：（喜马拉雅）实现一个 sleep 函数
比如 sleep(1000) 意味着等待1000毫秒，可从 Promise、Generator、Async/Await 等角度实现

- 第 43 题：使用 sort() 对数组 [3, 15, 8, 29, 102, 22] 进行排序，输出结果
- 第 44 题：介绍 HTTPS 握手过程
- 第 45 题：HTTPS 握手过程中，客户端如何验证证书的合法性
- 第 46 题：输出以下代码执行的结果并解释为什么
```js
var obj = {
    '2': 3,
    '3': 4,
    'length': 2,
    'splice': Array.prototype.splice,
    'push': Array.prototype.push
}
obj.push(1)
obj.push(2)
console.log(obj)
```
- 第 47 题：双向绑定和 vuex 是否冲突
- 第 48 题：call 和 apply 的区别是什么，哪个性能更好一些
- 第 49 题：为什么通常在发送数据埋点请求的时候使用的是 1x1 像素的透明 gif 图片？
- 第 50 题：（百度）实现 (5).add(3).minus(2) 功能。
例：5 + 3 - 2，结果为 6
- 第 51 题：Vue 的响应式原理中 Object.defineProperty 有什么缺陷？
为什么在 Vue3.0 采用了 Proxy，抛弃了 Object.defineProperty？
- 第 52 题：怎么让一个 div 水平垂直居中
- 第 53 题：输出以下代码的执行结果并解释为什么
```js
var a = {n: 1};
var b = a;
a.x = a = {n: 2};

console.log(a.x)     
console.log(b.x)
```
- 第 54 题：冒泡排序如何实现，时间复杂度是多少， 还可以如何改进？
- 第 55 题：某公司 1 到 12 月份的销售额存在一个对象里面

如下：{1:222, 2:123, 5:888}，请把数据处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]。

- 第 56 题：要求设计 LazyMan 类，实现以下功能。
```js
LazyMan('Tony');
// Hi I am Tony

LazyMan('Tony').sleep(10).eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food
```
- 第 57 题：分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景。
- 第 58 题：箭头函数与普通函数（function）的区别是什么？构造函数（function）可以使用 new 生成实例，那么箭头函数可以吗？为什么？
- 第 59 题：给定两个数组，写一个方法来计算它们的交集。

<p>例如：给定 nums1 = [1, 2, 2, 1]，nums2 = [2, 2]，返回 [2, 2]。</p>

- 第 60 题：已知如下代码，如何修改才能让图片宽度为 300px ？注意下面代码不可修改。
```html
<img src="1.jpg" style="width:480px!important;”>
```
- 第 61 题：介绍下如何实现 token 加密
- 第 62 题：redux 为什么要把 reducer 设计成纯函数
- 第 63 题：如何设计实现无缝轮播
- 第 64 题：模拟实现一个 Promise.finally
- 第 65 题：`a.b.c.d` 和 `a['b']['c']['d']`，哪个性能更高？
- 第 66 题：ES6 代码转成 ES5 代码的实现思路是什么
- 第 67 题：数组编程题

<p>随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]。
</p>

- 第 68 题：如何解决移动端 Retina 屏 1px 像素问题
- 第 69 题：如何把一个字符串的大小写取反（大写变小写小写变大写），例如 ’AbC' 变成 'aBc' 。
- 第 70 题：介绍下 webpack 热更新原理，是如何做到在不刷新浏览器的前提下更新页面的
- 第 71 题：实现一个字符串匹配算法，从长度为 n 的字符串 S 中，查找是否存在字符串 T，T 的长度是 m，若存在返回所在位置。
- 第 72 题：为什么普通 `for` 循环的性能远远高于 `forEach` 的性能，请解释其中的原因。
- 第 73 题：介绍下 BFC、IFC、GFC 和 FFC
- 第 74 题：使用 JavaScript Proxy 实现简单的数据绑定
- 第 75 题：数组里面有10万个数据，取第一个元素和第10万个元素的时间相差多少
- 第 76 题：输出以下代码运行结果
```js
// example 1
var a={}, b='123', c=123;  
a[b]='b';
a[c]='c';  
console.log(a[b]);

---------------------
// example 2
var a={}, b=Symbol('123'), c=Symbol('123');  
a[b]='b';
a[c]='c';  
console.log(a[b]);

---------------------
// example 3
var a={}, b={key:'123'}, c={key:'456'};  
a[b]='b';
a[c]='c';  
console.log(a[b]);
```
- 第 77 题：算法题「旋转数组」
```js
// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
示例 1：
输入: [1, 2, 3, 4, 5, 6, 7] 和 k = 3
输出: [5, 6, 7, 1, 2, 3, 4]
解释:
向右旋转 1 步: [7, 1, 2, 3, 4, 5, 6]
向右旋转 2 步: [6, 7, 1, 2, 3, 4, 5]
向右旋转 3 步: [5, 6, 7, 1, 2, 3, 4]
示例 2：
输入: [-1, -100, 3, 99] 和 k = 2
输出: [3, 99, -1, -100]
解释: 
向右旋转 1 步: [99, -1, -100, 3]
向右旋转 2 步: [3, 99, -1, -100]
```

- 第 78 题：Vue 的父组件和子组件生命周期钩子执行顺序是什么
- 第 79 题：input 搜索如何防抖，如何处理中文输入
- 第 80 题：介绍下 Promise.all 使用、原理实现及错误处理
- 第 81 题：打印出 1 - 10000 之间的所有对称数
<p>例如：121、1331 等</p>

- 第 82 题：周一算法题之「移动零」
```js
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
// 说明:
// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。
```
- 第 83 题：var、let 和 const 区别的实现原理是什么
- 第 84 题：请实现一个 add 函数，满足以下功能。
```js
add(1);             // 1
add(1)(2);      // 3
add(1)(2)(3)；// 6
add(1)(2, 3); // 6
add(1, 2)(3); // 6
add(1, 2, 3); // 6
```
- 第 85 题：react-router 里的 <Link> 标签和 <a> 标签有什么区别

如何禁掉 <a> 标签默认事件，禁掉之后如何实现跳转。

- 第 86 题：（京东、快手）周一算法题之「两数之和」
```js
// 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
// 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
示例：
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```
- 第 87 题：在输入框中如何判断输入的是一个正确的网址。
- 第 88 题：实现 convert 方法，把原始 list 转换成树形结构，要求尽可能降低时间复杂度
```js
// 以下数据结构中，id 代表部门编号，name 是部门名称，parentId 是父部门编号，为 0 代表一级部门，现在要求实现一个 convert 方法，把原始 list 转换成树形结构，parentId 为多少就挂载在该 id 的属性 children 数组下，结构如下：
// 原始 list 如下
let list =[
    {id:1,name:'部门A',parentId:0},
    {id:2,name:'部门B',parentId:0},
    {id:3,name:'部门C',parentId:1},
    {id:4,name:'部门D',parentId:1},
    {id:5,name:'部门E',parentId:2},
    {id:6,name:'部门F',parentId:3},
    {id:7,name:'部门G',parentId:2},
    {id:8,name:'部门H',parentId:4}
];
const result = convert(list, ...);

// 转换后的结果如下
let result = [
    {
      id: 1,
      name: '部门A',
      parentId: 0,
      children: [
        {
          id: 3,
          name: '部门C',
          parentId: 1,
          children: [
            {
              id: 6,
              name: '部门F',
              parentId: 3
            }, {
              id: 16,
              name: '部门L',
              parentId: 3
            }
          ]
        },
        {
          id: 4,
          name: '部门D',
          parentId: 1,
          children: [
            {
              id: 8,
              name: '部门H',
              parentId: 4
            }
          ]
        }
      ]
    },
  ···
];
```
- 第 89 题：设计并实现 Promise.race()
- 第 90 题：实现模糊搜索结果的关键词高亮显示
- 第 91 题：介绍下 HTTPS 中间人攻击
- 第 92 题：已知数据格式，实现一个函数 fn 找出链条中所有的父级 id
```js
const value = '112'
const fn = (value) => {
...
}
fn(value) // 输出 [1， 11， 112]
```
- 第 93 题：给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log(m+n))。

```js
示例 1：
nums1 = [1, 3]
nums2 = [2]
中位数是 2.0
示例 2：
nums1 = [1, 2]
nums2 = [3, 4]
中位数是(2 + 3) / 2 = 2.5
```

- 第 94 题：vue 在 v-for 时给每项元素绑定事件需要用事件代理吗？为什么？
- 第 95 题：模拟实现一个深拷贝，并考虑对象相互引用以及 Symbol 拷贝的情况
- 第 96 题：介绍下前端加密的常见场景和方法
- 第 97 题：React 和 Vue 的 diff 时间复杂度从 O(n^3) 优化到 O(n) ，那么 O(n^3) 和 O(n) 是如何计算出来的？
- 第 98 题：（京东）写出如下代码的打印结果

```js
function changeObjProperty(o) {
  o.siteUrl = "http://www.baidu.com"
  o = new Object()
  o.siteUrl = "http://www.google.com"
} 
let webSite = new Object();
changeObjProperty(webSite);
console.log(webSite.siteUrl);
```
- 第 99 题：（bilibili）编程算法题

用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。如：输入整型 1234，返回字符串“4321”。要求必须使用递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。

- 第 100 题：（京东）请写出如下代码的打印结果

```js
function Foo() {
    Foo.a = function() {
        console.log(1)
    }
    this.a = function() {
        console.log(2)
    }
}
Foo.prototype.a = function() {
    console.log(3)
}
Foo.a = function() {
    console.log(4)
}
Foo.a();
let obj = new Foo();
obj.a();
Foo.a();
```

<!-- (参考)[https://github.com/Advanced-Frontend/Daily-Interview-Question] -->
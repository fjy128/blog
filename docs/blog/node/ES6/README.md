---
title: ES6基础语法
permalink: /ES6
---

<h2>前言</h2>
<ul style="list-style-type:decimal-leading-zero;font-size:14px">
<li>这里的 "ES6" 泛指 ES5 之后的新语法</li>
<li>这里的 "完全" 是指本文会不断更新</li>
<li>这里的 "使用" 是指本文会展示很多 ES6 的使用场景</li>
<li>这里的 "手册" 是指你可以参照本文将项目更多的重构为 ES6 语法</li>
</ul>

1 、let 和 const
---
<ul style="list-style-type:square;font-size:14px;">
<li>var 是传统的函数作用域。</li>
<li>let 是新的声明变量的方法，拥有块级作用域。</li>
<li>在 for 循环中，if 语句内或者 plain 块中使用 let 声明的变量不会“逃出”所在的块，而 var变量则会被提升到函数定义。</li>
<li>const 和 like 相似，但是不可更改。</li>
<li>在开发的时候，可能应该默认使用 let 而不是 var，对于需要写保护的变量使用 const。</li>
<li>展望 JavaScript 的发展，var 声明会逐渐消失，只剩下 let 和 const。</li>
</ul>


``` js{0}
/** 1) 块级作用域 if **/

// var
function test(flag) {
    if (flag) {
        var a = 'js'
    } 
    // 这里也可以访问 a
}

// let
 function test(flag) {
    if (flag) {
        let a = 'js'
    } 
    // 这里也访问不到 a
}


/** 2) 块级作用域 for **/

// var
for(var i=0; i<2; i++){
    console.log('outer i: ' + i);
    for(var i=0; i<2; i++){
	console.log('inner i: '+i);
    }
}
// 执行结果如下：
// outer i: 0
// test.html:12 inner i: 0
// test.html:12 inner i: 1

// let
for(var i=0; i<2; i++){
    console.log('outer i: ' + i);
    for(let i=0; i<2; i++){
	console.log('inner i: '+i);
    }
}
// 执行结果如下：
// outer i: 0
// test.html:12 inner i: 0
// test.html:12 inner i: 1
// test.html:10 outer i: 1
// test.html:12 inner i: 0
// test.html:12 inner i: 1



/** 3) 变量声明情况 **/

// 变量var先使用后声明，输出undefined，不报错
console.log(a) // undefined
var a;

// 把var换成let，就报错了
console.log(a) // Uncaught ReferenceError: a is not defined
let a;
```

2、模板字符串
---
<p>需要拼接字符串的时候尽量改成使用模板字符串:</p>

``` js{0}

// bad
const string = 'this is a' + example;

// good 
const string = `this is a ${example}`;

//执行更复杂的表达式
const string1 = `something ${1 + 2 + 3}`
const string2 = `something ${foo() ? 'x' : 'y' }`

//字符串多行的
const string3 = `Hey
this
string
is awesome!`

//如果碰巧要在字符串中使用反撇号，可以使用反斜杠转义
let message = `Hello \` World`;
console.log(message);// Hello ` World

//打印的结果中第一行是一个换行，可以使用 trim 函数消除换行：
let message = `
	<ul>
		<li>1</li>
		<li>2</li>
	</ul>
`.trim();
console.log(message);
//输出如下
//<ul>
//		<li>1</li>
//		<li>2</li>
//	</ul>

//模板字符串支持嵌套
let arr = [{value: 1}, {value: 2}];
let message = `<ul>
		${arr.map((item) => {
			return ` <li>${item.value}</li> `
		})}
	</ul>`;
console.log(message)

//输出如下：
//	<ul>
//		<li>1</li>
//    ,
//		<li>2</li>		
//	</ul>

//注意，在 li 标签中间多了一个逗号，这是因为当大括号中的值不是字符串时，会将其转为字符串，比如一个数组 //[1, 2, 3] 就会被转为 1,2,3，逗号就是这样产生的。
//如果要消除这个逗号，可以先 join 一下

let message = `
	<ul>
		${arr.map((item) => {
			return `
				<li>${item.value}</li>
			`
		}).join('')}
	</ul>
`;
//输出结果如下
//	<ul>
//		<li>1</li>
//		<li>2</li>		
//	</ul>

```
3、标签模板
---
<p>模板标签是一个非常重要的能力，模板字符串可以紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串，举个例子：</p>

``` js{0}
let x = 'Hi', y = 'Kevin';
var res = message`${x}, I am ${y}`;
console.log(res);

/**
 * 自定义 message 函数来处理返回的字符串:
 * literals 文字
 * 注意在这个例子中 literals 的第一个元素和最后一个元素都是空字符串
 */
function message(literals, value1, value2) {
	console.log(literals); // [ "", ", I am ", "" ]
	console.log(value1); // Hi
	console.log(value2); // Kevin
}
```
<p>想看更多点这里：<a href="https://github.com/mqyqingfeng/Blog/issues/84">ES6 系列之模板字符串</a></p>

4、 箭头函数
---
<p><span style="background:#fff5f5;color:#ff502c">=></span>不只是关键字
<span style="background:#fff5f5;color:#ff502c">function</span>的简写，它还带来其他好处。箭头函数与保卫它的代码共享一个
<span style="background:#fff5f5;color:#ff502c">this</span>，能帮你解决
<span style="background:#fff5f5;color:#ff502c">this</span>的指向问题。有经验的JavaScript开发者都熟悉诸如
<span style="background:#fff5f5;color:#ff502c">var self = this</span>;或
<span style="background:#fff5f5;color:#ff502c">var that = this</span>这种引用外围
<span style="background:#fff5f5;color:#ff502c">this</span>的模式。但借助
<span style="background:#fff5f5;color:#ff502c">=></span>，就不需要这种模式了。</p>

``` js{0}
//之前
const foo = function foo() {
  // ...
}

//变成
const foo = () => {
  // ...
}

//如果这个函数体只有一行，可以是这样：
const foo = () => doSomething()

//如果只有一个参数，可以是这样：
const foo = param => doSomething(param)

```
<h4>新的 this 作用域（优先使用箭头函数，不过以下几种情况避免使用：）</h4>


```js{0}
// 1. 使用箭头函数定义对象的方法
const calculator = {
    array: [1, 2, 3],
    sum: () => {
      console.log(this === window); // => true
      return this.array.reduce((result, item) => result + item);
    }
};
console.log(this === window); // => true
// Throws "TypeError: Cannot read property 'reduce' of undefined"
calculator.sum();

/**
解析：
calculator.sum 使用箭头函数来定义，但是调用的时候会抛出 TypeError，
因为运行时 this.array 是未定义的，调用 calculator.sum 的时候，
执行上下文里面的 this 仍然指向的是 window，原因是箭头函数把函数上下文绑定到了 window 上，
this.array 等价于 window.array，显然后者是未定义的。

解决的办法：
使用函数表达式或者方法简写（ES6 中已支持）来定义方法，这样能确保 this 是在运行时是由包含它的上下文决定的
修正后的代码如下:
**/
const calculator = {
    array: [1, 2, 3],
    sum() {
        console.log(this === calculator); // => true
        return this.array.reduce((result, item) => result + item);
    }
};
calculator.sum(); // => 6
/** 
解析：
这样 calculator.sum 就变成了普通函数，执行时 this 就指向 calculator 对象，自然能得到正确的计算结果。
**/

// 2. 定义原型方法
//同样的规则适用于原型方法的定义，使用箭头函数会导致运行时的执行上下文错误，如下例子:
function Cat(name) {
    this.name = name;
}

Cat.prototype.sayCatName = () => {
    console.log(this === window); // => true
    return this.name;
};

const cat = new Cat('Mew');
cat.sayCatName(); // => undefined
/**使用传统的函数表达式就能解决问题**/
function Cat(name) {
    this.name = name;
}

Cat.prototype.sayCatName = function () {
    console.log(this === cat); // => true
    return this.name;
};

const cat = new Cat('Mew');
cat.sayCatName(); // => 'Mew'

/**
解析：
sayCatName 变成普通函数之后，被调用时的执行上下文就会指向新创建的 cat 实例。
**/


//3. 作为事件的回调函数
/**
解析：
this 是 JS 中很强大的特性，可以通过多种方式改变函数执行上下文，
JS 内部也有几种不同的默认上下文指向，但普适的规则是在谁上面调用函数 this 就指向谁，
这样代码理解起来也很自然，读起来就像在说，某个对象上正在发生某件事情。
但是，箭头函数在声明的时候就绑定了执行上下文，要动态改变上下文是不可能的，
在需要动态上下文的时候它的弊端就凸显出来。
比如在客户端编程中常见的 DOM 事件回调函数（event listenner）绑定，
触发回调函数时 this 指向当前发生事件的 DOM 节点，而动态上下文这个时候就非常有用，
比如下面这段代码试图使用箭头函数来作事件回调函数
**/
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
    console.log(this === window); // => true
    this.innerHTML = 'Clicked button';
});

/**
解析：
在全局上下文下定义的箭头函数执行时 this 会指向 window，
当单击事件发生时，浏览器会尝试用 button 作为上下文来执行事件回调函数，
但是箭头函数预定义的上下文是不能被修改的，
这样 this.innerHTML 就等价于 window.innerHTML，而后者是没有任何意义的。
使用函数表达式就可以在运行时动态的改变 this，
修正后的代码如下：
**/
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
    console.log(this === button); // => true
    this.innerHTML = 'Clicked button';
});

/**
解析：
当用户单击按钮时，事件回调函数中的 this 实际指向 button，
这样的 this.innerHTML = 'Clicked button' 就能按照预期修改按钮中的文字。
**/


// 4. 定义构造函数
/**
解析：
构造函数中的 this 指向新创建的对象，当执行 new Car() 的时候，
构造函数 Car 的上下文就是新创建的对象，也就是说 this instanceof Car === true。
显然，箭头函数是不能用来做构造函数， 实际上 JS 会禁止你这么做，如果你这么做了，它就会抛出异常。
换句话说，箭头构造函数的执行并没有任何意义，并且是有歧义的。比如，当我们运行下面的代码 
**/
const Message = (text) => {
    this.text = text;
};
// Throws "TypeError: Message is not a constructor"
const helloMessage = new Message('Hello World!');

/**
解析：
构造新的 Message 实例时，JS 引擎抛了错误，因为 Message 不是构造函数。
在笔者看来，相比旧的 JS 引擎在出错时悄悄失败的设计，ES6 在出错时给出具体错误消息是非常不错的实践。
可以通过使用函数表达式或者函数声明 来声明构造函数修复上面的例子
**/
const Message = function(text) {
    this.text = text;
};
const helloMessage = new Message('Hello World!');
console.log(helloMessage.text); // => 'Hello World!'


// 5. 追求过短的代码
/**
解析：
箭头函数允许你省略参数两边的括号、函数体的花括号、甚至 return 关键词，
这对编写更简短的代码非常有帮助，一定程度上，压缩了太多逻辑的简短代码，阅读起来就没有那么直观，如下例子
**/
const multiply = (a, b) => b === undefined ? b => a * b : a * b;
const double = multiply(2);
double(3);      // => 6
multiply(2, 3); // => 6

/**
解析：
multiply 函数会返回两个数字的乘积或者返回一个可以继续调用的固定了一个参数的函数。
代码看起来很简短，但大多数人第一眼看上去可能无法立即搞清楚它干了什么，怎么让这段代码可读性更高呢？
有很多办法，可以在箭头函数中加上括号、条件判断、返回语句，或者使用普通的函数
**/
function multiply(a, b) {
    if (b === undefined) {
        return function (b) {
            return a * b;
        }
    }
    return a * b;
}

const double = multiply(2);
double(3); // => 6
multiply(2, 3); // => 6
```

5、Symbol
---
<p>ES6 中的 Symbol 也是一种数据类型，但是不是字符串，也不是对象，而是一种新的数据类型：第七种数据类型</p>

6、Set 和 Map
---
<h5></h5>

```js{0}
// 1. 数组去重（[...new Set(array)]）在ES6中，因为Set只存储唯一值，所以你可以使用Set删除重复项。

let arr = [1, 1, 2, 2, 3, 3];
let deduped = [...new Set(arr)] //=> [1, 2, 3]

// 1）数组中存在不同的类型
const removeDuplicateItems = arr => [...new Set(arr)];
removeDuplicateItems([42, 'foo', 42, 'foo', true, true]);//=> [42, "foo", true]

// 2. 对Set使用数组方法
/**
解析：
使用扩展运算符就可以简单的将Set转换为数组。所以你可以对Set使用Array的所有原生方法。
比如我们想要对下面的Set进行filter操作，获取大于3的项。
**/
let mySet = new Set([1,2, 3, 4, 5]);
var filtered = [...mySet].filter((x) => x > 3) // [4, 5]

//3. 条件语句的优化
// 根据颜色找出对应的水果
// bad
function test(color) {
  switch (color) {
    case 'red':
      return ['apple', 'strawberry'];
    case 'yellow':
      return ['banana', 'pineapple'];
    case 'purple':
      return ['grape', 'plum'];
    default:
      return [];
  }
}

test('yellow'); // ['banana', 'pineapple']

//good
const fruitColor = {
  red: ['apple', 'strawberry'],
  yellow: ['banana', 'pineapple'],
  purple: ['grape', 'plum']
};

function test(color) {
  return fruitColor[color] || [];
}

// better
const fruitColor = new Map()
  .set('red', ['apple', 'strawberry'])
  .set('yellow', ['banana', 'pineapple'])
  .set('purple', ['grape', 'plum']);

function test(color) {
  return fruitColor.get(color) || [];
}
```

7 、for of
---

<h5>1. 遍历范围</h5>
<ul>
<li>数组</li>
<li>Set</li>
<li>Map</li>
<li>类数组对象，如 arguments 对象、DOM NodeList 对象</li>
<li>Generator 对象</li>
<li>字符串</li>
</ul>


```js{0}
//  for..of 循环，它结合了 forEach 的简洁性和中断循环的能力：
for (const v of ['a', 'b', 'c']) {
  console.log(v);
}
// a b c

for (const [i, v] of ['a', 'b', 'c'].entries()) {
  console.log(i, v);
}
// 0 "a"
// 1 "b"
// 2 "c"


// 遍历 Map
let map = new Map(arr);

// 遍历 key 值
for (let key of map.keys()) {
  console.log(key);
}

// 遍历 value 值
for (let value of map.values()) {
  console.log(value);
}

// 遍历 key 和 value 值(一)
for (let item of map.entries()) {
  console.log(item[0], item[1]);
}

// 遍历 key 和 value 值(二)
for (let [key, value] of data) {
  console.log(key)
}
```

8、Promise   
---
<p>使用 Promise 构造函数创建了一个新的 promise。</p>

```js{0}
//举个项目中例子：

//创建对象
 function getSingleCoupons(icrowdkindid){
      let access_token = sessionStorage.getItem("name");
      var promise = new Promise(function(resolve) {
        if (access_token) {
          let pacouponParams= {
            access_token,
            icrowdkindid,
            usid:sessionStorage.getItem("userName"),
            orderAmount:100000
          }
          let url = `${urlhead}/ticket/coupon/v1/viewAvailableCoupons`
          http.get2(url,pacouponParams).then(res=>{
            if(res.code == 200 && res.data){
              resolve(true);
            }else{
              resolve(false);
            }
          })
        }else {
          resolve(false)
        }
      });
      return promise
    }

//调用
 let outIstrue = await getSingleCoupons(value.icrowdkindid)
```

```js{0}
const myPromise = new Promise((resolve, reject) => {
    if (Math.random() * 100 < = 90) {
        resolve('Hello, Promises!');
    }
    reject(new Error('In 10% of the cases, I fail. Miserably.'));
});
```
<ul style="list-style-type:square;font-size:14px;">
<li>观察这个构造函数就可以发现其接收一个带有两个参数的函数，这个函数被称为 执行器函数，并且它 描述了需要完成的计算。</li>
<li>执行器函数的参数通常被称为 resolve 和 reject，分别标记执行器函数的成功和不成功的最终完成结果。</li>
<li>resolve 和 reject 本身也是函数，它们用于将返回值返回给 promise 对象。</li>
<li>当计算成功或未来值准备好时，我们使用 resolve 函数将值返回。这时我们说这个 promise 已经被成功解决（resolve）了。</li>
<li>如果计算失败或遇到错误，我们通过在 reject 函数中传递错误对象告知 promise 对象。这时我们说这个 promise 已经被拒绝（reject）了。</li>
<li>reject 可以接收任何类型的值。但是，建议传递一个 Error 对象，因为它可以通过查看堆栈跟踪来帮助调试。</li>
<li>上面的例子中，我们创建了一个 promise 并将其存储在 myPromise 中。那我们如何才能获取通过 resolve 或 reject 函数传递过来的值呢？所有的 Promise 都有一个 .then() 方法。这样问题就好解决了，如下例子：</li>
</ul>

```js{0}
const myPromise = new Promise((resolve, reject) => {
    if (Math.random() * 100 < 90) {
        console.log('resolving the promise ...');
        resolve('Hello, Promises!');
    }
    reject(new Error('In 10% of the cases, I fail. Miserably.'));
});
 
// 两个函数
const onResolved = (resolvedValue) => console.log(resolvedValue);
const onRejected = (error) => console.log(error);
 
myPromise.then(onResolved, onRejected);

 
// 效果同上，代码更加简明扼要
myPromise.then((resolvedValue) => {
    console.log(resolvedValue);
}, (error) => {
    console.log(error);
});
 
// 有 90% 的概率输出下面语句
 
// resolving the promise ...
// Hello, Promises!
// Hello, Promises!
```
<ul style="list-style-type:square;font-size:14px;">
<li>.then() 接收两个回调函数。第一个回调在 promise 被 解决时调用。第二个回调在 promise 被 拒绝时调用。</li>
<li>到目前为止，我们只是很方便地看到了 resolve 的案例。那当执行器函数发生错误的时候会发生什么呢？当发生错误时，执行 .then() 的第二个回调，即 onRejected。让我们看一下下面例子</li>
</ul>

```js{0}
const myProimse = new Promise((resolve, reject) => {
  if (Math.random() * 100 < 90) {
    reject(new Error('The promise was rejected by using reject function.'));
  }
  throw new Error('The promise was rejected by throwing an error');
});
 
myProimse.then(
  () => console.log('resolved'), 
  (error) => console.log(error.message)
);
 
// 有 90% 的概率输出下面语句
 
// The promise was rejected by using reject function.
```
<ul style="list-style-type:square;font-size:14px;">
<li>当我们想要处理一个错误时，我们可以使用 .catch(onRejected) 接收一个回调： onRejected，而不必使用 .then(null, () => {...})。</li>
</ul>

```js{0}
myProimse.catch(
  (error) => console.log(error.message)
);
```
<ul style="list-style-type:square;font-size:14px;">
<li>请记住 .catch 只是 .then(undefined, onRejected) 的一个语法糖。</li>
<li>Promise 链式调用--.then() 和 .catch() 方法 总是返回一个 promise。所以你可以把多个 .then 链接到一起。让我们通过一个例子来理解它。</li>
<li>首先，我们创建一个返回 promise 的 delay 函数。返回的 promise 将在给定秒数后解析。</li>
<li>在这个例子中，我们使用一个函数来包装我们的 promise，以便它不会立即执行。该 delay 函数接收以毫秒为单位的时间作为参数。</li>
<li>Promise 链式调用--.then() 和 .catch() 方法 总是返回一个 promise。所以你可以把多个 .then 链接到一起。让我们通过一个例子来理解它。</li>
<li>由于闭包的特点，该执行器函数可以访问 ms 参数。它还包含一个在 ms 毫秒后调用 resolve 函数的 setTimeout 函数，从而 有效解决 promise</li>
</ul>
<p></p>
<p></p>
<p></p>

```js{0}
const delay = (ms) => new Promise(  
  (resolve) => setTimeout(resolve, ms)  
);
delay(5000).then(() => console.log('Resolved after 5 seconds'));
```
<ul style="list-style-type:square;font-size:14px;">
<li>只有在 delay(5000) 解决后， .then 回调中的语句才会运行。当你运行上面的代码时，你会在 5 秒后看到 Resolved after 5 seconds 被打印出来。</li>
<li>以下是我们如何实现 .then() 的链式调用</li>
</ul>

```js{0}
const delay = (ms) => new Promise(
  (resolve) => setTimeout(resolve, ms)
);
 
delay(2000).then(() => {
    console.log('Resolved after 2 seconds')
    return delay(1500);
  }).then(() => {
    console.log('Resolved after 1.5 seconds');
    return delay(3000);
  }).then(() => {
    console.log('Resolved after 3 seconds');
    throw new Error();
  }).catch(() => {
    console.log('Caught an error.');
  }).then(() => {
    console.log('Done.');
  });
 
// Resolved after 2 seconds
// Resolved after 1.5 seconds
// Resolved after 3 seconds
// Caught an error.
// Done.
```
<ul style="list-style-type:square;font-size:14px;">
<li>delay(2000) 函数返回一个在两秒之后可以得到解决的 promise。</li>
<li>第一个 .then() 执行。它输出了一个句子 Resolved after 2 seconds。然后，它通过调用 delay(1500) 返回另一个 promise。如果一个 .then() 里面返回了一个 promise，该 promise 的解决方案（技术上称为结算）是转发给下一个 .then 去调用。</li>
<li>我们在 .then 里面抛出了一个错误。那意味着当前的 promise 被拒绝了， 并被下一个 .catch 处理程序捕捉。因此， Caught an error 这句话被打印。然而，一个 .catch 本身总是被解析为 promise，并且不会被拒绝（除非你故意抛出错误）。这就是为什么 .then 后面的 .catch 会被执行的原因。</li>
<li>这里建议使用 .catch 而不是带有 onResolved 和 onRejected 参数的 .then 去处理。下面有一个案例解释了为什么最好这样做</li>
</ul>
<p></p>

```js{0}
const promiseThatResolves = () => new Promise((resolve, reject) => {
  resolve();
});
 
// 导致被拒绝的 promise 没有被处理
promiseThatResolves().then(
  () => { throw new Error },
  (err) => console.log(err),
);
 
// 适当的错误处理
promiseThatResolves().then(() => {
    throw new Error();
  }).catch(err => console.log(err));
```
<ul style="list-style-type:square;font-size:14px;">
<li>第 1 行创建了一个始终可以解决的 promise。当你有一个带有两个回调 ，即 onResolved 和 onRejected 的 .then 方法时，你只能处理 执行器函数的错误和拒绝。假设 .then 中的处理程序也会抛出错误。它不会导致执行 onRejected 回调。</li>
<li>但如果你在 .then 后跟着调用 .catch，那么 .catch 既捕捉执行器函数的错误也捕捉 .then 处理程序的错误。这是有道理的，因为 .then 总是返回一个 promise。</li>
</ul> 
<h3>2. finally</h3> 

```js{0}
fetch('file.json').then(
  data => data.json()
  ).catch(
  error => console.error(error)
  ).finally(
    () => console.log('finished')
  );
```
```js{0}
//不使用ES6
setTimeout(function(){
  console.log('Hello'); // 1秒后输出"Hello"
  setTimeout(function(){
    console.log('Hi'); // 2秒后输出"Hi"
  }, 1000);
}, 1000);

//使用ES6
var waitSecond = new Promise(function(resolve, reject){
    setTimeout(resolve, 1000);
});

waitSecond.then(function(){
    console.log("Hello"); // 1秒后输出"Hello"
    return waitSecond;
  }).then(function(){
    console.log("Hi"); // 2秒后输出"Hi"
  });

```
9、 Async
---
<h4>1). 代码更加简洁</h4>

```js{0}
// good
function fetch() {
  return (
    fetchData().then(value1 => {
      return fetchMoreData(value1)
    }).then(value2 => {
      return fetchMoreData2(value2)
    })
  )
}

// better
async function fetch() {
  const value1 = await fetchData()
  const value2 = await fetchMoreData(value1)
  return fetchMoreData2(value2)
};
```
<h4>2). 错误处理</h4>

```js{0}
// good
function fetch() {
  try {
    fetchData().then(result => {
        const data = JSON.parse(result)
      }).catch((err) => {
        console.log(err)
      })
  } catch (err) {
    console.log(err)
  }
}

// better
async function fetch() {
  try {
    const data = JSON.parse(await fetchData())
  } catch (err) {
    console.log(err)
  }
};
```
<h4>3). "async 地狱"</h4>

```js{0}
// bad
(async () => {
  const getList = await getList();
  const getAnotherList = await getAnotherList();
})();

// good
(async () => {
  const listPromise = getList();
  const anotherListPromise = getAnotherList();
  await listPromise;
  await anotherListPromise;
})();

/**
 * good 可以使用 Promise.all 来 await 多个 async（异步）函数。
 * demo: await Promise.all([anAsyncCall(), thisIsAlsoAsync(), oneMore()])
 */
(async () => {
  Promise.all([getList(), getAnotherList()]).then(...);
})();
```
10、Class
---
<ul style="list-style-type:square;font-size:14px;">
<li>js语言中，生成实例对象的传统方法就是通过构造函数,ES6提供了class（类）这个概念，作为对象的模板。</li>
<li>通过class关键字，可以定义类；下面是用两种方式来实现函数的构造，基本上，ES6的class可以看做知识一个语法糖，它的绝大部分功能，ES5都可以看到，新的class写法只是让对象原型的写法更加清晰，更像面向对象编程语法而已。</li>
</ul>
<p></p>

```js{0}
//使用传统的ES5方式构造函数：
function Point (x, y){
       this.x = x;
       this.y = y;
}
Point.prototype.toString = function(){
        return `( ${this.x} , ${this.y} )`
}
var p = new Point(1,2);
p.toString();//"(1,2)"

//使用ES6的class构造函数
//定义类
class Point {
    constructor (x, y) {
      this.x =x;
      this.y =y;
    }
    toString () {
    return `( ${this.x}, ${this.y} )`;
    }
    toValue () {
    return this.x+this.y;
    }
}
var p = new Point(1,2);
p.toString();//"(1,2)"
p.toValue();//3
```
<ul style="list-style-type:square;font-size:14px;">
<li>定义了一个Point类，他里面有个constructor方法，这就是构造方法；</li>
<li>this关键字则代表实例对象，也就是说，ES5的构造函数Point，对应ES6的Point类的构造方法；</li>
<li>ES6的Point类除了构造方法，还定义了一个toString方法，定义类的方法的时候，前面不需要加function这个关键字,直接将函数定义放进去就行了，另外，方法之间不需要逗号分隔；</li>
<li>构造函数的prototype属性，在ES6的类上继续存在，实际上，类的所有方法都定义在类的prototype属性上面。</li>
</ul>

<h4>1、constructor方法</h4>
<ul style="list-style-type:square;font-size:14px;">
<li>constructor方法是类的默认方法，通过new 命令生成对象实例时，自动调用该方法，一个类必须有constructor方法，如果没有显示定义，一个空的constructor方法会被默认添加</li>
</ul>

```js{0}
class Point{
}

//等同于
class Point {
     constructor () { }
}
//定义了一个空的类Point，JavaScript 引擎会自动为它添加一个空的constructor方法。
```
<p>constructor方法默认返回实例对象（即this）,完全可以指定返回另外一个对象</p>

```js{0}
class Person {
      constructor  () {
            return Object.create(null);
         }
}
new Person() instanceof Person//false
//实例   instanceof 构造函数  用来判断实例是否是构造函数的实例
```
<h4>2、类的实例对象</h4>
<ul style="list-style-type:square;font-size:14px;">
<li>生成的实例对象的写法，与ES一样都是使用new命令，实例的属性除非显示定义在其本身（即定义在this对象上）,否则都是定义在原型上(即定义在class上)；</li>
</ul>

```js{0}
//定义类
class Point {
        constructor (x, y) {
           this.x =x;
            this.y =y;
          } 
      toString () {
          return `(${this.x},${this.y})`;
       }
}
var point = new Point(1,2);
point.toString();//(1,2)
point.hasOwnProperty("x"); //true
point.hasOwnProperty("y"); //true
point.hasOwnProperty("toString");//fasle
point.__proto__.hasOwnProperty("toString");//true

/**
解析：
x 和 y 都是实例对象point自身的属性（因为定义在this变量上）,所以hasOwnProperty方法返回true；
而toString是原型对象的属性（因为定义在Point类上），所以hasOwnProperty()方法返回false,
这些都是ES5的行为保持一致
**/

```

<h4>3、class 表达式</h4>
<p>与函数一样，类也可以使用表达式的形式来定义</p>

```js{0}
//使用表达式定义了一个类，需要注意的是，这个类的名字MyClass而不是Me,Me只在Class的内部代码可用
const MyClass = class Me{
  getClassName () {
    return Me.name ;
  }
};
let inst  = new MyClass();
inst.getClassName();//"Me"
  getClassName () {
    return  ;
  }
}

//采用Class表达式，可以写出立即执行Class
let person = new class {
  constructor (name) {
    this.name = name ;
  }
  sayName() {
    console.log(this.name);
  }
}("张三");

person.sayName();//"张三"
```
<h4>4、不存在变量提升</h4>

```js{0}
// 这个和ES5完全不一样
new Foo();//ReferenceError
class Foo();
/**
解析：
Foo类使用在前，定义在后，这样会报错，因为 ES6 不会把类的声明提升到代码头部。
这种规定的原因与下文要提到的继承有关，必须保证子类在父类之后定义。
**/
```
<h4>5、this的指向</h4>

```js{0}
// 类的方法内部如果含有this，他默认指向类的实例，但是，必须非常小心，一旦单独使用该方法，可能会报错
class Logger {
  printName(name = 'there') {
    this.print(`Hello ${name}`);
  }
  print(text) {
    console.log(text);
  }
}

const logger = new Logger();
const { printName } = logger;
printName(); // TypeError: Cannot read property 'print' of undefined

/**
解析：
printName方法中的this，默认指向Logger类的实例。
如果将这个方法提取出来单独使用，this会指向该方法运行时所在的环境，因为找不到print方法而导致报错。
**/
```
<h4>6、Class 的取值函数（getter）和存值函数（setter）</h4>

```js{0}
/**
与 ES5 一样，在“类”的内部可以使用get和set关键字，
对某个属性设置存值函数和取值函数，拦截该属性的存取行为。
**/

class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: '+value);
  }
}
let inst = new MyClass();
//prop属性有对应的存值函数和取值函数，因此赋值和读取行为都被自定义了。
inst.prop = 123;// setter: 123
inst.prop// 'getter'
//https://www.imooc.com/article/20596?block_id=tuijian_wz
```
<h4>7、Class 的静态方法 </h4>

```js{0}
/**
类相当于实例的原型，所有在类中定义的方法，都会被实例继承。
如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就是“静态方法“
**/

// 例题1
class Foo {
  static classMethod() {
    return 'hello';
  }
}

Foo.classMethod() // 'hello'

var foo = new Foo();
foo.classMethod() // TypeError: foo.classMethod is not a function

/**
解析：
Foo类的classMethod方法前有static关键字，表明该方法是一个静态方法，
可以直接在Foo类上调用（Foo.classMethod()），而不是在Foo类的实例上调用。
如果在实例上调用静态方法，会抛出一个错误，表示不存在该方法。
注意，如果静态方法包含this关键字，这个this指的是类，而不是实例。
**/

// 例题2
class Foo {
  static bar () {
    this.baz();
  }
  static baz () {
    console.log('hello');
  }
  baz () {
    console.log('world');
  }
}

Foo.bar() // hello

/**
解析：
静态方法bar调用了this.baz，这里的this指的是Foo类，而不是Foo的实例，等同于调用Foo.baz。
另外，从这个例子还可以看出，静态方法可以与非静态方法重名
**/

// 例题3--父类的静态方法，可以被子类继承。
class Foo {
  static classMethod() {
    return 'hello';
  }
}

class Bar extends Foo {
}

Bar.classMethod() // 'hello

```
<h4>8、Class 的静态属性和实例属性</h4>

```js{0}
// 静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性。
class Foo {
}

Foo.prop = 1;
Foo.prop // 1
/**
解析：
Foo类定义了一个静态属性prop,只有这种写法可行，
因为 ES6 明确规定，Class 内部只有静态方法，没有静态属性。
**/

// （1）类的实例属性--类的实例属性可以用等式，写入类的定义之中
class MyClass {
  myProp = 42;

  constructor() {
    console.log(this.myProp); // 42
  }
}
//myProp就是MyClass的实例属性。在MyClass的实例上，可以读取这个属性。
```

11、 函数
---

<h5>1. 默认值</h5>

```js{0}

/**例子--1**/
// bad
function demo(params){
  const p = params||1;
  console.log(p)
}
// good
function demo(params=1){
  console.log(params)
}

/**例子--2**/
doSomething({ foo: 'Hello', bar: 'Hey!', baz: 42 });
// bad
function doSomething(config) {
  const foo = config.foo !== undefined ? config.foo : 'Hi';
  const bar = config.bar !== undefined ? config.bar : 'Yo!';
  const baz = config.baz !== undefined ? config.baz : 13;
}

// good
function doSomething({ foo = 'Hi', bar = 'Yo!', baz = 13 }) {
  ...
}

// better
function doSomething({ foo = 'Hi', bar = 'Yo!', baz = 13 } = {}) {
  ...
}

/**例子--3**/

// bad
const Button = ({className}) => {
	const classname = className || 'default-size';
	return <span className={classname}></span>
};

// good
const Button = ({className = 'default-size'}) => (
	<span className={classname}></span>
);

// better
const Button = ({className}) =>
	<span className={className}></span>
}

Button.defaultProps = {
	className: 'default-size'
}

/**例子--4**/ 

const required = () => {throw new Error('Missing parameter')};

const add = (a = required(), b = required()) => a + b;

add(1, 2) // 3
add(1); // Error: Missing parameter.
```

12、赋值解构
---

```js{0}
/** 一、获取数组中的值 **/

//1、从数组中获取值并赋值到变量中，变量的顺序与数组中对象顺序对应。
var foo = ["one", "two", "three", "four"];

var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"

//2、如果你要忽略某些值，你可以按照下面的写法获取你想要的值
var [first, , , last] = foo;
console.log(first); // "one"
console.log(last); // "four"

//3、你也可以这样写
var a, b; //先声明变量

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

//4、如果没有从数组中的获取到值，你可以为变量设置一个默认值。
var a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7

//5、通过解构赋值可以方便的交换两个变量的值。
var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

/** 二、获取对象中的值 **/

const student = {
  name:'Ming',
  age:'18',
  city:'Shanghai'  
};

const {name,age,city} = student;
console.log(name); // "Ming"
console.log(age); // "18"
console.log(city); // "Shanghai"
```

13、延展操作符
---
<p><span style="background:#fff5f5;color:#ff502c">延展操作符...</span>
可以在函数调用/数组构造时, 将数组表达式或者string在语法层面展开；还可以在构造对象时, 将对象表达式按key-value的方式展开。</p>

```js{0}

//函数调用：
myFunction(...iterableObj);

//数组构造或字符串
[...iterableObj, '4', ...'hello', 6];

//构造对象时,进行克隆或者属性拷贝（ECMAScript 2018规范新增特性）：
let objClone = { ...obj };


/***应用场景***/
/**展开语法和 Object.assign() 行为一致, 执行的都是浅拷贝(只遍历一层)。**/

//1、在函数调用时使用延展操作符
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];

//不使用延展操作符
console.log(sum.apply(null, numbers));// 6

//使用延展操作符
console.log(sum(...numbers));// 6

//2、构造数组
//没有展开语法的时候，只能组合使用 push，splice，concat 等方法，将已有数组元素变成新数组的一部分。
//有了展开语法, 构造新数组会变得更简单、更优雅：
const stuendts = ['Jine','Tom']; 
const persons = ['Tony',... stuendts,'Aaron','Anna'];
conslog.log(persions)// ["Tony", "Jine", "Tom", "Aaron", "Anna"]

//3、数组拷贝
var arr = [1, 2, 3];
var arr2 = [...arr]; // 等同于 arr.slice()
arr2.push(4); 
console.log(arr2)//[1, 2, 3, 4]

//4、连接多个数组
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
var arr3 = [...arr1, ...arr2];// 将 arr2 中所有元素附加到 arr1 后面并返回
//等同于
var arr4 = arr1.concat(arr2);

//5、在ECMAScript 2018中延展操作符增加了对对象的支持
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// 克隆后的对象: { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// 合并后的对象: { foo: "baz", x: 42, y: 13 }

//6、在React中的应用
<CustomComponent name ='Jine' age ={21} />
//等同于
const params = {
	name: 'Jine',
	age: 21
}
<CustomComponent {...params} />

//配合解构赋值避免传入一些不需要的参数
var params = {
	name: '123',
	title: '456',
	type: 'aaa'
}

var { type, ...other } = params;

<CustomComponent type='normal' number={2} {...other} />
//等同于
<CustomComponent type='normal' number={2} name='123' title='456' />
```
14、对象属性简写
---
```js{0}
// 不使用ES6
const name='Ming',age='18',city='Shanghai';
   
const student = {
    name:name,
    age:age,
    city:city
};
console.log(student);//{name: "Ming", age: "18", city: "Shanghai"}

//使用ES6
const name='Ming',age='18',city='Shanghai';
  
const student = {
    name,
    age,
    city
};
console.log(student);//{name: "Ming", age: "18", city: "Shanghai"}
```

15、ES7新特性（2016）
---
<ul>
<li>数组includes()方法，用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回true，否则返回false。</li>
<li>a ** b指数运算符，它与 Math.pow(a, b)相同。</li>
</ul>

```js{0}
//includes 函数与 indexOf 函数很相似，下面两个表达式是等价的：
arr.includes(x)
arr.indexOf(x) >= 0

/**接下来我们来判断数字中是否包含某个元素：**/
//在ES7之前的做法
let arr = ['react', 'angular', 'vue'];

if (arr.indexOf('react') !== -1)
{
    console.log('react存在');
}

//使用ES7的includes()
if (arr.includes('react'))
{
    console.log('react存在');
}
```
16、指数操作符
---

```js{0}
/**在ES7中引入了指数运算符**，**具有与Math.pow(..)等效的计算结果。**/
//不使用指数操作符--使用自定义的递归函数calculateExponent或者Math.pow()进行指数运算：
function calculateExponent(base, exponent)
{
    if (exponent === 1)
    {
        return base;
    }
    else
    {
        return base * calculateExponent(base, exponent - 1);
    }
}

console.log(calculateExponent(2, 10)); // 输出1024
console.log(Math.pow(2, 10)); // 输出1024

//使用指数操作符--使用指数运算符**，就像+、-等操作符一样
console.log(2**10);// 输出1024

```
17、ES8新特性（2017）
---
```js{0}
// 1.async/await
/** 
ES2018引入异步迭代器（asynchronous iterators），这就像常规迭代器，除了next()方法返回一个Promise。
因此await可以和for...of循环一起使用，以串行的方式运行异步操作
**/
async function process(array) {
  for await (let i of array) {
    doSomething(i);
  }
}

// 2.Object.values()
/**
Object.values()是一个与Object.keys()类似的新函数，
但返回的是Object自身属性的所有值，不包括继承的值
**/
const obj = {a: 1, b: 2, c: 3};

// 不使用Object.values() :ES7
const vals=Object.keys(obj).map(key=>obj[key]);
console.log(vals);//[1, 2, 3]

//使用Object.values() :ES8
const values=Object.values(obj1);
console.log(values);//[1, 2, 3]

// 3.Object.entries()函数返回一个给定对象自身可枚举属性的键值对的数组。

// 不使用Object.entries() :ES7
Object.keys(obj).forEach(key=>{
	console.log('key:'+key+' value:'+obj[key]);
})
//key:a value:1
//key:b value:2
//key:c value:3

// 使用Object.entries() :ES8
for(let [key,value] of Object.entries(obj1)){
	console.log(`key: ${key} value:${value}`)
}
//key:a value:1
//key:b value:2
//key:c value:3


// 4.String padding  
// String.padStart(targetLength,[padString])/String.padEnd(targetLength,padString])
/**
解析：
在ES8中String新增了两个实例函数String.prototype.padStart和String.prototype.padEnd，
允许将空字符串或其他字符串添加到原始字符串的开头或结尾
targetLength:当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身。
padString:(可选)填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断，此参数的缺省值为。
**/ 
console.log('0.0'.padStart(4,'10')) //10.0
console.log('0.0'.padStart(20))// 0.00   
console.log('0.0'.padEnd(4,'0')) //0.00    
console.log('0.0'.padEnd(10,'0'))//0.00000000

```

18、ES9新特性（2018）
---
```js{0}
// 1、正则表达式命名捕获组
/**
JavaScript正则表达式可以返回一个匹配的对象——一个包含匹配字符串的类数组，
例如：以YYYY-MM-DD的格式解析日期：
**/
const
  reDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/,
  match  = reDate.exec('2018-04-30'),
  year   = match[1], // 2018
  month  = match[2], // 04
  day    = match[3]; // 30
/**
以上代码很难读懂，并且改变正则表达式的结构有可能改变匹配对象的索引
**/

/**
ES2018允许命名捕获组使用符号?<name>，在打开捕获括号(后立即命名，示例如下：
**/
const
  reDate = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/,
  match  = reDate.exec('2018-04-30'),
  year   = match.groups.year,  // 2018
  month  = match.groups.month, // 04
  day    = match.groups.day;   // 30
//任何匹配失败的命名组都将返回undefined。

/**
命名捕获也可以使用在replace()方法中。例如将日期转换为美国的 MM-DD-YYYY 格式：
**/
const
  reDate = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/,
  d      = '2018-04-30',
  usDate = d.replace(reDate, '$<month>-$<day>-$<year>');
```
19、ES10新特性（2019）
---
```js{0}
// 1、新增了Array的flat()方法和flatMap()方法
/**
(1)flat()和flatMap()本质上就是是归纳（reduce） 与 合并（concat）的操作
(2)flat()会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
(3)flatMap()方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 和 深度值1的 flat
 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。这里我们拿map方法与flatMap方法做一个比较
**/

// Array.prototype.flat()

//1)flat()方法最基本的作用就是数组降维 
var arr1 = [1, 2, [3, 4]];
arr1.flat(); 
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

//使用 Infinity 作为深度，展开任意深度的嵌套数组
arr3.flat(Infinity); 
// [1, 2, 3, 4, 5, 6]

// 2)利用flat()方法的特性来去除数组的空项
var arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]

// Array.prototype.flatMap()
var arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]); 
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// 只会将 flatMap 中的函数返回的数组 “压平” 一层
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]


// 2、新增了String的trimStart()方法和trimEnd()方法

// 3、Object.fromEntries()--Object.fromEntries() 则是 Object.entries() 的反转
// Object.fromEntries() 函数传入一个键值对的列表，并返回一个带有这些键值对的新对象
const map = new Map([ ['foo', 'bar'], ['baz', 42] ]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }

// 通过 Object.fromEntries， 可以将 Array 转化为 Object:
const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }
```




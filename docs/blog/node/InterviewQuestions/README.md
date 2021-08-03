---
title: 前端面试题
permalink: /javascript
---

1、前端数据数据存储都有哪些
---
<h5>（1）cookie 和 session 区别</h5>

- cookie 数据存放在客户端，session 数据放在服务器端。
- cookie 本身并不安全，考虑到安全应当使用 session。
- session 会在一定时间内保存在服务器上。如果访问量比较大，会比较消耗服务器的性能。考虑到减轻服务器性能方面的开销，应当使用 cookie 。
- 单个 cookie 保存的数据不能超过 4K，很多浏览器都限制一个域名最多保存 50 个 cookie。
- 将登陆信息等重要信息存放为 session、其他信息如果需要保留，可以放在 cookie 中
<h5>cookie 的使用</h5>

[封装好的js-cookie库](https://github.com/js-cookie/js-cookie)

```js{0}
Cookies.set("name", "value", { expires: 7 }); // 设置一个cookie，7天后失效

Cookies.get("name"); // => 'value'

Cookies.remove("name");
```
<h5>（2）localStorage 和 sessionStorage</h5>

- 应用场景：localStorage 适合持久化缓存数据，比如页面的默认偏好配置等；sessionStorage 适合一次性临时数据保存

| 分类           | 生命周期                                                      | 存储容量                            | 存储位置                    |
| ------------- |:------------------------------------------------------------:| :---------------------------------:|----------------------------|
| cookie        | 默认保存在内存中，随浏览器关闭时效（如果设置过期时间，在到过期时间失效） |4KB                                 |保存在客户端，每次请求时都会带上 |
| localStorage  | 理论上永久性有效，除非主动清除                                    |4.98MB(不同浏览器情况不同，safari2.94M)|保存在客户端，不与服务端交互，节省网络流量|
| sessionStorage| 仅在当前网页会话下有效，关闭页面或浏览器后会被清除                   |4.98MB（部分浏览器没有限制）            |同上|
<h5>localStorage 和 sessionStorage的使用</h5>

```js{0}
localStorage.setItem("name", "value");
localStorage.getItem("name"); // => 'value'
localStorage.removeItem("name");
localStorage.clear(); // 删除所有数据

sessionStorage.setItem("name", "value");
sessionStorage.setItem("name");
sessionStorage.setItem("name");
sessionStorage.clear();
```
<h5>注意事项</h5>

- localStorage 写入的时候，如果超出容量会报错，但之前保存的数据不会丢失。
- localStorage 存储容量快要满的时候，getItem 方法性能会急剧下降。
- web storage 在保存复杂数据类型时，较为依赖 JSON.stringify，在移动端性能问题比较明显

2、数组的方法有哪些
---

<h5>在ES5中，一共有9个Array方法可以替代for循环 </h5>

 [看这里](http://kangax.github.io/compat-table/es5/)
 [看这里](https://cloud.tencent.com/developer/article/1093149)

```js{0}
  Array.prototype.indexOf
  Array.prototype.lastIndexOf
  Array.prototype.every
  Array.prototype.some
  Array.prototype.forEach
  Array.prototype.map
  Array.prototype.filter
  Array.prototype.reduce
  Array.prototype.reduceRight
```
- indexOf() 方法返回在该数组中第一个找到的元素位置，如果它不存在则返回-1
```js{0}
var arr = ['apple','orange','pear']; 

// 使用indexOf： 
console.log("found:", arr.indexOf("orange") != -1);

// 使用for：
var found = false;
for(var i= 0, l = arr.length; i< l; i++){
    if(arr[i] === 'orange'){
        found = true;
    }
}
console.log("found:",found);
```
- lastIndexOf() 方法返回在该数组中最后一个找到的元素位置，和 indexof相反
- every()可是检测数组中的每一项是否符合条件
```js{0}
/** 是否全部大于0 **/
var ary = [12,23,24,42,1];

// 使用every：
var result = ary.every(function(item, index){
  return item > 0
})
console.log(result)

// 使用for：
var result = function(){
  for (var i = 0; i < ary.length; i++) {
    if(ary[i] < 0){
       return false;
    }
  }
  return true; //需全部满足
}
console.log(result()) //全部满足,返回true
```
- some()可以检测数组中是否有某一项符合条件
```js{0}
/* * 是否存在小于0的项 * */
var ary = [12,23,-24,42,1];

// 使用some：
var result = ary.some(function(item, index){
  return item < 0
})
console.log(result)

// 使用for：
var result = function(){
  for (var i = 0; i < ary.length; i++) {
    if(ary[i] < 0){
       return true;
    }
  }
  return false; //只需满足一个
}
console.log(result())  //有一项小于0，返回true
```
- forEach为每个元素执行对应的方法
```js{0}
var arr = [1,2,3,4,5,6,7,8];

// 使用forEach()：
arr.forEach(function(item,index){
console.log(item);
});

// 使用for：
for(var i= 0, l = arr.length; i< l; i++){
console.log(arr[i]);
}
```
- map()对数组的每个元素进行一定操作（映射）后，会返回一个新的数组
- map()是处理服务器返回数据时是一个非常实用的函数
```js{0}
var oldArr = [
  {first_name:"Colin",last_name:"Toh"},
  {first_name:"Addy",last_name:"Osmani"},
  {first_name:"Yehuda",last_name:"Katz"}
  ];

// 使用map
function getNewArr(){
  return oldArr.map(function(item,index){
    item.full_name = [item.first_name,item.last_name].join(" ");
    return item;
  });

}
console.log(getNewArr());

// 使用for
function getNewArr(){
  var newArr = [];
  for(var i= 0, l = oldArr.length; i< l; i++){
    var item = oldArr[i];
    item.full_name = [item.first_name,item.last_name].join(" ");
    newArr[i] = item;
  }
  return newArr;
}
console.log(getNewArr());
```
<h5>forEach 与map的区别：</h5>

- 语法：forEach和map都支持2个参数：一个是回调函数（item,index,list）和上下文；
- forEach：用来遍历数组中的每一项；这个方法执行是没有返回值的，对原来数组也没有影响；数组中有几项，那么传递进去的匿名回调函数就需要执行几次；每一次执行匿名函数的时候，还给其传递了三个参数值：数组中的当前项item,当前项的索引index,原始数组list；理论上这个方法是没有返回值的，仅仅是遍历数组中的每一项，不对原来数组进行修改；但是我们可以自己通过数组的索引来修改原来的数组；
- forEach方法中的this是ary,匿名回调函数中的this默认是window；
```js{0}
var ary = [12,23,24,42,1];
var res = ary.forEach(function (item,index,input) {
  input[index] = item*10;
})
console.log(res);//-->undefined;
console.log(ary);//-->会对原来的数组产生改变；
```
- map： 和forEach非常相似，都是用来遍历数组中的每一项值的，用来遍历数组中的每一项；
- 区别：map的回调函数中支持return返回值；return的是啥，相当于把数组中的这一项变为啥（并不影响原来的数组，只是相当于把原数组克隆一份，把克隆的这一份的数组中的对应项改变了）；
- 不管是forEach还是map 都支持第二个参数值，第二个参数的意思是把匿名回调函数中的this进行修改。
```js{0}
var ary = [12,23,24,42,1];
var res = ary.map(function (item,index,input) {
  return item*10;
})
console.log(res);//-->[120,230,240,420,10];
console.log(ary);//-->[12,23,24,42,1]；
```
- filter()方法创建一个新的匹配过滤条件的数组。
```js{0}
var arr = [
  {"name":"apple", "count": 2},
  {"name":"orange", "count": 5},
  {"name":"pear", "count": 3},
  {"name":"orange", "count": 16},
];

// 使用 filter()
var newArr = arr.filter(function(item){
  return item.name === "orange";
});
console.log("Filter results:",newArr);

// 使用for：
var newArr = [];
for(var i= 0, l = arr.length; i< l; i++){
  if(arr[i].name === "orange" ){
    newArr.push(arr[i]);
  }
}
console.log("Filter results:",newArr);
```
- reduce()可以实现一个累加器的功能，将数组的每个值（从左到右）将其降低到一个值。 说实话刚开始理解这句话有点难度，它太抽象了。 
- 场景： 统计一个数组中有多少个不重复的单词
- reduce(callback, initialValue)会传入两个变量。回调函数(callback)和初始值(initialValue)。假设函数它有个传入参数，prev和next,index和array。prev和next你是必须要了解的。一般来讲prev是从数组中第一个元素开始的，next是第二个元素。但是当你传入初始值(initialValue)后，第一个prev将是initivalValue，next将是数组中的第一个元素。 
```js{0}
/* 
* 二者的区别，在console中运行一下即可知晓
*/
var arr = ["apple","orange"];

function noPassValue(){
  return arr.reduce(function(prev,next){
    console.log("prev:",prev);
    console.log("next:",next);
    return prev + " " +next;
  });
}
function passValue(){
  return arr.reduce(function(prev,next){
    console.log("prev:",prev);
    console.log("next:",next);
    prev[next] = 1;
    return prev;
  },{});
}

console.log("No Additional parameter:",noPassValue());
console.log("----------------");
console.log("With {} as an additional parameter:",passValue());

// 使用for：
var arr = ["apple","orange","apple","orange","pear","orange"];
function getWordCnt(){
  var obj = {};
  for(var i= 0, l = arr.length; i< l; i++){
    var item = arr[i];
    obj[item] = (obj[item] +1 ) || 1;
  }
  return obj;
}
console.log(getWordCnt());
```
-  reduceRight的语法以及回调函数的规则和reduce方法是一样的，区别就是在与reduce是升序，即角标从0开始，而reduceRight是降序，即角标从arr.length-1开始。
```js{0}
/* * 使用此方法反转字符串中的字符 * */
var word = "retupmoc";
function AppendToArray(previousValue, currentValue) {
  return previousValue + currentValue;
}
var result = [].reduceRight.call(word, AppendToArray, "the ");
console.log(result); // the computer
```
- isArray()是Array对象的一个静态函数，用来判断一个对象是不是数组
```js{0}
var ary1 = [];
var res1 = Array.isArray(ary1);  // Output: true
console.log(res1)

var ary2 = new Array();
var res2 = Array.isArray(ary2);  // Output: true
console.log(res2)

var ary3 = [1, 2, 3];
var res3 = Array.isArray(ary3);  // Output: true
console.log(res3)

var ary4 = new Date();
var res4 = Array.isArray(ary4);  // Output: false
console.log(res4)
```

3、防抖、节流
---

```js{0}
        
      //防抖:用户频繁操作,只要最后一次事件操作
        <input />//html代码
        let inp = document.querySelector('input');
        //这个函数实现数据交互业务处理
        inp.oninput=debounce(function(){
          console.log(this.value)
        },500)
        //这个函数处理防抖的业务,使用闭包的原理
        function debounce(fn,delay){
          let time =null;//这里time不会是全局变量
          return function(){
            if(time !== null){
              clearTimeout(time)
            }
            time = setTimeout(() => {
              // setTimeout默认就是全局函数,this指向是window,改用箭头函数可以解决this指向问题
              // console.log(this)
              fn.call(this)//在这里this指向是input,可通过call改变this指向
            }, delay)
          }
        }

        //节流:控制事件输出的次数
        body{height:2000px}//css代码
        window.onscroll = throttle(function(){
          console.log('输出')
        },500);
        function throttle(fn, delay){
          let flag = true;
          return function(){
            if(flag){
              setTimeout(() => {
                fn.call(this);
                flag = true
              },delay);
            }
            flag =false
          }
        }
        //第二种节流函数,使用时间戳
        function throttle1(fn,delay){
          let passTime = Date.now()
          return function(){
            let nowTime = Date.now()
            if(nowTime - passTime >= delay){
              fn.call(this)
              passTime = Date.now()
            }
          }
        }
        window.onscroll = throttle1(function(){
          console.log(this)
        },500)
```

4、第七种类型Symbol
---

```js{0}
  //js基本类型包括:undefined、null、number、string、boolen、object、symbol(第七种类型)
  const sym = Symbol();
  console.log(typeof sym)//输出symbol,能用typeof检测的类型就是原始类型

  //1、特点--加描述
  const sym1 = Symbol('abc');
  console.log(sym1)//输出Symbol(abc),symbol的描述就是symbol(abc);


  //2、可以当作对象的属性名
  const level = Symbol('level')//变量当属性名就需要使用中括号
  const level1 = Symbol('level')
  const student = {
    name:'小明',
    age:23,
    [level]:'优秀'
  }
  /*
  Symbol属性不能被for...in获取
  (不能被遍历,可以做到某些信息不被暴露;evel不能遍历出来,这也是Symbol的作用)
  */
  for(let pro in student){
    console.log(pro)//输出name,age;
  }

  //3、两个symbol是不相等(重新定义一个新的Symbol)
  console.log(level === level1)//false


  //4、获取对象里面所有值(不能调用for...of.因为for...of需要key.iterator)
  const student1 = {
      name: '小明',
      age: 23,
      [Symbol('level')]: '优秀',
      [Symbol('level')]: '富有'
    }
    //Object.keys、Object.getOwnPropertyNames拿不到Symbol
    console.log(Object.keys(student1))// ["name", "age"]
    let prop = Object.getOwnPropertyNames(student)
    console.log(prop)//["name", "age"]
    for(let i in student){
      console.log(i)//name,age
    }
    //下面就可以拿到symbol的值
    let porpSym = Object.getOwnPropertySymbols(student1)
    console.log(porpSym)
    for(let iSym of porpSym){
      console.log(student1[iSym])
    }

    //5、Symbol.iterator是一个内置的值
      const student2 = {
          name: '小红',
          age: 23,
          [Symbol('level')]: '良好',
          [Symbol('level')]: '富有'
        }
        let arr = [1,2,3,4,5,6]
        //检测student有没有Symbol.iterator
        console.log(student[Symbol.iterator])//undefined,没有Symbol.iterator
        console.log(arr[Symbol.iterator])// values() { [native code] },有
        //总结:如果对象有Symbol.iterator这个属性就可以被for...of遍历
        // for(let stuI of student2){//这个函数因为student2没有Symbol.iterator,所以执行的时候会报错
        //   console.log(stuI)
        // }
        for(let arrI of arr){
          console.log(arrI)//1,2,3,4,5,6
        }

```
[参考原来链接：](http://blog.csdn.net/i10630226)
[参考原来链接：](https://juejin.im/post/5d82c12ff265da03a31d6f92)
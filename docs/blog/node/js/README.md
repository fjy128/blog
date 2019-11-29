---
title: JS基础知识
permalink: /js
---

1 、浅拷贝、深拷贝
---
- 浅拷贝：创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。
- 深拷贝：创建一个新对象，然后将当前对象的非静态字段复制到该新对象，无论该字段是值类型的还是引用类型，都复制独立的一份。当你修改其中一个对象的任何内容时，都不会影响另一个对象的内容。

<h4>数组--浅拷贝</h4>

- slice() 方法返回一个新的数组对象，这一对象是一个由 begin和 end（不包括end）决定的原数组的浅拷贝。原始数组不会被改变。
- 对于array对象的slice函数，返回一个数组的一段。（仍为数组）arrayObj.slice(start, [end])
- 参数
  - arrayObj 必选项。一个 Array 对象。
  - start 必选项。arrayObj 中所指定的部分的开始元素是从零开始计算的下标。
  - end 可选项。arrayObj 中所指定的部分的结束元素是从零开始计算的下标。
- 说明
  - slice 方法返回一个 Array 对象，其中包含了 arrayObj 的指定部分。
  - slice 方法一直复制到 end 所指定的元素，但是不包括该元素。
  - 如果 start 为负，将它作为 length + start处理，此处 length 为数组的长度。
  - 如果 end 为负，就将它作为 length + end 处理，此处 length 为数组的长度。
  - 如果省略 end ，那么 slice 方法将一直复制到 arrayObj 的结尾。
  - 如果 end 出现在 start 之前，不复制任何元素到新数组中。

``` js{0}
let a = [0, "1", [2, 3]];
let b = a.slice(1);
console.log(b);
// ["1", [2, 3]]

a[1] = "99";
a[2][0] = 4;
console.log(a);
// [0, "99", [4, 3]]

console.log(b);
//  ["1", [4, 3]]
/**
 * 可以看出，改变 a[1] 之后 b[0] 的值并没有发生变化，
 * 但改变 a[2][0] 之后，相应的 b[1][0] 的值也发生变化。
 * 说明 slice() 方法是浅拷贝，相应的还有concat等，在工作中面对复杂数组结构要额外注意
 * **/
```
- concat()
- 该方法用于连接两个或多个数组。
- 该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
- 语法
  - arrayObject.concat(arrayX,arrayX,......,arrayX)
- 说明
  - 返回一个新的数组。该数组是通过把所有 arrayX 参数添加到 arrayObject 中生成的。
  - 如果要进行 concat() 操作的参数是数组，那么添加的是数组中的元素，而不是数组。

``` js{0}

// 1、concat()只能实现一维数组的浅拷贝
var arr = ["One","Two","Three"];
var arrtooo = arr.concat();
arrtooo[1] = "set Map To";
document.writeln("数组的原始值：" + arr + "<br />");//Export:数组的原始值：One,Two,Three
document.writeln("数组的新值：" + arrtooo + "<br />");//Export:数组的新值：One,set Map To,Three
```

<h4>对象--浅拷贝</h4>

- ES6 的 Object.assign()方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。

```js{0}
let a = {
    name: "fjy128",
    book: {
        title: "javascript",
        price: "45"
    }
}
let b = Object.assign({}, a);
console.log(b);
// {
// 	name: "fjy128",
// 	book: {title: "javascript", price: "45"}
// } 

a.name = "change";
a.book.price = "55";
console.log(a);
// {
// 	name: "change",
// 	book: {title: "javascript", price: "55"}
// } 

console.log(b);
// {
// 	name: "fjy128",
// 	book: {title: "javascript", price: "55"}
// } 
/**
 * 备注：上面代码改变对象 a 之后，对象 b 的基本属性保持不变。
 * 但是当改变对象 a 中的对象 book 时，对象 b 相应的位置也发生了变化
 * **/ 
```
- ES6 的对象扩展
```js{0}
var obj = {name:'fjy',age:12,tall:180}
var cloneArr = {...obj}
cloneArr.name="fjy128"
console.log(obj,cloneArr)
// {name: "fjy", age: 12, tall: 180} {name: "fjy128", age: 12, tall: 180}

var complexObj = {
    a: "hello",
    b: {
        a: "world",
        b: 21
    },
    c: ["Bob", "Tom", "Jenny"],
    d: function() {
        alert("hello world");
    }
}
var cloneComplexObj = {...complexObj}
cloneComplexObj.b.a="hello world"
console.log(complexObj,cloneComplexObj)
// complexObj 输出
// a: "hello"
// b: {a: "hello world", b: 21}
// c: (3) ["Bob", "Tom", "Jenny"]
// d: ƒ ()

// cloneComplexObj输出
// a: "hello"
// b: {a: "hello world", b: 21}
// c: (3) ["Bob", "Tom", "Jenny"]
// d: ƒ ()
//总结，层级越深，拷贝的是地址
```
<h5>对象、数组--深拷贝</h5>

- JSON.parse(JSON.stringify(object))

```js{0}
let a = {
    name: "fjy128",
    book: {
        title: "javascript",
        price: "45"
    }
}
let b = JSON.parse(JSON.stringify(a));
console.log(b);
// {
// 	name: "fjy128",
// 	book: {title: "javascript", price: "45"}
// } 

a.name = "change";
a.book.price = "55";
console.log(a);
// {
// 	name: "change",
// 	book: {title: "javascript", price: "55"}
// } 

console.log(b);
// {
// 	name: "fjy128",
// 	book: {title: "javascript", price: "45"}
// } 
/**
 * 完全改变变量 a 之后对 b 没有任何影响，这就是深拷贝的魔力。
 * **/

// 看下对数组深拷贝效果如何。
let a = [0, "1", [2, 3]];
let b = JSON.parse(JSON.stringify( a.slice(1) ));
console.log(b);
// ["1", [2, 3]]

a[1] = "99";
a[2][0] = 4;
console.log(a);
// [0, "99", [4, 3]]

console.log(b);
//  ["1", [2, 3]]
/**备注：对数组深拷贝之后，改变原数组不会影响到拷贝之后的数组。**/
```
- 但是该方法有以下几个问题。

  - 会忽略 undefined
  - 会忽略 symbol
  - 不能序列化函数
  - 不能解决循环引用的对象
  - 不能正确处理new Date()
  - 不能处理正则
- undefined、symbol 和函数这三种情况，会直接忽略。
```js{0}
let obj = {
    name: 'fjy128',
    a: undefined,
    b: Symbol('fjy128'),
    c: function() {}
}
console.log(obj);
// {
// 	name: "fjy128", 
// 	a: undefined, 
//  b: Symbol(fjy128), 
//  c: ƒ ()
// }

let b = JSON.parse(JSON.stringify(obj));
console.log(b);
// {name: "fjy128"}

```  
- 循环引用情况下，会报错。
```js{0}
let obj = {
    a: 1,
    b: {
        c: 2,
   		d: 3
    }
}
obj.a = obj.b;
obj.b.c = obj.a;

let b = JSON.parse(JSON.stringify(obj));
// Uncaught TypeError: Converting circular structure to JSON
```
- new Date 情况下，转换结果不正确。
```js{0}
new Date();
// Mon Dec 24 2018 10:59:14 GMT+0800 (China Standard Time)

JSON.stringify(new Date());
// ""2018-12-24T02:59:25.776Z""

JSON.parse(JSON.stringify(new Date()));
// "2018-12-24T02:59:41.523Z"
```
- 解决方法转成字符串或者时间戳就好了。
```js{0}
let date = (new Date()).valueOf();
// 1545620645915

JSON.stringify(date);
// "1545620673267"

JSON.parse(JSON.stringify(date));
// 1545620658688

```
- 正则情况下，
```js{0}
let obj = {
    name: "fjy128",
    a: /'123'/
}
console.log(obj);
// {name: "fjy128", a: /'123'/}

let b = JSON.parse(JSON.stringify(obj));
console.log(b);
// {name: "fjy128", a: {}}

```
<p>除了上面介绍的深拷贝方法，常用的还有jQuery.extend() 和 lodash.cloneDeep()</p>


2、数组去重
---
- 方法1：用for双重循环
```js{0}
  var ary=[1,2,3,5,6,7,8,89,4,3,12,1,1,2,3,4,54,65,2];
    for(var i=0;i<ary.length;i++){
        var cur=ary[i];
        for(var j=i+1;j<ary.length;j++){
            if (ary[i]==ary[j]){
                ary.splice(i,1);
                i--;  //防止数组塌陷
            }
        }
    }
```
- 方法2：先sort，然后用当前项和相邻项进行比较
```js{0}
  var ary=[1,2,3,5,6,7,8,89,4,3,12,1,1,2,3,4,54,65,2];
    var newary=ary.sort(function (n,m) {
        return n-m;
    })
    for (var i=0;i<ary.length;i++){
        if (newary[i]==newary[i+1]){
            newary.splice(i,1);
            i--;   //防止数组塌陷
        }
    }
```
- 方法3：建立新数组，用indexOf
```js{0}
  var ary=[1,2,3,5,6,7,8,89,4,3,12,1,1,2,3,4,54,65,2];
    var search=[];
    for (var i=0;i<ary.length;i++){
        if(search.indexOf(ary[i])==-1){
            search.push(ary[i]);
        }
    }
```
- 方法4：利用函数不重名的属性
```js{0}
var ary=[1,2,3,5,6,7,8,89,4,3,12,1,1,2,3,4,54,65,2];
    var obj={};
    for (i=0;i<ary.length;i++){
        if(obj[ary[i]]){
            ary.splice(i,1);
            i--;   //防止数组塌陷
        }
        else {
            obj[ary[i]]=ary[i];
            }
    }
```
- 方法5：利用对象不重名的特性，实现了重复次数的记录，里面用到两个循环，一个for循环，for..in循环
```js{0}
 var ary=[1,2,3,5,6,7,8,89,4,3,12,1,1,2,3,4,54,65,2];
    var obj={};
    for (i=0;i<ary.length;i++){
        if (obj[ary[i]]){
            obj[ary[i]]+=1;
        }
        else {
            obj[ary[i]]=1;
        }
    }
    var sum=[];
    for (var item in obj){
        sum.push(Number(item));
    }
```
3、数组排序（三种方法）
---
<h5>1、快排（利用取中间值的方法快速排序）</h5>

- 1：先拿到中间的索引，通过中间索引找到他对应的项
  - 这个中间项是从数组中拎出来，即数组中没有他了，所以只能用splice；
  - splice的返回值，是被删除的内容以新数组的形式返回，因为我们删除了一项，所以，要去数字必须用[0];
- 2：创建两个新数组left，right；
- 3：用ary数组跟中间项比较，比他小的放left数组，比他大的放right数组
- 4： return quciksort(left).concat([center],quciksort(right));
  - 函数自己调用自己，属于"递归"
- 5：停止拆分的条件 if(ary.length<=1){return ary;}
  - return 1）有阻断程序执行的功能 2）返回值；
```js{0}
var ary=[1,6,4,2,9,12,34,67,89,54];
    function quicksort(ary) {
        if (ary.length<=1){
            return ary;
        }
        var middle=Math.floor(ary.length/2);
        var  centermiddle=ary.splice(middle,1)[0];
        var left=[];
        var right=[];
        for(var i=0;i<ary.length;i++){
            if (ary[i]>centermiddle){
                right.push(ary[i]);
            }
            else {
                left.push(ary[i]);
            }
        }
        return quicksort(left).concat(centermiddle,quicksort(right));
    }
    var res=quicksort(ary);
    document.write(res);
```
<h5>2、插排</h5>

- 1、先从ary中取出来一个数字，单独是个数组 splice
- 2、遍历ary的数组，跟left数组，从后往前的比较，如果比left的数字小，继续往前比，如果比某个值大，就插入到这个值的下一项的前面；(必须break，否则就会出错) ；如果比所有的都小，那就插入到left数组的第一个；
```js{0}
ary = [23, 45, 32, 12, 9, 0, 5, 4, 3, 1];
    function search(ary) {
        var left = ary.splice(0, 1);
        for (i = 0; i < ary.length; i++) {
            var cur = ary[i];
            for (j = left.length - 1; j >= 0;) {
                if (cur < left[j]) {
                    j--;
                    if (j == -1) {
                        left.unshift(cur);
                    }
                }
                else {
                    left.splice(j+1,0,cur);
                    break;
                }
            }
        }
        return left;
    }
  var ser=search(ary);
    document.write(ser);
```
<h5>3、冒泡排序</h5>

- 1、两重循环，第一重循环代表的是轮数，第二重循环代表的次数，比较的次数在一次次的减少；
- 2、 每次比较的时候，都拿当前项跟后一项进行比较，如果比他大，交换位置；
```js{0}
var ary=[23,21,12,6,1,32,8];
    /*
    *第一轮 最多可以比6次 已经把最大值放在最后了
         * [21,23,12,6,1,32,8]
         * [21,12,23,6,1,32,8]
         * [21,12,6,23,1,32,8]
         * [21,12,6,1,23,32,8]
         * [21,12,6,1,23,32,8]
         * [21,12,6,1,23,8,32]
    *第二轮 最多可以比5次， 可以把次大值和最大值，放在后面
        * [12,21,6,1,23,8,32]
        * [12,6,21,1,23,8,32]
        * [12,6,1,21,23,8,32]
        * [12,6,1,21,23,8,32]
        * [12,6,1,21,8,23,32]
    *第三轮 最多可以比4次 已经把最大的三个值放在后面
        * [6,12,1,21,8,23,32]
        * [6,1,12,21,8,23,32]
        * [6,1,12,21,8,23,32]
        * [6,1,12,8,21,23,32]
    *第四轮 最多可以比3次 已经最大的四个值放在侯民啊
        *[1,6,12,8,21,23,32]
        *[1,6,12,8,21,23,32]
        *[1,6,8,12,21,23,32]
    *第五轮  最多可以比2次
    * [1,6,8,12,21,23,32]
    * 第六轮 最多可以1次；
    * 第七轮 最多可以比0次；
    *
    * */

    //外面的循环应该是比较的"轮数"
    for(var i=0; i<ary.length; i++){
        //里面比较的是次数
        for(var j=0; j<ary.length-1-i; j++){
            if(ary[j]>ary[j+1]){
                //找了一个临时的空容器
                var tmp=ary[j];
                ary[j]=ary[j+1];
                ary[j+1]=tmp;
            }
        }
    }
```
2、面向对象
---
3、for in 、 for of 、forEach、map区别
---
<!-- https://blog.csdn.net/zl13015214442/article/details/90606961 -->
<!-- https://www.jianshu.com/p/e8e04e33fa4d -->
| 方法     | 可遍历对象       | ES  | index OR key的类型 | 自定义属性 | 原型链上的自定义属性 |
| --------|:---------------:| :--:|------------------ | :--------| :----------------|
| for     | 数组、字符串      |-    |Number             |不可遍历   |不可遍历            |
| for in  | 数组、字符串、对象 |ES5  |String             |可遍历     |可遍历             |
| for of  | 数组、字符串      |ES6  |-                  |不可遍历   |不可遍历            |
| forEach | 数组             |ES5  |Number             |不可遍历   |不可遍历            |
| map     | 数组             |ES5  |Number             |不可遍历   |不可遍历            |

<h5>for in遍历，根据key遍历</h5>

- 根据属性名遍历所以key的类型是string，遍历顺序也可能不是实际数组的顺序。
- 遍历数组时如果给数组增加了自定义属性，也会把自定义属性遍历出来，所以for in更适合遍历对象。
- 如果对象原型上和原型链的对象原型上有自定义属性都会遍历出来，当不想遍历原型链的属性时可已使用hasOwnProperty过滤。注意：hasOwnProperty过滤的是自身以外的属性
```js
for (const key in arr) {
    if (arr.hasOwnProperty(key)) { // 这样就可以过滤掉原型链上的可枚举属性了
        console.log(key, arr[key]);
    }
}
```
<h5>for of遍历，根据值遍历</h5>

- 用来弥补for in在遍历时不能根据值遍历的不足。
- 由于是ES6，兼容性非常不好。
```js
for (const iterator of obj) { console.log(iterator); }
```
<h5>forEach 遍历，根据index遍历</h5>

- 和for项目forEach除了写法没有任何优势。
- forEach遍历是从头到尾遍历，没有中途跳出的方法，如：for遍历 的break。
```js
arr.forEach((val, i, arr) => { console.log(val); });
```
<h5>map 遍历，根据index遍历</h5>

- 和forEach相比，map可以返回一个新数组，新数组的内容是回调函数的返回值。
- 可以用来克隆数组。
```js
arr.map((val, i, arr) => { return val * 2; });
```


4、判断是不是数组的方法
---
5、事件循环机制
---
6、面向对象
---
  [深拷贝、浅拷贝参考地址](https://www.jb51.net/article/99013.htm)
  [深拷贝、浅拷贝参考地址](https://juejin.im/post/5c20509bf265da611b585bec)(wan)
  [深拷贝、浅拷贝参考地址](https://www.jb51.net/article/105659.htm)
  [深拷贝、浅拷贝参考地址](https://juejin.im/post/59ac1c4ef265da248e75892b)
  [深拷贝、浅拷贝参考地址](https://juejin.im/post/5c26dd8fe51d4570c053e08b)
  [深拷贝、浅拷贝参考地址](https://www.cnblogs.com/Chansea/p/copy.html)
  [深拷贝、浅拷贝参考地址](https://www.cnblogs.com/yubingyang/p/11576515.html)
  [堆、堆、深拷贝、浅拷贝参考地址](https://www.cnblogs.com/biaochenxuying/p/11438353.html)
  [12种继承模式参考地址](https://cloud.tencent.com/developer/article/1192722)
  [ES6参考地址](https://juejin.im/post/5dc8a231f265da4d40712f8a?utm_source=gold_browser_extension)

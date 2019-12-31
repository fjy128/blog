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

``` js
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
- concat()--深拷贝
- 该方法用于连接两个或多个数组。
- 该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
- 语法
  - arrayObject.concat(arrayX,arrayX,......,arrayX)
- 说明
  - 返回一个新的数组。该数组是通过把所有 arrayX 参数添加到 arrayObject 中生成的。
  - 如果要进行 concat() 操作的参数是数组，那么添加的是数组中的元素，而不是数组。

``` js

// 1、concat()只能实现一维数组的浅拷贝
var arr = ["One","Two","Three"];
var arrtooo = arr.concat();
arrtooo[1] = "set Map To";
document.writeln("数组的原始值：" + arr + "<br />");//Export:数组的原始值：One,Two,Three
document.writeln("数组的新值：" + arrtooo + "<br />");//Export:数组的新值：One,set Map To,Three
```
- es6 扩展运算
```js
//es6 扩展运算实现深拷贝
let arr9 = [1,2,3,4];
let [...arr10] = arr9;
arr9[0] = 5;
console.log(arr9) //[5,2,3,4]
console.log(arr10) //[1,2,3,4]
```
<h4>对象--浅拷贝</h4>

- 简单的复制语句
```js
function simpleClone(initalObj) {
    var obj = {};
    for ( var i in initalObj) {
        obj[i] = initalObj[i];
    }
    return obj;
}

/* ================ 客户端调用 ================ */
var obj = {
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
var cloneObj = simpleClone(obj); // 对象拷贝
  
console.log(cloneObj.b); // {a: "world", b: 21}
console.log(cloneObj.c); // ["Bob", "Tom", "Jenny"]
console.log(cloneObj.d); // function() { alert("hello world"); }
  
// 修改拷贝后的对象
cloneObj.b.a = "changed";
cloneObj.c = [1, 2, 3];
cloneObj.d = function() { alert("changed"); };
  
console.log(obj.b); // {a: "changed", b: 21} // // 原对象所引用的对象被修改了
  
console.log(obj.c); // ["Bob", "Tom", "Jenny"] // 原对象所引用的对象未被修改
console.log(obj.d); // function() { alert("hello world"); } // 原对象所引用的函数未被修改
```

- Object.assign() 方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。但是 Object.assign() 进行的是浅拷贝，拷贝的是对象的属性的引用，而不是对象本身。

```js
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
```js
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
- 但是这种方法也有不少坏处，譬如它会抛弃对象的constructor。也就是深拷贝之后，不管这个对象原来的构造函数是什么，在深拷贝之后都会变成Object。
- 这种方法能正确处理的对象只有 Number, String, Boolean, Array, 扁平对象，即那些能够被 json 直接表示的数据结构。RegExp对象是无法通过这种方式深拷贝。

```js
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

  - 拷贝的对象的值中如果有函数,undefined,symbol则经过JSON.stringify()序列化后的JSON字符串中这个键值对会消失
  - 无法拷贝不可枚举的属性，无法拷贝对象的原型链
  - 不能序列化函数
  - 不能解决循环引用的对象
  - 不能正确处理new Date(),拷贝Date引用类型会变成字符串
  - 不能处理正则,拷贝RegExp引用类型会变成空对象
  - 对象中含有NaN、Infinity和-Infinity，则序列化的结果会变成null
  - 无法拷贝对象的循环应用(即obj[key] = obj)
- undefined、symbol 和函数这三种情况，会直接忽略。
```js
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
```js
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
```js
new Date();
// Mon Dec 24 2018 10:59:14 GMT+0800 (China Standard Time)

JSON.stringify(new Date());
// ""2018-12-24T02:59:25.776Z""

JSON.parse(JSON.stringify(new Date()));
// "2018-12-24T02:59:41.523Z"
```
- 解决方法转成字符串或者时间戳就好了。
```js
let date = (new Date()).valueOf();
// 1545620645915

JSON.stringify(date);
// "1545620673267"

JSON.parse(JSON.stringify(date));
// 1545620658688

```
- 正则情况下，
```js
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

- 递归拷贝--深拷贝
```js
/* ================ 深拷贝 ================ */
function deepClone(initalObj, finalObj) {
    var obj = finalObj || {};
    for (var i in initalObj) {
        var prop = initalObj[i];
  
        // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
        if(prop === obj) {
            continue;
        }
  
        if (typeof prop === 'object') {
            obj[i] = (prop.constructor === Array) ? [] : {};
            arguments.callee(prop, obj[i]);
        } else {
            obj[i] = prop;
        }
    }
    return obj;
}
```
- 使用Object.create()方法--深拷贝
- 直接使用var newObj = Object.create(oldObj)，可以达到深拷贝的效果。
```js
/* ================ 深拷贝 ================ */
function deepClone(initalObj, finalObj) {
    var obj = finalObj || {};
    for (var i in initalObj) {
        var prop = initalObj[i];
  
        // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
        if(prop === obj) {
            continue;
        }
  
        if (typeof prop === 'object') {
            obj[i] = (prop.constructor === Array) ? [] : Object.create(prop);
        } else {
            obj[i] = prop;
        }
    }
    return obj;
}
```


2、数组去重
---
- 方法1：用for双重循环
```js
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
```js
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
```js
  var ary=[1,2,3,5,6,7,8,89,4,3,12,1,1,2,3,4,54,65,2];
    var search=[];
    for (var i=0;i<ary.length;i++){
        if(search.indexOf(ary[i])==-1){
            search.push(ary[i]);
        }
    }
```
- 方法4：利用函数不重名的属性
```js
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
```js
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
```js
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
```js
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
```js
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

2、for in 、 for of 、forEach、map区别
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

- for of循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象（比如arguments对象、DOM NodeList 对象）。
- 用来弥补for in在遍历时不能根据值遍历的不足。
- 由于是ES6，兼容性非常不好。
```js
for (const iterator of obj) { console.log(iterator); }
```
<h5>forEach 遍历，根据index遍历</h5>

- forEach()参数函数包含三个参数(item,index,list) 数组元素 元素索引 和数组本身。
- 后两个参数可省略。
- 对数组进行值操作，会改变原来数组的值。
- forEach()在循环过程中无法终止遍历，即没有break语句，可使用try catch 抛出foreach.break异常提前终止。
```js
arr.forEach((val, i, arr) => { console.log(val); });
```
<h5>map 遍历，根据index遍历</h5>

- 和forEach相比，map可以返回一个新数组，新数组的内容是回调函数的返回值。
- map()返回的是一个新的数组，不修改调用的数组。
- 可以用来克隆数组。
```js
arr.map((val, i, arr) => { return val * 2; });
```


3、判断是不是数组的方法
---
- 1. Object.prototype.toString.call()
```js
console.log(Object.prototype.toString.call("jerry"));//[object String]
console.log(Object.prototype.toString.call(12));//[object Number]
console.log(Object.prototype.toString.call(true));//[object Boolean]
console.log(Object.prototype.toString.call(undefined));//[object Undefined]
console.log(Object.prototype.toString.call(null));//[object Null]
console.log(Object.prototype.toString.call({name: "jerry"}));//[object Object]
console.log(Object.prototype.toString.call(function(){}));//[object Function]
console.log(Object.prototype.toString.call([]));//[object Array]
console.log(Object.prototype.toString.call(new Date));//[object Date]
console.log(Object.prototype.toString.call(/\d/));//[object RegExp]
function Person(){};
console.log(Object.prototype.toString.call(new Person));//[object Object]
```
- 2. instanceof : 通过判断对象的原型链中是不是能找到类型的 prototype。
```js
let Person=function(){};
let p=new Person();
console.log(1 instanceof Number);  // false
console.log('string' instanceof String); // false
console.log(new Boolean(false) instanceof Boolean); // true
console.log(p instanceof Person); // true
```
- 3. Array.isArray():用来判断对象是否为数组(ES5新增的方法).当检测Array实例时，Array.isArray 优于 instanceof ，因为 Array.isArray 可以检测出 iframes.
```js
var iframe = document.createElement('iframe');
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length-1].Array;
var arr = new xArray(1,2,3); // [1,2,3]

// Correctly checking for Array
Array.isArray(arr);  // true
Object.prototype.toString.call(arr); // true
// Considered harmful, because doesn't work though iframes
arr instanceof Array; // false
```
- 4. constructor:和instanceof原理差不多。需要事先知道待判断的对象大概属于何种类型，所以该方法更准确地说，是用来验证的。如果我们事先根本不知道一个对象实例的出处，那就不好使了。
```js
let arr=[1,2,4];
alert(arr.constructor===Array); // true
```
4、事件循环机制
---
5、面向对象
---
  [深拷贝、浅拷贝参考地址](https://www.jb51.net/article/99013.htm)(wan)
  [深拷贝、浅拷贝参考地址](https://juejin.im/post/5c20509bf265da611b585bec)(wan)
  [深拷贝、浅拷贝参考地址](https://www.jb51.net/article/105659.htm)(wan)
  [深拷贝、浅拷贝参考地址](https://juejin.im/post/59ac1c4ef265da248e75892b)(wan)
  [深拷贝、浅拷贝参考地址](https://juejin.im/post/5c26dd8fe51d4570c053e08b)(wan)
  [深拷贝、浅拷贝参考地址](https://www.cnblogs.com/Chansea/p/copy.html)(wan)
  [深拷贝、浅拷贝参考地址](https://www.cnblogs.com/yubingyang/p/11576515.html)
  [堆、堆、深拷贝、浅拷贝参考地址](https://www.cnblogs.com/biaochenxuying/p/11438353.html)(wan)
  [12种继承模式参考地址](https://cloud.tencent.com/developer/article/1192722)(wan)
  [ES6参考地址](https://juejin.im/post/5dc8a231f265da4d40712f8a?utm_source=gold_browser_extension)

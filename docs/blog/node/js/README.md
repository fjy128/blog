---
title: JS基础知识
permalink: /js
---

1 、浅拷贝、深拷贝
---
- 浅拷贝：创建一个新对象，然后将当前对象的非静态字段复制到该新对象，如果字段是值类型的，那么对该字段执行复制；如果该字段是引用类型的话，则复制引用但不复制引用的对象。因此，原始对象及其副本引用同一个对象。
- 深拷贝：创建一个新对象，然后将当前对象的非静态字段复制到该新对象，无论该字段是值类型的还是引用类型，都复制独立的一份。当你修改其中一个对象的任何内容时，都不会影响另一个对象的内容。

  <h4>数组--浅拷贝（slice）</h4>

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

// 1、slice()只能实现一维数组的浅拷贝
var arr1 = [1, 2], arr2 = arr1.slice();
console.log(arr1); //[1, 2]
console.log(arr2); //[1, 2]

arr2[0] = 3; //修改arr2
console.log(arr1); //[1, 2]
console.log(arr2); //[3, 2]
```

<h4>数组浅拷贝--concat()</h4>

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

- ES6 的 Object.assign()只能实现一维对象的深拷贝

```js{0}
var obj1 = {x: 1, y: 2}, obj2 = Object.assign({}, obj1);
console.log(obj1) //{x: 1, y: 2}
console.log(obj2) //{x: 1, y: 2}

obj2.x = 2; //修改obj2.x
console.log(obj1) //{x: 1, y: 2}
console.log(obj2) //{x: 2, y: 2}

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
- 对象--深拷贝
```js{0}

// JSON.parse(JSON.stringify(obj))
var obj1 = {
    x: 1, 
    y: {
        m: 1
    }
};
var obj2 = JSON.parse(JSON.stringify(obj1));
console.log(obj1) //{x: 1, y: {m: 1}}
console.log(obj2) //{x: 1, y: {m: 1}}

obj2.y.m = 2; //修改obj2.y.m
console.log(obj1) //{x: 1, y: {m: 1}}
console.log(obj2) //{x: 2, y: {m: 2}}
```
2、面向对象
---
3、for in 、 for of 、forEach、map区别
---
4、判断是不是数组的方法
---
5、事件循环机制
---
  [深拷贝、浅拷贝参考地址](https://www.jb51.net/article/99013.htm)
  [深拷贝、浅拷贝参考地址](https://juejin.im/post/5c20509bf265da611b585bec)
  [深拷贝、浅拷贝参考地址](https://www.jb51.net/article/105659.htm)
  [深拷贝、浅拷贝参考地址](https://juejin.im/post/5c26dd8fe51d4570c053e08b)
  [深拷贝、浅拷贝参考地址](https://www.cnblogs.com/Chansea/p/copy.html)
  [深拷贝、浅拷贝参考地址](https://www.cnblogs.com/yubingyang/p/11576515.html)
  [堆、堆、深拷贝、浅拷贝参考地址](https://www.cnblogs.com/biaochenxuying/p/11438353.html)
  [12种继承模式参考地址](https://cloud.tencent.com/developer/article/1192722)
  [ES6参考地址](https://juejin.im/post/5dc8a231f265da4d40712f8a?utm_source=gold_browser_extension)
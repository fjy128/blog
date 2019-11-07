---
title: JS基础知识
permalink: /js
---

1 、浅拷贝、深拷贝
---
- 数组--浅拷贝
``` js{0}

// 1、slice()只能实现一维数组的深拷贝
var arr1 = [1, 2], arr2 = arr1.slice();
console.log(arr1); //[1, 2]
console.log(arr2); //[1, 2]

arr2[0] = 3; //修改arr2
console.log(arr1); //[1, 2]
console.log(arr2); //[3, 2]
```

- 对象--浅拷贝
```js{0}

// Object.assign()只能实现一维对象的深拷贝
var obj1 = {x: 1, y: 2}, obj2 = Object.assign({}, obj1);
console.log(obj1) //{x: 1, y: 2}
console.log(obj2) //{x: 1, y: 2}

obj2.x = 2; //修改obj2.x
console.log(obj1) //{x: 1, y: 2}
console.log(obj2) //{x: 2, y: 2}
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
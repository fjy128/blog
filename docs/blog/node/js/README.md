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

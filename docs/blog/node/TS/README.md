---
title: TypeScript
permalink: /TS
---

<h2>搭建typeScript</h2>
<h3>什么是compiler? 为什么需要compiler?</h3>
<p>所谓搭建TypeScript开发环境，就是安装TypeScript的compiler.</p>
<p>因为ES6规范是在2015年发布的，而目前所有的主流的浏览器并没有完全的支持ES6规范，所以用ES6语法写出来的程序，并不能直接放到浏览器里面去执行，所以需要一个compiler去把TypeScript代码转化成JavaScript代码，才能放到浏览器里面去跑。</p>
<h2>使用在线compiler开发</h2>
<p>使用在线compiler开发，这应该是TypeScript开发最方便的一种方式，因为根本没用所谓的安装过程，你只要安装一个浏览器就可以了，<a src="http://www.typescriptlang.org/play/index.html">访问在线compiler开发</a></p>
<p>我们可以看到左边是Typescript代码，右边是编译以后的Javascript代码，我们接下来将展示大部分的TypeScript的语法特性。</p>
<h2>使用本地compiler 开发</h2>
<p>刚才我们演示了线上的compiler，但是在实际项目中我们肯定不能用在线的compiler去开发，因为我们肯定会写很多的TypeScript文件，肯定是在我们本地的环境里面开发，下面我们就来演示如何搭建本地的开发环境。</p>
<h4> 第一步：安装Typescript的编译器</h4>
<p>所谓安装TypeScript的编译器就是安装TypeScript的过程,你需要先安装node.js，不知道先百度一下怎么装node.js</p>

``` js{0}
//安装TypeScript
sudo npm install -g typescript

//查看TypeScript cpmplier的版本号
tsc --version

//新建一个ts文件 Hello.ts
export class Hello{
 
}

//使用命令行进入刚才那个文件目录的位置
cd 那个ts文件的目录

//运行tsc命令
tsc Hello.ts

//我们去文件夹里面看一下，发现文件夹里面生成了一个Hello.js  
"use strict"
var Hello = (function () {
      function Hello() {
 
       }
       return Hello;
}());
exports,Hello = Hello;
```
<p>查看效果</p>
<img src="../../imgFile/ts1.png"/>
<img src="../../imgFile/ts2.png"/>
<p>查看TypeScript cpmplier的版本号</p>



<p>2、这里的 "完全" 是指本文会不断更新</p>
<p>3、这里的 "使用" 是指本文会展示很多 ES6 的使用场景</p>
<p>4、这里的 "手册" 是指你可以参照本文将项目更多的重构为 ES6 语法</p>

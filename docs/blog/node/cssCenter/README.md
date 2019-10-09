---
title: CSS 布局方案
permalink: /article
---

::: warning
以下居中布局均以不定宽为前提，定宽情况包含其中
:::

1、水平居中
---
<p>a) inline-block + text-align</p>

``` css{0}
<style>
  .parent{
    text-align: center;
  }
  .child{
      display: inline-block;
  }
</style>
```
<p>tips：此方案兼容性较好，可兼容至IE8，对于IE567并不支持inline-block，需要使用css hack进行兼容</p>

<p>b) table + margin</p>

``` css{0}
<style>
  .child{
    display: table;
    margin: 0 auto;
  } 
</style>
```
<p>此方案兼容至IE8，可以使用table代替css写法，兼容性良好</p>

<p>c) absolute + transform</p>

``` css{0}
<style>
  .parent{
    position: relative;
    height:1.5em;
  }
  .child{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

</style>
```
<p>tips：此方案兼容至IE9，因为transform兼容性限制，如果.child为定宽元素，可以使用以下写法，兼容性极佳</p>

``` css{0}
<style>
.parent{
    position: relative;
    height:1.5em;
}
.child{
    position: absolute;
    width:100px;
    left: 50%;
    margin-left:-50px;
}

</style>
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
<p>tips：flex是一个强大的css，生而为布局，它可以轻松的满足各种居中、对其、平分的布局要求，但由于现浏览器兼容性问题，此方案很少被使用，但是值得期待浏览器兼容性良好但那一天！</p>

2、垂直
---
<p>a) table-cell + vertial-align</p>

``` css{0}
<style>
  .parent{
    display: table-cell;
    vertical-align: middle;
  }

</style>
```
<p>tips：可替换成table布局，兼容性良好</p>

<p>b) absolute + transform</p>

``` css{0}
<style>
  .parent{
    position: relative;
  }
.child{
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}
</style>
```
<p>tips：存在css3兼容问题，定宽兼容性良好</p>

<p>c) flex + align-items</p>

``` css{0}
<style>
  .parent{
    display: flex;
    align-items: center;
  }

</style>
```
<p>tips：高版本浏览器兼容，低版本不适用</p>

3、水平垂直
---
<p>a) inline-block + table-cell + text-align + vertical-align</p>

``` css{0}
<style>
  .parent{
    text-align: center;
    display: table-cell;
    vertical-align: middle;
  }
  .child{
    display: inline-block;
  }

</style>
```
<p>tips：兼容至IE8 </p>


<p>b) absolute + transform</p>

``` css{0}
<style>
  .parent{
    position: relative;
  }
  .child{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }

</style>
```
<p>tips：兼容性稍差，兼容IE10以上</p>

<p>c) flex</p>

``` css{0}
<style>
  .parent{
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
```
<p>tips：兼容差</p>

4、多列布局--一列定宽，一列自适应
---

<p>a) float + margin</p>

``` css{0}
<style>
  .left{
    float: left;
    width: 100px;
  }
  .right{
    margin-left: 120px;
  }

</style>
```
<p>tips：此方案对于定宽布局比较好，不定宽布局推荐方法b</p>

<p>b) float + overflow</p>

``` css{0}
<style>
  .left{
    float: left;
    width: 100px;
    margin-right: 20px;
  }
  .right{
    overflow: hidden;
  }

</style>
```
<p>tips：个人常用写法，此方案不管是多列定宽或是不定宽，都可以完美实现，同时可以实现登高布局 </p>

<p>c) table</p>

``` css{0}
<style>
  .parent{
    display: table; width: 100%;
    table-layout: fixed;
  }
  .left,.right{
    display: table-cell;
  }
  .left{
    width: 100px;
    padding-right: 20px;
  }

</style>
```
<p>d) flex</p>

``` css{0}
<style>
 .parent{
    display: flex;
  }
  .left{
    width: 100px;
    padding-right: 20px;
  }
  .right{
    flex: 1;
  }
</style>
```
5、多列布局--多列定宽，一列自适应
---
<p>a) float + overflow</p>

``` css{0}
<style>
  .left,.center{
    float: left;
    width: 100px;
    margin-right: 20px;
  }
  .right{
    overflow: hidden;
  }

</style>
```

<p>b) table</p>

``` css{0}
<style>
  .parent{
    display: table; width: 100%;
    table-layout: fixed;
  }
  .left,.center,.right{
    display: table-cell;
  }
  .right{
    width: 100px;
    padding-right: 20px;
  }

</style>
```

<p>c) flex</p>

``` css{0}
<style>
  .parent{
	display: flex;
}
.left,.center{
	width: 100px;
	padding-right: 20px;
}
.right{
	flex: 1;
}

</style>
```
6、多列布局--一列不定宽，一列自适应
---
<p>a) float + overflow</p>

``` css{0}
<style>
  .left{
    float: left;
    margin-right: 20px;
  }
  .right{
    overflow: hidden;
  }
  .left p{width: 200px;}

</style>
```

<p>b) table</p>

``` css{0}
<style>
  .parent{
    display: table; width: 100%;
  }
  .left,.right{
    display: table-cell;
  }
  .left{
    width: 0.1%;
    padding-right: 20px;
  }
  .left p{width:200px;}


</style>
```

<p>c) flex</p>

``` css{0}
<style>
.parent{
	display: flex;
}
.left{
	margin-right: 20px;
}
.right{
	flex: 1;
}
.left p{width: 200px;}
</style>
```
7、多列布局--多列不定宽，一列自适应
---
<p>a) float + overflow</p>

``` css{0}
<style>
  .left,.center{
    float: left;
    margin-right: 20px;
  }
  .right{
    overflow: hidden;
  }
  .left p,.center p{
    width: 100px;
  }

</style>
```
8、多列布局--等分
---
<p>a) float + margin</p>

``` css{0}
<style>
  .parent{
    margin-left: -20px;
  }
  .column{
    float: left;
    width: 25%;
    padding-left: 20px;
    box-sizing: border-box;
  }

</style>
```
<p>b) table + margin</p>

``` css{0}
<style>
  .parent-fix{
    margin-left: -20px;
  }
  .parent{
    display: table;
    width:100%;
    table-layout: fixed;
  }
  .column{
    display: table-cell;
    padding-left: 20px;
  }

</style>
```
<p>c) flex</p>

``` css{0}
<style>
  .parent{
	display: flex;
}
.column{
	flex: 1;
}
.column+.column{
	margin-left:20px;
}

</style>
```
9、多列布局--等高
---
<p>a) float + overflow</p>

``` css{0}
<style>
  .parent{
	overflow: hidden;
}
.left,.right{
	padding-bottom: 9999px;
	margin-bottom: -9999px;
}
.left{
	float: left; width: 100px;
}
.right{
	overflow: hidden;
}

</style>
```
<p>b) table</p>

``` css{0}
<style>
  .parent{
	display: table; 
	width: 100%;
}
.left{
	display:table-cell; 
	width: 100px;
	margin-right: 20px;
}
.right{
	display:table-cell; 
}

</style>
```
<p>c) flex</p>

``` css{0}
<style>
  .parent{
    display:flex;
    width: 100%;
  }
  .left{
    width: 100px;
  }
  .right{
    flex:1;
  }

</style>
```
10、并排等分，单排对齐靠左布局
---
<p>a) flex</p>

``` css{0}
<style>
.main {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}
.item {
    display: inline-block;
}
.empty{
    height: 0;
    visibility: hidden;
}


</style>

```
<a href="https://github.com/zwwill/blog/issues/28" target="_Blank" color="#fe6e6d">详情查看这</a>
::: warning
此处仅为代码展示，差别讲解请移驾下文 <a href="https://github.com/zwwill/blog/issues/11" target="_Blank" color="#fe6e6d">【方案】圣杯布局&双飞翼布局</a>
:::
11、圣杯布局(1)
---
::: warning
demo <a href="https://codepen.io/zwwill/pen/OBYXEa" target="_Blank" color="#fe6e6d">https://codepen.io/zwwill/pen/OBYXEa</a>
:::
``` html{0}
<div class="container">
    <div class="header">header</div>
    <div class="wrapper clearfix">
        <div class="main col">main</div>
        <div class="left col">left</div>
        <div class="right col">right</div>
    </div>
    <div class="footer">footer</div>
</div>

```
``` css{0}
<style>
.container {width: 500px; margin: 50px auto;}
.wrapper {padding: 0 100px 0 100px;}
.col {position: relative; float: left;}
.header,.footer {height: 50px;}
.main {width: 100%;height: 200px;}
.left {width: 100px; height: 200px; margin-left: -100%;left: -100px;}
.right {width: 100px; height: 200px; margin-left: -100px; right: -100px;}
.clearfix::after {content: ""; display: block; clear: both; visibility: hidden; height: 0; overflow: hidden;}

</style>

```
12、圣杯布局(2)
---
<p>优点：可以实现中间部分优先加载</p>
<p>缺点：处理复杂，而且当中间元素小于两侧元素时候会出现变形，响应效果相对差一点。</p>

``` html{0}
<div class="SB">
  <div class="SB_center">
      <h1>圣杯布局</h1>
      <h3 style="text-align:right">fjy</h3>
  </div>
  <div class="SB_left"></div>
  <div class="SB_right"></div>
</div>

```
``` css{0}
<style>
.SB>div{height:200px;}
.SB{padding: 0 300px;}
.SB_center{
  width:100%;
  float:left;
  background:#0f0;  
}
.SB_left{
  width:300px;
  float:left;
  background:#000;
  margin-left:-100%;
  position: relative;
  left: -300px;
}
.SB_right{
width:300px;
  float:left;
  background:#333;
  margin-left:-300px;
  position: relative;
  right: -300px;
}
</style>

```

13、双飞翼布局(1)
---
::: warning
demo <a href="https://codepen.io/zwwill/pen/oaRLao" target="_Blank" color="#fe6e6d">https://codepen.io/zwwill/pen/oaRLao</a>
:::
``` html{0}
<div class="container">
    <div class="header">header</div>
    <div class="wrapper clearfix">
        <div class="main col">
            <div class="main-wrap">main</div>
        </div>
        <div class="left col">left</div>
        <div class="right col">right</div>
    </div>
    <div class="footer">footer</div>
</div>

```
``` css{0}
<style>
.col {float: left;}
.header {height: 50px;}
.main {width: 100%;}
.main-wrap {margin: 0 100px 0 100px;height: 200px;}
.left {width: 100px; height: 200px; margin-left: -100%;}
.right {width: 100px; height: 200px; margin-left: -100px;}
.footer {height: 50px;}
.clearfix::after {content: ""; display: block; clear: both; visibility: hidden; height: 0; overflow: hidden;}

</style>

```
14、双飞翼布局(2)
---
<p>圣杯布局和双飞翼布局都是在浮动布局时代的比较经典的布局方式，对旧的浏览器有很好的兼容性。</p>

``` html{0}
<div class="SF">
  <div class="center-container">
      <div class="center">
          <h1>双飞翼布局</h1>
      </div>
  </div>
  <div class="SF_left"></div>
  <div class="SF_right"></div>
</div>

```
``` css{0}
<style>
.SF div {height: 200px;}
.center-container {
    float: left;
    width: 100%;
    height: 100px;
    background: yellow;
}
.center {margin: 0 300px;}
.SF_left {
    background: red;
    float: left;
    width: 300px;
    margin-left: -100%;
}
.SF_right {
    background: blue;
    float: left;
    width: 300px;
    margin-left: -300px;
}

</style>

```

15、定位布局
---

``` html{0}
<div class="header">header</div>
<div class="wrapper">
    <div class="main col">
        main
    </div>
    <div class="left col">
        left
    </div>
    <div class="right col">
        right
    </div>
</div>
<div class="footer">footer</div>

```
``` css{0}
<style>
.wrapper { position: relative; }
.main { margin:0 100px;}
.left { position: absolute; left: 0; top: 0;}
.right { position: absolute; right: 0; top: 0;}

</style>

```
16、绝对定位布局
---
<p>优点：绝对定位布局，很容易，效率也很高</p>
<p>缺点：实际开发中很少使用，原因也很简单，绝对定位的元素是脱离文档流的，可维护性会受限 </p>

``` html{0}
<div class="JD">
  <div class="JD_left"></div>
  <div class="JD_center">
      <h1>绝对定位布局</h1>
  </div>
  <div class="JD_right"></div>
</div>

```
``` css{0}
<style>
.JD>div {
    position: absolute;
    height: 200px;
}
.JD_left {
    left: 0;
    width: 300px;
    background: red;
}
.JD_center {
    left: 300px;
    right: 300px;
    background: yellow;
}
.JD_right {
    right: 0;
    width: 300px;
    background: blue;
}

</style>

```

17、普通浮动布局
---
<p> 这种布局主要是控制元素浮动来实现的，要注意的一点就是中间元素要创建BFC，否则一旦高度变化就会无法正常工作。</p>
<p>优点：浮动对旧浏览器兼容性好；</p>
<p>缺点：主体内容需要放到最后加载，当页面元素较多时候可能会影响体验 </p>

``` html{0}
  <div class="container">
      <div class="left"></div>
      <div class="right"></div>
      <div class="center">
          <h1>浮动布局</h1>
      </div>
  </div>

```
``` css{0}
<style>
.container>div{
    height: 200px;
}
.left {
    float: left;
    width: 300px;
    background: red;
}
.right {
    float: right;
    width: 300px;
    background: blue;
}
.center {
  overflow: hidden;
  background: yellow;
}

</style>

```
18、flex布局
---
<p> 把外层容器显示属性设置成flex，里面只要自适应部分flex设置为1，就可以实现自适应效果了。</p>
<p>使用flex布局的代码特别简洁，也是实现自适应布局的最佳方案，唯一的问题就是旧浏览器不兼容这一布局方式。</p>
<p>现在需要适配旧浏览器的场景越来越少了，尤其是移动开发，flex可以完全放心使用。 </p>

``` html{0}
<div class="FX">
  <div class="FX_left"></div>
  <div class="FX_center">
      <h1>flexbox</h1>
  </div>
  <div class="FX_right"></div>
</div>

```
``` css{0}
<style>
.FX {
    display: flex;
}
.FX_container>div {
    height: 200px;
}
.FX_left {
    width: 300px;
    background: red;
}
.FX_center {
    flex: 1;
    background: yellow;
}
.FX_right {
    width: 300px;
    background: blue;
}

</style>

```
19、table布局
---
<p> 把外层容器设置成table,里面设置为table-cell，就可以很容易地实现布局需求。。</p>
<p>优点：兼容性还特别好，因为表格是兼容旧浏览器的，虽然遭受很多诟病，但是真的可以解决问题</p>
<p>缺点：就是不灵活，边框设置、高度设置等等都有很大受限 </p>

``` html{0}
<div class="table">
  <div class="table_left"></div>
  <div class="table_center">
      <h1>表格布局</h1>
  </div>
  <div class="table_right"></div>
</div>

```
``` css{0}
<style>
.table {
    width: 100%;
    display: table;
    height: 200px;
}
.table>div {
    display: table-cell;
}
.table_left {
    width: 300px;
    background: rgb(146, 124, 124);
}
.table_center {
    background: rgb(41, 39, 155);
}
.table_right {
    width: 300px;
    background: greenyellow;
}

</style>

```
20、网格布局
---
<p> 网格布局，这个布局是新的css标准下的特性,在响应式布局大行其道的移动互联网时代，bootstrap之类的是对栅格化布局框架非常流行，而网格布局，就是对栅格布局的标准化实现。</p>

``` html{0}
<div class="WG">
  <div class="WG_left"></div>
  <div class="WG_center">
      <h1>网格布局</h1>
  </div>
  <div class="WG_right"></div>
</div>

```
``` css{0}
<style>
.WG {
  display: grid;
  width: 100%;
  grid-template-rows: 200px;
  grid-template-columns: 300px auto 300px;
}
.WG_left {
  background: red;
}
.WG_center {
  background: yellow;
}
.WG_right {
  background: blue;
}

</style>

```
::: warning
出处： <a href="https://github.com/zwwill/blog/issues/14" target="_Blank" color="#fe6e6d">https://github.com/zwwill/blog/issues/14</a>
:::

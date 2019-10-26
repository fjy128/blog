---
title: 项目中常见的css问题
permalink: /css
---

1 、高度崩塌问题
---
- 方法一：当父元素里面的所有子元素全部为浮动时，父元素可以添加 overflow:hidden ,让父元素自动计算高度，就不需要再给父元素设固定高度
- 在父元素中，追加空子元素，并设置其clear属性为both clear是css中专用于清除浮动的属性
```css
.clear{clear:both;height:0;overflow:hidden}
```
- 在父元素中，添加伪元素 :after+zoom(最好用的，最推荐的，兼容性也很好)
```css
.parent:after{conter:'';display:block;clear:both;height:0;overflow:hidden;}
  /*
  * zoom表示放大的意思，后边跟着一个数值，写几就将元素放大几倍
  * zoom:1表示不放大元素，但是通过该样式可以开启hasLayout
  * zoom这个样式，只在IE中支持，其他浏览器都不支持
  */
.parent{zoom:1}  /** 在IE6中不支持after伪类,所以在IE6中还需要使用hasLayout来处理*/
```



2、兼容性问题
---
<h5>1、图片间隙</h5>

- 特征：div中的图片间隙，改bug出现在IE6及更低版本中
- 描述：在div中插入图片时，图片会将div下方撑大了3px
- 解决方案：1、将div与img放在一行；2、将img转为块元素，给 <img>添加声明display：inline-block

<h5>2、双倍浮动问题（双倍间距）</h5>

- 特征：当IE6及更低版本的浏览器在解析浮动元素时，会错误地把浮动周边边界加两倍显示
- 解决方案：给浮动元素添加声明：display：inline-block

<h5>3、默认高度（IE6）</h5>

- 特征：在IE6及更低版本浏览器中部分块元素拥有默认的高度（低于18px高度）
- 解决方案：1、给元素添加声明：font-size：0；（元素中有设置字体大小不能用）；2、给元素添加声明：overflow：hidden

<h5>4、表单元素行高不一致</h5>

- 特征：表单元素行高对齐方式不一样
- 解决方案：给表单元素添加声明：float：left

<h5>5、按钮元素大小默认不一致</h5>

- 特征：各浏览器中按钮大小不一致
- 解决方案：1、统一大小（设置宽度）；2、input外边套多一个标签，在这个标签里写按钮的样式，把input的边框去掉；3、如果这个按钮是一个图片，直接把图片作为按钮的背景即可

<h5>6、IE百分比（IE7以下版本出现的问题）</h5>

- 特征：在IE所有版本中在解析百分比时，会按四舍五入的方式结算，从而导致50%加50%大于100%的情况
- 解决方案：给右边浮动元素添加声明（统一清除“右浮动”）

<h5>7、鼠标指针问题</h5>

- 特征：cursor属性的hand属性值，只用IE浏览器识别，其他浏览器不识别改声明，cursor属性的pointer属性值IE6以上版本及其他内核浏览器都识别该声明
- 解决方案：统一某元素鼠标指针形状位手型，声明位cursor：pointer

<h5>8、标签问题</h5>

- 特征：在li标签下的a标签加display：block；出现行高不一致问题
- 解决方案：给a标签声明display：inline-block；或者display：inline


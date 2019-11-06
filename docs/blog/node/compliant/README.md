---
title: 兼容性问题
permalink: /compliant
---

1、图片间隙
---

- 特征：div中的图片间隙，改bug出现在IE6及更低版本中
- 描述：在div中插入图片时，图片会将div下方撑大了3px
- 解决方案：1、将div与img放在一行；2、将img转为块元素，给 <img>添加声明display：inline-block
- 备注：img标签是行内属性标签，只要不超出容器高度，img会排在一行里，使用float是比较好的选择

2、双倍浮动问题（双倍间距）
---

- 特征：块状元素float后，有添加了横向的margin，在IE6下比设置的值要大
- 解决方案：给浮动元素添加声明：display：inline-block

3、默认高度（IE6）
---

- 特征：在IE6及更低版本浏览器中部分块元素拥有默认的高度（低于18px高度）
- 解决方案：1、给元素添加声明：font-size：0；（元素中有设置字体大小不能用）；2、给元素添加声明：overflow：hidden

4、表单元素行高不一致
---

- 特征：表单元素行高对齐方式不一样
- 解决方案：给表单元素添加float：left（左浮动）；或者是vertical-align：middle；（垂直对齐方式：居中）

5、按钮元素大小默认不一致
---

- 特征：各浏览器中按钮大小不一致
- 解决方案：1、统一大小（设置宽度）；2、input外边套多一个标签，在这个标签里写按钮的样式，把input的边框去掉；3、如果这个按钮是一个图片，直接把图片作为按钮的背景即可

6、IE百分比（IE7以下版本出现的问题）
---

- 特征：在IE所有版本中在解析百分比时，会按四舍五入的方式结算，从而导致父元素宽度为100%，子元素宽度各为50%，在IE6下各个元素宽度之和超过100%
- 解决方案：给右边浮动的子元素添加clear：right；

7、鼠标指针问题
---

- 特征：cursor：hand；只有ie浏览器识别，其他浏览器不识别
- 解决方案：统一某元素鼠标指针形状位手型，声明为cursor：pointer

8、标签问题
---

- 特征：在li标签下的a标签加display：block；出现行高不一致问题
- 解决方案：给a标签声明display：inline-block；或者display：inline

9、不同浏览器的标签默认的外边界和内填充不同
---

- 特征：不加样式控制下，margin和padding差异较大
- 解决方案：css里 *{margin:0; padding:0;}
- 备注：这是最常见也是最易解决的一个兼容问题，几乎所有的css文件开头都会用通配符*来设置各个标签外边界和内填充为0

10、块属性标签float后，又有横向的margin情况下，在IE6显示margin比设置的大
---

- 特征：IE6后面的一块被顶到下一行
- 解决方案：在float的标签样式控制中加入display:inline;转化为行内属性
- 备注：横向浮动的div布局，使用上margin进行边界设置时，必然会碰到此问题

11、设置较小高度标签(一般小于10px)，在IE6、IE7，遨游中高度超出设置高度值
---

- 特征：IE6、7和遨游里这个标签的高度不受控制，超出自己设置的高度
- 解决方案：给超出高度的标签设置overflow:hidden;或者设置行高line-height小于你设置的高度
- 备注：一般出现在设置小圆角背景的标签里。出现该问题原因是IE8之前的浏览器都会给标签一个最小默认行高的高度，即使标签是空内容，标签的高度还是会有默认行高。

12、行内属性标签，设置display:block后采用float布局，又有横向的margin情况，IE6间距bug
---

- 特征：IE6的间距比超过设置的间距
- 解决方案：在display:block;后面加入display:inline;display:table;
- 备注：行内属性标签，为了设置宽度，需要设置为display:block;(表单元素除外)在用float布局且有横向margin后，在IE6下，就具有了块属性float后的横向margin的bug。由于设置为display:inline，高度失效，所有在后面补上display:table。

13、标签最低高度设置min-height不兼容
---

- 特征：min-height本身就是一个不兼容的css属性，所以设置min-height时不能兼容所有浏览器
- 解决方案：如果设置一个标签最小高度为200px，需要进行设置 {min-height:200px; height:auto !important;height: 200px; overflow:visible;}
- 备注：b/s系统前端时，当内容小于一个值时，容器的高度保持该值，当内容大于该值时，高度自适应且不出现滚动条。

```css
1）min-height：value；

      _height：value；

2）min-height：value；

     height：auto！important；

     height：value；
```

14、字体大小定义不同
---

- 特征：对字体大小small定义不同，Firefox为13px，而IE为16px，差别比较大
- 解决方案：使用指定的字体大小如14px或者使用em

15、IE6 3px bug
---

- 特征：左侧div浮动left，右边DIV可以接着横向排列，形成典型一列固定，第二列自适应，IE6出现之间3px间隙
- 解决方案：对左侧left的盒子补上_margin-right: -3px;

16、img出现蓝色边框
---

- 特征：当在a标签中嵌套img标签时，在某些浏览器中img会有蓝色边框；
- 解决方案：给img添加border：0；或者是border：none；

17、图片默认有间隙
---

- 特征：图片默认有间隙；
- 解决方案：1、用a标签来模拟按钮，添加样式；2、如果按钮是一张背景图片，那么直接给按钮添加背景图；

18、透明度属性
---

- 特征：
- 解决方案：针对IE浏览器：filter：alpha（opacity=value）；（取值范围1--100）；兼容其他浏览器：opacity：value；（取值范围0--1）

19、上下margin的重叠问题
---

- 特征：给上边元素设置了margin-bottom，给下边元素设置了margin-top，浏览器只会识别较大值；
- 解决方案：margin-top和margin-bottom中选择一个，只设置其中一个值

<h5>用hacker兼容浏览器；大致分为3类：IE6 ；IE7和遨游；其他（IE8 chrome ff safari opera等）</h5>

- ◆IE6认识的hacker 是下划线_ 和星号 *
- ◆IE7 遨游认识的hacker是星号 *

<p>比如这样一个CSS设置：height:300px;*height:200px;_height:100px;</p> 
<p>IE6浏览器在读到height:300px的时候会认为高时300px；继续往下读，他也认识*heihgt， 所以当IE6读到*height:200px的时候会覆盖掉前一条的相冲突设置，认为高度是200px。继续往下读，IE6还认识_height,所以他又会覆盖掉200px高的设置，把高度设置为100px</p>
<p>IE7和遨游也是一样的从高度300px的设置往下读。当它们读到*height200px的时候就停下了，因为它们不认识_height。所以它们会把高度解析为200px，剩下的浏览器只认识第一个height:300px;所以他们会把高度解析为300px。因为优先级相同且想冲突的属性设置后一个会覆盖掉前一个，所以书写的次序是很重要的。</p>

<h5>CSSHack</h5>
<h6>1、什么是CSS hack</h6>
<p>由于不同厂商的流览器或某浏览器的不同版本（如IE6-IE11,Firefox/Safari/Opera/Chrome等），对CSS的支持、解析不一样，导致在不同浏览器的环境中呈现出不一致的页面展现效果。这时，我们为了获得统一的页面效果，就需要针对不同的浏览器或不同版本写特定的CSS样式，我们把这个针对不同的浏览器/不同版本写相应的CSS code的过程，叫做CSS hack!</p>
<h6>方式</h6>

```html
  <!-- 1).一般是针对IE浏览器处理 -->

    <!-- 只在IE下生效 -->
    <!–[if IE]>
    <!-- 这段文字只在IE浏览器显示 -->
    <![endif]–>


    <!-- 只在IE6下生效 -->
    <!–[if IE 6]>
    <!-- 这段文字只在IE6浏览器显示 -->
    <![endif]–>


    <!-- 只在IE6以上版本生效 -->
    <!–[if gte IE 6]>
    <!-- 这段文字只在IE6以上(包括)版本IE浏览器显示 -->
    <![endif]–>


    <!-- 只在IE8上不生效 -->
    <!–[if ! IE 8]>
    <!-- 这段文字在非IE8浏览器显示 -->
    <![endif]–>


    <!-- 非IE浏览器生效 -->
    <!–[if !IE]>
    <!-- 这段文字只在非IE浏览器显示 -->
    <![endif]–>
```
```css{0}
/* 2).类内属性前缀法 */
/*1、IE6浏览器*/
.demo {_color: red;}

/*2、IE6-7浏览器识别*/
.demo {*color: red;}

/*3、所有浏览器除IE6浏览外*/
.demo {color/**/:red;}

/*4、IE6-9浏览器*/
.demo {color: red9;}

/*5、IE7-8浏览器*/
.demo {color/***/:red9;}

\0 color:red\0
\9\0 color:red\9\0
!important color:blue !important;color:green;
```




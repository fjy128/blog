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



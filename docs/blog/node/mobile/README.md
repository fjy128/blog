---
title: 移动端字体设置
permalink: /javascript
---

通过下面代码,根据浏览器好了视窗宽度设置html元素的fontsize值
---

```js{0}
// clientWidth是浏览器的宽度
(
  function (doc, win) {
    let docEl = doc.documentElement,
     resizeEvt = 'orientationchange' in window ? 'orientationchange':
     recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = `${100 * (clientWidth / 750)}px`;
      // 750是设计图的宽度,100是一个基准宽度(html的font-size)
    };
    if(!doc.addEventListener) return;
    win.addEventListener(resizeEvt,recalc,false);
    doc,addEventListener('DOMContentLoaded',recalc,false);
    document.querySelector('.loading').style.display = 'none'
  }
)(document,window)
```
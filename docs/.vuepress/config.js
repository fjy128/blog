module.exports = {
  title: 'fjy128前端修养', // 设置网站标题
  description: '前路漫漫，岁月悠悠，流年笑掷，未来可期', //描述
  serviceWorker: true,
  base: "/blog/",
  themeConfig: { //主题配置
    nav: [{
        text: '主页',
        link: '/'
      }, // 导航条
      {
        text: '组件文档',
        link: '/baseComponents/'
      },
      {
        text: '知识库',
        link: '/knowledge/'
      },
      {
        text: 'github', // 这里是下拉列表展现形式。
        items: [{
            text: 'focus-outside',
            link: 'https://github.com/TaoXuSheng/focus-outside'
          },
          {
            text: 'stylus-converter',
            link: 'https://github.com/TaoXuSheng/stylus-converter'
          },
        ]
      }
    ],

    sidebar: [{
        title: '日常使用组件集合',
        collapsable: true,
        children: [
          '/blog/node/calendar/',
          '/blog/node/webapp/'
        ]
      },
      {
        title: '图表类相关基础知识',
        collapsable: true,
        children: [
          '/blog/node/echart/'
        ]
      },
      {
        title: '服务端相关基础知识',
        collapsable: true,
        children: [
          '/blog/node/http/',
          '/blog/node/koa2-proxy/',
          '/blog/node/mongodb/',
          // '/blog/node/koa2/'
        ]
      },
      {
        title: '前端页面布局基础知识',
        collapsable: true,
        children: [
          '/blog/node/cssCenter/',
          '/blog/node/css/',
          '/blog/node/compliant/',
        ]
      },
      {
        title: '前端JS基础语法知识',
        collapsable: true,
        children: [
          '/blog/node/js/',
          '/blog/node/ES6/',
          '/blog/node/TS/',
          '/blog/node/InterviewQuestions/',
          '/blog/node/mianshiti/',
          '/blog/node/youyaxunhuan/',
          '/blog/node/regExp/',

        ]
      }
    ]
  }
}
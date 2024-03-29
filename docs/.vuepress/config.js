module.exports = {
  title: 'fjyのSuanCaiFish', // 设置网站标题
  description: 'SuanCaiFish,Is the original dream still there? The world is full of disquiet and confusion, whether it disturbs your pace of progress. Originally, I thought it could be two people, but I was alone from beginning to end', //描述
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
        title: '日常使用组件',
        collapsable: true,
        children: [
          '/blog/node/calendar/',
          '/blog/node/webapp/'
        ]
      },
      {
        title: '图表类基础知识',
        collapsable: true,
        children: [
          '/blog/node/echart/'
        ]
      },
      {
        title: '服务端基础知识',
        collapsable: true,
        children: [
          '/blog/node/http/',
          '/blog/node/koa2-proxy/',
          '/blog/node/mongodb/',
          // '/blog/node/koa2/'
        ]
      },
      {
        title: 'Div+CSS局基础知识',
        collapsable: true,
        children: [
          '/blog/node/cssCenter/',
          '/blog/node/css/',
          '/blog/node/compliant/',
        ]
      },
      {
        title: 'JS基础知识',
        collapsable: true,
        children: [
          '/blog/node/js/',
          '/blog/node/ES6/',
          '/blog/node/TS/',
          '/blog/node/InterviewQuestions/',
          '/blog/node/mianshiti/',
          '/blog/node/youyaxunhuan/',
          '/blog/node/regExp/',
          '/blog/node/mobile/',
          '/blog/node/56JS/',
        ]
      },
      {
        title: '项目版本管理',
        collapsable: true,
        children: [
          '/blog/node/git/',
        ]
      }
    ]
  }
}
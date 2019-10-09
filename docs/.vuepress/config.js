module.exports = {
  title: '像鱼', // 设置网站标题
  description: 'Just playing around as web', //描述
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
    
    sidebar: [  
      {
      title: '组件文档',
      collapsable: true,
      children: [
        '/blog/node/calendar/',
        '/blog/node/webapp/'
      ]
    },
      {
      title: 'echart',
      collapsable: true,
      children: [
        '/blog/node/echart/'
      ]
    },
      {
      title: 'koa2-proxy',
      collapsable: true,
      children: [
        '/blog/node/koa2-proxy/'
      ]
    },
    // {
    //   title: 'koa2',
    //   collapsable: true,
    //   children: [
    //     '/blog/node/koa2/'
    //   ]
    // },
    {
      title:'常见的居中问题',
      collapsable:true,
      children:[
        '/blog/node/cssCenter/'
      ]
    },
    {
      title:'复杂判断的更优雅写法',
      collapsable:true,
      children:[
        '/blog/node/youyaxunhuan/'
      ]
    },
    {
      title:'ES6完全手册使用',
      collapsable:true,
      children:[
        '/blog/node/ES6/',
        '/blog/node/TS/',
      ]
    },
    {
      title:'对象拷贝',
      collapsable:true,
      children:[
        '/blog/node/cloneObj/'
      ]
    },
    {
      title:'mongodb基础知识',
      collapsable:true,
      children:[
        '/blog/node/mongodb/'
      ]
    },
  ]
  }
}
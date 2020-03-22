const pluginConf = require('./config/pluginConf.js');

module.exports = {
  title: "踏浪",
  description: '踏浪的文档',
  // base:'/documents/',
  head: [
    ['link', { rel: 'icon', href: '/icons/android-chrome-192x192.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  plugins: pluginConf,
  themeConfig: {
    
    // logo: '/assets/img/logo.png',
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'houyimin/documents',
    // 自定义仓库链接文字。
    repoLabel: 'My GitHub',
    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    // docsBranch: 'gh-pages',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '编辑文档！',

    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Vue', link: '/vue/',
        items: [
          { text: 'vuepress', link: '/vue/vuepress' }
        ]
      },
      {
        text: 'Linux', link: '/linux/',
        items: [
          { text: 'Shell', link: '/shell/' },
          { text: 'Awk', link: '/awk/' },
          { text: 'vim', link: '/vim/' },
          { text: 'Sed', link: '/sed/' }
        ]
      },
      { text: 'PHP', link: '/php/', 
        items: [
          { text: 'phpstorm', link: '/php/phpstorm' }
        ]
      },
      // { text: 'github', link: 'https://github.com/houyimin' },
    ],
    // sidebar: [
    //     '/',
    //     // '/linux/',
    //     // ['/linux/shell/', 'shell'],
    //     ['/shell/split', 'split文件分割'],
    //   ],
    // sidebar: {
    //   '/shell/': [
    //     '', 
    //     ['split', 'split文件分割'], 
    //   ],
    // },
    // sidebar: 'auto',//自动生成侧边栏
    lastUpdated: '上次更新', // string | boolean
    smoothScroll: true,//页面滚动
    sidebarDepth: 2,
    displayAllHeaders: true


  }
}
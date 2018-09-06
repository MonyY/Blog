module.exports = {
  title: "郁世昌的博客",
  description: "说点什么好呢...",
  head: [
    ["link", { rel: "icon", href: `/logo.png` }]
  ],
  base: "/Mony/",
  dest: "./dist",
  evergreen: true,
  ga: 'UA-125337358-1',
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "见闻", link: "/projects/" },
      { text: "积累", link: "/guide/" }
    ],
    sidebar: {
      '/guide/': genSidebarConfig('Guide')
    },
    lastUpdated: '最后更新时间'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

function genSidebarConfig(title) {
  return [{
    title,
    collapsable: false,
    children: [
      '',
      'getting-started',
      'customize',
      'advanced',
    ]
  }]
}
module.exports = {
  title: "Mony",
  description: "说点什么好呢...",
  head: [
    ["link", { rel: "icon", href: `/logo.jpg` }]
  ],
  base: "/Mony/",
  dest: "./dist",
  evergreen: true,
  ga: 'UA-125337358-1',
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "见闻", link: "/information/" },
      { text: "积累", link: "/guide/" }
    ],
    // sidebar: {
    //   '/guide/': genSidebarConfig('Guide')
    // },
    sidebar: {
      '/guide/': [
        '',
        'js',
        'css',
        'vue'
      ],
      '/information/': [
        ''
      ]
    },
    lastUpdated: 'Last Updated'
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
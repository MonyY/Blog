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
      { text: "积累", link: "/HTTP/HTTP协议" }
    ],
    sidebar: [{
      title: 'HTTP',
      children: [
        '/HTTP/HTTP协议'
      ]
    }, {
      title: 'JS',
      children: [
        '/JS/JS-basic-knowledge'
      ]
    }, {
      title: 'Vue',
      children: [
        '/Vue/'
      ]
    }, {
      title: 'CSS',
      children: [
        '/CSS/'
      ]
    }],
    markdown: {
      lineNumbers: true
    },
    lastUpdated: 'Last Updated'
  }
};
module.exports = {
  title: "Mathematica 激活指南",
  description: "Mathematica 的安装、激活、入门、常见问题",
  themeConfig: {
    collapsable: true,
    sidebar: "auto",
    sidebarDepth: 2,
    editLinks: true,
    sidebar: [
      {
        title: "content",
        collapsable: true,
        children: [
          ["/content/dl.md", "下载"],
          ["/content/active.md", "激活"],
          ["/content/IntoDoor.md", "入门"],
          ["/content/QA.md", "Q&A"],
        ],
      },
    ],
  },
};

// yarn docs:dev

module.exports = {
  base: "/mmaInstall/",
  themeConfig: {
    collapsable: true,
    sidebar: "auto",
    sidebarDepth: 2,
    repo: "wuyudi/mmaInstall",
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

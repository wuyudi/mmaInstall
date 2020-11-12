module.exports = {
  title: "MMA",
  description: "Dl",
  themeConfig: {
    collapsable: true,
    sidebar: "auto",
    sidebarDepth: 2,
    sidebar: [
      {
        title: "content",
        collapsable: true,
        children: [
          ["/content/dl.md", "dl"],
          ["/content/active.md", "激活"],
          ["/content/IntoDoor.md", "入门"],
          ["/content/QA.md", "Q&A"],
        ],
      },
    ],
  },
};

// yarn docs:dev

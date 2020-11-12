---
title: 入门
---

## Mathematica 入门

“那么软件装好之后该怎么学习呢？”

不妨阅读以下几篇文章：

[《写给新手》](http://note.youdao.com/noteshare?id=058e6037396d925af1f4abe4d54a52a8)

[《怎样算阶乘（一）—— Mathematica 是个计算器》](http://note.youdao.com/noteshare?id=c5114ccda3270199fd801952cf785bff)

[《你查过自带帮助了吗？你真的会查自带帮助吗？》](http://note.youdao.com/noteshare?id=abd51087f44c0b6a41ff6022d549dc41)

[《有的字母蓝，有的字母黑，你知道为什么吗？你对语法着色有认识吗？》](http://note.youdao.com/noteshare?id=06adaac6aaf85c87c4cd6fdf715b418c)

下面列出一些新手常见问题：

* 如果要打开 Mathematica，
  * Windows 请双击新生成的桌面图标，或者点击开始菜单中名字叫 Mathematica 的那个。如果要到安装目录里去开，请点 `Mathematica.exe`。不要跑去点那些名字带 <del>Kernel</del> 的！
  * macOS 请在 Applications 里点击 Mathematica。建议固定到 Dock。
* Mathematica 9 及更早版本的界面就是一个细长条，不要大惊小怪。新建笔记本（写代码）请点击细长条上的 **文件** > **新建** > **笔记本**，或者直接按 <kbd>Ctrl</kbd> + <kbd>N</kbd>。
* <kbd>F1</kbd> 打开帮助文档，并搜索光标处的符号。自带帮助是最好的教材。
* <kbd>F2</kbd> 打开符号补全建议，包括自定义的函数。<kbd>Tab</kbd> 用当前选中的那个补全。
* 复制代码前，用 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> 将当前 cell 转换为 InputForm，再复制，可以避免代码变乱。
* Wolfram 语言区分大小写。Mathematica 内置函数都以大写字母开头。
* Wolfram 语言的标点符号都是半角英文标点。
* Wolfram 语言有 4 种括号，分工明确。
* 区分 `=` （赋值）与 `==` （相等）。
* 区分 `=` （立即赋值）与 `:=` （延时赋值）。其他几对立即与延时最好也学习一下。
* 带有下标、上标的变量不是独立的符号，计算中尽量避免使用。
* 符号（变量、函数）的定义会持久存在，即使关闭笔记本也仍然存在。除非 Clear 清除，或者重启 Mathematica。
* 注意语法着色。下面列出部分默认颜色：
  * 未赋值的全局符号是蓝色 (#002cc3)。
  * 已赋值的符号是黑色 (#000000)。
  * Mathematica 内置函数都是黑色。
  * 局部变量是绿色 (#438958)。
  * 特殊局部变量是水绿色 (#3c7d91)。
* [`Show`](https://reference.wolfram.com/language/ref/Show.html) 函数可以将多幅图合成为一个。
  * 如果合并之后绘图范围不全，给 `Show` 函数添加 `PlotRange -> All` 选项。
* [`AxesOrigin`](https://reference.wolfram.com/language/ref/AxesOrigin.html) 选项设置坐标轴的原点。
* [`Clear`](https://reference.wolfram.com/language/ref/Clear.html) 函数清除符号的定义，[`ClearAll`](https://reference.wolfram.com/language/ref/ClearAll.html) 函数还会清除属性等相关信息。
* `Import[source, "Table"]` 导入以 Tab 分隔的数据文件 ([arbitrary tabular data](https://reference.wolfram.com/language/ref/format/Table.html))。
* 不要害怕报错信息，耐心阅读。
* Mathematica 无法求解解析复杂度太大的问题。简单的算式的背后可能是非常复杂的符号分析。
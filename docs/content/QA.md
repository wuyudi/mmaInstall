---
title: Q&A
---

## 安装激活 Mathematica 时可能碰到的问题

### 【Q1】为何首次启动 Mathematica 时，没有弹出激活界面

【A1】如果之前安装过 Mathematica，且电脑又没有重装过。那么，再次安装 Mathematica 时，可能不会弹出激活界面。因为 Mathematica 卸载后，激活文件 `mathpass` 默认保留，不会自动删除。

如果之前是成功激活的，比如，之前成功激活了 Mathematica 8，然后卸载 Mathematica 8，安装 Mathematica 9，那么，这时 Mathematica 9 不会弹出激活界面，而实际上 Mathematica 9 已经激活了。

验证是否完整激活的一个办法是，尝试自由格式输入是否可用。

当然，这也是那些人品不行、激活几十次都不成功、但却一定要使用 Mathematica 9 中文版的朋友可以采用的一个方法。就是先安装 Mathematica 8 中文版，按照本文步骤激活成功后，卸载 Mathematica 8，然后再安装 Mathematica 9，这样就可以使用 Mathematica 9 中文版的全部功能了。

### 【Q2】macOS 或者 Linux 系统怎么使用某些注册机

【A2】

本文提供的一些注册机只运行于 Windows。请按下述方法使用：

1. 在自己的电脑上安装好 Mathematica。
2. 在一台安装有 Windows 系统的电脑上运行注册机。
3. 打开你的 Mathematica 的激活界面，获取 Math ID。
4. 把这个 Math ID 敲键盘输入注册机相应的输入框中。
5. 完成激活。

Activation Key 和 Password 是对应于 Math ID 的，跟硬件设备无关。

### 【Q3】如何实现 Mathematica 帮助文档中英文切换（满足某些有特殊癖好的朋友）

【A3】如果你的电脑上安装了 Mathematica 英文版，并且想用中文文档，那么，把中文帮助文档拷到你的电脑上即可：

1. 找台安装了中文版 Mathematica 的电脑。
2. 进入它的 Mathematica 的安装目录。
   * 可以在 Mathematica 里执行 `$InstallationDirectory` 来查询 Mathematica 的安装目录。以版本 9.0 为例，Windows 版默认是 `C:\Program Files\Wolfram Research\Mathematica\9.0`。
3. 把它的 `Documentation` 文件夹的内容复制出来，复制到你的电脑的该文件夹里。
4. 在 Mathematica 偏好设置 (Preferences) 里，语言 (Language) 选 English 就是英文帮助文档，选中文就是中文帮助文档。切换语言需要重新启动 Mathematica。

当然，同时拥有两份文档的代价是，Mathematica 占用的硬盘空间几乎增加一倍。

### 【Q4】注册机里 Computer Name 是否分大小写

【A4】不分。

### 【Q5】注册机算出来的 Activation Key 只有 13 位

【A5】因为使用了旧版的注册机，此注册机也可以用，但要多些步骤，上详。

### 【Q6】出现问题“Assertion 'foundPrinterDevice'在 Printing.c:3950时失败”

![Mathematica 启动错误](http://ww4.sinaimg.cn/large/a15b4afegw1f7gusak0ctj20b406haai)

【A6】打印机服务 (Print Spooler) 没开。

解决方案之一：
请在运行 (<kbd>Win</kbd> + <kbd>R</kbd>) 中输入 `msconfig`，转到 **服务** (Services) 选项卡，打开 Print Spooler 服务，重启电脑。

### 【Q6.5】出现 `Error code: 698`，内核可以启动，但主程序（前端）无法启动

![Error code 698](http://ww4.sinaimg.cn/large/a15b4afegw1f7gutazpgmj20az06xwf2)

【A6.5】

1. 打开系统服务中心，在里面找到 Windows 防火墙，启动它。
   1. 还可能需要检查 [Windows Defender Firewall 设置](https://support.microsoft.com/help/4028544)。
2. 进入你的 Mathematica 的安装目录，再进入 `SystemFiles\Fonts` 文件夹，把里面所有 ttf 文件双击点开（或者右键单击）并安装一遍。
3. 就应该能用了。

Windows 10 特有功能：只有启动防火墙，ttf 字体文件才能打开并安装。参看 [Enable Windows 10 firewall to install fonts - 404 Tech Support](https://www.404techsupport.com/2015/09/11/enable-windows-10-firewall-install-fonts/)。

### 【Q7】Mathematica 支持 64 位系统吗

【A7】Mathematica 安装包同时包含 32 和 64 位，它会自动判断你的系统类型并安装。

从 12.1 开始，Mathematica 仅支持 64 位操作系统。其他多项系统要求也都显著提高。

### 【Q8】64 位系统在安装了 VC2010 运行库后，那两个注册机仍然无法使用

【A8】对于 64 位系统，VC2010 运行库的 64 位 (x64) 和 32 位 (x86) 版本都要安装，然后那个注册机才能运行。也就是说，64 位系统需要安装本文百度网盘下载链接 VC2010 文件中 X86 和 X64 两个文件。具体请下载文件查看。

### 【Q9】激活不当，需要重置 Mathematica：Mathematica 已激活，但功能有限制，比如不能使用自由输入、虚拟全书、函数浏览器、帮助文档

* 自由输入 (Free-Form Input)
* 帮助文档 (Documentation)
* 虚拟全书 (Virtual Book)

（这是最常见的问题，也是激活不当的问题。）

【A9】首先，请确保你已经使用了正确的注册机！注册机的问题具体参见前文！

如果注册机正确，但还是有问题，那么，一般是因为之前安装过 Mathematica 但是激活不完全。

解决步骤是

1. 删除残余信息。
2. 再重新激活。

删除配置信息的方法，具体请参考官网的教程《[如何通过恢复 Mathematica 默认配置来解决常见问题 (How do I fix common problems by resetting Mathematica to its default configuration)](https://support.wolfram.com/kb/12464)》，建议中英文版本对照阅读。

下面仅介绍 Windows 上的删除方法。

首先，按照官网的说法，在启动 Mathematica 的时候，同时按住 <kbd>Ctrl</kbd> 和 <kbd>Shift</kbd>，直至 Mathematica 屏幕出现。

如果问题仍然存在，那么可以手动删除。

对于 **Windows 8 及更高版本**的系统，可以利用 PowerShell。请**以管理员权限**打开一个 **PowerShell** 窗口，然后执行以下步骤。（Windows 7 自带的 Windows PowerShell 2.0 很不稳定、功能匮乏。如有需要，[请更新](https://docs.microsoft.com/powershell/scripting/install/installing-windows-powershell)。）

第 1 步，执行下面这段命令

```powershell
Remove-Item -Path "$env:ProgramData\Mathematica\Licensing" -Recurse -Force
```

第 2 步，如果问题仍然存在，执行下面这段命令

```powershell
Remove-Item -Path @("$env:ProgramData\Mathematica", "$env:USERPROFILE\AppData\Local\Mathematica", "$env:USERPROFILE\AppData\Roaming\Mathematica", "$env:USERPROFILE\AppData\Local\Wolfram", "$env:USERPROFILE\AppData\Roaming\Wolfram") -Recurse -Force
```

第 3 步，如果问题仍然存在，**卸载 Mathematica**，之后，执行第 2 步的命令，再执行下面这段命令

```powershell
Remove-Item -Path @("Registry::HKEY_LOCAL_MACHINE\SOFTWARE\Wolfram Research", "Registry::HKEY_LOCAL_MACHINE\SOFTWARE\Mathematica") -Recurse -Force
```

> **注意**
>
> * 如果报错“无法找到路径”，那么，相应文件早已从您的计算机上删除，无需在意。
> * 如果发生其他错误，请仔细检查报错信息，并对症处理。参看 [Remove-Item](https://docs.microsoft.com/en-us/powershell/module/Microsoft.PowerShell.Management/Remove-Item)。

对于**较低版本的 Windows**，请阅读以下内容。

> **注意**
>
> * 以下 `%ProgramData%`、`%USERPROFILE%` 等都是 **Windows 环境变量**。Windows 资源管理器 (Windows Explorer) 可以自动识别它们。
> * 以下都是**隐藏文件夹**，需要[显示隐藏文件夹](https://support.microsoft.com/help/14201)。
> * Mathematica 的残留信息一定要清理干净！
> * 已经证实，在部分计算机上，即使正确使用注册机，并且完成此处所述的步骤，依旧无法清理干净残余信息。那么，这里还有最后一个办法（已在 Windows Vista 32 位，Mathematica 9.0.1 中文版测试）：
>   * 首先，在计算机上新建一个帐户：开始 -> 控制面板 -> 用户帐户和家庭安全 -> 添加或删除用户帐户 -> 创建一个新帐户（帐户的权限，笔者选的是“管理员 (Administrator)”，不过，大概 Guest 也可以？大家可以试一试，然后把结果编辑进来）。然后，把 Mathematica 安装在这个新的帐户里，就不用担心残留信息的问题了。安装和激活完成之后新建的帐户可以删除。

第 1 步，删除激活信息。

Windows XP 在这 2 个目录：

```text
C:\Documents and Settings\Administrator\Application Data\Mathematica\Licensing

C:\Documents and Settings\All Users\Application Data\Mathematica\Licensing
```

Windows 7 及更高版本的系统在：

```text
%ProgramData%\Mathematica\Licensing
```

之后，**通常**需要继续清理其他残留，**要全部删除**！（似乎，只有一些人会面临此问题，原因暂不明。已知的可能存在残留的地方列于下方，欢迎补充。）

第 2 步，如果问题仍然存在，删除下列文件夹：

```text
%ProgramData%\Mathematica
%USERPROFILE%\AppData\Local\Mathematica
%USERPROFILE%\AppData\Roaming\Mathematica
%USERPROFILE%\AppData\Local\Wolfram
%USERPROFILE%\AppData\Roaming\Wolfram
```

第 3 步，如果问题仍然存在，**卸载 Mathematica**，之后，执行第 2 步，再删除下列注册表键（对于不同版本的 Mathematica，可能存在下列几个位置之一）：

```text
HKEY_LOCAL_MACHINE\SOFTWARE\Wolfram Research
HKEY_LOCAL_MACHINE\SOFTWARE\Mathematica
```

> **几种打开注册表编辑器 (regedit) 的方法**
>
> * <kbd>Win</kbd> + <kbd>R</kbd>，键入 `regedit`，执行
> * <kbd>Win</kbd> + <kbd>S</kbd>，键入 `regedit`，执行
> * <kbd>Win</kbd> + <kbd>Q</kbd>，键入 `regedit`，执行
> * 打开 PowerShell 或 cmd，键入 `regedit`，执行
> * 开始菜单 -> 运行，键入 `regedit`，执行

### 【Q10】提示说：这份 Mathematica 使用的密码不允许英语以外的其它语言

提示说：

> 这份 Mathematica 使用的密码不允许英语以外的其它语言。关于启用更多的功能，请与 Wolfram Research 联系 (`http://www.wolfram.com`). 您必须重新启动前端。

【A10】因为你用英文注册机激活中文版。（认真看教程！不要跑外面去乱下注册机！🤦）

再强调一遍，**一定要用对注册机！**

要完全激活版本 8 和版本 9 的中文版，只能使用版本 8 的中文版注册机。

不清楚什么是中文版注册机的人，以及自以为使用了中文版注册机却依然出现这个问题的人，请使用本教程提供的注册机！

### 【Q11】Windows XP 32 位 最多能支持 Mathematica 多高的版本

【A11】版本 9。

* [Mathematica 9 system requirements - Wolfram Support](https://support.wolfram.com/12432)
* [Mathematica 10.0–10.3 system requirements - Wolfram Support](https://support.wolfram.com/23176)

### 【Q12】为什么每次点开注册机都出现“已停止工作”

![注册机已停止工作，在 Windows 8](http://ww4.sinaimg.cn/large/a15b4afegw1f7guucxxcbj20a60550so)

【A12】前文已经说了，请安装 VC 运行库。

### 【Q13】使用没问题，但界面出现乱码，如图

![Mathematica 9 界面乱码，在 Windows 7](http://ww4.sinaimg.cn/large/a15b4afegw1f7guv45c0ej20g400idfn)

【A13】似乎存在多种原因。

一种已经被证实的原因是，电脑的系统区域 (system locale) 被改动过，此种情况改回中文区即可解决。

### 【Q14】版本 10 及以上（不论中英文版）卡顿，卡在初始界面，界面显示不完全

【A14】具体参考<del><http://tieba.baidu.com/p/4039684644></del>（注：此链接因 妙谛莲花 被百度无故封号，目前暂无法访问）。卡顿问题在该帖 2 楼，卡在初始界面的问题在该帖 3 楼，界面显示不完全的问题在该帖 4 楼。
 
 已证实版本 11 及以上的 Paclet 更新也可能导致卡顿，此问题可通过使用 [Paclet 镜像站](https://gitee.com/wolframpaclet/WolframPacletGeneral)来解决。

### 【Q15】Windows 10 最多能支持 Mathematica 多低的版本

【A15】至少版本 8 之后的都支持。（前面的没测试过。）

### 【Q16】安装完后打开出现未响应，如图所示

![Wolfram Mathematica 10.3 未响应，在 Windows 7](http://ww4.sinaimg.cn/large/a15b4afegw1f7guw7rirbj20fr0g5di1)

【A16】 原因是，没更新 Windows 的一个补丁。如果你把自动更新关了，打开更新，更新内容里有 Windows Service Pack，更新之后重新安装即可。

### 【Q17】 安装的时候出现无响应，如下图

![Wolfram Mathematica 10.4 已停止工作，在 Windows 7](http://ww4.sinaimg.cn/large/a15b4afegw1f7guwxv9lij20di0bljsm)

【A17】软件必须安装在**英文**名称的路径下。

### 【Q18】 安装后是否需要关闭 Mathematica 的自动更新

【A18】不需要。截止目前，Wolfram 对破解版没有任何打击措施。此外，有证据表明某些小的 bug 修复是通过自动更新进行的，所以，最好不要关。

### 【Q19】 为什么注册机一回车完就直接关了

【A19】正文里已经说了多遍，命令行注册机不能双击打开！右键选打开当然也不行，不要自作聪明！

请在命令行下使用注册机。也就是说，请打开命令行，然后调用这个注册机。

不明白什么叫“**打开命令行然后调用这个注册机**”的请使用上文提供的批处理文件！

### 【Q20】 安装后出现 `Error code: 702`

【A20】和 Mathematica 自带的字体安装未成功有关。

请仔细检查安全软件（比如，360 啊，360 啊，还有 360 啊）是否屏蔽了外部字体安装。参看 [Error code 702 on launch of Mathematica (Windows 10) - Wolfram Community](https://community.wolfram.com/groups/-/m/t/917946)。

### 【Q21】 软件是否可以安装在中文路径下

【A21】若想避免麻烦，安装时应尽量**避免使用中文路径**。

Mathematica **理论上**可以安装在中文路径下，但是，近几版 Mathematica 已多次出现了**和中文（确切地说是 Unicode）相关的 bug**。并且目前已经证实，至少 11.3 中文版，若是安装在中文路径下，会打不开。

使用包含中文的系统用户名会导致部分需要读写缓存的内置符号无法使用（因为缓存位于用户文件夹下），可以**新建**一个完全使用英文作为用户名的用户，在新用户里**重新激活**并使用 Mathematica，**直接修改用户名无效**。

大家也可积极对其他版本进行实验，丰富本教程内容。

Mathematica 的多个组件都有 Unicode 支持问题，而且长期未修复。参看 [How to workaround failures with Unicode filepaths - Stack Exchange](https://mathematica.stackexchange.com/q/143953)。

### 【Q22】 Windows 系统语言包是否会对 Mathematica 有影响？

【A22】已经证实，至少在 Windows 10 下，若系统未安装**英文**语言包，Wolfram|Alpha Notebook Edition 12.0.1 英文版及 Mathematica 12.1.1 英文版将无法正确下载 ImageRestyle 所需的模型文件。下图为 Alpha Notebook 的出错提示：

![Nrh534.png](https://s1.ax1x.com/2020/06/26/Nrh534.png)

解决方法，如上所述，是安装英文语言包。具体而言，就是在开始菜单中搜索“语言”找到以下页面，并添加英文语言包：

![Nr44dP.png](https://s1.ax1x.com/2020/06/26/Nr44dP.png)

目前尚不确定此现象对其他版本是否有影响，大家可积极实验，丰富本教程内容。
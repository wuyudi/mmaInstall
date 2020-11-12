---
title: dl
---

# Mathematica 激活指南

首先还是要强调一句：

**用盗版是迫不得已的，有能力的话要支持正版！**

中国区学生版 80 美元——最外层页面写的确实是 $161，但是[进入购买页面](https://store.wolfram.com/arrive.cgi?Qualifier=STUD&URI=/view/app/mathematica/student&Country=CN)就会变成 $80 了！如果国家选错了是不会有 $80 的优惠价的。购买学生版需要验证学生身份（例如学信网截图、学生证、录取通知书）。

购买方法的一些介绍： <http://tieba.baidu.com/p/2570976088>

此外，通过代理商购买也是一个可行渠道，具体商家这里就不提了，请各位善用搜索引擎。

---

如果想用学生版，但是学校没买又不想自己付钱，可以考虑参加 [Wolfram 学生大使计划](https://www.wolfram.com/company/careers/ambassador/index.html.zh) (Wolfram Student Ambassador Program)。

可以获得的：wolfram 系列产品全解锁。（Wolfram One，Wolfram Alpha Pro）

需要做的：

1. 准备一份简单的简历。
2. 会有个面试，是中文面试。
3. 每个月填表汇报做了什么。比如写文章，录教程。

---

[百度贴吧](http://tieba.baidu.com/f?kw=mathematica)里的帖子不能编辑，很不方便。

但大家<del>在激活失败这事上可以说是拥有无穷的创造力</del>，激活过程又会出现新的问题。故开此文档，整理安装、激活 Mathematica 的过程，以及可能碰到的问题。以后如果出现新的问题，欢迎补充整理。

在贴吧置顶中提出“新的问题”前，请先仔细阅读本文。**问重了的直接删**。

询问为什么一回车注册机就关了的，直接删，加封禁十天。

**教程中的百度网盘地址均有效，异常只是暂时抽风，在地址栏上重新回车一次（不能直接刷新！）就能看到下载页面了！**

同时，请意识到，本文没有涵盖的问题通常是**不太常见**的。所以，如果真的希望问题尽快得到解决，那么，在提出“新的问题”时请**尽可能详细**地给出背景信息。例如，

* 失败的**具体**症状（你单单说一句“我下载失败了”，或者“我这里密钥总是不对”没有任何意义）
* 操作系统是否做过什么特殊的设置
* 系统的版本、配置，以及系统的自动更新是否打开
* 是否使用过xx优化大师
* 安全软件、杀毒软件

## Wolfram Engine for Developers

2019 年 5 月，Wolfram 推出了[**免费**](https://www.wolfram.com/engine/faq/)的 [**Wolfram Engine for Developers**](https://www.wolfram.com/engine/)。此软件实质上是一个**没有笔记本界面、也没有本地自带帮助**的 Mathematica。

但是，它是**免费**的！并且，虽然没有自带笔记本，但你可以[用 Jupyter 笔记本](https://mathematica.stackexchange.com/q/198839/1871)。

Wolfram Engine 的激活方法可参考官网的介绍 [How do I set up the Wolfram Engine](https://support.wolfram.com/kb/45743)。

下载链接（Mac 版暂时没人传）：

### Wolfram Engine 12.1.0

* (12.1.0) Linux
  * [SharePoint-API](https://mmamirror.herokuapp.com/WolframEngine/12.1.0/)

### Wolfram Engine 12.0.1

* (12.0.1) Windows
  * [腾讯微云](https://share.weiyun.com/5pBJAMH)

* (12.0.1) Linux
  * [腾讯微云](https://share.weiyun.com/5thePKk)
  * [SharePoint-API](https://mmamirror.herokuapp.com/WolframEngine/12.0.1/)

### Wolfram Engine 12.0.0

* (12.0.0) Windows
  * [百度网盘](https://pan.baidu.com/s/1k2QxF05XnSKd1QIWz-y9vw) 提取码：`skr5`
  * [腾讯微云](https://share.weiyun.com/5nnsIAi) 提取码：`0gJq`

* (12.0.0) Linux
  * [百度网盘](https://pan.baidu.com/s/1qX5Z36w3SoSFCEsGSGqP9g) 提取码：`rw3a`
  * [蓝奏云（分卷）](https://www.lanzous.com/b00n4te9a/) 密码：`dn3c`
  * [SharePoint](https://hii9w-my.sharepoint.com/:u:/g/personal/richard_liu_233455_xyz/EVPw9cN-UltGgGotCAOYVLYBjZdluPfngX5y96JpvyO8zA?e=NlPwuc)

> **注意**
>
> * SharePoint / OneDrive 方式需要**在浏览器中**下载，不要使用下载工具。因为许多下载工具不能正确处理 OneDrive 要求的[身份验证](https://docs.microsoft.com/en-us/sharepoint/authentication)，导致连接失败。（据说，IDM 等稍做配置也可以用，请自行探索。）
> * 从 OneDrive 下载时，如果长时间（十几分钟）速度很慢（几十 kB/s），请果断取消，再重新开始（如果浏览器支持，在下载管理中点击“重试”即可）。因为稳定在这么慢的速度，表明网络阻塞，重连有时能改善；此外，服务器可能会挂断那些长时间慢速连接，最终还是要重新下载。
> * SharePoint / OneDrive 有反滥用、[限流措施](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/how-to-avoid-getting-throttled-or-blocked-in-sharepoint-online)。如果密集访问，服务器可能会屏蔽用户。对于极严重的滥用情况，Microsoft 可能会介入调查。
> * 本文中标有标有 `API` 字样的 SharePoint / OneDrive 下载链接可以使用 Aria2、IDM 等第三方下载器下载。如遇 `Bad Request`、`Application Error` 或类似错误，请先尝试刷新，如果多次刷新仍然显示错误界面，可能是**当日** Microsoft Graph API 调用次数耗尽或**当月** Heroku 免费时长用完了。

## Wolfram|Alpha Notebook Edition

这基本上就是个半强制用户使用自由格式输入的 Mathematica，对于 Mathmatica 熟练用户而言它并不好使（部分使用感想参看[此帖](https://tieba.baidu.com/p/6724844470)），但是，目前由于疫情原因，WRI 开放了它的包含**显示计算步骤功能**在内的**免费**半年使用权。[免费半年使用权申请链接](http://links.wolfram.com/u/click?_t=26c1930b6a1744ce960b7aa99d5e7ae1&_m=0fa958aea51244889907bc3f1c3f763c&_e=xF9nrXN7hV9jf3dLeyD5s8jh8MbZB3JOKtreFCWe2q-q0jNwhARSRHxlnAeYx0I2Wyz5vW9t9qLtgk9fd9nsepsCyf7zh-RYc1wadMmR_W3DqfDfFMTISpSoO02S23cU_5roOvwT2o79oNaoPmtqAZew5oEn6rFQNi1BM6jknPB7Ht0a15mck4bxUY95zUWOPwdEw6IHuqJNmU3LoCt7U7kI0KhizbrNgDS_zBJYWwzUoB2i_PY91CcemynOtTEHOb8U1jczjmldOq1vVFLR8z1tv0b1vl_Vg0jGiFOfqhg%3D)。

> **注意**
>
> Wolfram|Alpha Notebook Edition 的文件名中虽有 CN 字样，但依旧是英文版！
> 只有自带了**中文帮助**的才叫中文版！自行汉化的方法详见后文“中文版和英文版的区别”小节。

> **注意**
>
> 若想学会 Mathematica，还请尽量别用自由格式输入。

* (12.0.1) Windows 英文 + Mac 英文 + Linux 英文
  * [百度网盘](https://pan.baidu.com/s/1uYqGXTWeo_46t4Q-DodQPg) 提取码：`s5sg`
  
* (12.0.1) Windows 英文 + Mac 英文 + Linux 英文
  * [SharePoint-API](https://mmamirror.herokuapp.com/WolframAlphaNotebook/12.0.1.0/)

## 运行代码的替代品

假如正好需要运行一下，但是电脑又没有软件，可以考虑以下替代方案。

1. [tio.run](https://tio.run/#mathematica)

    简易使用方法

    1. 点一下 Hello World
    2. 在 Code 里输入代码。
    3. 点上面播放键
    
    优点：

    1. Wolfram Cloud 速度慢，这个相对较快
    2. 一直是最新版，可以 `$Version` 确认
    
    缺点：

    1. 就是纯 txt
    2. 60s 计算限时
    3. 不支持图片
    4. 没有拓展性
    
    > 联想成在一个 txt 里写代码就行。

2. [Mathics](https://mathics.github.io/)

    优点：
    
    1. 基于纯 Python, 免费
    
    缺点：
    
    1. 停更很久了，版本过老（很多函数不支持）
    
3. [Wolfram Cloud](https://www.wolframcloud.com/)

    优点：
    
    1. 官方出品，不考虑速度的话接近原生体验，甚至有帮助文档。
    
    缺点
    
    1. 速度太慢

## Mathematica 软件下载

请先确认你的系统符合要求：

* [Wolfram Product System Requirements](https://support.wolfram.com/6479)
* [What should I consider when choosing a computer to run Mathematica](https://support.wolfram.com/39353)

这里提供下列版本的下载地址：

* 12 中英文版
* 11 中英文版
* 10 中英文版
* 9 中英文版
* 8 中文版
* 7 中文版
* 6 英文版
* 5 英文版
* 4 英文版
* 3 英文版
* 2 英文版
* 1 英文版

目前，Wolfram 在中国大陆设立了下载站供正版用户使用，在线下载均已恢复，下载器 (Download Manager) 的可用性暂不明确。如果仍然无法下载，请自己想办法爬墙。

**正版用户**可以尝试向经销商或 Wolfram 客服人员索要直接下载链接。

本文提供的安装包和官网的是一样的，若不信，可对比文件的校验和（`MD5`、`SHA-256` 等）。

几种计算 MD5 的工具：

* [PowerShell](https://docs.microsoft.com/powershell/) 可用 [Get-FileHash](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-filehash)：`Get-FileHash -Algorithm MD5`。
* Linux 可用 [md5sum](https://linux.die.net/man/1/md5sum)：`md5sum --binary`。
* macOS 可用 [md5](https://osxdaily.com/2009/10/13/check-md5-hash-on-your-mac/)。

**以下百度网盘地址均有效，异常只是暂时抽风，在地址栏上重新回车一次（不能直接刷新！）就能看到下载页面了！**

> **注意**
>
> [**版本 12.1 解决了 HDPI 显示支持的问题**](https://reference.wolfram.com/language/guide/SummaryOfNewFeaturesIn121.html)。此前，Windows 版在 HDPI 显示器上会界面模糊，那时的缓解措施是，设置 **高 DPI 缩放替代** (High DPI scaling override) 为 **应用程序** (Application)，以及调节 Wolfram 笔记本的缩放 (Magnification) 等。
>
> ---
>
> **如无特殊原因，请不要选择过老的版本！**
>
> 1. 较老的 Mathematica 与现代的有许多不兼容之处。
> 2. 较老的 Mathematica 往往与现代的计算机不兼容，尤其是 Mac。
> 3. 早期 Mathematica 的自带文档非常简略。
> 4. 在版本 7 以前，Mathematica 无官方中文版。
> 5. [绘图和动画等功能在版本 6 有过重大修改](https://note.youdao.com/noteshare?id=0c2719208239696d61182199327bd38c)。

### 中文版和英文版的区别

关键区别是帮助文档的语言。只有自带了**中文帮助**的才叫中文版！

英文版也可以调出中文提示，但是它没有中文帮助。

12.0 及之前版本的 Linux 版无中文版，自行汉化的方法可参考 <https://tieba.baidu.com/p/4024190694>。版本 12.1 及之后官方提供了适用于 Linux 和 Mac 的中文版安装文件。

版本 11.1 \~ 12.0 的中文帮助文档包及安装方法可以前往 <https://tieba.baidu.com/p/5696398243> 查看。

该贴的楼主已经将文件上传至网盘：

* 11.1 \~ 12.0 简体中文语言包
  * [百度网盘](https://pan.baidu.com/s/1Y9SjTh69eIk01zl-bMFqqg) 提取码 `da1s`

* 12.0 简体中文语言包
  * [Telegram 频道](https://t.me/mmalanguage)（需爬墙）
  * [SharePoint-API](https://mmamirror.herokuapp.com/%E8%AF%AD%E8%A8%80%E5%8C%85/12.0/) 

另外，参看【Q3】。

### Mathematica 12.1.1

> **注意**
>
> 只有自带了**中文帮助**的才叫中文版！自行汉化的方法详见前文“中文版和英文版的区别”小节。大约从 12.1.0 开始英文版的安装包文件名多出了 CN 字样，但它依旧是英文版！

> **注意**
>
> 从 12.1 开始，Mathematica 仅支持 64 位操作系统。其他多项系统要求也都显著提高。

* (12.1.1) Windows 中文 + Linux 中文 + Mac 中文
  * [SharePoint-API 世纪互联](https://mmamirror.herokuapp.com/vianet/Mathematica/12.1.1.0/)

* (12.1.1) Linux 中文
  * [世纪互联 Onedrive ](https://mirrors.ni.ac.cn/d/Mathematica/12.1.1/Linux/Mathematica_12.1.1_Chinese_LINUX.sh) hash: md5 c6bcc60e55fd998e029c6985b6f3fe0c

* (12.1.1) Windows 英文 + Linux 英文 + Mac 英文
  * [百度网盘](https://pan.baidu.com/s/1OKtjGDdj8HN3JgtfW7_ppQ) 提取码：`ftci`
  * [SharePoint-API](https://mmamirror.herokuapp.com/Mathematica/12.1.1.0/EN/) 

### Mathematica 12.1.0

> **注意**
>
> 只有自带了**中文帮助**的才叫中文版！自行汉化的方法详见前文“中文版和英文版的区别”小节。

> **注意**
>
> 从 12.1.0 开始，Mathematica 仅支持 64 位操作系统。其他多项系统要求也都显著提高。

> **注意**
> 
> 天翼云盘需要登陆才可以下载大于 300 MB 的文件，可以使用脚本 <https://greasyfork.org/scripts/397247-cloud-189-cn-download-without-login> 绕过登陆直接下载。
>
> 天翼云盘也会限制单线程下载速度，可以通过 Aria2、IDM 等软件进行多线程下载。

* (12.1.0) Windows 中文 + Linux 中文 + Mac 中文
  * [SharePoint-API](https://mmamirror.herokuapp.com/Mathematica/12.1.0.0/) （支持使用 Aria2、IDM 等下载）

* (12.1.0) Windows 中文 + Windows 下载器
  * [天翼云盘](https://cloud.189.cn/t/6zeMni2iQnuu) 提取码：`jry9`

* (12.1.0) Windows 中文 + Mac 中文
  * [Sharepoint](https://lteapp-my.sharepoint.com/:f:/g/personal/hadesth_lteapp_onmicrosoft_com/EndBdboMkkVMuYyNfP7c7JkBRy2-v8qnTH5E_IpULDlTmw?e=M4DOh5)

* (12.1.0) Linux 中文
  * [天翼云盘](https://cloud.189.cn/t/EBfERzfaAb6j) 提取码：`epx1`

* (12.1.0) Windows 英文 + Mac 英文
  * [Sharepoint](https://wuyudi-my.sharepoint.com/:f:/g/personal/wuyudi_wuyudi_onmicrosoft_com/Ehy-6W55zL1Cr2PbLeOvKM0B-lrHnhBptStuQP6N3fMBCw?e=dKvAte)

* (12.1.0) Windows 英文 + Windows 下载器 + Mac 下载器
  * [百度网盘](https://pan.baidu.com/s/1d8mwxiEFqNI7JO_-c8smyg) 提取码：`1234`

* (12.1.0) Mac 英文
  * [百度网盘](https://pan.baidu.com/s/1ABAAe3gh4fzwKWMlPhdtDw) 提取码：`nvt5`
  * [BT 种子](https://mac-torrents.io/wp-content/uploads/2020/03/Mathematica.12.1.0.mac-torrents.io_.zip.torrent)

* (12.1.0) Linux 英文
  * [百度网盘](https://pan.baidu.com/s/13SA-sMbEQbzTNsKK-hxafw) 提取码：`vuxd`

* (12.1.0) 12.0、12.1 的激活工具
  * [Wolfram Mathematica 12 Key Generator Online](https://ibugone.com/blog/2019/05/mathematica-keygen/)
  * [mathematica-keygen](https://www.npmjs.com/package/mathematica-keygen)

### Mathematica 12.0

> **警告**
>
> 测试发现，版本 12 出现了一个与**非 ASCII 字符**相关的 bug：
>
> `SystemOpen` 函数无法打开含有中文字符的路径。若经常使用此函数，请谨慎升级。
>
> 同时，希望买了正版的同学去向官方反馈一下这个 bug。（目前仅在中文版下做了测试，不确定英文版是否受到影响。）
>
> 参看【Q21】。

> **注意**
>
> 只有自带了**中文帮助**的才叫中文版！自行汉化的方法详见前文“中文版和英文版的区别”小节。

* (12.0) Windows 中文
  * [百度网盘](https://pan.baidu.com/s/1_X6Qf9722bo7nV-eI_kY_Q) 提取码：`fhtc`

* (12.0) Mac 中文
  * [百度网盘](https://pan.baidu.com/s/18M5m9qBKyrNQNfm0xcvd8Q) 提取码：`1234`

* (12.0.0) Windows 英文 + Mac 英文 + Linux 英文 + 破解工具 + 防止破解工具一回车就关的批处理文件
  * [百度网盘](https://pan.baidu.com/s/1NaUrPg5HAmMOiRpy7PdLhQ) 提取码：`cz8n`

  * 磁力链接：

    ```uri
    magnet:?xt=urn:btih:8a7dfb91ab64e034b51c9f8573eac905243708e7&dn=Mathematica%2012.0%20with%20Keygen%20(Win%26Linux%26Mac)&tr=udp%3a%2f%2ftracker4.itzmx.com%3a2710%2fannounce&tr=http%3a%2f%2ftracker.vivancos.eu%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftorrentclub.tech%3a6969%2fannounce&tr=http%3a%2f%2fgwp2-v19.rinet.ru%3a80%2fannounce&tr=https%3a%2f%2ftracker.fastdownload.xyz%3a443%2fannounce&tr=https%3a%2f%2ftracker.vectahosting.eu%3a2053%2fannounce&tr=udp%3a%2f%2ftracker.trackton.ga%3a7070%2fannounce&tr=udp%3a%2f%2ftracker.novg.net%3a6969%2fannounce&tr=udp%3a%2f%2fopen.demonii.si%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tvunderground.org.ru%3a3218%2fannounce&tr=udp%3a%2f%2f9.rarbg.to%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.cyberia.is%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=http%3a%2f%2ftorrent.nwps.ws%3a80%2fannounce&tr=udp%3a%2f%2fpubt.in%3a2710%2fannounce&tr=http%3a%2f%2fshare.camoe.cn%3a8080%2fannounce&tr=http%3a%2f%2ftorrentclub.tech%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.nyaa.uk%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&tr=udp%3a%2f%2famigacity.xyz%3a6969%2fannounce&tr=https%3a%2f%2ftracker.gbitt.info%3a443%2fannounce&tr=http%3a%2f%2fopen.acgnxtracker.com%3a80%2fannounce&tr=udp%3a%2f%2fchihaya.toss.li%3a9696%2fannounce&tr=udp%3a%2f%2ftracker2.itzmx.com%3a6961%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=https%3a%2f%2ft.quic.ws%3a443%2fannounce&tr=http%3a%2f%2famigacity.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.uw0.xyz%3a6969%2fannounce&tr=udp%3a%2f%2fcarapax.net%3a6969%2fannounce&tr=http%3a%2f%2ftracker.tvunderground.org.ru%3a3218%2fannounce&tr=udp%3a%2f%2ftracker.swateam.org.uk%3a2710%2fannounce&tr=http%3a%2f%2ftracker.gbitt.info%3a80%2fannounce&tr=udp%3a%2f%2ftracker.dyn.im%3a6969%2fannounce&tr=http%3a%2f%2fopen.trackerlist.xyz%3a80%2fannounce&tr=udp%3a%2f%2ftracker.justseed.it%3a1337%2fannounce&tr=http%3a%2f%2fretracker.mgts.by%3a80%2fannounce&tr=udp%3a%2f%2fbt.xxx-tracker.com%3a2710%2fannounce&tr=https%3a%2f%2f1337.abcvg.info%3a443%2fannounce&tr=http%3a%2f%2ft.acg.rip%3a6699%2fannounce&tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fretracker.lanta-net.ru%3a2710%2fannounce&tr=http%3a%2f%2fcarapax.net%3a6969%2fannounce&tr=udp%3a%2f%2fretracker.baikal-telecom.net%3a2710%2fannounce&tr=http%3a%2f%2ftracker.torrentyorg.pl%3a80%2fannounce&tr=udp%3a%2f%2fzephir.monocul.us%3a6969%2fannounce&tr=wss%3a%2f%2ftracker.openwebtorrent.com%3a443%2fannounce&tr=http%3a%2f%2f0d.kebhana.mx%3a443%2fannounce&tr=udp%3a%2f%2ftracker.iamhansen.xyz%3a2000%2fannounce&tr=udp%3a%2f%2fdenis.stalker.upeer.me%3a6969%2fannounce&tr=http%3a%2f%2ftracker1.itzmx.com%3a8080%2fannounce&tr=http%3a%2f%2ftracker2.itzmx.com%3a6961%2fannounce&tr=http%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=http%3a%2f%2ftracker3.itzmx.com%3a6961%2fannounce&tr=udp%3a%2f%2fhome.penza.com.ru%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.port443.xyz%3a6969%2fannounce&tr=udp%3a%2f%2fretracker.netbynet.ru%3a2710%2fannounce&tr=http%3a%2f%2fmail2.zelenaya.net%3a80%2fannounce&tr=http%3a%2f%2ft.nyaatracker.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.filepit.to%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.internetwarriors.net%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.supertracker.net%3a1337%2fannounce&tr=http%3a%2f%2ftracker.bz%3a80%2fannounce&tr=udp%3a%2f%2fthetracker.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker.open-internet.nl%3a6969%2fannounce&tr=http%3a%2f%2ftracker.port443.xyz%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.me%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.filemail.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.leechers-paradise.org%3a6969%2fannounce&tr=udp%3a%2f%2fretracker.sevstar.net%3a2710%2fannounce&tr=http%3a%2f%2fretracker.sevstar.net%3a2710%2fannounce&tr=udp%3a%2f%2fpackages.crunchbangplusplus.org%3a6969%2fannounce&tr=http%3a%2f%2ftracker.novg.net%3a6969%2fannounce&tr=http%3a%2f%2fopen.acgtracker.com%3a1096%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=http%3a%2f%2ftracker4.itzmx.com%3a2710%2fannounce&tr=http%3a%2f%2ftracker.internetwarriors.net%3a1337%2fannounce&tr=http%3a%2f%2fvps02.net.orel.ru%3a80%2fannounce
    ```

### Mathematica 11.3

> **警告**
>
> 已证实，此版本必须安装在**英文路径**下，否则会打不开。其他版本是否有此问题暂不清楚。

> **注意**
>
> 只有自带了**中文帮助**的才叫中文版！自行汉化的方法详见前文“中文版和英文版的区别”小节。

* (11.3.0) Windows 中文 + 破解工具
  * 磁力链接：

    ```uri
    magnet:?xt=urn:btih:29de7b51d85fa418c0af9812fd127a5acad158bd
    ```

* (11.3.0) Windows 中文
  * [百度网盘](https://pan.baidu.com/s/1SPqELlJYaLwgsJRLbMg8OA) 提取码：`3nem`

* (11.3.0) Mac 中文 + 破解工具
  * 磁力链接：

    ```uri
    magnet:?xt=urn:btih:b60c78d79a57b1fdb6d891d54dbf691cfbcff99c
    ```

* (11.3.0) Mac 中文
  * [百度网盘](https://pan.baidu.com/s/1Imn6SLCnzDlBIifTHjoOKw) 提取码：`7si9`

* (11.3.0) Windows 英文 + Mac 英文 + Linux 英文 + 破解工具
  * 磁力链接：

    ```uri
    magnet:?xt=urn:btih:aad5462ec9e4c20d350a53caff59bf6b7758a249
    ```

### Mathematica 10.4

> **注意**
>
> 只有自带了**中文帮助**的才叫中文版！自行汉化的方法详见前文“中文版和英文版的区别”小节。

对于最新的版本 10 中文版，自版本 9.0.1 持续至今的中文帮助搜索能力退化问题已经得到了解决。（10.3.0 版本时，部分电脑需要使用 <http://tieba.baidu.com/p/4172398243> 中的方法进行修复，10.3.1 后似乎已无此问题）

[Mathematica 10.4.1 中文版](http://pan.baidu.com/s/1o8NEPei) 提取码：`wx9u`

[Mathematica 10.4 英文版](http://pan.baidu.com/s/1jHbldtG)

[Mathematica 10.4 英文版（Linux 版）](http://pan.baidu.com/s/1kUrz2qr)（前面已经说了，Linux 版没中文）

[Mathematica 10.4 英文版（Mac 版）](http://pan.baidu.com/s/1i3RfiNb)

[CDF Player 10.3.1 英文版](http://pan.baidu.com/s/1i4kFX7v)

### Mathematica 9.0.1

> **警告**
>
> 版本 9 的激活是历代最烦，并且有中文帮助搜索能力退化的问题，不建议使用。

> **注意**
>
> 只有自带了**中文帮助**的才叫中文版！自行汉化的方法详见前文“中文版和英文版的区别”小节。

[Mathematica 9.0.1 中文版](http://pan.baidu.com/share/link?shareid=341776&uk=353288367)

[Mathematica 9.0.1 英文版](http://pan.baidu.com/s/1qWL166g)

[Mathematica 9.0.1 英文版](http://pan.baidu.com/s/1ntxRa5N)（Linux 版，前面已经说了 Linux 版没中文）

[Mathematica 9.0.1 英文版（Mac 版）](http://pan.baidu.com/s/1pJ0QFfd)

### Mathematica 8.0

> **注意**
>
> 只有自带了**中文帮助**的才叫中文版！自行汉化的方法详见前文“中文版和英文版的区别”小节。

没有太多需求的初学者可以考虑先上手版本 8，参考[版本 9 的中文帮助搜索能力退化](http://tieba.baidu.com/p/3204136180)。**仍请注意兼容性等问题。**

[Mathematica 8.0.4 中文版](http://pan.baidu.com/s/1skUb3n3)（MD5：`6aebc6776548f7b6ed134efafdb2af5d`）

### 早期版本

这里再次强调，**如无特殊原因，请不要选择过老的版本！**

1. 较老的 Mathematica 与现代的有许多不兼容之处。
2. 较老的 Mathematica 往往与现代的计算机不兼容，尤其是 Mac。
3. 早期 Mathematica 的自带文档非常简略。
4. 在版本 7 以前，Mathematica 无官方中文版。
5. 在版本 10 以前，撤销 (Undo) 只有一次。版本 10 开始支持[多重撤销](https://reference.wolfram.com/language/ref/UndoOptions.html)。
6. [版本 9 的中文帮助搜索能力退化](http://tieba.baidu.com/p/3204136180)。
7. [绘图和动画等功能在版本 6 有过重大修改](https://note.youdao.com/noteshare?id=0c2719208239696d61182199327bd38c)。

所以，**如无特殊原因，请不要选择过老版本的 Mathematica！**

Mathematica 7.0 中文版[百度网盘](https://pan.baidu.com/s/1VOeMOe15755SaulpTXD4ig) 提取码：`axir` （注意，中文文档需要手动覆盖，不清楚怎么覆盖的就用高版本！）

Mathematica 6.0 英文版（Windows XP 可用）
* [百度网盘](https://pan.baidu.com/s/1pzKXlqnkLYTTKd8I_aFmiA) 提取码：`zmvn` （附的注册机是版本 5 的，因为版本 6 的没找到。实测版本 5 注册机可用于版本 6 ，但不清楚是否会有需要多试几次的时候。）
* [Google Drive](https://drive.google.com/drive/folders/1WDQb5q0jgLf7dn4hBXzFkfzE4zXUjLvo) （注册机请到上一个链接找。）

Mathematica 5.2 英文版（Windows XP 可用）

* [百度网盘](https://pan.baidu.com/s/1Mv4LFV_iXVVP-MjK3Ah_ow) 提取码：`eowl`
* [Dropbox](https://www.dropbox.com/s/ragrvedf8hf13hg/Mathematica%205.2.0.rar?dl=0)

Mathematica 5.0 英文版（Windows XP 可用）[百度网盘](https://pan.baidu.com/s/1MWnpsZ8QA2DBZXf1N6ayRg) 提取码：`8nb9`

Mathematica 4.1 英文版（Windows XP 可用）[百度网盘](https://pan.baidu.com/s/1FrZSuxlO4CULYIRfyhLa-Q) 提取码：`hcqq`

Mathematica 3.0 英文版（Windows XP 可用）[百度网盘](https://pan.baidu.com/s/1hscUVwo) 提取码：`n73z`

Mathematica 2.1 英文版（Windows 3.1 版）[百度网盘](https://pan.baidu.com/s/1RkmZUQxYxDMfV2sfe5HZsg) 提取码：`p7o2` （[IMG](<https://en.wikipedia.org/wiki/IMG_(file_format)>) 格式的软盘镜像，可以安装在 VMware 的 Windows 98 虚拟机上。）

Mathematica 1.2 英文版（DOS 版）[百度网盘](https://pan.baidu.com/s/1eRMJX54) 提取码：`ihbx` （[FLP](https://communities.vmware.com/message/246169#246169) (General Floppy Disk Image) 格式的 VMware 软盘镜像，可以安装在 VMware 的 Windows 98 虚拟机上，并且似乎硬盘至少要两个分区，否则无法画图。）

至于有版本收藏癖好的朋友，请自己去网上找吧。

* [Mathematica Quick Revision History - Wolfram](https://www.wolfram.com/mathematica/quick-revision-history.html)
* [A little bit of Mathematica history - Nasser M. Abbasi](https://www.12000.org/my_notes/compare_mathematica/index.htm)
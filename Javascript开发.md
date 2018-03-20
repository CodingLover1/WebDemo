### JavaScript开发

#### npm介绍
> npm是随nodejs一起安装的包管理工具，它主要有一下几个功能

* 允许用户从npm服务器下载别人编写好的第三方包到本地使用
* 允许用户从服务器下载别人写好的命令行程序到本地使用
* 允许用户编写自己写好的包和命令行程序上传到npm服务器供别人使用

> windows下安装nodejs后，全局下载时默认的安装目录是用户目录下的AppData下的Romain，可以自己设置换成nodejs的安装目录，不然全局下载的模块运行时可能出问题。

#### npm的相关配置
* npm config set prefix  directory  //设置全局下载的模块的安装的目录
* npm config set cache   directory  //设置全局缓存的目录
* npm install -g cnpm --registry=https://registry.npm.taobao.org  //安装cnpm
* npm config set registry https://registry.npm.taobao.org   //设置镜像

#### npm常用命令
* npm install npm -g //更新npm
* npm install module-name [-g]  //根据模块名安装模块，-g代表全局安装(windows下是安装在C:\Users\ws\AppData\Roaming\npm,不带g代表本地安装，会安装在运行npm命令的目录下。
* npm uninstall/rm module-name [-g]  //卸载，unistall 会删掉相关依赖，rm不会
* npm upgrade module-name  //更新
* npm list -g  //查看全局安装的模块
* npm list module-name  //根据模块名查看模块信息
* npm config set registry https://registry.npm.taobao.org //设置npm使用淘宝镜像
* npm config get registry //查看配置信息
* npm init   //创建模块

 

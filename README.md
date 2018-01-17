![mahua](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514286148704&di=617c729a0d97555852e0c440305abf46&imgtype=0&src=http%3A%2F%2Fwww.meipo360.com%2FUpload%2Fimage%2F2015%2F0403%2F20150403103311235799.png)

## 目录  
* [项目背景](#项目背景) 
* [浏览器支持](#浏览器支持)  
* [项目的基础结构](#项目的基础结构)  
* [UI框架的特色](#UI框架的特色) 
* [项目的部署运行](#项目的部署运行)  
  * [获取代码](#获取代码)  
  * [本地配置](#本地配置)  
* [项目的发展方向](#项目的发展方向)  
* [相关文档链接](#相关文档链接)  
* [主要维护者](#主要维护者) 
* [版权许可证](#版权许可证)  

<a name="项目背景"></a>  

##项目背景

北京品友互动信息技术有限公司（简称品友互动），创立于2008年，是中国领先的基于大数据技术的人工智能平台，是最早将程序化购买引入中国的企业之一。

在刚刚过去的2017年，前端开发继续飞速发展，VUE依然越来越受欢迎，该框架提供基于组件的架构，它已经被包括GITLAB在内的许多大型公司采用，在 STACK OVERFLOW 上的关注度居高不下。

说到组件不得不提到ElementUI，一款基于Vue的UI框架，ElementUI以其美观的设计和高质量的组件很快俘获了一大批Vuer的芳心，其不足之处在于组件的种类和功能不够多（例如数据表格组件）。

很多时候需要自己也要开发一些组件，否则难以完成复杂的企业级应用开发。品友互动在过去的一年里在Pyff-Vue中实现了自己UI框架的一些成就。


<a name="浏览器支持"></a>  

##浏览器支持

Modern browsers and IE 10+。

[![testling badge](https://ci.testling.com/substack/ever.png)](https://ci.testling.com/substack/quote-stream)


<a name="项目的基础结构"></a>  

##项目的基础结构

* build - webpack config files
* config - webpack config files
* dist - build
* document - 组件文档
* src -your app
    * common
    * components - your vue components
    * styles
    * index.js

<a name="UI框架的特色"></a> 

##UI框架的特色
``` bash

   UI框架更加精致化和人性化，在用户体验效果上可谓是挖空心思。  
    
   *在开关中，一改风格成为文字内置，解决了可能出现的排版障碍难题。
    
   *在表格中，添加了全局搜索框，为使用者带来便利。
   
   *除此，我们还添加了各式各样的时间轴组件。


```
<a name="项目的部署运行"></a>  

##项目的部署运行

<a name="获取代码"></a> 

###获取代码
    
* GitLab:[http://gitlab.ipinyou.com/js/pyff-vue/tree/master](http://gitlab.ipinyou.com/js/pyff-vue/tree/master)

* clone或手动下载:[http://gitlab.ipinyou.com/js/pyff-vue](http://gitlab.ipinyou.com/js/pyff-vue)

<a name="本地配置"></a> 

###本地配置  

``` bash
# install dependencies
npm run init

# serve with hot reload at localhost:3000
npm run dev

# build for production with hot reload at localhost:8080
npm run start

# build for production with minification
npm run build

```
<a name="项目的发展方向"></a> 

##项目的发展方向

* demo展示时，提供在线运行，使用Jsfiddle

* demo展示时，完善安装过程，hello world等

* 项目在构建的时候，能展示进度

* highlight.js中的样式引用不到的问题

* vue文件引用css源代码不能按postcss的解析，考虑配置问题

* eslint配置

<a name="相关文档链接"></a> 

##相关文档链接

* [pyff-vue之elementUI——pyff-vue开源UI框架使用技术详解（其一）](http://element.eleme.io/#/zh-CN/component/installation)

<a name="主要维护者"></a> 

##主要维护者
在使用中有任何问题，欢迎反馈给我们

* [hanweiqiang](weiqiang.han@ipinyou.com)  

* [weiyong](yong.wei@ipinyou.com)  

* [wangweiyi](weiyi.wang@ipinyou.com)  

* [guangguangcheng](guangcheng.wang@ipinyou.com)  

* [liuqi](qi.liu@ipinyou.com)  

* [zhangpeng](peng.zhang@ipinyou.com)

<a name="版权许可证"></a> 

## 版权许可证
[WTFPL](http://www.wtfpl.net/about/)&
[MIT](http://opensource.org/licenses/MIT)

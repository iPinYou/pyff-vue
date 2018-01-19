![mahua](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514286148704&di=617c729a0d97555852e0c440305abf46&imgtype=0&src=http%3A%2F%2Fwww.meipo360.com%2FUpload%2Fimage%2F2015%2F0403%2F20150403103311235799.png)

## 目录  
* [项目背景](#项目背景) 
* [浏览器支持](#浏览器支持)  
* [项目的基础结构](#项目的基础结构)  
* [UI框架的特色](#UI框架的特色) 
* [项目的部署运行](#项目的部署运行) 
* [项目的发展方向](#项目的发展方向)  
* [相关文档链接](#相关文档链接)  
* [主要维护者](#主要维护者) 
* [版权许可证](#版权许可证)  

<a name="项目背景"></a>  

## 项目背景

北京品友互动信息技术有限公司（简称品友互动），创立于2008年，是中国领先的基于大数据技术的人工智能平台，是最早将程序化购买引入中国的企业之一。

在刚刚过去的2017年，前端开发继续飞速发展，VUE依然越来越受欢迎，该框架提供基于组件的架构，它已经被包括GITLAB在内的许多大型公司采用，在 STACK OVERFLOW 上的关注度居高不下。

说到组件不得不提到ElementUI，一款基于Vue的UI框架，ElementUI以其美观的设计和高质量的组件很快俘获了一大批Vuer的芳心，其不足之处在于组件的种类和功能不够多（例如数据表格组件）。品友互动前端团队开发了一套前端组件库Pyff-vue来应对快速迭代的要求。


<a name="浏览器支持"></a>  

## 浏览器支持

Modern browsers and IE 10+。

[![testling badge](https://ci.testling.com/substack/ever.png)](https://ci.testling.com/substack/quote-stream)


<a name="项目的基础结构"></a>  

## 项目的基础结构

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

## UI框架的特色
``` bash

   UI框架更加精致化和人性化，在用户体验效果上可谓是挖空心思。  
    
   *在开关中，一改风格成为文字内置，解决了可能出现的排版障碍难题。
    
   *在表格中，添加了全局搜索框，为使用者带来便利。
   
   *除此，我们还添加了各式各样的时间轴组件。


```
<a name="项目的部署运行"></a>  

## 项目的部署运行 

``` bash
# 安装pyff-vue
  npm install  --save pyff-vue  
        
# 编辑main.js  
  import PYFF from 'pyff-vue/src/index'; 
  Vue.use(PYFF);

```
<a name="项目的发展方向"></a> 

## 项目的发展方向

* 使用Jsfiddle显现在线调试组件  

* 进一步简化安装程序  

* 根据业务场景继续封装组件，提升开发速度

<a name="相关文档链接"></a> 

## 相关文档链接

* [pyff-vue之elementUI——pyff-vue开源UI框架使用技术详解（其一）](http://element.eleme.io/#/zh-CN/component/installation)

<a name="主要维护者"></a> 

## 主要维护者


* [hanweiqiang]()  

* [weiyong]()  

* [wangweiyi]()  

* [guangguangcheng]()  

* [liuqi]()  

* [zhangpeng]()

<a name="版权许可证"></a> 

## 版权许可证
[WTFPL](http://www.wtfpl.net/about/)&
[MIT](http://opensource.org/licenses/MIT)

<style lang="scss" scoped>
    .time{
        font-size: 14px;
        font-weight: bold;
         margin: 0;
    }
    .content{
        padding-left: 5px;
        margin: 0;
    }
</style>
## Timeline 时间轴

对一系列信息进行时间排序时，垂直地展示。

### 基本用法

最简单的用法。

::: demo 
```html
<template>
    <py-timeline>
        <py-timeline-item>
            <p class="time">1976年</p>
            <p class="content">Apple I 问世</p>
        </py-timeline-item>
        <py-timeline-item>
            <p class="time">1984年</p>
            <p class="content">发布 Macintosh</p>
        </py-timeline-item>
        <py-timeline-item>
            <p class="time">2007年</p>
            <p class="content">发布 iPhone</p>
        </py-timeline-item>
        <py-timeline-item>
            <p class="time">2010年</p>
            <p class="content">发布 iPad</p>
        </py-timeline-item>
        <py-timeline-item>
            <p class="time">2011年10月5日</p>
            <p class="content">史蒂夫·乔布斯去世</p>
        </py-timeline-item>
    </py-timeline>
</template>
<style lang="scss" scoped>
    .time{
        font-size: 14px;
        font-weight: bold;
    }
    .content{
        padding-left: 5px;
    }
</style>
```
:::

### 圆圈颜色

用各种颜色来标识不同状态，可以使用green、red、blue或自定义的颜色，默认是 blue 。

::: demo 
```html
<template>
    <py-timeline>
        <py-timeline-item color="green">发布1.0版本</py-timeline-item>
        <py-timeline-item color="green">发布2.0版本</py-timeline-item>
        <py-timeline-item color="red">严重故障</py-timeline-item>
        <py-timeline-item color="blue">发布3.0版本</py-timeline-item>
    </py-timeline>
</template>

```
:::

### 最后一个

通过添加pending属性来标记最后一个为幽灵节点，标识还未完成。

::: demo 
```html
<template>
    <py-timeline pending>
        <py-timeline-item>发布1.0版本</py-timeline-item>
        <py-timeline-item>发布2.0版本</py-timeline-item>
        <py-timeline-item>发布3.0版本</py-timeline-item>
        <py-timeline-item><a href="#">查看更多</a></py-timeline-item>
    </py-timeline>
</template>
```
:::

### 自定义时间轴点

接受一个 slot 来自定义轴点的内容，比如一个图标。

::: demo 
```html
<template>
    <py-timeline>
        <py-timeline-item color="green">
            <py-icon name="time" slot="dot"></py-icon>
            <span>发布里程碑版本</span>
        </py-timeline-item>
        <py-timeline-item>发布1.0版本</py-timeline-item>
        <py-timeline-item>发布2.0版本</py-timeline-item>
        <py-timeline-item>发布3.0版本</py-timeline-item>
    </py-timeline>
</template>

```
:::


### py-timeline Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| pending | 指定是否最后一个节点为幽灵节点 | Boolean | - | false |

### py-timeline-item Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| color | 圆圈颜色，可选值为blue、red、green，或自定义色值	 | String | - | blue |



### py-timeline-item slot
| 事件名称 | 说明 |
|---------- |-------- |
|dot |自定义时间轴点内容 |


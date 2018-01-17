<script>
  export default {
    methods: {
      onAffixed(status) {
        this.$notify({
          type: 'success',
          title: `回调状态${status}`,
        });
      }
    }
  }
</script>

## Affix 固钉

将元素钉在固定位置，常用于顶部菜单或者侧边菜单

### 基本用法

最简单的用法。

::: demo 
```html
<template>
 <py-affix>
   <py-button>固定在顶部</py-button>
 </py-affix>
</template>
```
:::

### 设置偏移量

设置距离顶部达到指定距离时触发

::: demo 
```html
<template>
 <py-affix  :offset-top="200">
   <py-button>固定距离顶部200px的位置</py-button>
 </py-affix>
</template>

```
:::

### 设置边界父容器

指定父容器ID后，affix元素会在父容器内浮动，即给浮动元素指定了边界

::: demo 
```html
<template>
  <div id="parent" style="height: 120px; text-align: center">
   <py-affix :offset-top="0" boundary="#parent">
     <py-button>在指定容器内浮动</py-button>
   </py-affix>
 </div>
</template>
```
:::

### 回调函数

可设置固定状态改变时触发的回调函数

::: demo 
```html
<template>
<div style="text-align: right">
 <py-affix :on-change="onAffixed">
   <py-button>触发回调</py-button>
 </py-affix>
</div>
</template>

<script>
export default {
  methods: {
    onAffixed(status) {
      this.$notify({
        type: 'success',
        title: `回调状态${status}`,
      });
    }
  }
};
</script>
```
:::


### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| offset-top | 距离窗口顶部达到指定偏移量后触发 | Number | - | 0 |
| boundary | 设置 Affix 的活动范围，值为affix上级元素的id(可以是父元素，也可以是父元素的父元素...) | String(#parent) | — | — |
| on-change | 固定状态改变时触发的回调函数 | Function(affixed) | — | — |


### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |


## 内置过渡动画

PYFF 内应用在部分组件的过渡动画，你也可以直接使用。在使用之前请阅读 [transition 组件文档](https://cn.vuejs.org/v2/api/#transition) 。

### fade 淡入淡出

:::demo 提供 `py-fade-in-linear` 和 `py-fade-in` 两种效果。
```html
<template>
  <div>
    <py-button @click="show = !show">Click Me</py-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="py-fade-in-linear">
        <div v-show="show" class="transition-box">.py-fade-in-linear</div>
      </transition>
      <transition name="py-fade-in">
        <div v-show="show" class="transition-box">.py-fade-in</div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show: true
    })
  }
</script>

<style lang="scss">
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::

### zoom 缩放

:::demo 提供 `py-zoom-in-center`，`py-zoom-in-top` 和 `py-zoom-in-bottom` 三种效果。
```html
<template>
  <div>
    <py-button @click="show2 = !show2">Click Me</py-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="py-zoom-in-center">
        <div v-show="show2" class="transition-box">.py-zoom-in-center</div>
      </transition>

      <transition name="py-zoom-in-top">
        <div v-show="show2" class="transition-box">.py-zoom-in-top</div>
      </transition>

      <transition name="py-zoom-in-bottom">
        <div v-show="show2" class="transition-box">.py-zoom-in-bottom</div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show2: true
    })
  }
</script>

<style lang="scss">
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::


### collapse 展开折叠

使用 `py-collapse-transition` 组件实现折叠展开效果。

:::demo
```html
<template>
  <div>
    <py-button @click="show3 = !show3">Click Me</py-button>

    <div style="margin-top: 20px; height: 200px;">
      <py-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">py-collapse-transition</div>
          <div class="transition-box">py-collapse-transition</div>
        </div>
      </py-collapse-transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show3: true
    })
  }
</script>

<style lang="scss">
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::

### 按需引入

```js
// fade/zoom 等
import 'pyff-vue/src/components/theme-defaut/base.css';
// collapse 展开折叠
import CollapseTransition from 'pyff-vue/src/common/transitions/collapse-transition';
import Vue from 'vue'

Vue.component(CollapseTransition.name, CollapseTransition)
```

<style lang="scss">
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    margin-right: 20px;
    box-sizing: border-box;
  }
</style>

<script>
  module.exports = {
    data: () => ({
      show: true,
      show2: true,
      show3: true
    })
  }
</script>

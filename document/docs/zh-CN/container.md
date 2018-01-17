<style lang="scss">
  .py-header, .py-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .py-aside {
    color: #333;
  }
  
  #chang-jian-ye-mian-bu-ju + .demo-container {
    .py-header, .py-footer {
      text-align: center;
    }
  
    .py-aside {
      background-color: #D3DCE6;
      text-align: center;
      line-height: 200px;
    }
  
    .py-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      line-height: 160px;
    }
    
    & > .source > .py-container {
      margin-bottom: 40px;
    
      &:nth-child(5) .py-aside,
      &:nth-child(6) .py-aside {
        line-height: 260px;
      }

      &:nth-child(7) .py-aside {
        line-height: 320px;
      }
    }
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>

## Container 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构：

`<py-container>`：外层容器。当子元素中包含 `<py-header>` 或 `<py-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<py-header>`：顶栏容器。

`<py-aside>`：侧边栏容器。

`<py-main>`：主要区域容器。

`<py-footer>`：底栏容器。

:::tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<py-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<py-container>`。
:::

### 常见页面布局

::: demo
```html
<py-container>
  <py-header>Header</py-header>
  <py-main>Main</py-main>
</py-container>

<py-container>
  <py-header>Header</py-header>
  <py-main>Main</py-main>
  <py-footer>Footer</py-footer>
</py-container>

<py-container>
  <py-aside width="200px">Aside</py-aside>
  <py-main>Main</py-main>
</py-container>

<py-container>
  <py-header>Header</py-header>
  <py-container>
    <py-aside width="200px">Aside</py-aside>
    <py-main>Main</py-main>
  </py-container>
</py-container>

<py-container>
  <py-header>Header</py-header>
  <py-container>
    <py-aside width="200px">Aside</py-aside>
    <py-container>
      <py-main>Main</py-main>
      <py-footer>Footer</py-footer>
    </py-container>
  </py-container>
</py-container>

<py-container>
  <py-aside width="200px">Aside</py-aside>
  <py-container>
    <py-header>Header</py-header>
    <py-main>Main</py-main>
  </py-container>
</py-container>

<py-container>
  <py-aside width="200px">Aside</py-aside>
  <py-container>
    <py-header>Header</py-header>
    <py-main>Main</py-main>
    <py-footer>Footer</py-footer>
  </py-container>
</py-container>

<style lang="scss">
  .py-header, .py-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .py-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .py-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .py-container {
    margin-bottom: 40px;
  }
  
  .py-container:nth-child(5) .py-aside,
  .py-container:nth-child(6) .py-aside {
    line-height: 260px;
  }
  
  .py-container:nth-child(7) .py-aside {
    line-height: 320px;
  }
</style>
```
:::

### 实例

::: demo
```html
<py-container style="height: 500px; border: 1px solid #eee">
  <py-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <py-menu :default-openeds="['1', '3']">
      <py-submenu index="1">
        <template slot="title"><i class="py-icon-message"></i>导航一</template>
        <py-menu-item-group>
          <template slot="title">分组一</template>
          <py-menu-item index="1-1">选项1</py-menu-item>
          <py-menu-item index="1-2">选项2</py-menu-item>
        </py-menu-item-group>
        <py-menu-item-group title="分组2">
          <py-menu-item index="1-3">选项3</py-menu-item>
        </py-menu-item-group>
        <py-submenu index="1-4">
          <template slot="title">选项4</template>
          <py-menu-item index="1-4-1">选项4-1</py-menu-item>
        </py-submenu>
      </py-submenu>
      <py-submenu index="2">
        <template slot="title"><i class="py-icon-menu"></i>导航二</template>
        <py-menu-item-group>
          <template slot="title">分组一</template>
          <py-menu-item index="2-1">选项1</py-menu-item>
          <py-menu-item index="2-2">选项2</py-menu-item>
        </py-menu-item-group>
        <py-menu-item-group title="分组2">
          <py-menu-item index="2-3">选项3</py-menu-item>
        </py-menu-item-group>
        <py-submenu index="2-4">
          <template slot="title">选项4</template>
          <py-menu-item index="2-4-1">选项4-1</py-menu-item>
        </py-submenu>
      </py-submenu>
      <py-submenu index="3">
        <template slot="title"><i class="py-icon-setting"></i>导航三</template>
        <py-menu-item-group>
          <template slot="title">分组一</template>
          <py-menu-item index="3-1">选项1</py-menu-item>
          <py-menu-item index="3-2">选项2</py-menu-item>
        </py-menu-item-group>
        <py-menu-item-group title="分组2">
          <py-menu-item index="3-3">选项3</py-menu-item>
        </py-menu-item-group>
        <py-submenu index="3-4">
          <template slot="title">选项4</template>
          <py-menu-item index="3-4-1">选项4-1</py-menu-item>
        </py-submenu>
      </py-submenu>
    </py-menu>
  </py-aside>
  
  <py-container>
    <py-header style="text-align: right; font-size: 12px">
      <py-dropdown>
        <i class="py-icon-setting" style="margin-right: 15px"></i>
        <py-dropdown-menu slot="dropdown">
          <py-dropdown-item>查看</py-dropdown-item>
          <py-dropdown-item>新增</py-dropdown-item>
          <py-dropdown-item>删除</py-dropdown-item>
        </py-dropdown-menu>
      </py-dropdown>
      <span>王小虎</span>
    </py-header>
    
    <py-main>
      <py-table :data="tableData">
        <py-table-column prop="date" label="日期" width="140">
        </py-table-column>
        <py-table-column prop="name" label="姓名" width="120">
        </py-table-column>
        <py-table-column prop="address" label="地址">
        </py-table-column>
      </py-table>
    </py-main>
  </py-container>
</py-container>

<style lang="scss">
  .py-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .py-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
```
:::

### Container Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `py-header` 或 `py-footer` 时为 vertical，否则为 horizontal |

### Header Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 顶栏高度 | string | — | 60px |

### Aside Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| width | 侧边栏宽度 | string | — | 300px |

### Footer Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 底栏高度 | string | — | 60px |

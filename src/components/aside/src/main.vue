<template>
  <aside class="py-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'PyAside',

    componentName: 'PyAside',

    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  };
</script>

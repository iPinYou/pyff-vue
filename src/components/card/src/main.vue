<template>
  <div class="py-card">
    <div class="py-card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="py-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PyCard',

    props: ['header', 'bodyStyle']
  };
</script>

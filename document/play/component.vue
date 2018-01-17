<template>
  <div>
    <py-button @click="value = '#fff'">Change Value</py-button>
    <div>Value: {{ value }}</div>
    <py-color-picker v-model="value"></py-color-picker>

    <div>Value2: {{ value2 }}</div>
    <py-color-picker v-model="value2" show-alpha></py-color-picker>
  </div>
</template>

<style scoped>
</style>

<script type="text/ecmascript-6">
  export default {
    methods: {
    },

    data() {
      return {
        value: '#bfcbd9',
        value2: null
      };
    }
  };
</script>

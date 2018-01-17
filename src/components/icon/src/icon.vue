<template>
  <i :class="'py-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'PyIcon',

    props: {
      name: String
    }
  };
</script>

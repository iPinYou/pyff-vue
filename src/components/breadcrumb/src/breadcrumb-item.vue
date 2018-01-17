<template>
  <span class="py-breadcrumb__item">
    <span class="py-breadcrumb__inner" ref="link" role="link">
      <slot></slot>
    </span>
    <i v-if="separatorClass" class="py-breadcrumb__separator" :class="separatorClass"></i>
    <span v-else class="py-breadcrumb__separator" role="presentation">{{separator}}</span>
  </span>
</template>
<script>
  export default {
    name: 'PyBreadcrumbItem',
    props: {
      to: {},
      replace: Boolean
    },
    data() {
      return {
        separator: '',
        separatorClass: ''
      };
    },

    inject: ['elBreadcrumb'],

    mounted() {
      this.separator = this.elBreadcrumb.separator;
      this.separatorClass = this.elBreadcrumb.separatorClass;
      let self = this;
      if (this.to) {
        let link = this.$refs.link;
        link.setAttribute('role', 'link');
        link.addEventListener('click', _ => {
          let to = this.to;
          self.replace ? self.$router.replace(to)
                       : self.$router.push(to);
        });
      }
    }
  };
</script>

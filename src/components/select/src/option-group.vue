<template>
  <ul class="py-select-group__wrap" v-show="visible">
    <li class="py-select-group__title">{{ label }}</li>
    <li>
      <ul class="py-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script type="text/babel">
  import Emitter from '../../../common/mixins/emitter';

  export default {
    mixins: [Emitter],

    name: 'PyOptionGroup',

    componentName: 'PyOptionGroup',

    props: {
      label: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        visible: true
      };
    },

    watch: {
      disabled(val) {
        this.broadcast('PyOption', 'handleGroupDisabled', val);
      }
    },

    methods: {
      queryChange() {
        this.visible = this.$children &&
          Array.isArray(this.$children) &&
          this.$children.some(option => option.visible === true);
      }
    },

    created() {
      this.$on('queryChange', this.queryChange);
    },

    mounted() {
      if (this.disabled) {
        this.broadcast('PyOption', 'handleGroupDisabled', this.disabled);
      }
    }
  };
</script>

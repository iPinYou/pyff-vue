<script>
  import Emitter from '../../../common/mixins/emitter';

  export default {
    name: 'PyCheckboxGroup',

    componentName: 'PyCheckboxGroup',

    mixins: [Emitter],

    inject: {
      pyFormItem: {
        default: ''
      }
    },

    props: {
      value: {},
      disabled: Boolean,
      min: Number,
      max: Number,
      size: String,
      fill: String,
      textColor: String
    },

    computed: {
      _pyFormItemSize() {
        return (this.pyFormItem || {}).pyFormItemSize;
      },
      checkboxGroupSize() {
        return this.size || this._pyFormItemSize || (this.$ELEMENT || {}).size;
      }
    },

    watch: {
      value(value) {
        this.dispatch('PyFormItem', 'el.form.change', [value]);
      }
    }
  };
</script>

<template>
  <div class="py-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>

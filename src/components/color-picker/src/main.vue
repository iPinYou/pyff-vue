<template>
  <div
    :class="[
      'py-color-picker',
      disabled ? 'is-disabled' : '',
      colorSize ? `py-color-picker--${ colorSize }` : ''
    ]"
    v-clickoutside="hide">
    <div class="py-color-picker__mask" v-if="disabled"></div>
    <div class="py-color-picker__trigger" @click="handleTrigger">
      <span class="py-color-picker__color" :class="{ 'is-alpha': showAlpha }">
        <span class="py-color-picker__color-inner"
          :style="{
            backgroundColor: displayedColor
          }"></span>
        <span class="py-color-picker__empty py-icon-close" v-if="!value && !showPanelColor"></span>
      </span>
      <span class="py-color-picker__icon py-icon-arrow-down" v-show="value || showPanelColor"></span>
    </div>
    <picker-dropdown
       ref="dropdown"
       :class="['py-color-picker__panel', popperClass || '']"
       v-model="showPicker"
       @pick="confirmValue"
       @clear="clearValue"
       :color="color"
       :show-alpha="showAlpha">
    </picker-dropdown>
  </div>
</template>

<script>
  import Color from './color';
  import PickerDropdown from './components/picker-dropdown.vue';
  import Clickoutside from '../../../common/utils/clickoutside';

  export default {
    name: 'PyColorPicker',

    props: {
      value: String,
      showAlpha: Boolean,
      colorFormat: String,
      disabled: Boolean,
      size: String,
      popperClass: String
    },

    inject: {
      pyFormItem: {
        default: ''
      }
    },

    directives: { Clickoutside },

    computed: {
      displayedColor() {
        if (!this.value && !this.showPanelColor) {
          return 'transparent';
        } else {
          const { r, g, b } = this.color.toRgb();
          return this.showAlpha
            ? `rgba(${ r }, ${ g }, ${ b }, ${ this.color.get('alpha') / 100 })`
            : `rgb(${ r }, ${ g }, ${ b })`;
        }
      },

      _pyFormItemSize() {
        return (this.pyFormItem || {}).pyFormItemSize;
      },

      colorSize() {
        return this.size || this._pyFormItemSize || (this.$ELEMENT || {}).size;
      }
    },

    watch: {
      value(val) {
        if (!val) {
          this.showPanelColor = false;
        } else if (val && val !== this.color.value) {
          this.color.fromString(val);
        }
      },
      color: {
        deep: true,
        handler() {
          this.showPanelColor = true;
        }
      },
      displayedColor(val) {
        this.$emit('active-change', val);
      }
    },

    methods: {
      handleTrigger() {
        if (this.disabled) return;
        this.showPicker = !this.showPicker;
      },
      confirmValue(value) {
        this.$emit('input', this.color.value);
        this.$emit('change', this.color.value);
        this.showPicker = false;
      },
      clearValue() {
        this.$emit('input', null);
        this.$emit('change', null);
        this.showPanelColor = false;
        this.showPicker = false;
        this.resetColor();
      },
      hide() {
        this.showPicker = false;
        this.resetColor();
      },
      resetColor() {
        this.$nextTick(_ => {
          if (this.value) {
            this.color.fromString(this.value);
          } else {
            this.showPanelColor = false;
          }
        });
      }
    },

    mounted() {
      const value = this.value;
      if (value) {
        this.color.fromString(value);
      }
      this.popperElm = this.$refs.dropdown.$el;
    },

    data() {
      const color = new Color({
        enableAlpha: this.showAlpha,
        format: this.colorFormat
      });
      return {
        color,
        showPicker: false,
        showPanelColor: false
      };
    },

    components: {
      PickerDropdown
    }
  };
</script>

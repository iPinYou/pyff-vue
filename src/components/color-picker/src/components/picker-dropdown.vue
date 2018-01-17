<template>
  <transition name="py-zoom-in-top" @after-leave="doDestroy">
    <div
      class="py-color-dropdown"
      v-show="showPopper">
      <div class="py-color-dropdown__main-wrapper">
        <hue-slider ref="hue" :color="color" vertical style="float: right;"></hue-slider>
        <sv-panel ref="sl" :color="color"></sv-panel>
      </div>
      <alpha-slider v-if="showAlpha" ref="alpha" :color="color"></alpha-slider>
      <div class="py-color-dropdown__btns">
        <span class="py-color-dropdown__value">
          <py-input
            v-model="customInput"
            @keyup.native.enter="handleConfirm"
            @blur="handleConfirm"
            size="mini">
          </py-input>
        </span>
        <py-button
          size="mini"
          type="text"
          class="py-color-dropdown__link-btn"
          @click="$emit('clear')">
          {{ t('el.colorpicker.clear') }}
        </py-button>
        <py-button
          plain
          size="mini"
          class="py-color-dropdown__btn"
          @click="confirmValue">
          {{ t('el.colorpicker.confirm') }}
        </py-button>
      </div>
    </div>
  </transition>
</template>

<script>
  import SvPanel from './sv-panel';
  import HueSlider from './hue-slider';
  import AlphaSlider from './alpha-slider';
  import Popper from '../../../../common/utils/vue-popper';
  import Locale from '../../../../common/mixins/locale';
  import PyInput from '../../../input';
  import PyButton from '../../../button';

  export default {
    name: 'py-color-picker-dropdown',

    mixins: [Popper, Locale],

    components: {
      SvPanel,
      HueSlider,
      AlphaSlider,
      PyInput,
      PyButton
    },

    props: {
      color: {
        required: true
      },
      showAlpha: Boolean
    },

    data() {
      return {
        customInput: ''
      };
    },

    computed: {
      currentColor() {
        const parent = this.$parent;
        return !parent.value && !parent.showPanelColor ? '' : parent.color.value;
      }
    },

    methods: {
      confirmValue() {
        this.$emit('pick');
      },

      handleConfirm() {
        const valid = this.showAlpha ? this.validRGBA(this.customInput) : this.validRGBHex(this.customInput);
        if (valid) {
          this.color.fromString(this.customInput);
        } else {
          this.customInput = this.currentColor;
        }
      },

      validRGBHex(color) {
        return /^#[A-Fa-f0-9]{6}$/.test(color);
      },

      validRGBA(color) {
        const matches = color.match(/^rgba\((\d+), ?(\d+), ?(\d+), ?([.0-9]+)\)$/);
        if (!matches) return false;
        const list = matches.map(v => parseInt(v, 10)).slice(1);
        if (list.some(v => isNaN(v))) return false;
        const [r, g, b, a] = list;
        if ([r, g, b].some(v => v < 0 || v > 255) || a < 0 || a > 1) return false;
        return true;
      }
    },

    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.$parent.$el;
    },

    watch: {
      showPopper(val) {
        if (val === true) {
          this.$nextTick(() => {
            const { sl, hue, alpha } = this.$refs;
            sl && sl.update();
            hue && hue.update();
            alpha && alpha.update();
          });
        }
      },

      currentColor(val) {
        this.customInput = val;
      }
    }
  };
</script>

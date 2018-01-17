<template>
  <div class="py-input-number"
    :class="[
      inputNumberSize ? 'py-input-number--' + inputNumberSize : '',
      { 'is-disabled': disabled },
      { 'is-without-controls': !controls },
      { 'is-controls-right': controlsAtRight }
    ]"
  >
    <span
      v-if="controls"
      class="py-input-number__decrease"
      :class="{'is-disabled': minDisabled}"
      v-repeat-click="decrease"
      @keydown.enter="decrease"
      role="button"
    >
      <i :class="`py-icon-${controlsAtRight ? 'arrow-down' : 'minus'}`"></i>
    </span>
    <span
      v-if="controls"
      class="py-input-number__increase"
      :class="{'is-disabled': maxDisabled}"
      v-repeat-click="increase"
      @keydown.enter="increase"
      role="button"
    >
      <i :class="`py-icon-${controlsAtRight ? 'arrow-up' : 'plus'}`"></i>
    </span>
    <py-input
      :value="currentValue"
      @keydown.up.native.prevent="increase"
      @keydown.down.native.prevent="decrease"
      @blur="handleBlur"
      @focus="handleFocus"
      @input="debounceHandleInput"
      :disabled="disabled"
      :size="inputNumberSize"
      :max="max"
      :min="min"
      :name="name"
      ref="input"
      :label="label"
    >
      <template slot="prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </template>
      <template slot="append" v-if="$slots.append">
        <slot name="append"></slot>
      </template>
    </py-input>
  </div>
</template>
<script>
  import PyInput from '../../input';
  import debounce from 'throttle-debounce/debounce';
  import Focus from '../../../common/mixins/focus';
  import RepeatClick from '../../../common/directives/repeat-click';

  export default {
    name: 'PyInputNumber',
    mixins: [Focus('input')],
    inject: {
      pyFormItem: {
        default: ''
      }
    },
    directives: {
      repeatClick: RepeatClick
    },
    components: {
      PyInput
    },
    props: {
      step: {
        type: Number,
        default: 1
      },
      max: {
        type: Number,
        default: Infinity
      },
      min: {
        type: Number,
        default: -Infinity
      },
      value: {
        default: 0
      },
      disabled: Boolean,
      size: String,
      controls: {
        type: Boolean,
        default: true
      },
      controlsPosition: {
        type: String,
        default: ''
      },
      debounce: {
        type: Number,
        default: 300
      },
      name: String,
      label: String
    },
    data() {
      return {
        currentValue: 0
      };
    },
    watch: {
      value: {
        immediate: true,
        handler(value) {
          let newVal = Number(value);
          if (isNaN(newVal)) return;
          if (newVal >= this.max) newVal = this.max;
          if (newVal <= this.min) newVal = this.min;
          this.currentValue = newVal;
          this.$emit('input', newVal);
        }
      }
    },
    computed: {
      minDisabled() {
        return this._decrease(this.value, this.step) < this.min;
      },
      maxDisabled() {
        return this._increase(this.value, this.step) > this.max;
      },
      precision() {
        const { value, step, getPrecision } = this;
        return Math.max(getPrecision(value), getPrecision(step));
      },
      controlsAtRight() {
        return this.controlsPosition === 'right';
      },
      _pyFormItemSize() {
        return (this.pyFormItem || {}).pyFormItemSize;
      },
      inputNumberSize() {
        return this.size || this._pyFormItemSize || (this.$ELEMENT || {}).size;
      }
    },
    methods: {
      toPrecision(num, precision) {
        if (precision === undefined) precision = this.precision;
        return parseFloat(parseFloat(Number(num).toFixed(precision)));
      },
      getPrecision(value) {
        const valueString = value.toString();
        const dotPosition = valueString.indexOf('.');
        let precision = 0;
        if (dotPosition !== -1) {
          precision = valueString.length - dotPosition - 1;
        }
        return precision;
      },
      _increase(val, step) {
        if (typeof val !== 'number') return this.currentValue;

        const precisionFactor = Math.pow(10, this.precision);

        return this.toPrecision((precisionFactor * val + precisionFactor * step) / precisionFactor);
      },
      _decrease(val, step) {
        if (typeof val !== 'number') return this.currentValue;

        const precisionFactor = Math.pow(10, this.precision);

        return this.toPrecision((precisionFactor * val - precisionFactor * step) / precisionFactor);
      },
      increase() {
        if (this.disabled || this.maxDisabled) return;
        const value = this.value || 0;
        const newVal = this._increase(value, this.step);
        if (newVal > this.max) return;
        this.setCurrentValue(newVal);
      },
      decrease() {
        if (this.disabled || this.minDisabled) return;
        const value = this.value || 0;
        const newVal = this._decrease(value, this.step);
        if (newVal < this.min) return;
        this.setCurrentValue(newVal);
      },
      handleBlur(event) {
        this.$emit('blur', event);
        this.$refs.input.setCurrentValue(this.currentValue);
      },
      handleFocus(event) {
        this.$emit('focus', event);
      },
      setCurrentValue(newVal) {
        const oldVal = this.currentValue;
        if (newVal >= this.max) newVal = this.max;
        if (newVal <= this.min) newVal = this.min;
        if (oldVal === newVal) {
          this.$refs.input.setCurrentValue(this.currentValue);
          return;
        }
        this.$emit('change', newVal, oldVal);
        this.$emit('input', newVal);
        this.currentValue = newVal;
      },
      handleInput(value) {
        if (value === '') {
          return;
        }

        if (value.indexOf('.') === (value.length - 1)) {
          return;
        }

        if (value.indexOf('-') === (value.length - 1)) {
          return;
        }

        const newVal = Number(value);
        if (!isNaN(newVal)) {
          this.setCurrentValue(newVal);
        } else {
          this.$refs.input.setCurrentValue(this.currentValue);
        }
      }
    },
    created() {
      this.debounceHandleInput = debounce(this.debounce, value => {
        this.handleInput(value);
      });
    },
    mounted() {
      let innerInput = this.$refs.input.$refs.input;
      innerInput.setAttribute('role', 'spinbutton');
      innerInput.setAttribute('aria-valuemax', this.max);
      innerInput.setAttribute('aria-valuemin', this.min);
      innerInput.setAttribute('aria-valuenow', this.currentValue);
      innerInput.setAttribute('aria-disabled', this.disabled);
    },
    updated() {
      let innerInput = this.$refs.input.$refs.input;
      innerInput.setAttribute('aria-valuenow', this.currentValue);
    }
  };
</script>

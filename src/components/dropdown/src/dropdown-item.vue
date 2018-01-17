<template>
  <li
    class="py-dropdown-menu__item"
    :class="{
      'is-disabled': disabled,
      'py-dropdown-menu__item--divided': divided
    }"
    @click="handleClick"
    :aria-disabled="disabled"
    :tabindex="disabled ? null : -1"
  >
    <slot></slot>
  </li>
</template>
<script>
  import Emitter from '../../../common/mixins/emitter';

  export default {
    name: 'PyDropdownItem',

    mixins: [Emitter],

    props: {
      command: {},
      disabled: Boolean,
      divided: Boolean
    },

    methods: {
      handleClick(e) {
        this.dispatch('PyDropdown', 'menu-item-click', [this.command, this]);
      }
    }
  };
</script>

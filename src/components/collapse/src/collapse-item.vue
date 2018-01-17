<template>
  <div class="py-collapse-item" :class="{'is-active': isActive}">
    <div
      role="tab"
      :aria-expanded="isActive"
      :aria-controls="`py-collapse-content-${id}`"
      :aria-describedby ="`py-collapse-content-${id}`"
    >
      <div
        class="py-collapse-item__header"
        @click="handleHeaderClick"
        role="button"
        :id="`py-collapse-head-${id}`"
        tabindex="0"
        @keyup.space.enter.stop="handleEnterClick"
        :class="{'focusing': focusing}"
        @focus="handleFocus"
        @blur="focusing = false"
      >
        <i class="py-collapse-item__arrow py-icon-arrow-right"></i>
        <slot name="title">{{title}}</slot>
      </div>
    </div>
    <py-collapse-transition>
      <div
        class="py-collapse-item__wrap"
        v-show="isActive"
        role="tabpanel"
        :aria-hidden="!isActive"
        :aria-labelledby="`py-collapse-head-${id}`"
        :id="`py-collapse-content-${id}`"
      >
        <div class="py-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </py-collapse-transition>
  </div>
</template>
<script>
  import PyCollapseTransition from '../../../common/transitions/collapse-transition';
  import Emitter from '../../../common/mixins/emitter';
  import { generateId } from '../../../common/utils/util';

  export default {
    name: 'PyCollapseItem',

    componentName: 'PyCollapseItem',

    mixins: [Emitter],

    components: { PyCollapseTransition },

    data() {
      return {
        contentWrapStyle: {
          height: 'auto',
          display: 'block'
        },
        contentHeight: 0,
        focusing: false,
        isClick: false
      };
    },

    inject: ['collapse'],

    props: {
      title: String,
      name: {
        type: [String, Number],
        default() {
          return this._uid;
        }
      }
    },

    computed: {
      isActive() {
        return this.collapse.activeNames.indexOf(this.name) > -1;
      },
      id() {
        return generateId();
      }
    },

    methods: {
      handleFocus() {
        setTimeout(() => {
          if (!this.isClick) {
            this.focusing = true;
          } else {
            this.isClick = false;
          }
        }, 50);
      },
      handleHeaderClick() {
        this.dispatch('PyCollapse', 'item-click', this);
        this.focusing = false;
        this.isClick = true;
      },
      handleEnterClick() {
        this.dispatch('PyCollapse', 'item-click', this);
      }
    }
  };
</script>

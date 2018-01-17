<template>
  <transition name="py-zoom-in-top" @after-leave="doDestroy">
    <div
      v-show="showPopper"
      class="py-autocomplete-suggestion py-popper"
      :class="{ 'is-loading': parent.loading }"
      :style="{ width: dropdownWidth }"
      role="region"
    >
      <py-scrollbar
        tag="ul"
        wrap-class="py-autocomplete-suggestion__wrap"
        view-class="py-autocomplete-suggestion__list"
      >
        <li v-if="parent.loading"><i class="py-icon-loading"></i></li>
        <slot v-else>
        </slot>
      </py-scrollbar>
    </div>
  </transition>
</template>
<script>
  import Popper from '../../../common/utils/vue-popper';
  import Emitter from '../../../common/mixins/emitter';
  import PyScrollbar from '../../scrollbar';

  export default {
    components: { PyScrollbar },
    mixins: [Popper, Emitter],

    componentName: 'PyAutocompleteSuggestions',

    data() {
      return {
        parent: this.$parent,
        dropdownWidth: ''
      };
    },

    props: {
      options: {
        default() {
          return {
            gpuAcceleration: false
          };
        }
      },
      id: String
    },

    methods: {
      select(item) {
        this.dispatch('PyAutocomplete', 'item-click', item);
      }
    },

    updated() {
      this.$nextTick(_ => {
        this.updatePopper();
      });
    },

    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.$parent.$refs.input.$refs.input;
      this.referenceList = this.$el.querySelector('.py-autocomplete-suggestion__list');
      this.referenceList.setAttribute('role', 'listbox');
      this.referenceList.setAttribute('id', this.id);
    },

    created() {
      this.$on('visible', (val, inputWidth) => {
        this.dropdownWidth = inputWidth + 'px';
        this.showPopper = val;
      });
    }
  };
</script>

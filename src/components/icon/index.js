import PyIcon from './src/icon.vue';

/* istanbul ignore next */
PyIcon.install = function(Vue) {
  Vue.component(PyIcon.name, PyIcon);
};

export default PyIcon;

import PyCheckboxButton from '../checkbox/src/checkbox-button.vue';

/* istanbul ignore next */
PyCheckboxButton.install = function(Vue) {
  Vue.component(PyCheckboxButton.name, PyCheckboxButton);
};

export default PyCheckboxButton;

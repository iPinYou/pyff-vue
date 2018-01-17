import PyCheckboxGroup from '../checkbox/src/checkbox-group.vue';

/* istanbul ignore next */
PyCheckboxGroup.install = function(Vue) {
  Vue.component(PyCheckboxGroup.name, PyCheckboxGroup);
};

export default PyCheckboxGroup;

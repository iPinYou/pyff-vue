import PyOptionGroup from '../select/src/option-group';

/* istanbul ignore next */
PyOptionGroup.install = function(Vue) {
  Vue.component(PyOptionGroup.name, PyOptionGroup);
};

export default PyOptionGroup;

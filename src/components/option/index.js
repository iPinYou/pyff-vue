import PyOption from '../select/src/option';

/* istanbul ignore next */
PyOption.install = function(Vue) {
  Vue.component(PyOption.name, PyOption);
};

export default PyOption;

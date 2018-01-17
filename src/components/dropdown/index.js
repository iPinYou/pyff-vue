import PyDropdown from './src/dropdown';

/* istanbul ignore next */
PyDropdown.install = function(Vue) {
  Vue.component(PyDropdown.name, PyDropdown);
};

export default PyDropdown;

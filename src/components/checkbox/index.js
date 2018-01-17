import PyCheckbox from './src/checkbox';

/* istanbul ignore next */
PyCheckbox.install = function(Vue) {
  Vue.component(PyCheckbox.name, PyCheckbox);
};

export default PyCheckbox;

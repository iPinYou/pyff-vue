import PyInputNumber from './src/input-number';

/* istanbul ignore next */
PyInputNumber.install = function(Vue) {
  Vue.component(PyInputNumber.name, PyInputNumber);
};

export default PyInputNumber;

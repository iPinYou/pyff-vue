import PyInput from './src/input';

/* istanbul ignore next */
PyInput.install = function(Vue) {
  Vue.component(PyInput.name, PyInput);
};

export default PyInput;

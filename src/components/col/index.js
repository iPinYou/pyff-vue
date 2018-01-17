import PyCol from './src/col';

/* istanbul ignore next */
PyCol.install = function(Vue) {
  Vue.component(PyCol.name, PyCol);
};

export default PyCol;


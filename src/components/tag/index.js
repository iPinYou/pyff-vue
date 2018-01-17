import PyTag from './src/tag';

/* istanbul ignore next */
PyTag.install = function(Vue) {
  Vue.component(PyTag.name, PyTag);
};

export default PyTag;

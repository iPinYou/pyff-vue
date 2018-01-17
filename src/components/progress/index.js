import PyProgress from './src/progress';

/* istanbul ignore next */
PyProgress.install = function(Vue) {
  Vue.component(PyProgress.name, PyProgress);
};

export default PyProgress;

import PyCollapse from './src/collapse';

/* istanbul ignore next */
PyCollapse.install = function(Vue) {
  Vue.component(PyCollapse.name, PyCollapse);
};

export default PyCollapse;


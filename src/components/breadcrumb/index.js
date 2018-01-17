import PyBreadcrumb from './src/breadcrumb';

/* istanbul ignore next */
PyBreadcrumb.install = function(Vue) {
  Vue.component(PyBreadcrumb.name, PyBreadcrumb);
};

export default PyBreadcrumb;

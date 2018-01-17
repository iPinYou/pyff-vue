import PyBreadcrumbItem from '../breadcrumb/src/breadcrumb-item';

/* istanbul ignore next */
PyBreadcrumbItem.install = function(Vue) {
  Vue.component(PyBreadcrumbItem.name, PyBreadcrumbItem);
};

export default PyBreadcrumbItem;

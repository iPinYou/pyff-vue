import PyTabs from './src/tabs';

/* istanbul ignore next */
PyTabs.install = function(Vue) {
  Vue.component(PyTabs.name, PyTabs);
};

export default PyTabs;

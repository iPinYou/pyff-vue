import PyButtonGroup from '../button/src/button-group';

/* istanbul ignore next */
PyButtonGroup.install = function(Vue) {
  Vue.component(PyButtonGroup.name, PyButtonGroup);
};

export default PyButtonGroup;

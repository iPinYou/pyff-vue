import PyMenuItemGroup from '../menu/src/menu-item-group';

/* istanbul ignore next */
PyMenuItemGroup.install = function(Vue) {
  Vue.component(PyMenuItemGroup.name, PyMenuItemGroup);
};

export default PyMenuItemGroup;

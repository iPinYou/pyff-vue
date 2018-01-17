import PyMenuItem from '../menu/src/menu-item';

/* istanbul ignore next */
PyMenuItem.install = function(Vue) {
  Vue.component(PyMenuItem.name, PyMenuItem);
};

export default PyMenuItem;

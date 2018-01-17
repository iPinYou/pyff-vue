import PySubmenu from '../menu/src/submenu';

/* istanbul ignore next */
PySubmenu.install = function(Vue) {
  Vue.component(PySubmenu.name, PySubmenu);
};

export default PySubmenu;

import PyMenu from './src/menu';

/* istanbul ignore next */
PyMenu.install = function(Vue) {
  Vue.component(PyMenu.name, PyMenu);
};

export default PyMenu;

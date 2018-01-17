import PyDropdownMenu from '../dropdown/src/dropdown-menu';

/* istanbul ignore next */
PyDropdownMenu.install = function(Vue) {
  Vue.component(PyDropdownMenu.name, PyDropdownMenu);
};

export default PyDropdownMenu;

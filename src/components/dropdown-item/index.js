import PyDropdownItem from '../dropdown/src/dropdown-item';

/* istanbul ignore next */
PyDropdownItem.install = function(Vue) {
  Vue.component(PyDropdownItem.name, PyDropdownItem);
};

export default PyDropdownItem;

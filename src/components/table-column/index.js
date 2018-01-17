import PyTableColumn from '../table/src/table-column';

/* istanbul ignore next */
PyTableColumn.install = function(Vue) {
  Vue.component(PyTableColumn.name, PyTableColumn);
};

export default PyTableColumn;

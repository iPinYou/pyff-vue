import PyTable from './src/table';

/* istanbul ignore next */
PyTable.install = function(Vue) {
  Vue.component(PyTable.name, PyTable);
};

export default PyTable;

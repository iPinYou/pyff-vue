import PyTableColumn from './src/table-column';
import PyTable from './src/table';

/* istanbul ignore next */
export default function(Vue) {
  Vue.component(PyTable.name, PyTable);
  Vue.component(PyTableColumn.name, PyTableColumn);
};

export { PyTable, PyTableColumn };

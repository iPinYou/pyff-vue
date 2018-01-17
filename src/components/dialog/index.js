import PyDialog from './src/component';

/* istanbul ignore next */
PyDialog.install = function(Vue) {
  Vue.component(PyDialog.name, PyDialog);
};

export default PyDialog;

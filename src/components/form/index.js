import PyForm from './src/form';

/* istanbul ignore next */
PyForm.install = function(Vue) {
  Vue.component(PyForm.name, PyForm);
};

export default PyForm;

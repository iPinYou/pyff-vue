import PyFormItem from '../form/src/form-item';

/* istanbul ignore next */
PyFormItem.install = function(Vue) {
  Vue.component(PyFormItem.name, PyFormItem);
};

export default PyFormItem;

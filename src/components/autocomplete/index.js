import PyAutocomplete from './src/autocomplete';

/* istanbul ignore next */
PyAutocomplete.install = function(Vue) {
  Vue.component(PyAutocomplete.name, PyAutocomplete);
};

export default PyAutocomplete;

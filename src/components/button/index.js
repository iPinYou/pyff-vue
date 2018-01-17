import PyButton from './src/button';

/* istanbul ignore next */
PyButton.install = function(Vue) {
  Vue.component(PyButton.name, PyButton);
};

export default PyButton;

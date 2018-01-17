import Vue from 'vue';
import PYFF from '../src/common/index.js';
import App from './play/index.vue';
import 'pyff-vue/src/styles/theme-default/lib/index.css';

Vue.use(PYFF);

new Vue({ // eslint-disable-line
  render: h => h(App)
}).$mount('#app');

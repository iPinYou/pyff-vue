/**
 * Created by Hank on 2017/7/24.
 */
import Affix from './src/affix';

/* istanbul ignore next */
Affix.install = function(Vue) {
  Vue.component(Affix.name, Affix);
};

export default Affix;

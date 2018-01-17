import PyCollapseItem from '../collapse/src/collapse-item.vue';

/* istanbul ignore next */
PyCollapseItem.install = function(Vue) {
  Vue.component(PyCollapseItem.name, PyCollapseItem);
};

export default PyCollapseItem;

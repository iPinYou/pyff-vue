import PyTimelineItem from './src/timeline-item.vue';

PyTimelineItem.install = function(Vue) {
  Vue.component(PyTimelineItem.name, PyTimelineItem);
};

export default PyTimelineItem;

import PyTimeline from './src/timeline.vue';

/* istanbul ignore next */
PyTimeline.install = function(Vue) {
  Vue.component(PyTimeline.name, PyTimeline);
};

export default PyTimeline;

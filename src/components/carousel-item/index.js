import PyCarouselItem from '../carousel/src/item';

/* istanbul ignore next */
PyCarouselItem.install = function(Vue) {
  Vue.component(PyCarouselItem.name, PyCarouselItem);
};

export default PyCarouselItem;

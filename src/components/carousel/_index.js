import PyCarousel from './src/main';
import PyCarouselItem from './src/item';

/* istanbul ignore next */
export default function(Vue) {
  Vue.component(PyCarousel.name, PyCarousel);
  Vue.component(PyCarouselItem.name, PyCarouselItem);
};

export { PyCarousel, PyCarouselItem };

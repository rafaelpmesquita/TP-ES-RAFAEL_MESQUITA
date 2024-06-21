import _Vue from 'vue';
import LoaderInstance from './LoaderInstance';

export const LoaderPlugin = (Vue: typeof _Vue) => {
  Vue.prototype.$loader = new LoaderInstance();
};

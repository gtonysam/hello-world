import Vue from 'vue'
import App from './App.vue'
import { createStore } from '@/store';

export function createApp () {
  const store = createStore();

  const app = new Vue({
    store,
  });
  return {
    app,
    store,
  };

}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

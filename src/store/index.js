import Vue from 'vue';
import Vuex from 'vuex';
import api1 from './module/api1';
import api2 from './module/api2';

Vue.use(Vuex);

export default function () {

  const store = new Vuex.Store({
    modules: {
      api1: api1(),
  api2: api2(),
    },
  });

  return store;
}

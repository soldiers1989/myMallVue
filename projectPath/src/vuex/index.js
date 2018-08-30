import Vue from 'vue';
import Vuex from 'vuex';
import state from './state'
Vue.use(Vuex);


export default new Vuex.Store({
  state:state,
  mutations: {
    setbannerList(state, newData) {
      state.bannerList = newData;
    }
  }

});

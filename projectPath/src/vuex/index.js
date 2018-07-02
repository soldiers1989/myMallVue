import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
  state:{
    bannerList:[]
  },
  mutations: {
    setbannerList(state, newData) {
      state.bannerList = newData;
    }
  }

});

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
  state:{
    bannerList:[],
    fundType:[{"tab":"债券型","val":"10200"},{"tab":"货币型","val":"10300"},{"tab":"混合型","val":"10400"},{"tab":"股票型","val":"10100"},{"tab":"理财型","val":"11300"}]
  },
  mutations: {
    setbannerList(state, newData) {
      state.bannerList = newData;
    }
  }

});

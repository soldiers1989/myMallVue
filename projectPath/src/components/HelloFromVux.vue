<template>
  <div>
    <div id="header">
    <x-header :left-options="{showBack: false}">英大证券理财商城</x-header>
    <grid :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item  >
        <img slot="icon" src="../../static/images/fund.png">
      </grid-item>
      <grid-item >
        <img slot="icon" src="../../static/images/gdlc.png">
      </grid-item>
      <grid-item >
        <img slot="icon" src="../../static/images/smxt.png">
      </grid-item>
      <grid-item >
        <img slot="icon" src="../../static/images/user.png">
      </grid-item>
    </grid>
    </div>

    <div id="bannern">
      <swiper :list="$store.state.bannerList" v-model="banner_index" @on-index-change=""></swiper>
    </div>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import axios from 'axios'
export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      banner_index:0
    }
  },
  mounted:function(){
    let that = this;
    axios.get('http://58.251.50.25:8086/servlet/json?funcNo=1000162&group_id=1&ad_id=&opstation=,,,web')
      .then(function (response) {
        let results = response.data.results;//数据
       that.$store.commit('setbannerList',results);
        //console.log(results);
        console.log(that.$store);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>

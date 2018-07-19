<template>
  <div>

    <div id="header">
      <div class="sea">
        <div class="topdiv">
        <span id="title"></span>
        <span id="titlecontent">鱿鱼基金</span>
        </div>
      </div>
    </div>

    <div id="bannern">
      <swiper :aspect-ratio="300/800" >
        <swiper-item class="swiper-demo-img" v-for="(item, index) in $store.state.bannerList" :key="index">
          <img :src="item.picture">
        </swiper-item>
      </swiper>
    </div>

  </div>
</template>

<script>
import { Group, Cell,Panel  } from 'vux'
import axios from 'axios'
export default {
  components: {
    Group,
    Cell,
    Panel
  },
  data () {
    return {
      banner_index:0
    }
  },
  mounted:function(){
    let that = this;
    //获取banner图信息
   /* axios.get('http://58.251.50.25:8086/servlet/json?funcNo=1000162&group_id=1&ad_id=&opstation=,,,web')
      .then(function (response) {
        let results = response.data.results;//数据
       that.$store.commit('setbannerList',results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })*/

  }
}
</script>

<style>
  ol, ul, li {
    list-style-type: none;
  }
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
  body, html {
    font-size: 100px;
    -webkit-overflow-scrolling: touch;
  }
  .topdiv{
    position: fixed;
    height: 0.4rem;
    width: 100%;
  }
.sea{
  width: 100%;
  height: 3rem;
  background-color: #f8bb22;
  background: -webkit-linear-gradient(left, #FFB600 3%, #FF8750 96%);
  background: linear-gradient(90deg, #FFB600 3%, #FF8750 96%);
  box-shadow: 0 0.08rem 0.1rem #88879E;
  overflow: hidden;
}
  #title{
    border-top: 0.4rem solid #f8bb22;
    border-right: 0.3rem solid transparent;
    width: 0.7rem;
    position: absolute;
    box-shadow: -0.3rem 0.05rem 0.2rem #88879E;
    top: 0;
    z-index: 1;
  }
  #titlecontent{
    position: absolute;
    font-size: 0.15rem;
    z-index: 2;
    top: 0.08rem;
    padding: 0.05rem;
  }
</style>

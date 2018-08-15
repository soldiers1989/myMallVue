<template>
  <div>

    <div id="header">
      <div class="sea">
        <div class="topdiv">
        <span id="title"></span>
        <span id="titlecontent">鱿鱼基金</span>

        </div>
      </div>
      <tab-list></tab-list>
    </div>

    <banner></banner>
    <pdt></pdt>
  </div>
</template>

<script>
import banner from '@/components/banner/banner'
import tabList from '@/pages/home/tabList'
import pdt from '@/pages/home/pdt'
import axios from 'axios'
export default {
  components: {
    banner,
    tabList,
    pdt
  },
  data () {
    return {
      banner_index:0
    }
  },
  mounted:function(){
    let that = this;
 

  }
}
</script>

<style >
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
    background: linear-gradient(90deg, #FFB600 3%, #FF8750 96%);
    z-index: 100;
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

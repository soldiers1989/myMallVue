<template>
  <div id="banner" >
    <swiper :list="demo07_list" height="1rem" dots-position="top"></swiper>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Swiper } from 'vux'
  //前期测试数据
  const baseList = [{
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
    title: '送你一朵fua'
  }, {
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
    title: '送你一辆车'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/5.jpg', // 404
    title: '送你一次旅行',
    fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
  }]
  const only2ClickList = baseList.slice(0, 2).map(item => {
    item.url = 'http://m.baidu.com'
  return item
  })
    export default {
      data(){
        return{
          demo07_list: only2ClickList
        }
      },
        name: "banner",
      components:{
        Swiper,
      }
    }
</script>

<style scoped>
#banner{
  height: 1rem;
  width: 94%;
  overflow: hidden;
  margin-left: 3%;
  position: absolute;
  top: 0.6rem;
}
</style>

<template>
  <div class="fundList">

<mu-paper :z-depth="1" class="demo-loadmore-wrap">
  <header-top goBack=true headTitle="基金" isSearch=true>
  </header-top>
  <mu-tabs :value.sync="active"  @change="changeFund" >
    <mu-tab v-for="item in fundType">{{item.tab}}</mu-tab>
    
  </mu-tabs>
      <flexbox align-items="center" class="toptitle">
        <flexbox-item span='180'  ><div class="flex-demo" style="padding-left:20%">基金名称</div></flexbox-item>
         
        <flexbox-item > <div class="flex-demo" style="text-align:center">最新净值</div></flexbox-item>
      
         <flexbox-item><div class="flex-demo" style="text-align:center" >近三月</div></flexbox-item>
        </flexbox>
         <mu-divider />
  <mu-container ref="container" class="demo-loadmore-content">
     
    <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
      <mu-list>
        <template v-for="i in num">
  
        <flexbox align-items="center">
        <flexbox-item span='180'  > <mu-card-title title="前海开源股票基金" sub-title="000114"></mu-card-title></flexbox-item>
         
        <flexbox-item >  <span style="float:right;padding-top:25px;padding-right:15px">aaaaa</span></flexbox-item>
      
         <flexbox-item>  <span style="float:right;padding-top:25px;padding-right:15px">aaaaa</span></flexbox-item>
        </flexbox>
   
   
       
          <mu-divider />
           
        </template>
      </mu-list>
      
    </mu-load-more>
  </mu-container>
  
</mu-paper>
 
  </div>
 
</template>

<script>
import Vue from 'vue'
import {mapState, mapMutations} from 'vuex'
import {List,LoadMore,paper,Divider,Container,Tabs} from 'muse-ui'
import { Flexbox, FlexboxItem } from 'vux'
import HeaderTop from '@/components/header/headerTop'
Vue.use(List)
Vue.use(LoadMore)
Vue.use(paper)
Vue.use(Divider)
Vue.use(Tabs)

//vux组件


export default {
    components: {
    Flexbox,
    FlexboxItem,
    HeaderTop
  },
  data () {
    return {
      num: 10,
      refreshing: false,
      loading: false,
      text: 'List',
      active:1,
    }
  },
  computed: {
    	...mapState([
			'fundType'
		])
    },
  methods: {
    refresh () {
      this.refreshing = true;
      this.$refs.container.scrollTop = 0;
      setTimeout(() => {
        this.refreshing = false;
        this.text = this.text === 'List' ? 'Menu' : 'List';
        this.num = 10;
        
      }, 2000)
    },
    load () {
      console.log("now is loading...")
     // console.log(this.$refs.container.offsetHeight)
     console.log(this.$refs)
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.num += 10;
      }, 2000)
    },
    //切换基金类型
    changeFund(e){
      console.log(e);
    }
  },
  mounted:function(){
      /**
       * 查询热点投资产品
       */
      var param = {
          "recommend_type":"4",
          "page":1,
          "numPerPage":3
      }
      productService.queryCommendProduct(param,function(data){
        that.hotFinan = data.data.results[0].data;
        console.log(that.hotFinan)
      },{})
  },
  updated:function(){
       //内容未满屏
        if(this.$refs.container.offsetHeight-this.$refs.container.scrollHeight>=0)
        this.load();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
html,body,#app{
  height:100%;
}
.fundList{
 height: 100%;
}
.demo-loadmore-wrap {
  width: 100%;
  display: flex;
  position: absolute;  //父元素为绝对定位，bottom:0则子元素高度平分
  flex-direction: column;
  .mu-appbar {
    width: 100%;
  }
  top: 0;//
  bottom: 0;//
  position: absolute;
}
.demo-loadmore-content {
  -webkit-box-flex: 1;
    -webkit-flex: 1;
  flex: 1;
  height: 100%;
  width: 100%;

  
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.toptitle{
  height: 6%;
}
</style>

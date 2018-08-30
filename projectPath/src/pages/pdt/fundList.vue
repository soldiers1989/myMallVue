<template>
  <div class="fundList">

<mu-paper :z-depth="1" class="demo-loadmore-wrap">
  <header-top goBack=true headTitle="基金" isSearch=true>
  </header-top>
  <mu-tabs :value.sync="active"  @change="changeFund" >
    <!-- :key  提高循环性能 -->
    <mu-tab v-for="item in fundType" :key='item.val' >{{item.tab}}</mu-tab>
    
  </mu-tabs>
      <flexbox align-items="center" class="toptitle">
        <flexbox-item span='180'  ><div class="flex-demo" style="padding-left:20%">基金名称</div></flexbox-item>
         
        <flexbox-item >
           <div class="flex-demo" style="text-align:center" v-if='active!=1||active!=4'>最新净值</div>
           <div class="flex-demo" style="text-align:center" v-else>万份收益</div>
        </flexbox-item>
      
         <flexbox-item>
           <div class="flex-demo" style="text-align:center" ref="sySel" @click="open=!open" >
             {{this.sytype.name}}<icon name="angle-down"   />
             </div>
            
        </flexbox-item>

   <mu-popover cover :open.sync="open" :trigger="trigger" :cover="false" >
   <mu-list >
    <mu-list-item button v-for="item in syList"  @click="changeVal(item)" :key="item.val" v-show='active!=1&&active!=4' >
      <mu-list-item-title >{{item.name}}</mu-list-item-title>
    </mu-list-item>
     <mu-list-item button v-for="item in hbsyList"  @click="changeVal(item)" :key="item.val"  v-show='active==1||active==4' >
      <mu-list-item-title >{{item.name}}</mu-list-item-title>
    </mu-list-item>
  </mu-list>
  </mu-popover>

        </flexbox>
         <mu-divider />
  <mu-container ref="container" class="demo-loadmore-content">
     
    <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
      <mu-list>
        <template v-for="item in fundList">
  
        <flexbox align-items="center">
        <flexbox-item span='180'  > <mu-card-title :title='item.product_abbr' :sub-title='item.product_code' ></mu-card-title></flexbox-item>
         
        <flexbox-item >  
          <span style="float:right;padding-top:25px;padding-right:15px"  v-if='active!=1&&active!=4'>
          {{item.current_price}}
          </span>
           <span style="float:right;padding-top:25px;padding-right:15px"  v-else>
          {{item.profit_of_10_thousands}}
          </span>
          </flexbox-item>
      
         <flexbox-item> 
            <span style="float:right;padding-top:25px;padding-right:15px">{{item[sytype.vals]}}</span>
          </flexbox-item>
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
import {List,LoadMore,paper,Divider,Container,Tabs,Popover} from 'muse-ui'
import { Flexbox, FlexboxItem } from 'vux'
import HeaderTop from '@/components/header/headerTop'
import productService from  '@/services/productService'
Vue.use(List)
Vue.use(LoadMore)
Vue.use(paper)
Vue.use(Divider)
Vue.use(Tabs)
Vue.use(Popover)


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
      active:0,
      open:false,//是否打开收益选择
      trigger:null,//弹出层绑定元素
      sytype:{},//当前排序类型
      numPerPage:7,//每页记录数
      page:1,//当前页码为1
      fundList:[],//基金数据
    }
  },
  computed: {
    	...mapState([
			'fundType','syList','hbsyList'
		])
    },
  methods: {
    refresh () {
      this.refreshing = true;
      this.$refs.container.scrollTop = 0;
       this.page=1;
      var that = this;
    /**
       * 查询热点投资产品
       */
      var fundParam = {
          "recommend_type":"4",
          "page":this.page,//当前页码
          "numPerPage":this.numPerPage,//每页记录数
          "fund_type":this.fundType[this.active].val,//当前基金类型
      }
      fundParam[this.sytype.val] ="1";//根据当前选择显示排序
      productService.queryFundList(fundParam,function(data){
         that.fundList = data.data.results[0].data
         that.refreshing = false;
      },{});
    },
    load () {
      this.loading = true;
      this.page++;
      var that = this;
    /**
       * 查询热点投资产品
       */
      var fundParam = {
          "recommend_type":"4",
          "page":this.page,//当前页码
          "numPerPage":this.numPerPage,//每页记录数
          "fund_type":this.fundType[this.active].val,//当前基金类型
      }
      fundParam[this.sytype.val] ="1";//根据当前选择显示排序
      productService.queryFundList(fundParam,function(data){
         that.fundList = that.fundList.concat(data.data.results[0].data);
        that.loading = false;
      },{});
    },
    //切换基金类型
    changeFund(i){
      //货币基金展示七日年华
      this.sytype = (i=="1"||i=="4")?this.hbsyList[0]:this.syList[0];
      this.refresh();
    },
    //切换收益类型
    changeVal(e){
      this.open = !this.open;
      if(this.sytype.val !=e.val){
        this.sytype =e;
        this.refresh();
      }
      
    },
    
  },
  mounted:function(){
    //出事化页面值
     this.sytype = this.syList[0];
    //绑定下拉选择收益
      this.trigger = this.$refs.sySel;
      var that = this; //存储vue对象
      this.refreshing = true;
      this.$refs.container.scrollTop = 0;
      this.page = 1;//初始化页码
      /**
       * 查询热点投资产品
       */
      var fundParam = {
          "recommend_type":"4",
          "page":this.page,//当前页码
          "numPerPage":this.numPerPage,//每页记录数
          "fund_type":this.fundType[this.active].val,//当前基金类型
      }
      fundParam[this.sytype.val] ="1";//根据当前选择显示排序
      productService.queryFundList(fundParam,function(data){
        that.fundList = data.data.results[0].data;
        that.refreshing = false;
            //内容未满屏
        if(that.$refs.container.offsetHeight-that.$refs.container.scrollHeight>=0)
          that.load();
      },{});
      
  },
  updated:function(){
    
   
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

<template>
  <div class="fundList">


<mu-paper :z-depth="1" class="demo-loadmore-wrap">
   <mu-appbar style="width: 100%;" color="primary">
    <mu-button icon slot="left">
    <p style="height:100%"><icon name="chevron-left"   /></p>
    </mu-button>
    <p style="text-align:center">基金</p>
    <mu-button flat slot="right"><icon name="search"   /></mu-button>
    </mu-appbar>
  <mu-container ref="container" class="demo-loadmore-content">
    <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
      <mu-list>
        <template v-for="i in num">
         <span style="float:right;padding-top:25px;padding-right:15px">aaaaa</span>
            <mu-card-title title="前海开源股票基金" sub-title="000114"></mu-card-title>
         
       
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
import {List,LoadMore,paper,Divider,Container} from 'muse-ui'
Vue.use(List)
Vue.use(LoadMore)
Vue.use(paper)
Vue.use(Divider)

export default {
  data () {
    return {
      num: 10,
      refreshing: false,
      loading: false,
      text: 'List'
    }
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
    }
  },
  mounted:function(){
    //内容未满屏
    if(this.$refs.container.offsetHeight-this.$refs.container.scrollHeight>=0)
      this.load();
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
</style>

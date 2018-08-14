// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import Home from './pages/home/HelloFromVux'
import VueRouter from 'vue-router'
import store from './vuex'
import router from '@/router'
import { XHeader,Grid, GridItem,Swiper,SwiperItem } from 'vux'
import config from '@/config/configuration.js'
import filters from '@/filter'
Vue.component('x-header', XHeader)
Vue.component('grid', Grid)
Vue.component('grid-item', GridItem)
Vue.component('swiper', Swiper)
Vue.component('swiper-item', SwiperItem)

FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.use(VueRouter)
/* eslint-disable no-new */
//加载过滤器
Object.keys(filters).forEach((key) => { Vue.filter(key, filters[key]) })
new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    window.$config = config
  },
  
 
}).$mount('#app-box')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import Home from './pages/home/HelloFromVux'
import VueRouter from 'vue-router'
import store from './vuex'
import router from '@/router'
<<<<<<< HEAD
import { Swiper,SwiperItem } from 'vux'
import config from '@/config/configuration.js'
import filters from '@/filter'
=======
import { Grid, GridItem,Swiper,SwiperItem } from 'vux'
import config from '@/config/configuration.js'
import filters from '@/filter'
Vue.component('grid', Grid)
Vue.component('grid-item', GridItem)
>>>>>>> 0e97bcf4e0b0bc184aeeaa4f496c80f01003ece8
Vue.component('swiper', Swiper)
Vue.component('swiper-item', SwiperItem)
//musi-ui组件
import 'muse-ui/lib/styles/base.less';
import { AppBar,Button,Card} from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';
Vue.use(Button)
Vue.use(AppBar)
Vue.use(Card)
//图标组建
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)
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

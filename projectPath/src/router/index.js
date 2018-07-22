import Router from 'vue-router'
import HelloFromVux from '@/pages/home/HelloFromVux'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloFromVux',
      component: HelloFromVux
    }
  ]
})

import Router from 'vue-router'
import HelloFromVux from '@/pages/home/HelloFromVux'
import fundList from '@/pages/pdt/fundList'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloFromVux',
      component: HelloFromVux
    },
    {
      path: '/fundList',
      name: 'fundList',
      component: fundList
    }
  ]
})

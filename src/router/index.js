import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/home/index'
import City from '@/pages/city/index'
import Detail from '@/pages/detail/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path:'/detail/:sightId',
      name: 'Detail',
      component: Detail
    }
  ]
})

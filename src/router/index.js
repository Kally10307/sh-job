import Vue from 'vue'
import Router from 'vue-router'
// import Listview from '@/components/Listview'
import Homepage from 'page/Homepage'
import Landpage from 'page/Landpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Homepage',
      path: '/',
      component: Homepage
    }, {
      name: 'landpage',
      path: '/login',
      component: Landpage
    }
  ]
})

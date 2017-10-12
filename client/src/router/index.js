import Vue from 'vue'
import Router from 'vue-router'
import House from '@/components/House'
import Contents from '@/components/Contents'
import ContentId from '@/components/ContentId'
import ContentCategory from '@/components/ContentCategory'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login
    }, {
      path: '/',
      name: 'Hello',
      component: House,
      children: [{
        path: '',
        component: Contents
      }, {
        path: ':id',
        component: ContentId,
        props: true
      }, {
        path: '/:category',
        component: ContentCategory,
        props: true
      }]
    }
  ]
})

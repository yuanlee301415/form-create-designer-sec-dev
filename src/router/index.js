import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export const routes = [
  { // Home
    path: '/',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '',
        name: 'Home',
        meta: {
          title: 'Home'
        },
        component: () => import('@/views/home')
      }
    ]
  },

  { // Designer
    path: '/designer',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Designer',
        meta: {
          title: 'Designer'
        },
        component: () => import('@/views/designer')
      }
    ]
  }
]

export default new Router({
  routes
})

import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component: () => import('@/views/Parent.vue'),
    redirect: '/table',
  },
  {
    // 动态路由
    path: '/home/:id',
    // path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    children: [{
      path: '/child',
      component: () => import('@/views/Child'),
    }],
  },
  {
    path: '/layout',
    component: () => import('@/views/element/Layout'),
  },
  {
    path: '/pop',
    component: () => import('@/views/element/Pop'),
  },
  {
    path: '/table',
    component: () => import('@/views/element/Table')
  },
]

const router = new VueRouter({
  routes
})

export default router

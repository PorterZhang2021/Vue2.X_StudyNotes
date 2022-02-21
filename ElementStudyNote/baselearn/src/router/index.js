import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component: () => import('@/views/Parent.vue'),
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
  }
]

const router = new VueRouter({
  routes
})

export default router

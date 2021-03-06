// 引入Vue.js
import Vue from 'vue'
// 引入vue-router.js
import VueRouter from 'vue-router'
// 引入Home组件
import Home from '../views/Home.vue'
import List from "@/views/List";
import User from "@/views/User";
import UserProfile from "@/views/user/UserProfile";
import UserPosts from "@/views/user/UserPosts";
import Sidebar from "@/views/Sidebar";
import Footer from "@/views/Footer";

// 可以参考API的解释，参数是一个插件，路由就是一个插件
// 这句话的意思是：初始化这个插件以便使用
Vue.use(VueRouter)

// 这个常量用于设置每个组件的信息，然后交给路由插件注册
const routes = [
  {
    path: '/',  // 链接地址
    name: 'Home', // 别名
    components: {
      default : Home,
      sidebar : Sidebar,
      footer : Footer,
    } // 加载的组件
  },
  {
    path: '/list',  // 链接地址
    name: 'List', // 别名
    alias: '/liebiao',
    components: {
      default : List,
      sidebar : Sidebar,
      footer : Footer,
    }
  },
  // {
  //   path: '*',  // 链接地址
  //   name: 'Home', // 别名
  //   component: Home // 加载的组件
  // },
  // {
  //   path: '/user-*',  // 链接地址
  //   name: 'List', // 别名
  //   component: List // 加载的组件
  // },
  {
    path: '/user',  // 链接地址
    name: 'User', // 别名
    component: User // 加载的组件
  },
  {
    path: '/a',  // 链接地址
    // redirect : '/list'
    // 对象的方式
    // redirect : {
    //   name : 'List',
    // },
    // 动态跳转路径 闭包 箭头函数
    // redirect : () => {
    //   if(true){
    //     // return '/list'
    //     return {
    //       name : 'List',
    //     }
    //   }
    // }
    // 传参
    redirect : to => {
      if (true) {
        console.log(to);
        return {
          name : 'List',
        };
      }
    }
  },
  {
    path: '/user/:id',  // 链接地址
    name: 'User', // 别名
    component: User, // 加载的组件
    children : [
      {
        path : 'profile',
        component : UserProfile,
      },
      {
        path : 'posts',
        component : UserPosts,
      },
      {
        path : '*',
        component : List,
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // 另一种组件加载模式，路由懒加载，后面会讲
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    components: {
      default : () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      sidebar : Sidebar,
      footer : Footer,
    } // 加载的组件
  }
]

// 实例化路由组件
const router = new VueRouter({
  mode : 'history',  // 默认mode : 'hash'
  routes
})

// 导出路由
export default router

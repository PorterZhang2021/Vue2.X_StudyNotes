//引入Vue.js框架
import Vue from 'vue'
// 引入App.vue根组件
import App from './App.vue'

// 去掉警告
Vue.config.productionTip = false

// 根Vue实例(全局)
new Vue({
  /*
    Vue2.X写法，配合了ES6箭头函数
    参考API手册得知，作用是渲染一个视图组件
    这里注册了根组件App
  */ 
  render: h => h(App),
  /*
    $mount方法，参考API手册得知是挂载函数
    相当于{ el : '#app' }
  */ 
}).$mount('#app')

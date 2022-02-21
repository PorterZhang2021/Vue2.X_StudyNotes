import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false

// 导航守卫
router.beforeEach((to, from, next)=> {
  console.log(to.path);
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

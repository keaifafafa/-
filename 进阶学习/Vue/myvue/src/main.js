// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// router组件可以在route文件夹下的index.js里配置， main.js要尽量简洁
/* import VueRouter from 'vue-router' */
// 导入路由配置
import router from './router'  //会自动寻找index.js(有点小智能了)

/* // 显示声明使用VueRouter
Vue.use(VueRouter);
Vue.config.productionTip = false */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 配置路由
  router,
  components: { App },
  template: '<App/>'
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 这里的 router 必须是小写
import router from './router'
// 导入 Element-Ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入Axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// 安装Axios
Vue.use(VueAxios, axios)
// 安装路由 和 Element-Ui
Vue.use(router);
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //使用路由
  render: h => h(App),//使用Element-Ui
  components: { App },
  template: '<App/>'
})

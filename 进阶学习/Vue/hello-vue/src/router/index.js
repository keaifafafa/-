import Vue from "vue";
import Router from "vue-router";

// 添加路由组件
import Main from "../views/Main.vue";
import Login from "../views/Login.vue";
import UserProfile from "../views/user/Profile.vue";
import UserList from "../views/user/List.vue";
import NotFound from "../views/NotFound.vue" 

//使用路由
Vue.use(Router);

// 导出路由
export default new Router({
  // 去掉 "#"
  mode: "history",
  routes: [
    {
      path: "/main",
      // 切记这里不要带s 不然会找不到的
      props: true,
      component: Main,
    //  嵌套路由
      children: [
        {
          path: "/user/profile/:id",
          name: 'UserProfile',
          component: UserProfile,
          props: true
        },
        {
            path: '/user/list',
            component: UserList
        }
      ]
    },
    {
      path: "/login",
      component: Login
    },
    {
      // 重定向
      path:"/goHome",
      redirect:'/main'
    },
    // 404
    {
      path: "/*",
      component: NotFound
    }
  ]
});

// 导入 Vue
import Vue from "vue";
// 导入 Router  这里配置了（main.js里就不用配置了）
import VueRouter from "vue-router";

//  导入 Content.vue
import Content from '../components/Content.vue'
//  导入 Main.vue
import Main from '../components/Main.vue'
// 导入 Music.vue
import Music from '../components/Music.vue'

/* 这里和java的导包类似，先导入，后引用 */

// 安装路由
Vue.use(VueRouter);

// 导出配置路由，供其他文件使用
export default new VueRouter({
    // 类似后端的 RequestMapping
    routes:[
        {
            // 路由路径
            path:'/content',
            // 路由名字：
            name: 'content',
            // 跳转的组件
            component:Content
        },
        {
            // 同上
            path: '/main',
            name: 'main',
            component: Main
        },{
            // 同上
            path: '/music',
            name: 'music',
            component: Music
        }
    ]

});
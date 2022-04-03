<template>
  <div id="app">
  <!--   <img src="./assets/logo.png">
    <HelloWorld/> -->
    <h1>可爱发</h1>
    <!-- 跳转链接 -->
    <router-link to="/main">跳转到首页</router-link>
    <router-link to="/content">跳转到内容页</router-link>
    <router-link to="/music">跳转到音乐页面</router-link>
    <!-- 展示视图,显示上面的视图模块的 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  /* components: {
    HelloWorld
  } */
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

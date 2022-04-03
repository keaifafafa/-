<template>
	<!-- 内容一定要全部写在div里面 -->
	<div>
		<h1>个人信息</h1>
		<!-- 方式一 -->
		<!-- {{$route.params.id}} -->
		<!-- 方式二 -->
		{{id}}
	</div>
</template>

<script>
	export default {
		props: ['id'],
		name: 'UserProfile',
		// 进入前    类似java里的拦截器
		beforeRouteEnter: (to, from, next) => {
			console.log("准备进入个人信息页面");
			// 放行
			// next();
			// ajax
			next(vm => {
				//进入路由之前执行getData方法
				vm.getData()
			});
		},
		// 离开前   类似java里的拦截器
		beforeRouteLeave: (to, from, next) => {
			console.log("准备离开个人信息页面");
			// 放行
			next();
		},
		
		// Axios
		methods: {
			getData: function() {
				this.axios({
					method: 'get',
					url: 'http://localhost:8080/static/mock/data.json'
				}).then(function(response) {
					console.log(response);
				})
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>

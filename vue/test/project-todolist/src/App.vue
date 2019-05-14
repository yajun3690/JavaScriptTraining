<!--1.页面 -->
<template>
	<div id="App">
		<!-- 2.3 使用组件 -->
		<h3>To Do List</h3>
		<Header :addTodo='addTodo'/>
		<List :todos='todos'/>
		<Footer/>
	</div>
</template>
<!--2.逻辑 -->
<script>
	//2.1 引入组件
	import Header from './components/Header.vue'
	import List from './components/List.vue'
	import Footer from './components/Footer.vue'
	export default {
		name:'App',
		//2.2 注册组件
		components:{
			Header,
			List,
			Footer
		},
		data(){
			return {
				todos:[
					{task:'吃饭',done:false},
					{task:'学习',done:true},
					{task:'看电影',done:true},

				]
			}
		},
		methods:{
			addTodo(todo){
				this.todos.unshift(todo)
			}
		}
	}
</script>
<!--3.样式 -->
<style>
	#App{
		width: 600px;
		margin:100px auto;
	}
	#App h3{
		width: 100%;
		text-align: center;
		line-height: 30px;
	}
</style>
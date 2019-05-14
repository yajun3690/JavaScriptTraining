<template>
	<div 
		class="Item"
		:style='{background:bgColor}'
		@mouseenter='handleShow(true)'
		@mouseleave='handleShow(false)'
	>
		<input type="checkbox" v-model='todo.done'>
		<span>{{todo.task}}</span>
		<button v-show="isShow" @click="handleDel">删除</button>
	</div>
</template>
<script>
	export default {
		name:'Item',
		props:{
			todo:Object,
			delTodo:Function,
			index:Number
		},
		data(){
			return {
				bgColor:'#fff',
				isShow:false
			}
		},
		methods:{
			handleShow(flag){
				if(flag){
					this.bgColor = flag ? '#ddd' : '#fff'
					this.isShow = flag
				}else{
					this.bgColor='#fff'
					this.isShow = false
				}
			},
			handleDel(){
				if(window.confirm('您确定要删除'+this.todo.task+'吗?')){
					this.delTodo(this.index)
				}
			}
		}
	}
</script>
<style scoped>
	.Item{
		width: 100%;
		line-height: 40px;
		border: 1px dashed #ccc;
	}
	.Item input{
		float: left;
		margin-top: 14px;
		margin-left:10px;
		margin-right:10px;
	}
	.Item button{
		float: right;
		margin-top: 14px;
	}
</style>
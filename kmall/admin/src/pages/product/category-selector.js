

import React,{ Component } from 'react'
import { Select } from 'antd';
import { request } from 'util'
import { GET_CATEGORIES } from 'api'
const Option = Select.Option;
class CategorySelector extends Component{
	constructor(props){
		super(props);
		this.state={
			levelOneCategories:[],
			levelTowCategories:[],
			levelOneId:'',
			levelTowId:''
		}
		this.handleLevelOneChange=this.handleLevelOneChange.bind(this)
		this.handleLevelTowChange=this.handleLevelTowChange.bind(this)
	}
	componentDidMount(){
		this.loadLevelOneCategories();
	}
	loadLevelOneCategories(){
		request({
			url:GET_CATEGORIES,
			data:{
				pid:0
			}
		})
		.then(result=>{
			// console.log(result)
			if(result.code==0){
				this.setState(()=>({levelOneCategories:result.data}))
			}
		})
	}
	handleLevelOneChange(value){
		this.setState(()=>({levelOneId:value,levelTowId:''}),()=>{
			this.loadLevelTowCategories()
			this.onValueChange();
		})
	}
	handleLevelTowChange(value){
		this.setState(()=>({levelTowId:value}),()=>{
			this.onValueChange();
		})
	}
	loadLevelTowCategories(){
		request({
			url:GET_CATEGORIES,
			data:{
				pid:this.state.levelOneId
			}
		})
		.then(result=>{
			console.log(result)
			if(result.code==0){
				this.setState(()=>({levelTowCategories:result.data}))
			}
		})
	}
	onValueChange(){
		const { getCategoryId } = this.props
		const { levelOneId,levelTowId } = this.state
		if(levelTowId){
			getCategoryId(levelOneId,levelTowId)
		}else{
			getCategoryId(0,levelOneId)
		}
	}
    render(){
    	const {levelOneCategories,levelTowCategories,levelOneId,levelTowId}  = this.state;
    	const levelOneOptions = levelOneCategories.map(category=><Option key={category._id} value={category._id} style={{width:200}}>{category.name}</Option>)
    	const levelTowOptions = levelTowCategories.map(category=><Option key={category._id} value={category._id} style={{width:200}}>{category.name}</Option>)
        return  (
        	<div className='CategorySelector'>
        		<Select 
        			style={{width:217,marginRight:10}}
        			onChange={this.handleLevelOneChange}
        			value={levelOneId}
        		>
        			{levelOneOptions}
        		</Select>
        		{
        			levelTowOptions.length?
		        		<Select 
		        			style={{width:217,marginRight:10}}
		        			onChange={this.handleLevelTowChange}
		        			value={levelTowId}
		        		>
		        			{levelTowOptions}
		        		</Select>
		        	:
		        		null
        		}
        	</div>
        )
    }
}
const mapStateToProps = (state)=>{
	return{

	}
}
const mapDispathToProps = (dispath)=>{
	return{

	}
}

export default CategorySelector
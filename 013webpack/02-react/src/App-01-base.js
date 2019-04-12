
import React,{ Component,Fragment } from 'react'
import './App.css'
import Item from './Item.js'

class App extends Component{
	//初始化state
	constructor(props){
		super(props);
		this.state={
			list:['吃饭','睡觉'],
			val:''
		}
	}
	handleAdd(){
		// console.log('add....')
		// this.state.list.push(this.state.val)
		this.setState({
			list:[...this.state.list,this.state.val],
			val:''
		})
	}
	handleChange(ev){
		// console.log(ev.target.value)
		// this.state.val = ev.target.value
		this.setState({
			val:ev.target.value
		})
	}
	handleDel(index){
		// console.log('del....',index)
		// this.state.list.splice(index,1)
		const list  = [...this.state.list]
		list.splice(index,1)
		this.setState({
			list:list
		})

	}
	render(){
		return(
			// <div style = {{background:'red'}}>
			<div className='App'>
				<input onChange={this.handleChange.bind(this)} value={this.state.val} />
				<button onClick={this.handleAdd.bind(this)}>新增</button>
				<ul>
					{
						this.state.list.map((item,index)=>{
							
							/*
							return (
								<li key = {index}
									onClick = {this.handleDel.bind(this,index)}
								>
									{item}
								</li>

							)

							*/
							return <Item key={index} content={item} list={this.state.list} index={index} handleDel={this.handleDel.bind(this,index)}/>

						})
					}
				</ul>
			
			</div>
			) 
	}


}


export default App



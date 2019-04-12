import React,{ Component } from 'react'
import PropTypes from 'prop-types'
class Item extends Component{
	render(){
		const {handleDel,content}  = this.props
		return (
			<li onClick = {handleDel} >
				{content}
			</li>
		)
	}
}
Item.propTypes = {
	handleDel:PropTypes.func,
	content:PropTypes.string.isRequired
}
Item.defaultProps = {
	content:'睡觉'
}
export default Item
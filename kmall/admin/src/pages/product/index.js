

import React,{ Component } from 'react'

import Layout from 'common/layout'


import './index.css'

class Product extends Component{
    render(){
        return (
        	<div className="Product">
        		<Layout>
        			欢迎进入商品管理!
        		</Layout>
        	</div>
        )
    }
}


export default Product
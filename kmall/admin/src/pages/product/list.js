import React,{ Component } from 'react'
import { actionCreator } from './store'
import {Breadcrumb,Button,Table,InputNumber,Divider,Input,Modal} from 'antd'
import { connect } from 'react-redux'
import Layout from 'common/layout'
import {Link} from "react-router-dom"
class ProductList extends Component{ 
    render(){
        return (
        	<div className="ProductList">
        		<Layout> 
			        <Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>首页</Breadcrumb.Item>
						<Breadcrumb.Item>商品管理</Breadcrumb.Item>
						<Breadcrumb.Item>商品列表</Breadcrumb.Item>
			        </Breadcrumb>
                    <div className='clearfix'>
    			        <Link to='/product/save' style={{float:'right'}}>
                            <Button type='primary'>添加商品</Button>
                        </Link>
                    </div>
        		</Layout>
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

export default connect(mapStateToProps,mapDispathToProps)(ProductList)


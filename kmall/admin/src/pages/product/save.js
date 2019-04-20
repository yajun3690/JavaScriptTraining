import { actionCreator } from './store'
import React,{ Component } from 'react'
import { connect } from 'react-redux'
import CategorySelector from './category-selector.js'
import {
  Form, Input, InputNumber,Breadcrumb , Row, Col, Button,
} from 'antd';
import Layout from 'common/layout'
class ProductSave extends Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleSubmit(e){
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
		  if (!err) {
		    console.log(values)

		  }
		});
	}
    render(){
    	 const { getFieldDecorator } = this.props.form;
		 const formItemLayout = {
		      labelCol: {
		        xs: { span: 24 },
		        sm: { span: 8 },
		      },
		      wrapperCol: {
		        xs: { span: 24 },
		        sm: { span: 16 },
		      },
		    };
		    const tailFormItemLayout = {
		      wrapperCol: {
		        xs: {
		          span: 24,
		          offset: 0,
		        },
		        sm: {
		          span: 16,
		          offset: 8,
		        },
		      },
		    };
        return (
        	<div className="ProductSave">
        		<Layout> 
			        <Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>首页</Breadcrumb.Item>
						<Breadcrumb.Item>商品管理</Breadcrumb.Item>
						<Breadcrumb.Item>添加商品</Breadcrumb.Item>
			        </Breadcrumb>
			         <Form {...formItemLayout}>
						<Form.Item label='商品名称'>
							{getFieldDecorator('name', {
							rules: [{ required: true, message: '请输入商品名称' }],
							})(
								<Input  placeholder="商品名称" style={{width:200}}/>
							)}
						</Form.Item>
						<Form.Item label='商品描述'>
							{getFieldDecorator('description', {
							rules: [{ required: true, message: '请输入商品描述' }],
							})(
								<Input  placeholder="商品描述" style={{width:200}}/>
							)}
						</Form.Item>
						<Form.Item label='商品分类'>
							<CategorySelector getCategoryId={(pid,id)=>{
								console.log(pid,id)
							}}/>
						</Form.Item>
						<Form.Item label='商品价格'>
							{getFieldDecorator('price', {
							rules: [{ required: true, message: '请输入商品价格' }],
							})(
								<InputNumber />
							)}
						</Form.Item>
						<Form.Item label='商品库存'>
							{getFieldDecorator('stock', {
							rules: [{ required: true, message: '请输入商品库存' }],
							})(
								<InputNumber />
							)}
						</Form.Item>
						<Form.Item label='商品图片'>
						</Form.Item>
						<Form.Item label='商品描述'>
						</Form.Item>
						<Form.Item {...tailFormItemLayout}>
							<Button 
								type="primary" 
								onClick={this.handleSubmit}
							>
							提交
							</Button>
						</Form.Item>      	
			         </Form>
        		</Layout>
        	</div>
        )
    }
}
const WrappedProductSave = Form.create()(ProductSave);
const mapStateToProps = (state)=>{
	return{

	}
}
const mapDispathToProps = (dispath)=>{
	return{

	}
}
export default connect(mapStateToProps,mapDispathToProps)(WrappedProductSave)


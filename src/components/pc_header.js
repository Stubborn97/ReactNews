import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import { Row, Col } from 'antd'
import { Menu, Icon, Modal, Tabs, message, Form, Input, Button } from 'antd';
import request from '../api/axios'
const FormItem = Form.Item;
const {TabPane} = Tabs;

class PCHeader extends Component {
  constructor() {
    super()
    this.state = {
      menuCurrent: 'top',
      // 模态框
      modalVis: false,
      // 控制登录登出
      action: 'login',
      // 登录状态
      hasLogined: false,
      userNickName: '',
      userid: 0,
      menuLIst: [
        { name: '头条', key: 'top', icon: 'appstore' },
        { name: '社会', key: 'shehui', icon: 'appstore' },
        { name: '国内', key: 'guonei', icon: 'appstore' },
        { name: '国际', key: 'guoji', icon: 'appstore' },
        { name: '娱乐', key: 'yule', icon: 'appstore' },
        { name: '体育', key: 'tiyu', icon: 'appstore' },
        { name: '科技', key: 'keji', icon: 'appstore' },
        { name: '时尚', key: 'shishang', icon: 'appstore' }
      ]
    }
  }
  handleMenuClick = ({ item, key }) => {
    key==='register' && this.setModalVisible(true)
    // console.log(item, key)
    this.setState({
      menuCurrent: key
    })
  }
  // 控制模态框的显示与隐藏
  setModalVisible = (isModalVis) => {
    this.setState({
      modalVis: isModalVis
    })
  }
  // 表单提交
   handleSubmit = async (e) => {
    e.preventDefault()
    var formData = this.props.form.getFieldsValue()
    if(this.state.action === 'login') {
      if(!formData.r_userName || !formData.r_password || !formData.r_confirmPassword) {
        return message.error('内容不得为空')
      }
      if(formData.r_password !== formData.r_confirmPassword) {
        return message.error('两次密码不一致!')
      }
    }else {
      if(this.state.action === 'login') {
        if(!formData.r_userName || !formData.r_password) {
        return message.error('内容不得为空')
      }
    }
    
    // console.log(formData)
    const {data:{data}} = await request({
      method: 'get',
      url: '/user'
    })
    console.log(data)
    if(data.isLogined) {
      console.log(111)
      this.setState({
        userNickName: data.userInfo.nickName,
        userid: data.userInfo.userid,
        hasLogined: data.isLogined
      })
      this.setModalVisible(false)
      this.setState({menuCurrent: 'top'})
      message.success('登录成功!')
    }
   }
  }
  render() {
    let {getFieldDecorator} = this.props.form
    const userShow = this.state.hasLogined
    ? 
    <Menu.Item key="logout" className="register">
      <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
      {/* <Link target="_blank"> */}
        <Button type="dashed" htmlType="button">个人中心</Button>
      {/* </Link> */}
      <Button type="ghost" htmlType="button">退出</Button>
    </Menu.Item>
    :
    <Menu.Item key="register" className="register">
      <Icon type="appstore"/>注册/登录
    </Menu.Item>
    return (
      <header>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <a href="/" className="logo">
              <img src={require('../assests/images/logo.png')} alt="logo" />
              <span>reactNews</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu mode="horizontal" onClick={this.handleMenuClick} selectedKeys={[this.state.menuCurrent]}>
              {
                this.state.menuLIst.map((item) => {
                  // console.log(item)
                  return (
                    <Menu.Item key={item.key}>
                      <Icon type={item.icon} />{item.name}
                    </Menu.Item>
                  )
                })
              }
              {userShow}
            </Menu>
            <Modal title="用户中心" visible={this.state.modalVis} onCancel={()=>this.setModalVisible(false)} onOk={()=>this.setModalVisible(false)}>
              <Tabs type="card">
                <TabPane tab="登录" key="1">
                  <Form layout="horizontal" onSubmit={this.handleSubmit}>
                    <FormItem label="账户">
                      {getFieldDecorator('r_userName')(<Input placeholder="请输入账户" />)}
                    </FormItem>
                    <FormItem label="密码">
                      {getFieldDecorator('r_password')(<Input type="password" placeholder="请输入密码" />)}
                    </FormItem>
                    {/* <FormItem label="确认密码">
                      {getFieldDecorator('r_confirmPassword')(<Input type="password" placeholder="请输入再次输入密码" />)}
                    </FormItem> */}
                    <Button type="primary" htmlType="submit">登录</Button>
                  </Form>
                </TabPane>
                <TabPane tab="注册" key="2">
                  <Form layout="horizontal" onSubmit={this.handleSubmit}>
                    <FormItem label="账户">
                      {getFieldDecorator('r_userName')(<Input placeholder="请输入账户" />)}
                    </FormItem>
                    <FormItem label="密码">
                      {getFieldDecorator('r_password')(<Input type="password" placeholder="请输入密码" />)}
                    </FormItem>
                    <FormItem label="确认密码">
                      {getFieldDecorator('r_confirmPassword')(<Input type="password" placeholder="请输入再次输入密码" />)}
                    </FormItem>
                    <Button type="primary" htmlType="submit">注册</Button>
                  </Form>
                </TabPane>
              </Tabs>
            </Modal>
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    )
  }
}

export default PCHeader = Form.create({})(PCHeader)
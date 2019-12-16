import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import {Icon, Modal, Tabs, message, Form, Input, Button } from 'antd';
import request from '../api/axios'
const FormItem = Form.Item;
const { TabPane } = Tabs;

class MobileHeader extends Component {
  constructor() {
    super()
    this.state = {
      // 模态框
      modalVis: false,
      // 控制登录登出
      action: 'login',
      // 登录状态
      hasLogined: false,
      userNickName: '',
      userid: 0
    }
  }
  login = () => { 
    this.setModalVisible(true)
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
    if (!formData.r_userName || !formData.r_password || !formData.r_confirmPassword) {
      return message.error('内容不得为空')
    }
    if (formData.r_password !== formData.r_confirmPassword) {
      return message.error('两次密码不一致!')
    }
    // console.log(formData)
    const { data: { data } } = await request({
      method: 'get',
      url: '/user'
    })
    console.log(data)
    if (data.isLogined) {
      console.log(111)
      this.setState({
        userNickName: data.userInfo.nickName,
        userid: data.userInfo.userid,
        hasLogined: data.isLogined
      })
      this.setModalVisible(false)
    }
  }
  render() {
    let { getFieldDecorator } = this.props.form
    const userShow = this.state.hasLogined
      ?
      <Icon type="inbox" />
      :
      <Icon type="setting" onClick={this.login} />
    return (
      <div id="mobileheader">
        <header>
          <img src={require('../assests/images/logo.png')} alt="logo" />
          <span>reactNews</span>
          {userShow}
        </header>
        <Modal title="用户中心" visible={this.state.modalVis} onCancel={() => this.setModalVisible(false)} onOk={() => this.setModalVisible(false)}>
          <Tabs type="card">
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
      </div>
    )
  }
}
export default MobileHeader = Form.create({})(MobileHeader)
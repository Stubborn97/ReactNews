import React, {Component} from 'react'
import {Tabs} from 'antd'
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
const {TabPane} = Tabs

export default class MobileINdex extends Component {
  constructor() {
    super()
    this.state = {
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
  render() {
    return(
      <div>
        <MobileHeader></MobileHeader>
        <Tabs>
          {
            this.state.menuLIst.map((item) => {
              return <TabPane tab={item.name} key={item.key}></TabPane>
            })
          }
          <TabPane></TabPane>
        </Tabs>
        <MobileFooter></MobileFooter>
      </div>
    )
  }
}
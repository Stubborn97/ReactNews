import React, {Component} from 'react'
import {Card} from 'antd'
// import { BrowserRouter as Router,Route,Link} from 'react-router-dom'
import request from '../api/axios'

export default class PCNewsBlock extends Component {
  constructor() {
    super()
    this.state = {
      news: []
    }
  }
  componentWillMount() {
    this.getNews()
  }
  getNews =  async () => {
    const {data} = await request({method: 'get', url: '/news'})
    // console.log(data.data)
    data.status === 200 && this.setState({news: data.data.data})
  }
  render() {
    return (
      <div className="topNewsList">
        <Card>
          <ul>
            {
              this.state.news.length ? this.state.news.map((item) => {
                return (
                  <li key={item.id}>                  
                    {item.name}                        
                  </li>
                )
              })
              :
              "没有加载到任何新闻数据"
            }
          </ul>
        </Card>
      </div>
    )
  }
}
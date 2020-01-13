import React, { Component } from 'react'
// import { Card } from 'antd'
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
  getNews = async () => {
    const { data } = await request({ method: 'get', url: '/newlist' })
    // console.log(data.data)
    data.status === 200 && this.setState({ news: data.data.data })
  }
  render() {
    const styleImage = {
      display: 'block',
      width: '110px',
      heigth: '80px'
    }
    const styleH3 = {
      width: '110px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      fontSize: '14px',
      textOverflow: "ellipsis"
    }
    return (
      <div className="newsList">
          <div className="custom-title">aaa</div>
          <div className="clearfix">
             {
            this.state.news.length ? this.state.news.map((item) => {
              return (
                <div className="custom" key={item.id}>
                  <div className="custom-image">
                    <img style={styleImage} src={require('../assests/images/carousel_1.jpg')} alt="" />
                  </div>
                  <div className="custom-card">
                    <h3 style={styleH3}>{item.name}</h3>
                  </div>
                </div>
              )
            })
              :
              "没有加载到任何新闻数据"
          }
          </div>
         
      </div>
    )
  }
}
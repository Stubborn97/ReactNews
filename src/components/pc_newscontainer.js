import React, {Component} from 'react'
import {Row, Col, Tabs, Carousel} from 'antd'
import PCNewsBlock from './pc_news_block'
import PCNewsImageBlock from './pc_news_image_block'

const {TabPane} = Tabs

export default class PCNewsContainer extends Component {
  render() {
    const setting = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true
    }
    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} className="container">
            <div className="leftContainer">
              <div className="carousel">
                <Carousel {...setting}>
                  <div>
                    <img src={require('../assests/images/carousel_1.jpg')} alt="" />
                  </div>
                  <div>
                    <img src={require('../assests/images/carousel_2.jpg')} alt="" />
                  </div>
                  <div>
                    <img src={require('../assests/images/carousel_3.jpg')} alt="" />
                  </div>
                  <div>
                    <img src={require('../assests/images/carousel_4.jpg')} alt="" />
                  </div>
                </Carousel>
              </div>
              <PCNewsImageBlock></PCNewsImageBlock>
            </div>
            <Tabs>
              <TabPane tab="头条新闻" key="1">
                <PCNewsBlock></PCNewsBlock>
              </TabPane>
              <TabPane tab="新闻" key="2">
                <PCNewsBlock></PCNewsBlock>
              </TabPane>
            </Tabs>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}
import React, {Component} from 'react'
import PCHeader from './pc_header'
import PCFooter from './pc_footer'
import PCNewsContainer from './pc_newscontainer'
export default class PCINdex extends Component {
  render() {
    return(
      <div>
        <PCHeader></PCHeader>
        <PCNewsContainer></PCNewsContainer>
        <PCFooter></PCFooter>
      </div>
    )
  }
}
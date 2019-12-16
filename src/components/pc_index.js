import React, {Component} from 'react'
import PCHeader from './pc_header'
import PCFooter from './pc_footer'
export default class PCINdex extends Component {
  render() {
    return(
      <div>
        <PCHeader />
        <PCFooter></PCFooter>
      </div>
    )
  }
}
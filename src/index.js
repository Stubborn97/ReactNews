import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index'
import 'antd/dist/antd.css';
import './assests/css/pc.css';
import './assests/css/mobile.css';

export default class Root extends React.Component{
  render() {
    return (
     <div>
       <MediaQuery query='(min-device-width: 1224px)'>
         <PCIndex />
       </MediaQuery>
       <MediaQuery query='(max-device-width: 1224px)'>
         <MobileIndex />
       </MediaQuery>
     </div>
    )
  }
}
ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

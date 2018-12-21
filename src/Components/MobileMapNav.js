import React, { Component } from 'react';
import Exit from '../media/mobile_exit.png';
import '../Styles/MobileBottomNav.css';

export default class extends Component {

  constructor(props){
    super(props);
 }


  render(){
    return(
        <div className="m_bottom_nav">
          <ul>
            <li style={{borderColor: "#FF5D00"}}>Digital</li>
            <li>Branding</li>
          </ul>
        </div>
    )
  }
}
import React, { Component } from 'react';
import '../Styles/MobileBottomNav.css';
import MobileExit from '../media/mobile_exit.png';

export default class extends Component {



  render(){
    return(
        <div className="m_bottom_nav">
          <ul>
            <li className="mobile_nav_active">About us</li>
            <li>Services</li>
            <li>Team</li>
            <li>Career</li>
            <li>Awards</li>
          </ul>
        </div>
    )
  }
}
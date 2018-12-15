import React, { Component } from 'react';
import Exit from '../media/mobile_exit.png';
import '../Styles/MobileBottomNav.css'

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
          <img src={Exit}/>
        </div>
    )
  }
}
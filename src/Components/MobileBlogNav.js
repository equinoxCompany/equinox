import React, { Component } from 'react';
import Exit from '../media/mobile_exit.png';
import '../Styles/MobileBottomNav.css'

export default class extends Component {

  constructor(props){
    super(props);
 }

  render(){
    return(
        <div className="m_bottom_nav">
          <ul>
            <li>All time</li>
            <li className="mobile_nav_active">Design</li>
            <li>SEO</li>
            <li>WEB</li>
            <li>Other</li>
          </ul>
        </div>
    )
  }
}
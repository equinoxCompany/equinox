import React, { Component } from 'react';
import '../Styles/MobileNav.css'

export default class extends Component {
  render(){
    return(
        <div className="mobile_nav">
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
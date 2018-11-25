import React, { Component } from 'react';
import Exit from '../media/mobile_exit.png';
import '../Styles/MobileBlogNav.css'

export default class extends Component {
  render(){
    return(
        <div className="blog_nav">
          <ul>
            <li>All time</li>
            <li className="mobile_nav_active">Design</li>
            <li>SEO</li>
            <li>WEB</li>
            <li>Other</li>
          </ul>
          <img src={Exit}/>
        </div>
    )
  }
}
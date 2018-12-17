import React, { Component } from 'react'
import '../Styles/MobileNav.css'
import MobileNav from '../media/mobile_nav.png'

export default class extends Component {
  render(){
    return(
        <div className="mobile_nav">
          <img src={MobileNav}/>
        </div>
    )
  }
}
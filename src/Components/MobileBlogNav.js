import React, { Component } from 'react';
import Exit from '../media/mobile_exit.png';
import '../Styles/MobileBottomNav.css'

export default class extends Component {
<<<<<<< HEAD

  constructor(props){
    super(props);
 }

=======
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
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
<<<<<<< HEAD
=======
          <img src={Exit}/>
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
        </div>
    )
  }
}
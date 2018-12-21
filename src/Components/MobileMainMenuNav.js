import React, { Component } from 'react';
import '../Styles/MobileMainMenuNav.css';
import Link from 'react-router-dom/Link';
import * as d3 from "d3";

export default class extends Component {

  componentDidMount(){
    function getOffset( el ) {
      var _x = 0;
      var _y = 0;
      while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
          _x += el.offsetLeft - el.scrollLeft;
          _y += el.offsetTop - el.scrollTop;
          el = el.offsetParent;
      }
      return { top: _y, left: _x };
  }
  var x = getOffset( document.getElementsByClassName('test_nav')[0] ).left; 
  console.log(x);

}

  
    
  render(){
    return(
        <div>
            <ul className="m_main_menu_nav">
              <li data-size="normal">Contacts</li>
              <li className="test_nav" data-size="select">Projects</li>
              <li data-size="normal">About us</li>
              <li data-size="small">Blog</li>
            </ul>
        </div>
        )
      }
    }
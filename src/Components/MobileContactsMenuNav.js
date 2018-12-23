import React, { Component } from 'react';
import '../Styles/MobileMainMenuNav.css';
import Link from 'react-router-dom/Link';
import * as d3 from "d3";

export default class extends Component {

  componentDidMount(){
    function getOffset( el ) {
     
      return el.getBoundingClientRect();
  }
  

  d3.select('.m_main_menu_nav')
    .on('scroll', scrollAnimation)

  scrollAnimation();

    function scrollAnimation(){
      console.log(`Scroll-x ${window.scrollX}`);
      d3.selectAll('.m_main_menu_nav li')
        .each(function(){
          let current_li = d3.select(this).node(),
          display_width = document.body.clientWidth,
          display_center = display_width/2,
          li_left = Number(getOffset(current_li).left),
          li_right = Number(getOffset(current_li).right),
          li_width = Math.abs(li_right - li_left),
          li_correct = li_width/2,
          li_center = li_left+li_correct;
          console.log(`Left: ${li_left} | Right: ${li_right} | Center: ${li_center}`);
          if(li_left < display_center && li_right > display_center){
            d3.select(this)
              .style('font-size', '7vw')
              .style('border-radius', '50%')
              .style('background', '#FF5D00')
              .style('color', 'white')
              .style('display', 'flex')
              .style('align-items', 'center')
              .style('box-shadow', ' inset 0 .5vh 1vh #E35000');
          }else{
            d3.select(this)
              .style('font-size', '5vw')
              .style('border-radius', '50%')
              .style('background', 'transparent')
              .style('color', '#CCCCCC')
              .style('display', 'flex')
              .style('align-items', 'flex-end')
              .style('box-shadow', 'none');
          }
          if(li_left < 0){
            console.log(`Li right: ${li_right} || Li left: ${li_left}`)
            d3.select(this)
              .style('margin-top', '10vw')
          }else if(li_right > display_width){
            d3.select(this)
              .style('margin-top', '10vw')
          }else{
            d3.select(this)
              .style('margin-top', '0')
          }

      });
    }

  d3.select('body').style('touch-action', 'none');


  

}

  
    
  render(){
    return(
        <div>
            <ul className="m_main_menu_nav">
              <li></li>
              <Link to='join-the-crew'><li>Join the Crew</li></Link>
              <Link to='join-the-crew'><li>Start a project</li></Link>
              <Link to='join-the-crew'><li>Say Hi!</li></Link>
              <li></li>
            </ul>
            <div className="m_main_scroll_to_choose">Scroll to choose</div>
        </div>
        )
      }
    }
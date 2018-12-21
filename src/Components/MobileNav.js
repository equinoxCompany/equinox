import React, { Component } from 'react';
import '../Styles/MobileNav.css';
import MobileNav from '../media/mobile_nav.png';
import * as d3 from "d3";
import Link from 'react-router-dom/Link';


export default class extends Component {

  componentDidMount(){
    d3.select('.mobile_nav img')
      .on('click', function(){
        d3.select(this.parentNode)
        .call(function(e){
           let flag = e.attr('data-visible');
           if(flag == 'false'){
              d3.select('.m_nav_list')
                .call(function(nav){
                  nav.style('display', 'block');
              e.attr('data-visible','true');
             });
           }else{
              d3.select('.m_nav_list')
                  .call(function(nav){
                  nav.style('display', 'none');
              e.attr('data-visible','false');
              });
            }
        });
      });

  }

  render(){
    return(
        <div className="mobile_nav" data-visible="false">
          <img src={MobileNav}/>
          <ul className="m_nav_list">
            <li className="m_nav_burger_circle">
            </li>
            <Link to="projects"><li className="m_nav_project_circle">
              <span>Projects</span>
            </li></Link>
            <Link to="blog"><li className="m_nav_blog_circle">
              <span>Blog</span>
            </li></Link>
            <Link to="contacts"><li className="m_nav_contacts_circle">
              <span>Contacts</span>
            </li></Link>
            <Link to="home"><li className="m_nav_home_circle">
              <span>Home</span>
            </li></Link>
          </ul>
        </div>
    )
  }
}
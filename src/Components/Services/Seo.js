import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Logo';
import Socials from '../Socials';
import '../../Styles/ServiceType.css';

export default class extends Component {
  render(){
    return(
      <div className="services-seo">
        <Logo/>
        <div className="services-menu-exit"></div>
        <div className="services-seo-title">
          Type of jobs
        </div>
        <div className="services-seo-info">
        <div className="services-seo-text">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. Cum
        sociis natoque penatibus et magnis disparturient montes,
        nascetur ridiculus mus. Donec quam felis, ultricies nec, 
        pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. 
        </div>
        <div className="services-seo-image"></div>
        </div>
        <Socials/>
      </div>
    )
  }
}
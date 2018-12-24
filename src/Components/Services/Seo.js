import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Logo';
import Exit from '../../media/exit.png';
import Map from '../../media/map.png';
import Service_img from '../../media/service_img.png';
import Socials from '../Socials';
import '../../Styles/ServiceType.css';

export default class extends Component {
  render(){
    return(
      <div className="services-seo">
        <Logo/>
        <div className="service_actions">
          <Link to="/map"><img src={Map} className="button_service_map"/></Link>
          <Link to="/services"><img src={Exit} className="button_service_exit"/></Link>
        </div>
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
        <img src={Service_img} className="service_img"/>
        </div>
        <Socials/>
      </div>
    )
  }
}
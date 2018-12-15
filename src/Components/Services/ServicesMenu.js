import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Logo';
import Exit from '../../media/exit.png';
import Map from '../../media/map.png';
import Socials from '../Socials';
import '../../Styles/ServicesMenu.css';
import MobileBlogNav from '../MobileBlogNav';
import MobileNav from '../MobileNav';
import MobileMap from '../../media/mobile_map.png';
import MobileServiceImg from '../../media/service_img.png'

export default class extends Component {
  constructor(props){
    super(props);
    this.state = {
      visibility: window.innerWidth >= 768 ? true : false
    }
  }

  render(){
    return(
      <div className="services-menu">
      {
        this.state.visibility ?( <div>
      <Logo/>
      <div className="service_actions">
          <Link to="map"><img src={Map} className="button_service_map"/></Link>
          <Link to="home"><img src={Exit} className="button_service_exit"/></Link>
      </div>
      <div className="services-menu-exit"></div>
      <div className="service-type-title">
      Digital Strategy
        <div className="service-type-title-circle"></div>
        <div className="service-type-line-one"></div>
      </div>
      <div className="service-type-line-two">
      </div>
      <div className="services-menu-nav">
      <ul>
        <li>
          <Link to="service">
          <div className="service-type-circle-wrap">
          <div className="service-type-circle-connection"></div>
          <div className="service-type-circle">Type of Jobs</div>
          </div>
          </Link>  
        </li>
        <li>
          <div className="service-type-circle-wrap">
          <div className="service-type-circle-connection"></div>
          <div className="service-type-circle">Type of Jobs</div>
          </div>
        </li>
        <li>
          <div className="service-type-circle-wrap">
          <div className="service-type-circle-connection"></div>
          <div className="service-type-circle">Type of Jobs</div>
          </div>
        </li>
        <li>
          <div className="service-type-circle-wrap">
          <div className="service-type-circle-connection"></div>
          <div className="service-type-circle">Type of Jobs</div>
          </div>
        </li>
        <li>
          <div className="service-type-circle-wrap">
          <div className="service-type-circle-connection"></div>
          <div className="service-type-circle">Type of Jobs</div>
          </div>
        </li>
        <li>
          <div className="service-type-circle-wrap">
          <div className="service-type-circle-connection"></div>
          <div className="service-type-circle">Type of Jobs</div>
          </div>
        </li>
        <li>
          <div className="service-type-circle-wrap">
          <div className="service-type-circle-connection"></div>
          <div className="service-type-circle">Type of Jobs</div>
          </div>
        </li>
      </ul>
      <div className="services-menu-scroll">
        <div className="services-menu-scroller"></div>
      </div>
      <div className="services-menu-explore">
        <h1>Explore all map</h1>
      </div>
      </div>
      <Socials/>
      </div>):(
        <div className="m_service_page">
          <MobileNav/>
          <section className="m_service_info">
            <h3>Open full map</h3>
            <img src={MobileMap} className="m_services_map"/>
            <h1>SERVICE TITLE</h1>
            <img src={MobileServiceImg} className="m_service_img"/>
            <p>Let’s face it: the digital age has introduced 
a bunch of new players on the block. 
Hey, you might be literally going up against
a computer. That’s where we comes 
in–our team has winning visual and 
interactive combos at our fingertips to take 
brands and businesses to the next level, 
and we have fun doing it.</p>
          </section>
        </div>
      )
    }
      </div>
    )
  }
}
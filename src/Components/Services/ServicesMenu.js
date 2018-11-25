import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Logo';
import Exit from '../../media/exit.png';
import Map from '../../media/map.png';
import Socials from '../Socials';
import '../../Styles/ServicesMenu.css';
import MobileBlogNav from '../MobileBlogNav';

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
        <div className="mobile-services-menu">
          <div className="serivices-menu-openmap">Open map</div>
          <div className="mobile-services-menu-header"></div>
          <div className="services-menu-title">SERVICE TITLE</div>
          <div className="services-menu-img">
            <div className="services-menu-img-main"></div>
            <div className="services-menu-img-subs">
              <div className="services-menu-img-sub"><h1>Subtype</h1></div><br/>
              <div className="services-menu-img-sub"><h1>Subtype</h1></div>
            </div> 
          </div>
          <div className="services-menu-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.z
          </div>
          {/* <MobileNav/> */}
        </div>
      )
    }
      </div>
    )
  }
}
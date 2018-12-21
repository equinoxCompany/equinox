import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Logo';
import Exit from '../../media/exit.png';
<<<<<<< HEAD
import MobileExit from '../../media/mobile_exit.png';
import Map from '../../media/map.png';
import Socials from '../Socials';
import '../../Styles/ServicesMenu.css';
import MobileNav from '../MobileNav';
import MobileMap from '../../media/mobile_map.png';
import ServiceImg from '../../media/service_img.png'
=======
import Map from '../../media/map.png';
import Socials from '../Socials';
import '../../Styles/ServicesMenu.css';
import MobileBlogNav from '../MobileBlogNav';
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d

export default class extends Component {
  constructor(props){
    super(props);
    this.state = {
      visibility: window.innerWidth >= 768 ? true : false
    }
  }

<<<<<<< HEAD
  goBack(){
    this.props.history.goBack()
  }

  render(){
    return(
      <div className="services_menu">
      {
        this.state.visibility ?( <div>
      <Logo/>
      <section className="services_scroll_bar">
        <div className="service_actions">
            <Link to="map"><img src={Map} className="button_service_map"/></Link>
            <Link to="home"><img src={Exit} className="button_service_exit"/></Link>
        </div>
        <div className="services_type_strategy">
            <div className="services_type_circle"></div>
            <h2>Digital Strategy</h2>
            <div className="services_type_vertical_line"></div>
            <div className="services_type_horizontal_line"></div>
        </div>
        <ul className="service_type_scroll_selector">
          <li className="service_type_jobs">
            <div className="service_type_jobs_top_circle"></div>
            <div className="service_type_jobs_vertical_line"></div>
            <div className="service_type_jobs_info_circle">
              <h3>Type of jobs</h3>
            </div>
          </li>
          <li className="service_type_jobs">
            <div className="service_type_jobs_top_circle"></div>
            <div className="service_type_jobs_vertical_line"></div>
            <div className="service_type_jobs_info_circle">
              <h3>Type of jobs</h3>
            </div>
          </li>
          <li className="service_type_jobs">
            <div className="service_type_jobs_top_circle"></div>
            <div className="service_type_jobs_vertical_line"></div>
            <div className="service_type_jobs_info_circle">
              <h3>Type of jobs</h3>
            </div>
          </li>
          <li className="service_type_jobs">
            <div className="service_type_jobs_top_circle"></div>
            <div className="service_type_jobs_vertical_line"></div>
            <div className="service_type_jobs_info_circle">
              <h3>Type of jobs</h3>
            </div>
          </li>
          <li className="service_type_jobs">
            <div className="service_type_jobs_top_circle"></div>
            <div className="service_type_jobs_vertical_line"></div>
            <div className="service_type_jobs_info_circle">
              <h3>Type of jobs</h3>
            </div>
          </li>
          <li className="service_type_jobs">
            <div className="service_type_jobs_top_circle"></div>
            <div className="service_type_jobs_vertical_line"></div>
            <div className="service_type_jobs_info_circle">
              <h3>Type of jobs</h3>
            </div>
          </li>
          <li className="service_type_jobs">
            <div className="service_type_jobs_top_circle"></div>
            <div className="service_type_jobs_vertical_line"></div>
            <div className="service_type_jobs_info_circle">
              <h3>Type of jobs</h3>
            </div>
          </li>
        </ul>  
        <div className="service_type_scroll_box">
          <div className="service_type_scroll_button"></div>
        </div>  
        <div className="service_explore_all_map">
          <Link to="map"><img src={Map}/></Link>
          <h3>Explore all map</h3>
        </div>
      </section>
      <section className="service_job_info">
          <h1>Type of jobs</h1>
          <div className="service_job_info_box">
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
Aenean commodo ligula eget dolor. Aenean massa. Cum
sociis natoque penatibus et magnis disparturient montes,
nascetur ridiculus mus. Donec quam felis, ultricies nec, 
pellentesque eu, pretium quis, sem. Nulla consequat massa
quis enim. 
            </p>
            <img src={ServiceImg}/>
          </div>
      </section>

      <Socials/>
      </div>):(
        <div className="m_service_page">
          <MobileNav/>
          <section className="m_service_info">
            <h3>Open full map</h3>
              <Link to="map"><img src={MobileMap} className="m_services_map"/></Link>
            <h1>SERVICE TITLE</h1>
            <img src={ServiceImg} className="m_service_img"/>
            <p>Let’s face it: the digital age has introduced 
a bunch of new players on the block. 
Hey, you might be literally going up against
a computer. That’s where we comes 
in–our team has winning visual and 
interactive combos at our fingertips to take 
brands and businesses to the next level, 
and we have fun doing it.</p>
          </section>
          <img src={MobileExit} onClick={()=>this.goBack()} className="mobile_exit"/>
=======
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
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
        </div>
      )
    }
      </div>
    )
  }
}
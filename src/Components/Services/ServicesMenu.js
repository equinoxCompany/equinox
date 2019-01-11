import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Logo';
import Exit from '../../media/exit.png';
import MobileExit from '../../media/mobile_exit.png';
import Map from '../../media/map.png';
import Socials from '../Socials';
import '../../Styles/ServicesMenu.css';
import MobileNav from '../MobileNav';
import MobileMap from '../../media/mobile_map.png';
import ServiceImg from '../../media/service_img.png'

export default class extends Component {
  constructor(props){
    super(props);
    this.state = {
      visibility: window.innerWidth >= 768 ? true : false,
      services: ''
    }
  }

  componentDidMount(){
    fetch('http://91.225.165.43:3001/service')
      .then(res => res.json())
      .then(services => this.setState({ services }, () => console.log(services)))
  }

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
        {
          this.state.services && this.state.services.map(service => (
            <li className="service_type_jobs">
            <div className="service_type_jobs_top_circle"></div>
            <div className="service_type_jobs_vertical_line"></div>
            <div className="service_type_jobs_info_circle">
              <h3>{service.title}</h3>
            </div>
          </li>
          ))
        }
       
          {/* <li className="service_type_jobs">
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
          </li> */}
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
        </div>
      )
    }
      </div>
    )
  }
}
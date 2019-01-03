import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../Styles/Projects.css';
import Logo from './Logo';
import Socials from './Socials';
import MobileNav from './MobileNav';
import MobileExit from '../media/mobile_exit.png';
import MetaTags from 'react-meta-tags';

export default class extends Component {

  constructor(props){
    super(props);
    this.state = {
      visibility: window.innerWidth >= 768 ? true : false,
      post: {}
    }
 }
 
  componentDidMount(){
    fetch('http://91.225.165.43:3001/seo/projects')
      .then(res => res.json())
      .then(meta => this.setState({meta: meta[0]}))
}

goBack(){
  this.props.history.goBack()
}

  render(){
    return(
      <div className="Post">
        <MetaTags>
            <title>{this.state.meta.title}</title>
            <meta name="description" content={this.state.meta.description}/>
            <meta property="og:title" content={this.state.meta.title} />
          </MetaTags>

      <div>
          {
              this.state.visibility?(
      <div className="projects_page">
        <Logo/>
        <div className="circle_container">
          <div className="bg_circle one"></div>
          <div id="connection_one"></div>
          <div className="bg_circle two"></div>
          <div className="connection_two"></div>
          <div className="bg_circle three"></div>
          <div className="connection_three"></div>
          <div className="bg_circle four"></div>
          <div className="connection_four"></div>
          <div className="bg_circle five"></div>
          <div className="connection_five"></div>
          <div className="bg_circle six"></div>
          <div className="connection_six"></div>
          <div className="bg_circle seven"></div>
          <div className="connection_seven"></div>
          <div className="bg_circle eight"></div>
          <div className="connection_eight"></div>
          <div className="bg_circle nine"></div>
          <div className="connection_nine"></div>
          <div className="bg_circle ten"></div>
          <div className="connection_ten"></div>
          <div className="bg_circle eleven"></div>
          <div className="connection_eleven"></div>
          <div className="bg_circle twelve"></div>
          <div className="connection_twelve"></div>
          <div className="bg_circle thirteen"></div>
          <div className="connection_thirteen"></div>
          <div className="bg_circle fourteen"></div>
          <div className="connection_fourteen"></div>
          <div className="bg_circle fifteen"></div>
          <div className="connection_fifteen"></div>
        </div>
        <Link to="/project">
          <div className="project">
            <div className="first_project_img"></div>
            <div className="project_text_body">
              <div className="project_title">Project Name</div>
              <div className="project_text">Lorem ipsum dolor sit amet, 
              consectetuer adipiscing elit.</div>
              <div className="project_date">12.11.18</div>
          </div>
          </div>
          </Link>
          <div className="project second_proj">
            <div className="project_text_body">
              <div className="project_title">Project Name</div>
              <div className="project_text">Lorem ipsum dolor sit amet, 
              consectetuer adipiscing elit.</div>
              <div className="project_date">12.11.18</div>
          </div>
          <div className="second_project_img"></div>
          </div>
          <div className="project">
            <div className="third_project_img"></div>
            <div className="project_text_body">
              <div className="project_title">Project Name</div>
              <div className="project_text">Lorem ipsum dolor sit amet, 
              consectetuer adipiscing elit.</div>
              <div className="project_date">12.11.18</div>
          </div>
          </div>
          <div className="project fourth_proj">
            <div className="project_text_body">
              <div className="project_title">Project Name</div>
              <div className="project_text">Lorem ipsum dolor sit amet, 
              consectetuer adipiscing elit.</div>
              <div className="project_date">12.11.18</div>
          </div>
          <div className="fourt_project_img"></div>
          </div>
        <Socials/>
      </div>):(
        <div className="m_projects">
          <MobileNav/>
          <div className="m_projects_header">
            <h3>PROJECTS</h3>
          </div>
          <ul className="m_projects_scroll_bar">
          <Link to="project"><li className="m_project_box">
              <div className="m_project_header">
                <div className="m_project_name">
                  <h2>Project name</h2>
                </div>
                <div className="m_project_date">
                  <h2>12.11.18</h2>
                </div>
              </div>
              <span className="m_project_info_delemiter"></span>
              <div className="m_project_bottom">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            </li></Link>
            <li className="m_project_box">
              <div className="m_project_header">
                <div className="m_project_name">
                  <h2>Project name</h2>
                </div>
                <div className="m_project_date">
                  <h2>12.11.18</h2>
                </div>
              </div>
              <span className="m_project_info_delemiter"></span>
              <div className="m_project_bottom">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            </li>
            <li className="m_project_box">
              <div className="m_project_header">
                <div className="m_project_name">
                  <h2>Project name</h2>
                </div>
                <div className="m_project_date">
                  <h2>12.11.18</h2>
                </div>
              </div>
              <span className="m_project_info_delemiter"></span>
              <div className="m_project_bottom">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            </li>
            <li className="m_project_box">
              <div className="m_project_header">
                <div className="m_project_name">
                  <h2>Project name</h2>
                </div>
                <div className="m_project_date">
                  <h2>12.11.18</h2>
                </div>
              </div>
              <span className="m_project_info_delemiter"></span>
              <div className="m_project_bottom">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            </li>
            <li className="m_project_box">
              <div className="m_project_header">
                <div className="m_project_name">
                  <h2>Project name</h2>
                </div>
                <div className="m_project_date">
                  <h2>12.11.18</h2>
                </div>
              </div>
              <span className="m_project_info_delemiter"></span>
              <div className="m_project_bottom">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            </li>
            <li className="m_project_box">
              <div className="m_project_header">
                <div className="m_project_name">
                  <h2>Project name</h2>
                </div>
                <div className="m_project_date">
                  <h2>12.11.18</h2>
                </div>
              </div>
              <span className="m_project_info_delemiter"></span>
              <div className="m_project_bottom">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            </li>
            <li className="m_project_box">
              <div className="m_project_header">
                <div className="m_project_name">
                  <h2>Project name</h2>
                </div>
                <div className="m_project_date">
                  <h2>12.11.18</h2>
                </div>
              </div>
              <span className="m_project_info_delemiter"></span>
              <div className="m_project_bottom">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            </li>
            <li className="m_project_box">
              <div className="m_project_header">
                <div className="m_project_name">
                  <h2>Project name</h2>
                </div>
                <div className="m_project_date">
                  <h2>12.11.18</h2>
                </div>
              </div>
              <span className="m_project_info_delemiter"></span>
              <div className="m_project_bottom">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            </li>
            <li className="m_project_box">
              <div className="m_project_header">
                <div className="m_project_name">
                  <h2>Project name</h2>
                </div>
                <div className="m_project_date">
                  <h2>12.11.18</h2>
                </div>
              </div>
              <span className="m_project_info_delemiter"></span>
              <div className="m_project_bottom">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            </li>
          </ul>
          <img src={MobileExit} onClick={()=>this.goBack()} className="mobile_exit"/>
        </div>
        )}
        </div>
        </div>
    )
  }
}
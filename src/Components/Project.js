import React, {Component} from 'react';
import Logo from '../Components/Logo';
import Socials from '../Components/Socials';
import '../Styles/Project.css';
import {Redirect } from 'react-router-dom';
import Exit from '../media/exit.png';
import MobileNav from './MobileNav';
import Planet from '../media/planet_projects.png';
import MobileExit from '../media/mobile_exit.png';
import Graph from '../media/graph.png';
import { Link } from 'react-router-dom';

export default class extends Component {
  constructor(props){
    super(props);
    this.state = {
      visibility: window.innerWidth >= 768 ? true : false,
      post: {}
    }
}
  goBack(){
      this.props.history.goBack()
  }
  render(){
    return(
      <div>
          {
              this.state.visibility?(
      <div>
        {/* <Logo/> */}
        <div className="post_actions">
        <img src={Exit} onClick={()=>this.goBack()} className="button_exit"/>
        </div>
        <div className="project_page">
        <div className="content_top">
          <div className="content_img"></div>
          <div className="content_title">
          Project Name
          <div className="content_title_date">12.11.2018</div>
          </div>
          </div>
          <div className="content_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <Socials/>
      </div>):(
        <div className="m_sub_project">
          <MobileNav/>
          <img src={MobileExit} onClick={()=>this.goBack()} className="mobile_exit"/>
          <section className="m_sub_project_info">
            <h1 className="m_sub_projet_title">Project name</h1>
            <img src={Planet} className="m_sub_project_img"/>
            <ul className="m_sub_project_types">
                <li className="m_sub_project_type_circle">
                  <h2>Category</h2>
                </li>
                <li className="m_sub_project_type_circle">
                  <h2>Category</h2>
                </li>
                <li className="m_sub_project_type_circle">
                  <h2>Category</h2>
              </li>
              <li className="m_sub_project_type_circle">
                  <h2>Category</h2>
                </li>
                <li className="m_sub_project_type_circle">
                  <h2>Category</h2>
                </li>
                <li className="m_sub_project_type_circle">
                  <h2>Category</h2>
                </li>
            </ul>
            <div className="m_sub_project_scroll_box">
              <div className="m_sub_project_scroll_button"></div>
            </div>
            <p className="m_sub_project_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing 
elit, sed do eiusmod tempor incididunt ut labore et
 dolore magna aliqua. Ut enim ad minim veniam, 
quis nostrud exercitation ullamco laboris nisi ut aliquip
ex ea commodo consequat. Duis aute irure dolor in 
reprehenderit in voluptate velit esse cillum dolore 
eu fugiat nulla pariatur. Excepteur sint occaecat 
cupidatat non proident, sunt in culpa qui officia 
deserunt mollit anim id est laborum.
            </p>
          </section>
          <section className="m_sub_project_enjoy">
              <h3 className="m_sub_project_enjoy_title">ENJOY OUR JOB?</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
 Aenean commodo ligula eget color. Aenean massa. </p>
              <div className="m_sub_project_start_box">
                <h4>Click to</h4>
                <Link to="join-the-crew"><h3 className="m_sub_project_start_project"><span className="c_color">START A PROJECT</span></h3></Link>
                <h4>For new<br/>achivments</h4>
              </div>
              <img src={Graph}/>
            </section>
        </div>
      )}
      </div>
    )
  }
}
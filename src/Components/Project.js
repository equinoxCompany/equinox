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
import ProjectImg from '../media/planet_projects.png';
import EnjoyImg from '../media/enjoy.png';

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
        <Logo/>
        <div className="project_page">
          <div className="post_actions">
            <img src={Exit} onClick={()=>this.goBack()} className="button_exit"/>
          </div>
          <section className="project_page_info">
            <img className="project_page_img" src={ProjectImg}/>
            <div className="project_page_title">
              <h1>Project name</h1>
              <h3>12.11.18</h3>
            </div>
            <p className="project_page_text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
          </section>
          <section className="project_page_enjoy">
            <h2>Enjoy our job?</h2>
            <div className="project_page_enjoy_underline"></div>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.  </p>
            <div className="project_page_start_project_button">
                Start a project
            </div>
            <img className="project_page_engoy_picture" src={EnjoyImg} />
          </section>

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
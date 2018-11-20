import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../Styles/Projects.css';
import Logo from './Logo';
import Socials from './Socials';


export default class extends Component {
  render(){
    return(
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
      </div>
    )
  }
}
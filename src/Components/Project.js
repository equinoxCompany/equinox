import React, {Component} from 'react';
import Logo from '../Components/Logo';
import Socials from '../Components/Socials';
import '../Styles/Project.css';
import {Redirect } from 'react-router-dom';
import Exit from '../media/exit.png';

export default class extends Component {
  constructor(props){
    super(props);
 }
  goBack(){
      this.props.history.goBack()
  }
  render(){
    return(
      <div>
        <Logo/>
        <img src={Exit} className="services-menu-exit" style={{top: '2vw'}}onClick={()=>this.goBack()}/>
        <div className="project_page">
        <div className="content_top">
          <div className="content_img"></div>
          <div className="content_title">
          Project Name
          <div className="content_title_date">12.11.2018</div>
          </div>
          <div className="side_menu">
        <nav>
          <ul>
            <li className="side_click about_menu trigered_text trigered_one" ><a>Categories</a></li> 
            <li className="side_click services_menu trigered_text trigered_two" ><a >Services</a></li>
            <li className="side_click team_menu trigered_text trigered_three"><a >Categories</a></li>
            <li className="side_click career_menu trigered_text trigered_four" ><a>Categories</a></li>
            <li className="side_click awards_menu trigered_text trigered_five"><a>Categories</a></li>
          </ul>
        </nav>
        <div className="menu_lines">
          <ul>
            <li className="trigered_text trigered_one"><div className="line_after"></div></li>
            <li className="trigered_text trigered_two"><div className="line_after"></div></li>
            <li className="trigered_text trigered_three"><div className="line_after"></div></li>
            <li className="trigered_text trigered_four"><div className="line_after"></div></li>
            <li className="trigered_text trigered_five"><div className="line_after"></div></li>
          </ul>
        </div>
        </div>
          </div>
          <div className="content_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <Socials/>
      </div>
    )
  }
}
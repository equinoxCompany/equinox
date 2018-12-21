import React, {Component} from 'react';
import Logo from '../Components/Logo';
import Socials from '../Components/Socials';
import '../Styles/Project.css';
import {Redirect } from 'react-router-dom';
import Exit from '../media/exit.png';
<<<<<<< HEAD
import MobileNav from './MobileNav';
import Planet from '../media/planet_projects.png';
import MobileExit from '../media/mobile_exit.png';
import Graph from '../media/graph.png';
import { Link } from 'react-router-dom';
=======
import MetaTags from 'react-meta-tags';
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d

export default class extends Component {
  constructor(props){
    super(props);
    this.state = {
<<<<<<< HEAD
      visibility: window.innerWidth >= 768 ? true : false,
      post: {}
    }
}
=======
      meta: ''
    }
 }

 componentDidMount(){
  fetch('http://d29.default-host.net:3002/seo/project')
    .then(res => res.json())
    .then(meta => this.setState({meta: meta[0]}))
}

>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
  goBack(){
      this.props.history.goBack()
  }
  render(){
    return(
      <div>
<<<<<<< HEAD
          {
              this.state.visibility?(
      <div>
=======
        <MetaTags>
          <title>{this.state.meta.title}</title>
          <meta name="description" content={this.state.meta.description}/>
          <meta property="og:title" content={this.state.meta.title} />
        </MetaTags>
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
        <Logo/>
        <img src={Exit} className="services-menu-exit" style={{top: '2vw'}}onClick={()=>this.goBack()}/>
        <div className="project_page">
        <div className="content_top">
          <div className="content_img"></div>
          <div className="content_title">
<<<<<<< HEAD
          Project Namea sf afsadf asgrehgeshdrtsegfd aegeqwagew
=======
          Project Name
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
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
<<<<<<< HEAD
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
=======
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
      </div>
    )
  }
}
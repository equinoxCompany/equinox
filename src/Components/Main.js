import React, {Component} from 'react';
import Logo from './Logo';
import Socials from './Socials';
<<<<<<< HEAD
import MobileMainMenuNav from './MobileMainMenuNav';
import MobileLogo from '../media/equinox.png';
import MainCompanyImg from '../media/logo_blank.png';
import { Link } from 'react-router-dom';
import '../scripts/cursor.js';
import '../Styles/Main.css';
=======
import { Link } from 'react-router-dom';
import '../scripts/cursor.js';
import '../Styles/Main.css';
import MetaTags from 'react-meta-tags';
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d

export default class extends Component {
componentDidMount(){
  document.addEventListener('touchmove', function (event) {
    if (event.scale !== 1) { event.preventDefault(); }
  }, false);
<<<<<<< HEAD
=======
    fetch('http://d29.default-host.net:3002/seo/main')
      .then(res => res.json())
      .then(meta => this.setState({meta: meta[0]}))
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
}

  constructor(props){
    super(props);
    this.state = {
<<<<<<< HEAD
      visibility: window.innerWidth >= 768 ? true : false
    }
  }


=======
      visibility: window.innerWidth >= 768 ? true : false,
      meta: ''
    }
  }

>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
  mouseEnterHandler(){
    let tail = document.getElementsByClassName('tail');
  //  let circle = document.getElementsByClassName('inner_circle');
  //  circle[0].style.animationPlayState = 'running';
    tail[0].style.opacity = 0;
    tail[1].style.opacity = 0;
  }

  mouseLeaveHandler(){
    //let circle = document.getElementsByClassName('inner_circle');
    let tail = document.getElementsByClassName('tail');
    tail[0].style.opacity = 1;
    tail[1].style.opacity = 1;
   // circle[0].style.animationPlayState = 'paused';
  }
  render(){
  
    return (
      <div>
<<<<<<< HEAD
      {
        this.state.visibility ? (
<div id="main">
=======
        <MetaTags>
            <title>{this.state.meta.title}</title>
            <meta name="description" content={this.state.meta.description}/>
            <meta property="og:title" content={this.state.meta.title} />
          </MetaTags>
      {
        this.state.visibility ? (
<div id="main">
          
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
        <div className="header">
        <div className="header_description">Digital and branding studio<br/>Wanna play?</div>
          <div className="circle_big"></div>
        </div>
        <div className="header_desc_logo"></div>
        <div className="game_loader">
          <canvas id="loader_circle"></canvas>
        </div>
        <Logo/>
        <div className="r circle_medium first"></div>
        <div className="r circle_medium second"></div>
        <div className="r circle_medium_small third"></div>
        <div className="r circle_small fourth"></div>
        <div className="menu-nav">
          <nav className="menu">
            <ul>
              <li>
                <div className="subcontain">
                <Link to="/projects" className="menu_projects" onMouseEnter={()=>this.mouseEnterHandler()} onMouseLeave={()=>this.mouseLeaveHandler()}>Projects
                  <div className="underline" style={{backgroundColor:"rgb(58, 58, 58)"}}></div>
                  <div className="grey_container"><div className="grey_circle" style={{backgroundColor:"rgb(58, 58, 58)"}}></div>
                  </div>
                </Link>
                </div>
              </li>
              <li>
                <Link to="/blog" className="blog" onMouseEnter={()=>this.mouseEnterHandler()} onMouseLeave={()=>this.mouseLeaveHandler()} onClick={()=>this.mouseLeaveHandler()}>Blog
                  <div className="underline"  style={{backgroundColor:"rgb(58, 58, 58)"}}></div>
                  <div className="grey_container"><div className="grey_circle" style={{backgroundColor:"rgb(58, 58, 58)"}}></div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="about-us" onMouseEnter={()=>this.mouseEnterHandler()} onMouseLeave={()=>this.mouseLeaveHandler()} onClick={()=>this.mouseLeaveHandler()  }>About us
                  <div className="underline" style={{zIndex: "100"}}></div>
                  <div className="grey_container"><div className="grey_circle" style={{backgroundColor:"rgb(58, 58, 58)"}}></div></div>
                </Link>
              </li>
              <li>
                <Link to="contacts" className="menu_contacts" onMouseEnter={()=>this.mouseEnterHandler()} onMouseLeave={()=>this.mouseLeaveHandler()} onClick={()=>this.mouseLeaveHandler()  }>Contacts
                  <div className="underline" style={{zIndex: "100"}}></div>
                  <div className="grey_container"><div className="grey_circle" style={{backgroundColor:"rgb(58, 58, 58)"}}></div></div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Socials/>
        </div>
        ) : (
<<<<<<< HEAD
        <div className="m_main">
          <img className="m_logo" src={MobileLogo}/>
          <p className="m_main_title_img">Digital and branding studio <br/>
Wanna play?</p>
          <MobileMainMenuNav/>
=======
        <div className="main_mobile">
          <div className="main_mobile_header">
            <p>
              Digital and branding studio<br/>Wanna play?
            </p>
            <div className="main_header_logo"></div>
          </div>
          <div className="mobile_menu_container">
            <div className="mobile_menu_wrapper">
              <Link to="contacts" className="internal">Contacts</Link>
              <Link to="" className="internal">Projects</Link>
              <Link to="about-us" className="internal">About us</Link>
              <Link to="blog" className="internal">Blog</Link>
            </div>
          </div>
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
          <div className="scroll_to_choose">Scroll to choose</div>
          <div className="socials_mobile">
          <ul>
            <li><a href="">fb</a></li>
            <li><a href="">tw</a></li>
            <li><a href="">in</a></li>
          </ul>
        </div>
        </div>)
      }
      </div>
    );
  }
}

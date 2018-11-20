import React, {Component} from 'react';
import Logo from './Logo';
import Socials from './Socials';
import { Link } from 'react-router-dom';
import Loader from '../Components/Loader';
import '../scripts/cursor.js';
import '../Styles/Main.css';

export default class extends Component {
componentDidMount(){
  document.addEventListener('touchmove', function (event) {
    if (event.scale !== 1) { event.preventDefault(); }
  }, false);
}

  constructor(props){
    super(props);
    this.state = {
      visibility: window.innerWidth >= 768 ? true : false
    }
  }

  mouseEnterHandler(){
    let tail = document.getElementsByClassName('tail');
    tail[0].style.opacity = 0;
    tail[1].style.opacity = 0;
  }

  mouseLeaveHandler(){
    let tail = document.getElementsByClassName('tail');
    tail[0].style.opacity = 1;
    tail[1].style.opacity = 1;
  }
  render(){
  
    return (
      <div>
      {
        this.state.visibility ? (
<div id="main">
        <div className="header">
        <div className="header_description">Digital and branding studio<br/>Wanna play?</div>
          <div className="circle_big"></div>
        </div>
        <div className="header_desc_logo"></div>
        <div className="game_loader">
          <canvas id="loader_circle" ></canvas>
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
                <Link to="projects" className="projects" onMouseEnter={()=>this.mouseEnterHandler()} onMouseLeave={()=>this.mouseLeaveHandler()} onClick={()=>this.mouseLeaveHandler()}>Projects
                  <div className="underline"  style={{backgroundColor:"rgb(58, 58, 58)"}}></div>
                    <div className="grey_container"><div className="grey_circle" style={{backgroundColor:"rgb(58, 58, 58)"}}></div>
                  </div>
                </Link>
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
              <Link to="projects" className="internal">Projects</Link>
              <Link to="about-us" className="internal">About us</Link>
              <Link to="blog" className="internal">Blog</Link>
            </div>
          </div>
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

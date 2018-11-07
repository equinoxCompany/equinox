import React , { Component } from 'react';
import Logo from './Logo';
import Socials from './SocialsV2';
import MobileNav from './MobileNav'
import Link from 'react-router-dom/Link'
import '../Styles/Blog.css'

export default class extends Component {
  constructor(props){
    super(props);
    this.state = {
      visibility: window.innerWidth >= 768 ? true : false
    }
    
  }
  goBack(){
    if(!this.state.map){
    this.props.history.goBack();
    }
  }
  render(){
    return(
      <div className="blog">
      {
        this.state.visibility ? (
        <div>
        <Logo/>
          <div className="blog_upper"><h1 className="choose">CHOOSE</h1><h1 className="theme">THEME</h1></div>
          <div className="middle_upper">
            <ul>
              <Link to="/seo"><li><div className="middle_upper_line"></div>SEO</li></Link>
              <li><div className="middle_upper_line"></div>DESIGN</li>
            </ul>
          </div>
          <div className="middle"><div className="middle_line"></div><h1>WEB</h1></div>
          <div className="middle_lower"><div className="middle_line"></div><h1>OTHER</h1></div>
      <Socials/>
      </div>
        ) : (
          <div className="mobile_blog">
            <h1>BLOG</h1>
            <div className="mobile_blog_nav">
              <ul>
                <li className="mobile_blog blog_first">
                <div className="mobile_blog_context">
                  <div className="blog_date">12.11</div> <h1>HelloPeople<br/>
                    stories</h1>
                </div>
                <div className="mobile_blog_circle"></div>
                <div className="mobile_blog_circle_second"></div>
                </li>
                <li className="mobile_blog blog_second">
                <Link to="seo">
                <div className="mobile_blog_context">
                <div className="blog_date">09.11</div><h1>SEO<br/>
                Is<span style={{color: 'rgb(270, 92, 20)'}}>ART</span><br/>
                  future</h1>
                </div>
                </Link>
                </li>
                <li className="mobile_blog blog_third"> 
                <div className="mobile_blog_context">
                <div className="blog_date">31.10</div><h1>Design<br/>
                Is<span style={{color: 'rgb(270, 92, 20)'}}>About</span> <br/>
                  stories</h1>
                </div>
                </li>
                <li className="mobile_blog blog_fourth">
                <div className="mobile_blog_context">
                <div className="blog_date">12.11</div><h1>Done<br/>
                  When<br/>
                  stories</h1>
                </div>
                </li>
                <li className="mobile_blog blog_fifth">
                <div className="mobile_blog_context">
                <div className="blog_date">09.11</div><h1>
                  Design<br/>
                  IsAbout<br/>
                  stories<br/>
                  </h1>
                </div>
                </li>
              </ul>
            </div>
            <MobileNav/>
            <div className="mobile_contacts_exit mobile_blog_exit" onClick={()=>this.goBack()}><h1>X</h1>
            </div>
          </div>
        )
      }
      </div>
     
    )
  }
}
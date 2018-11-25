import React , { Component } from 'react';
import Logo from './Logo';
import Socials from './SocialsV2';
import MobileBlogNav from './MobileBlogNav';
import MobileNav from './MobileNav';
import Link from 'react-router-dom/Link';
import '../Styles/Blog.css';
import Search_img from '../media/mobile_search.png';

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
            <MobileNav/>
            <div className="mobile_blog_header">
              <h3>BLOG</h3>
              <img src={Search_img}/>
            </div>
            <div className="mobile_blog_content">
              <div className="mobile_blog_circles">
                <div className="mobile_blog_left_circle"></div>
                <div className="mobile_blog_right_circle"></div>
              </div>
              <div className="mobile_blog_post_list">
                <ul>
                  <li className="mobile_blog_post mobile_blog_post_small">
                    <div className="mobile_blog_post_date">12.11</div>
                    <div className="mobile_blog_post_data">
                      <h3>SEO</h3>
                      <h2>Hello<span className="c_color">People</span></h2>
                      <h3>stories</h3>
                    </div>
                  </li>
                  <li className="mobile_blog_post mobile_blog_post_average">
                    <div className="mobile_blog_post_date">09.11</div>
                    <div className="mobile_blog_post_data">
                      <h3>SEO</h3>
                      <h2>Is<span className="c_color">ART</span></h2>
                      <h3>future</h3>
                    </div>
                  </li>
                  <li className="mobile_blog_post mobile_blog_post_large">
                    <div className="mobile_blog_post_date">31.10</div>
                    <div className="mobile_blog_post_data">
                      <h3>Design</h3>
                      <h2>Is<span className="c_color">About</span></h2>
                      <h3>stories</h3>
                    </div>
                  </li>
                  <li className="mobile_blog_post mobile_blog_post_average">
                    <div className="mobile_blog_post_date">12.11</div>
                    <div className="mobile_blog_post_data">
                      <h3>Done</h3>
                      <h2><span className="c_color">When</span></h2>
                      <h3>stories</h3>
                    </div>
                  </li>
                  <li className="mobile_blog_post mobile_blog_post_small">
                    <div className="mobile_blog_post_date">12.11</div>
                    <div className="mobile_blog_post_data">
                      <h3>Design</h3>
                      <h2>Is<span className="c_color">About</span></h2>
                      <h3>stories</h3>
                    </div>
                  </li>
                  <li className="mobile_blog_post mobile_blog_post_small">
                    <div className="mobile_blog_post_date">12.11</div>
                    <div className="mobile_blog_post_data">
                      <h3>Design</h3>
                      <h2>Is<span className="c_color">About</span></h2>
                      <h3>stories</h3>
                    </div>
                  </li>
                  <li className="mobile_blog_post mobile_blog_post_small">
                    <div className="mobile_blog_post_date">12.11</div>
                    <div className="mobile_blog_post_data">
                      <h3>Design</h3>
                      <h2>Is<span className="c_color">About</span></h2>
                      <h3>stories</h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <MobileBlogNav/>
          </div>
        )
      }
      </div>
     
    )
  }
}
import React , { Component } from 'react';
import Logo from './Logo';
import Socials from './SocialsV2';
<<<<<<< HEAD
import '../Styles/Blog.css';
import search_img from '../media/search.png';
import BlogPost from './BlogPost';
import Search_img from '../media/mobile_search.png';
import MobileExit from '../media/mobile_exit.png';
import MobileBlogNav from './MobileBlogNav';
import MobileNav from './MobileNav';
import {Link} from 'react-router-dom';

export default class extends Component {
  componentDidMount(){
    fetch('http://d29.default-host.net:3002/posts')
      .then(res => res.json())
      .then(posts => this.setState({posts}))
  }

=======
import MobileBlogNav from './MobileBlogNav';
import MobileNav from './MobileNav';
import Link from 'react-router-dom/Link';
import '../Styles/Blog.css';
import Search_img from '../media/mobile_search.png';
import MetaTags from 'react-meta-tags';


export default class extends Component {
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
  constructor(props){
    super(props);
    this.state = {
      visibility: window.innerWidth >= 768 ? true : false,
<<<<<<< HEAD
      posts: []
    }
  }

=======
      meta: ''
    }
  }

  componentDidMount(){
    fetch('http://d29.default-host.net:3002/seo/blog')
      .then(res => res.json())
      .then(meta => this.setState({meta: meta[0]}))
  }

>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
  goBack(){
    if(!this.state.map){
    this.props.history.goBack();
    }
  }
<<<<<<< HEAD


  render(){
    return(
      <div className="Seo">
      <div>
        {
          this.state.visibility ?(
            <div className="blog_canvas">
              <div className="blog_area">
                {
                  this.state && this.state.posts && this.state.posts.map(post => 
                    <BlogPost item={post}/>
                  )
                }
              
              </div>
              <div className="post_delimiter"></div>
              <div className="post_controller">
                <div className="post_type_selector">
                  <span className="first_type">DESIGN</span>
                  <span className="second_type active">SEO</span>
                  <span className="third_type">WEB</span>
                </div>
                <div className="post_search">
                  <input type="text" placeholder="Search"/>
                  <img src={search_img}/>
                </div>
                <div className="posts_selector">
                  <span>Show for...</span>
                  <div className="number_posts_selector">
                    <div className="selector_circle"></div>
                    <select>
                      <option>All time</option>
                      <option>Recently</option>
                    </select>
                  </div>
                </div>
                <div className="posts_selector">
                  <span>Tabs per page...</span>
                  <div className="size_posts_selector">
                    <div className="selector_circle"></div>
                    <select>
                      <option>Two</option>
                    </select>
                  </div>
                </div>
                <div className="posts_calendar">
                  <span>Calendar</span>
                  <h2>1 2 3 4 5 6 7<br/> 8 9 10 11 12 13 14<br/>
                15 16 17 18 19 20 21 <br/>22 23 24 25 26 27 28<br/>29 30</h2>
                </div>
              </div>
              <Logo/>
              <Socials/>
            </div>
          ):(
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
      <Link to="post"><li className="mobile_blog_post mobile_blog_post_large">
        <div className="mobile_blog_post_date">31.10</div>
        <div className="mobile_blog_post_data">
          <h3>Design</h3>
          <h2>Is<span className="c_color">About</span></h2>
          <h3>stories</h3>
        </div>
      </li></ Link>
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
<img src={MobileExit} onClick={()=>this.goBack()} className="mobile_exit"/>
</div>
          )
        }
      </div>
      </div>
=======
  render(){
    return(
      <div className="blog">
          <MetaTags>
            <title>{this.state.meta.title}</title>
            <meta name="description" content={this.state.meta.description}/>
            <meta property="og:title" content={this.state.meta.title} />
          </MetaTags>
      {
        this.state.visibility ? (
        <div>
      
        <Logo/>
          <div className="blog_upper"><h1 className="choose">CHOOSE</h1><h1 className="theme">THEME</h1></div>
          <div className="middle_upper">
          {
            console.log(this.state.meta.title)
          }
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
     
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
    )
  }
}
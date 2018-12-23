import React , { Component } from 'react';
import Logo from './Logo';
import Socials from './SocialsV2';
import '../Styles/Blog.css';
import search_img from '../media/search.png';
import BlogPost from './BlogPost';
import Search_img from '../media/mobile_search.png';
import MobileExit from '../media/mobile_exit.png';
import MobileBlogNav from './MobileBlogNav';
import MobileNav from './MobileNav';
import {Link} from 'react-router-dom';
import * as d3 from "d3";

export default class extends Component {
  componentDidMount(){
    fetch('http://d29.default-host.net:3002/posts')
      .then(res => res.json())
      .then(posts => this.setState({posts}));


      function getOffset(el) {
        return el.getBoundingClientRect();
    }
    
  
    d3.select('.mobile_blog_content')
      .on('scroll', scrollAnimation)
    
    scrollAnimation();
   
      function scrollAnimation(){
        let scroll_box = d3.select('.mobile_blog_content').node();
        let scroll_box_sizes = scroll_box.getBoundingClientRect();
        let scroll_box_width = scroll_box_sizes.right;
        let scroll_box_height = scroll_box_sizes.bottom - scroll_box_sizes.top;
        let section_heigh = (scroll_box_width * 28)/100;
        let center_box = Math.round((scroll_box_height/2) + scroll_box_sizes.top);
        let second_section = section_heigh/3;
        let third_section = section_heigh;

        d3.selectAll('.mobile_blog_post_list li')
          .each(function(){
            let e = d3.select(this).node();
            let e_sizes = getOffset(e);
            let e_top = e_sizes.top;
            let e_bottom = e_sizes.bottom;
            if(e_bottom < center_box - third_section || e_top > center_box + third_section){
              d3.select(this)
              .classed('mobile_blog_post_average', false)
              .classed('mobile_blog_post_large', false)
              .classed('mobile_blog_post_small', true);
            } else if(e_bottom <= center_box - second_section || e_top >= center_box + second_section/2){
              d3.select(this)
              .classed('mobile_blog_post_small', false)
              .classed('mobile_blog_post_large', false)
              .classed('mobile_blog_post_average', true);
            } else if(e_top < center_box && e_bottom > center_box ){
              d3.select(this)
              .classed('mobile_blog_post_large', true)
              .classed('mobile_blog_post_small', false)
              .classed('mobile_blog_post_average', false);
            }
        });
      }
  

  }



  constructor(props){
    super(props);
    this.state = {
      visibility: window.innerWidth >= 768 ? true : false,
      posts: []
    }
  }

  goBack(){
    if(!this.state.map){
    this.props.history.goBack();
    }
  }


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
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello<span className="c_color">People</span></h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello<span className="c_color">People</span></h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello<span className="c_color">People</span></h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello<span className="c_color">People</span></h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello<span className="c_color">People</span></h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello<span className="c_color">People</span></h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello<span className="c_color">People</span></h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello<span className="c_color">People</span></h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello<span className="c_color">People</span></h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello<span className="c_color">People</span></h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello<span className="c_color">People</span></h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello<span className="c_color">People</span></h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello<span className="c_color">People</span></h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello<span className="c_color">People</span></h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello<span className="c_color">People</span></h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello<span className="c_color">People</span></h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello<span className="c_color">People</span></h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello<span className="c_color">People</span></h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello<span className="c_color">People</span></h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello<span className="c_color">People</span></h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello<span className="c_color">People</span></h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello<span className="c_color">People</span></h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello<span className="c_color">People</span></h2>
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
    )
  }
}
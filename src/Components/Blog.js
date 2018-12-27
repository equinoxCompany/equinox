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


  componentDidMount(){
    // fetch('http://d29.default-host.net:3002/posts')
    //   .then(res => res.json())
    //   .then(posts => this.setState({posts}));

    d3.selectAll('.post_type_selector h3')
      .on('click', function(){
        let type = d3.select(this).attr('data');
        d3.selectAll('.post_type_selector h3')
          .each(function(){
            let e = d3.select(this);
            if(e.attr('data') == type){
              e.select('span').style('box-shadow', 'none');
              e.transition().duration(200).ease(d3.easeLinear)
                .style('background', '#FF5D00')
                .style('box-shadow', '0.2vw 0.5vw 0vw black')
                .style('color', 'black');
            }else{
              e.select('span').style('box-shadow', '0.2vw 0.5vw 0vw black');
              e.transition().duration(200).ease(d3.easeLinear)
                .style('background', 'none')
                .style('box-shadow', 'none')
                .style('color', 'white');
            }
          })
      });

    if(window.innerWidth < 768){
      scrollAnimation();
    d3.select('.mobile_blog_content')
      .on('scroll', scrollAnimation);
    }
    function postTransform(e, w, s_1, s_2){
      e
        .transition().duration(50).ease(d3.easeLinear)
        .style('width', `${w}vw`);
      e.select('.mobile_blog_post_date')
        .transition().duration(50).ease(d3.easeLinear)
        .style('font-size', `${s_1}vw`);
      e.select('h3')
        .transition().duration(50).ease(d3.easeLinear)
        .style('font-size', `${s_2}vw`);
      e.select('h2')
        .transition().duration(50).ease(d3.easeLinear)
        .style('line-height', `${s_1}vw`)
        .style('font-size', `${s_1}vw`);
      } 
      
      function getOffset(el) {
        return el.getBoundingClientRect();
      }

      function scrollAnimation(){
        console.log(window.innerWidth);
        let scroll_box = d3.select('.mobile_blog_content').node(),
            scroll_box_sizes = getOffset(scroll_box),
            scroll_box_width = scroll_box_sizes.right,
            scroll_box_height = scroll_box_sizes.bottom - scroll_box_sizes.top,
            section_heigh = (scroll_box_width * 28)/100,
            center_box = (scroll_box_height/2) + scroll_box_sizes.top,
            second_section = section_heigh*1.3,
            third_section = section_heigh*1.5;
        d3.selectAll('.mobile_blog_post_list li')
          .each(function(){
            let e = d3.select(this).node(),
                e_sizes = getOffset(e),
                e_top = e_sizes.top,
                e_bottom = e_sizes.bottom;
            if(e_bottom < center_box - third_section || e_top > center_box + third_section)
              d3.select(this).call(postTransform, 40, 6, 4);
            else if(e_top < center_box - second_section || e_bottom > center_box + second_section/2)
              d3.select(this).call(postTransform, 50, 8, 5);
            else if(e_top < center_box && e_bottom > center_box )
              d3.select(this).call(postTransform, 60, 10, 5);
        });
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
                  <div>
                    <h3 data="seo"><span></span>SEO</h3>
                    <h3 data="design"><span></span>DESIGN</h3>
                  </div>
                  <div>
                    <h3 data="web"><span></span>WEB</h3>
                  </div>
                  <div>
                    <h3 data="news"><span></span>NEWS</h3>
                  </div>
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
          <h2>Hello People </h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello People </h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello People </h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello People </h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello People </h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello People </h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello People </h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello People </h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello People </h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello People </h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello People </h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello People </h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello People </h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello People </h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello People </h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello People </h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello People </h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello People </h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello People </h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello People </h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello People </h2>
          <h3>stories</h3>
        </div>
      </li>
      <li className="mobile_blog_post">
        <div className="mobile_blog_post_date">12.11</div>
        <div className="mobile_blog_post_data">
          <h3>SEO</h3>
          <h2>Hello People</h2>
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
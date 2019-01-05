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

import MetaTags from 'react-meta-tags';
// import Calendar from 'react-calendar/dist/entry.nostyle'
import * as d3 from "d3";

export default class extends Component {

  constructor(props){
    super(props);
    this.state = {
      visibility: window.innerWidth >= 768 ? true : false,
      posts: []
    }
  }


  componentDidMount(){
    fetch('http://91.225.165.43:3001/posts')
      .then(res => res.json())
      .then(posts => this.setState({posts}))
    fetch('http://91.225.165.43:3001/seo/blog')
      .then(res => res.json())
      .then(meta => this.setState({meta: meta[0]}));
  

      let first_check = false;
      d3.select('.size_posts_custom_selector').style('height', '2vw');
      
    d3.select('.size_posts_custom_selector')
      .on('click', function(){
        let flag = d3.select(this).attr('data-flag');
        console.log(flag);
        if(flag === 'false'){
          d3.select(this)
          .transition()
          .duration(300)
          .ease(d3.easeLinear)
          .style('height', '6vw')
          .on('end', function(){
            d3.select(this).attr('data-flag', 'true');
          });
        }else{
          d3.select(this)
          .transition()
          .duration(300)
          .ease(d3.easeLinear)
          .style('height', '2vw')
          .on('end', function(){
            d3.select(this).attr('data-flag', 'false');
          })
        }
      });



      d3.selectAll('.size_posts_custom_selector span')
        .on('click', function(){
            if(first_check == false){
              d3.selectAll('.blog_post').style('height', '20vw');
              d3.selectAll('.blog_post_date').style('font-size', '13vw');
              d3.selectAll('.blog_post_title').style('line-height', '3.5vw');
              d3.selectAll('.blog_post_title h2').style('font-size', '3.5vw');
              first_check = true;
            }
            let current_select = d3.select(this).attr('data-size');
            let first_select = d3.select('.size_posts_custom_selector span').attr('data-size');
            if(current_select != first_select){
              d3.select(this)
                .attr('data-size', first_select)
                .node().innerHTML = first_select;
              d3.select('.size_posts_custom_selector span')
                .attr('data-size', current_select)
                .node().innerHTML = current_select;
              let t = d3.transition().duration(300).ease(d3.easeLinear);
                switch(current_select){
                  case 'Small':
                    d3.selectAll('.blog_post').transition(t).style('height', '10vw');
                    d3.selectAll('.blog_post_date').transition(t).style('font-size', '5vw');
                    d3.selectAll('.blog_post_title').transition(t).style('line-height', '2vw')
                    d3.selectAll('.blog_post_title h2').transition(t).style('font-size', '2vw');
                  break;
                  case 'Average':
                    d3.selectAll('.blog_post').transition(t).style('height', '15vw');
                    d3.selectAll('.blog_post_date').transition(t).style('font-size', '10vw');
                    d3.selectAll('.blog_post_title').transition(t).style('line-height', '3vw')
                    d3.selectAll('.blog_post_title h2').transition(t).style('font-size', '3vw');
                  break;
                  case 'Large':
                    d3.selectAll('.blog_post').transition(t).style('height', '20vw');
                    d3.selectAll('.blog_post_date').transition(t).style('font-size', '13vw');
                    d3.selectAll('.blog_post_title').transition(t).style('line-height', '3.5vw')
                    d3.selectAll('.blog_post_title h2').transition(t).style('font-size', '3.5vw');
                  break;
                }
            }
           
        });

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


  goBack(){
    if(!this.state.map){
    this.props.history.goBack();
    }
  }

  searchDate = (selectedDate) => {
    if(selectedDate){
      this.setState({
        posts: [],
        meta: ''
      })
      console.log(selectedDate.getHours())
      fetch('http://91.225.165.43:3001/date-search/' + selectedDate.toISOString()
    )
      .then(res => res.json())
      .then(posts => this.setState({posts}))
    }
  }

  searchText = () => {
    let word = document.getElementById('search_blog').value;
    console.log(word);
    if(word === ''){
      fetch('http://91.225.165.43:3001/posts')
      .then(res => res.json())
      .then(posts => this.setState({posts}))
    } else {
      fetch('http://91.225.165.43:3001/post-search/'+word)
      .then(res => res.json())
      .then(posts => this.setState({posts}))
    }
    
  }


  render(){
    return(
      <div className="Seo">
         <MetaTags>
            <title>{this.state.meta && this.state.meta.title}</title>
            <meta name="description" content={this.state.meta && this.state.meta.description}/>
            <meta property="og:title" content={this.state.meta && this.state.meta.title} />
          </MetaTags>

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
                  <input type="text" id="search_blog" placeholder="Search"/>
                  <button onClick={this.searchText}><img src={search_img}/></button>
                  {/* <img src={search_img}/> */}
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
                    <div className="size_posts_custom_selector" data-flag="false">
                      <span data-size='Large'>Large</span>
                      <span data-size='Average'>Average</span>
                      <span data-size='Small'>Small</span>
                    </div>
                  </div>
                </div>
                <div className="posts_calendar">
                  <span>Calendar</span>
                  <h2>1 2 3 4 5 6 7<br/> 8 9 10 11 12 13 14<br/>
                15 16 17 18 19 20 21 <br/>22 23 24 25 26 27 28<br/>29 30</h2>
                </div>
                {/* <div>
                  <Calendar onClickDay={this.searchDate}/>
                </div> */}

                {/* </div> */}
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
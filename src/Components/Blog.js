import React , { Component } from 'react';
import Logo from './Logo';
import Socials from './SocialsV2';
import '../Styles/Blog.css';
import search_img from '../media/search.png';
import BlogPost from './BlogPost';
import BlogPostMobile from './BlogPostMobile';
import Search_img from '../media/mobile_search.png';
import MobileExit from '../media/mobile_exit.png';
import MobileBlogNav from './MobileBlogNav';
import MobileNav from './MobileNav';
import {Link} from 'react-router-dom';
 
import MetaTags from 'react-meta-tags';
// import Calendar from 'react-calendar/dist/entry.nostyle'
import * as d3 from "d3";
import { withMobileDialog } from '@material-ui/core';
 
export default class extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      visibility: window.innerWidth >= 768 ? true : false,
      posts: [],
      animation_flag : false
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
              d3.selectAll('.blog_post').style('height', '10vw');
              d3.selectAll('.blog_post_date').style('font-size', '5vw');
              d3.selectAll('.blog_post_title').style('line-height', '2vw')
              d3.selectAll('.blog_post_title h2').style('font-size', '2vw');;
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
                  case 'Близько':
                    d3.selectAll('.blog_post').transition(t).style('height', '10vw');
                    d3.selectAll('.blog_post_date').transition(t).style('font-size', '5vw');
                    d3.selectAll('.blog_post_title').transition(t).style('line-height', '2vw')
                    d3.selectAll('.blog_post_title h2').transition(t).style('font-size', '2vw');
                  break;
                  case 'Ще ближче':
                    d3.selectAll('.blog_post').transition(t).style('height', '15vw');
                    d3.selectAll('.blog_post_date').transition(t).style('font-size', '10vw');
                    d3.selectAll('.blog_post_title').transition(t).style('line-height', '3vw')
                    d3.selectAll('.blog_post_title h2').transition(t).style('font-size', '3vw');
                  break;
                  case 'Дуже близько':
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



      function setSizes(){
        let window = {
            top: d3.select('.mobile_blog_content').node().getBoundingClientRect().top,
            bottom: d3.select('.mobile_blog_content').node().getBoundingClientRect().bottom
          }
        let center =  window.bottom - (window.bottom - window.top)/2;
        let height_section = (window.bottom - window.top)/5;
        let scopes = {
          section_1: {
            top: window.top,
            bottom: window.top + height_section
          },
          section_2: {
            top: window.top + height_section,
            bottom: window.top + height_section*2
          },
          section_3: {
            top: window.top + height_section*2,
            bottom: window.top + height_section*3
          },
          section_4: {
            top: window.top + height_section*3,
            bottom: window.top + height_section*4
          }
        }
        return {window, center, scopes}
      }
      
      scrollAnimation();
      d3.select('.mobile_blog_content')
        .on('scroll', scrollAnimation);
      
      function postTransform(e, w, s_1, s_2){
        e
          .transition().duration(70).ease(d3.easeLinear)
          .style('width', `${w}vw`);
        e.select('.mobile_blog_post_date')
          .transition().duration(70).ease(d3.easeLinear)
          .style('font-size', `${s_1}vw`);
        e.select('h3')
          .transition().duration(70).ease(d3.easeLinear)
          .style('font-size', `${s_2}vw`);
        e.select('h2')
          .transition().duration(70).ease(d3.easeLinear)
          .style('line-height', `${s_1}vw`)
          .style('font-size', `${s_1}vw`);
        }
       
        function getOffset(el) {
          return el.getBoundingClientRect();
        }
 
        function scrollAnimation(){

          d3.selectAll('.mobile_blog_post_list li')
            .each(function(){
              let section_2 = setSizes().scopes.section_2;
              let section_3 = setSizes().scopes.section_3;
              let section_4 = setSizes().scopes.section_4;
              let e = d3.select(this).node(),
                  e_sizes = getOffset(e),
                  e_top = e_sizes.top,
                  e_bottom = e_sizes.bottom,
                  e_center = e_bottom - (e_bottom - e_top)/2;
                  if(e_center < section_2.bottom && e_center > section_2.top){
                    d3.select(this).call(postTransform, 50, 8, 5);
                  }else if(e_center < section_3.bottom && e_center > section_2.top){
                    d3.select(this).call(postTransform, 60, 10, 5);
                  }else if(e_center < section_4.bottom && e_center > section_4.top){
                    d3.select(this).call(postTransform, 50, 8, 5);
                  }else{
                    d3.select(this).call(postTransform, 40, 6, 4);
                  }
                });
      }
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
        meta: '',
        notFound: false
      })
      console.log(selectedDate.getHours())
      fetch('http://91.225.165.43:3001/date-search/' + selectedDate.toISOString()
    )
      .then(res => res.json())
      .then(posts => this.setState({posts}))
    }
  }
 
  searchCategory = (e) => {
    fetch('http://91.225.165.43:3001/category-search/' + e)
      .then(res => res.json())
      .then(posts => this.setState({ posts }))
  }
 

  
  searchText = (e) => {
    let word = document.getElementById('search_blog').value;
    console.log(word);
    if(word === ''){
      fetch('http://91.225.165.43:3001/posts')
      .then(res => res.json())
      .then(posts => this.setState({posts, notFound: false}))
    } else {
      fetch('http://91.225.165.43:3001/post-search/'+word)
      .then(res => res.json())
      .then(posts => {
        if(posts.length > 0){
          this.setState({posts, notFound: false})
        } else {
          this.setState({ notFound: true });

          if(this.state.animation_flag == false){
            this.state.animation_flag = true;
            let that = this;
            d3.select('.blog_post_not_found_box')
            .style('visibility', 'visible')
            .style('opacity', '1');
          d3.select('.blog_post_not_found_wrap')
            .style('left', '0vw')
            .style('width', '0vw')
            .transition()
            .duration(300)
            .ease(d3.easeLinear)
            .style('width', '10vw')
            .transition()
            .duration(300)
            .ease(d3.easeLinear)
            .style('left', '10vw')
            .style('width', '0vw');
          d3.select('.blog_post_not_found_text')
            .style('left', '-15vw')
            .transition()
            .duration(300)
            .ease(d3.easeLinear)
            .style('left', '0vw');
          d3.timeout(function(){
            d3.select('.blog_post_not_found_box')
            .style('opacity', '1')
            .transition()
            .duration(300)
            .ease(d3.easeLinear)
            .style('opacity', '0')
            .on('end', function(){
              that.setState({animation_flag : false});
              d3.select(this).style('visibility', 'hidden');
              })
            },1000);
        }
        }  
      })
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
                    <h3 data="seo" onClick={() => this.searchCategory('SEO')}><span></span>SEO</h3>
                    <h3 data="design" onClick={() => this.searchCategory('DESIGN')}><span></span>DESIGN</h3>
                  </div>
                  <div>
                    <h3 data="web" onClick={() => this.searchCategory('WEB')}><span></span>WEB</h3>
                  </div>
                  <div>
                    <h3 data="news" onClick={() => this.searchCategory('NEWS')}><span></span>NEWS</h3>
                    <h3 data="other" onClick={() => this.searchCategory('OTHER')}><span></span>OTHER</h3>
                  </div>
                </div>
                <div className="post_search">
                  {
                    this.state.notFound &&
                    <div className="blog_post_not_found_box">
                      <div className="blog_post_not_found_wrap"></div>
                      <div className="blog_post_not_found_text">text <span>not</span> found</div>
                    </div>
                  }
                  <input type="text" id="search_blog" placeholder="Пошук" onKeyUp={(e) => e.keyCode === 13 && this.searchText()}/>
                  <button onClick={this.searchText}><img src={search_img}/></button>
                  {/* <img src={search_img}/> */}
                </div>
                {/* <div className="posts_selector">
                  <span>Show for...</span>
                  <div className="number_posts_selector">
                    <div className="selector_circle"></div>
                    <select>
                      <option>All time</option>
                      <option>Recently</option>
                    </select>
                  </div>
                </div> */}
                <div className="posts_selector">
                  <span>Кількість постів на екрані:</span>
                  <div className="size_posts_selector">
                    <div className="selector_circle"></div>
                    <div className="size_posts_custom_selector" data-flag="false">
                      <span data-size='Близько'>Близько</span>
                      <span data-size='Ще ближче'>Ще ближче</span>
                      <span data-size='Дуже близько'>Дуже близько</span>
                    </div>
                  </div>
                </div>
                {/* <div className="posts_calendar">
                  <span>Calendar</span>
                  <h2>1 2 3 4 5 6 7<br/> 8 9 10 11 12 13 14<br/>
                15 16 17 18 19 20 21 <br/>22 23 24 25 26 27 28<br/>29 30</h2>
                </div>
                <div>
                  <Calendar onClickDay={this.searchDate}/>
                </div>
 
                </div> */}
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
                <li className="mobile_blog_post_correct">
                </li>
                {
                  this.state && this.state.posts && this.state.posts.map(post =>
                    <BlogPostMobile item={post}/>
                  )
                }
                <li className="mobile_blog_post_correct">
                </li>
               
                  {/* <li className="mobile_blog_post">
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
                      <h3>SEO sagrw  awrgfwre </h3>
                      <h2>Hello People  </h2>
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
                  <li className="mobile_blog_post_correct">
                  </li> */}
                </ul>
              </div>
            </div>
            <MobileBlogNav/>
            <img src={MobileExit} onClick={()=>this.goBack()} className="mobile_exit" style={{height: '5vh', width: '5vh'}}/>
            </div>
          )
        }
      </div>
      </div>
    )
  }
}
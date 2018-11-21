import React , { Component } from 'react';
import Logo from './Logo';
import Socials from './SocialsV2';
import bgSeo from '../media/bgSeo.jpg'
import '../Styles/Seo.css'
import Link from 'react-router-dom/Link';
import blogBg from '../media/blogBg.png';
import blogBg2 from '../media/blogBg2.png';
import blog_img from '../media/blog_img.png';
import search_img from '../media/search.png';

export default class extends Component {
  constructor(props){
    super(props);
    this.state = {
      visibility: window.innerWidth >= 768 ? true : false,
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
                <div className="post" >
                  <div className="subject">
                    <div className="date">12.11</div>
                    <div className="post_title">
                      <h2>Design</h2><br/>
                      <h1>Is<span className="c_color">About</span></h1><br/>
                      <h2>stories</h2>
                    </div>
                  </div>
                  <div className="post_preview" style={{background: `url(${blogBg2}) no-repeat`, backgroundSize:'cover'}}>
                    <div className="cover"></div>
                    <div className="post_info">
                      <div className="short_info">
                        Design is the merging of the fields of art technology and societyait a......
                      </div>
                      <div className="addition">
                        <div className="post_likes">
                          <div className="likes_circle"></div>
                          <div className="number_likes"><span className="upper_like">2</span>3.245</div>
                        </div>
                        <div className="read_more">Read more</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post">
                  <div className="subject">
                    <div className="date">12.11</div>
                    <div className="post_title">
                      <h2>Jewel</h2><br/>
                      <h1><span className="c_color">FROM</span>the</h1><br/>
                      <h2>archipelago</h2>
                    </div>
                  </div>
                  <div className="post_preview" style={{background: `url(${blogBg}) no-repeat`, backgroundSize:'cover'}}>
                    <div className="cover"></div>
                    <div className="post_info">
                      <div className="short_info">
                        Design is the merging of the fields of art technology and societyait a......
                      </div>
                      <div className="addition">
                        <div className="post_likes">
                          <div className="likes_circle"></div>
                          <div className="number_likes"><span className="upper_like">2</span>3.245</div>
                        </div>
                        <div className="read_more">Read more</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post" >
                  <div className="subject">
                    <div className="date">12.11</div>
                    <div className="post_title">
                      <h2>Design</h2><br/>
                      <h1>Is<span className="c_color">About</span></h1><br/>
                      <h2>stories</h2>
                    </div>
                  </div>
                  <div className="post_preview" style={{background: `url(${blogBg2}) no-repeat`, backgroundSize:'cover'}}>
                    <div className="cover"></div>
                    <div className="post_info">
                      <div className="short_info">
                        Design is the merging of the fields of art technology and societyait a......
                      </div>
                      <div className="addition">
                        <div className="post_likes">
                          <div className="likes_circle"></div>
                          <div className="number_likes"><span className="upper_like">2</span>3.245</div>
                        </div>
                        <div className="read_more">Read more</div>
                      </div>
                    </div>
                  </div>
                </div>
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
          ):( <div className="seo_mobile">
          <h1>Namale,<br/> 
            a <span style={{color: 'rgb(270, 92, 20)'}}>UnIQuE</span>  jewel from the<br/>
            Fiji archipelago </h1>
            <div className="blog_img"></div>
            <div className="author_info">
              <div className="mobile_seo_left">Author Name</div><div className="mobile_seo_right mobile_seo_first">23.245</div><div className="mobile_seo_right mobile_seo_second">13.273</div>
            </div>
            <div className="mobile_seo_text">
            <p>Arriving to Canada from Syria, Feda brought with her a 
        passion that never left her. Making a childhood dream come 
        true she founded, a few years ago, her own jewelry line: 
        Créations Namale.Along with her creative vision, we 
        DESIGNED an entire brand identity that is declined.</p>
            </div>
            <div className="mobile_contacts_exit mobile_blog_exit" onClick={()=>this.goBack()}><h1>X</h1>
            </div>
          </div>
          )
        }
      </div>
      </div>
    )
  }
}
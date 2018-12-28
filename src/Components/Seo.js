import React , { Component } from 'react';
import Logo from './Logo';
import Socials from './SocialsV2';
import bgSeo from '../media/bgSeo.jpg';
import '../Styles/Seo.css';
import Link from 'react-router-dom/Link';
import blogBg from '../media/blogBg.png';
import blogBg2 from '../media/blogBg2.png';
import blog_img from '../media/blog_img.png';
import search_img from '../media/search.png';
import BlogPost from './BlogPost';
import MetaTags from 'react-meta-tags';

export default class extends Component {
  componentDidMount(){
    fetch('http://d29.default-host.net:3002/posts')
      .then(res => res.json())
      .then(posts => this.setState({posts}))
    fetch('http://d29.default-host.net:3002/seo/blog')
      .then(res => res.json())
      .then(meta => this.setState({meta: meta[0]}))
  }

  constructor(props){
    super(props);
    this.state = {
      visibility: window.innerWidth >= 768 ? true : false,
      posts: [],
      meta: ''
    }
  }

  searchText = () => {
    let word = document.getElementById('search_blog').value;
    console.log(word);
    if(word === ''){
      fetch('http://d29.default-host.net:3002/posts')
      .then(res => res.json())
      .then(posts => this.setState({posts}))
    } else {
      fetch('http://d29.default-host.net:3002/post-search/'+word)
      .then(res => res.json())
      .then(posts => this.setState({posts}))
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
          <MetaTags>
            <title>{this.state.meta.title}</title>
            <meta name="description" content={this.state.meta.description}/>
            <meta property="og:title" content={this.state.meta.title} />
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
                  <span className="first_type">DESIGN</span>
                  <span className="second_type active">SEO</span>
                  <span className="third_type">WEB</span>
                </div>
                <div className="post_search">
                  <input type="text" id="search_blog" placeholder="Search"/>
                  <button onClick={this.searchText}><img src={search_img}/></button>
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
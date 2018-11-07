import React , { Component } from 'react';
import Logo from './Logo';
import Socials from './SocialsV2';
import bgSeo from '../media/bgSeo.jpg'
import '../Styles/Seo.css'
import Link from 'react-router-dom/Link';
import blogBg from '../media/blogBg.png';
import blogBg2 from '../media/blogBg2.png'
import blog_img from '../media/blog_img.png'

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
            <div>
        <div className="seo_left">
          <div className="seo_top">
            <div className="blog_date">
            <h1>12.11</h1>
              <div className="blog_title">
                <h3>Design<br/>Is<span style={{color: 'rgb(270,92,20)'}}>About</span><br/>stories</h3>
              </div>
            </div>
            <div className="blog_image" style={{background: `url(${blogBg}) no-repeat`, backgroundSize:'contain'}}>
            <div className="blog_stats"><div className="views">23.245</div><div className="likes">13.273</div></div>
              <div className="image_info">
                <h3>Some text about<br/> this theme...</h3>
              </div>
            </div>
          </div>
          <div className="seo_bottom">
            <div className="blog_date">
            <h1>02.11</h1>
              <div className="blog_title">
              <h3>Jewel<br/><span style={{color: 'rgb(270,92,20)'}}>FROM</span> the<br/>archipelago</h3>
              </div>
            </div>
            <div className="blog_image" style={{background: `url(${blogBg2}) no-repeat`, backgroundSize:'contain'}}>
            <div className="blog_stats"><div className="views">23.245</div><div className="likes">13.273</div></div>
              <div className="image_info">
                <h3>Some text about<br/> this theme...</h3>
              </div>
            </div>
            </div>
        </div>
        <div className="seo_right">
          <ul>
            <li>
              <div className="seo_right_title">
                <h1>SEO</h1>
                <h3>Return to choose another theme</h3>
              </div>
            </li>
            <li>
              <div className="seo_right_sort">
                <h2>Show for...</h2>
                <div className="seo_right_underline"></div>
                <h2 className="seo_active" style={{color: 'rgb(99,99,99)'}}>All time</h2>
                <h2>Tabs per page...</h2>
                <div className="seo_right_underline"></div>
                <h2 style={{color: 'rgb(99,99,99)'}}>Two</h2>
              </div>
            </li>
            <li>
              <div className="seo_right_calendar">
                <h2>Calendar</h2>
                <div className="seo_right_underline"></div>
                <h2 style={{color: 'rgb(92,92,92)', marginTop:'5%'}}>1 2 3 4 5 6 7<br/> 8 9 10 11 12 13 14<br/>
                15 16 17 18 19 20 21 <br/>22 23 24 25 26 27 28<br/>29 30
                </h2>
              </div>
            </li>
            <li>
              <div className="seo_right_dates">
                <h2 style={{color: '#d1f776'}}>Design DAY</h2>
                <h2 style={{color: '#e852f1'}}>Web TIME</h2>
              </div>
            </li>
          </ul>
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
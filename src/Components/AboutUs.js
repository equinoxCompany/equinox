import React, {Component} from 'react';
import Logo from '../Components/Logo';
import Socials from '../Components/Socials';
import { Link, Redirect } from 'react-router-dom';
import '../Styles/AboutUs.css';
import '../Styles/SideMenu.css';
import VisibilitySensor from 'react-visibility-sensor';
import '../Styles/SideMenuLeft.css'
import '../scripts/cursor.js';
import ceo from '../media/ceo.jpg';
import design from '../media/design.jpg';
import dev1 from '../media/dev1.jpg';
import dev2 from '../media/dev2.jpg';
import seo from '../media/seo.jpg';
import MobileNav from './MobileNav';
import MobileAboutNav from './MobileAboutNav';
import MobileExit from '../media/mobile_exit.png';
import AboutUsImg from '../media/about_us_img.jpg';
import AboutUsService from '../media/about_us_service.jpg';
import MobileTeam from '../media/mobile_team.png';
import Graph from '../media/graph.png';
import AppImg from '../media/equinox_application.png';
import GetApp from '../media/get_it_app.png';
import GetGoogle from '../media/get_it_google.png';
import Comments from '../media/comments.png';
import CustomerImg from '../media/customer.png';
import CustomerGlobus from '../media/customer_globus.png';
import * as d3 from "d3";


export default class extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      visibility: window.innerWidth >= 768 ? true : false,
      team: 0,
      career: 0,
      sideMenu: false,
      offers: 0,
      start: 0,
      items: []
    }
  }

  componentDidMount(){
    // fetch('/about-us')
    //   .then(res => res.json())
    //   .then(items => this.setState({items}))
    d3.selectAll('line')
      .style('stroke', '#FF5D00')
      .style('stroke-width', '2');
    d3.selectAll('circle')
      .style('fill', '#FF5D00')
  }

  goBack(){
    this.props.history.goBack()
  }

  render(){
    return(
      <div>
      {
        this.state.visibility ?(
        <div className="d_about">
          <Logo/>
          <Socials/>
          <div className="d_about_left_menu">
          </div>
          <div className="d_about_right_menu">
          </div>
          <div className="d_ufo">
            <div className="d_main_ufo"></div>
            <div className="d_l_t_ufo"></div>
            <div className="d_l_b_ufo"></div>
            <div className="d_r_t_ufo"></div>
            <div className="d_r_b_ufo"></div>
            <div className="d_c_b_ufo"></div>
            <div className="d_c_c_ufo"></div>
          </div>
          <section className="d_about_preview">
          <svg className="d_about_parallax" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'>
    <g id='Layer_4'>
        <line stroke="#FF5D00" stroke-width="2" x1='39' y1='100' x2='344' y2='262' />
        <line x1='344.5' y1='261.5' x2='694.5' y2='36.5' />
        <line x1='344.5' y1='261.5' x2='540.5' y2='230.5' />
        <line x1='540.5' y1='231.5' x2='661.5' y2='337.5' />
        <line x1='661.5' y1='337.5' x2='870.5' y2='171.5' />
        <line x1='870.5' y1='170.5' x2='837.5' y2='379.5' />
        <line x1='870.5' y1='170.5' x2='1090.5' y2='337.5' />
        <line x1='1090.5' y1='337.5' x2='1156.5' y2='47.5' />
        <line x1='1156.5' y1='47.5' x2='1018.5' y2='138.5' />
        <line x1='1089.5' y1='338.5' x2='1345.5' y2='195.5' />
        <line x1='1346.5' y1='194.5' x2='1373.5' y2='438.5' />
        <line x1='1373.5' y1='439.5' x2='1169.5' y2='537.5' />
        <line x1='1346.5' y1='194.5' x2='1543.5' y2='94.5' />
        <line x1='1542.5' y1='93.5' x2='1704.5' y2='146.5' />
        <line x1='1704.5' y1='147.5' x2='1883.5' y2='37.5' />
        <line x1='1704.5' y1='146.5' x2='1816.5' y2='277.5' />
        <line x1='1816.5' y1='277.5' x2='1539.5' y2='217.5' />
        <line x1='1539.5' y1='217.5' x2='1504.5' y2='310.5' />
        <line x1='661.5' y1='336.5' x2='387.5' y2='590.5' />
        <line x1='0.5' y1='327.5' x2='387.5' y2='590.5' />
        <line x1='169.5' y1='703.5' x2='387.5' y2='590.5' />
        <line x1='387.5' y1='590.5' x2='405.5' y2='764.5' />
        <line x1='660.5' y1='336.5' x2='621.5' y2='795.5' />
        <line x1='621.5' y1='795.5' x2='778.5' y2='733.5' />
        <line x1='621.5' y1='795.5' x2='546.5' y2='962.5' />
        <line x1='621.5' y1='795.5' x2='869.5' y2='975.5' />
        <line x1='869.5' y1='975.5' x2='1100.5' y2='679.5' />
        <line x1='837.5' y1='379.5' x2='1100.5' y2='679.5' />
        <line x1='1100.5' y1='679.5' x2='1299.5' y2='716.5' />
        <line x1='1299.5' y1='716.5' x2='1211.5' y2='1010.5' />
        <line x1='1211.5' y1='1010.5' x2='1360.5' y2='917.5' />
        <line x1='1361.5' y1='917.5' x2='1474.5' y2='605.5' />
        <line x1='546.5' y1='962.5' x2='406.5' y2='764.5' />
        <line x1='227.5' y1='993.5' x2='406.5' y2='764.5' />
    </g>
    <g id='Layer_3'>
        <circle cy='328' r='68' />
        <circle cx='39.5' cy='99.5' r='50.5' />
        <circle cx='344' cy='262' r='68' />
        <circle cx='694.5' cy='36.5' r='78.5' />
        <circle cx='540' cy='231' r='37' />
        <circle cx='661' cy='337' r='27' />
        <circle cx='870' cy='171' r='43' />
        <circle cx='1019' cy='139' r='11' />
        <circle cx='1156.5' cy='47.5' r='30.5' />
        <circle cx='837.5' cy='379.5' r='42.5' />
        <circle cx='1090' cy='338' r='80' />
        <circle cx='1346' cy='195' r='45' />
        <circle cx='1543' cy='94' r='16' />
        <circle cx='1704' cy='147' r='48' />
        <circle cx='1883.5' cy='37.5' r='20.5' />
        <circle cx='1816' cy='277' r='37' />
        <circle cx='1539.5' cy='217.5' r='12.5' />
        <circle cx='1504' cy='310' r='19' />
        <circle cx='1373' cy='439' r='27' />
        <circle cx='1169.5' cy='537.5' r='12.5' />
        <circle cx='1474' cy='606' r='18' />
        <circle cx='1100.5' cy='679.5' r='32.5' />
        <circle cx='1299' cy='717' r='56' />
        <circle cx='1361' cy='918' r='26' />
        <circle cx='1211.5' cy='1010.5' r='29.5' />
        <circle cx='869.5' cy='975.5' r='31.5' />
        <circle cx='621.5' cy='795.5' r='35.5' />
        <circle cx='778.5' cy='733.5' r='10.5' />
        <circle cx='546.5' cy='962.5' r='77.5' />
        <circle cx='406' cy='765' r='21' />
        <circle cx='227.5' cy='993.5' r='17.5' />
        <circle cx='169.5' cy='703.5' r='56.5' />
        <circle cx='387.5' cy='590.5' r='14.5' />
    </g>
</svg>
            <div className="d_about_title_box"></div>
            <div className="d_about_title_text">
              <h1>EQUINOX</h1>
              <h3>EXAMPLE COMPANY</h3>
            </div>
            <div className="d_about_sub_title_box"></div>
            <div className="d_about_sub_title_text">
              <h4>Some moore about us text here or something another,
 we are SOME moore about us text here  NICE TYPE  job.</h4>
            </div>
          </section>
          <section className="d_about_services">
            
          </section>
          <section className="d_about_team">
            
          </section>
          <section className="d_about_start_project">
            
          </section>
        </div>
        ) : ( 
        <div className="m_about_us">
          <MobileNav/>
          <div className="m_ufo">
            <div className="m_main_ufo"></div>
            <div className="m_l_t_ufo"></div>
            <div className="m_l_b_ufo"></div>
            <div className="m_r_t_ufo"></div>
            <div className="m_r_b_ufo"></div>
            <div className="m_c_b_ufo"></div>
            <div className="m_c_c_ufo"></div>
          </div>
          <div className="m_about_content_box">
            <section className="m_about_company">
              <h1>EQUINOX</h1>
              <h3>EXAMPLE COMPANY</h3>
              <div className="m_about_ellipse"></div>
              <p>Simple of description removed from anywhere or writed by yourself or heared from friends or somebody another</p>
            </section>
            <section className="m_about_topic">
              <h2>Title <span className="dark_gray">NEW</span></h2>
              <p>Let’s face it: the digital age has introduced a bunch of new players on the block. Hey, you might be literally going up against a computer. That’s where we comes in–our team has winning visual and interactive combos at our fingertips to take brands and businesses to the next level, and we have fun doing it.</p>
              <img src={AboutUsImg}/>
            </section>
            <section className="m_about_service">
              <h2><span className="dark_gray">TYPE</span> SERVICE</h2>
              <p>Your brand is your avatar, and we’re in the
 gameto make it the best it can be. 
WE CREATEadaptable brand identities 
that stand strong on all platforms...</p>
              <div className="m_about_service_types">
                <div>
                  <h3>Type</h3>
                  <ul>
                    <li><span>Nicezxvbzxbxzv one</span></li>
                    <li><span>Nice one</span></li>
                    <li><span>Nice one</span></li>
                  </ul>
                </div>
                <img src={AboutUsService}/>
              </div>
            </section>
            <section className="m_about_services">
              <h2>SERVICES</h2>
              <p>Let’s face it: the digital age has introduced a bunch of new players on the block. Hey, you might be literally going up against a computer. That’s where we comes in–our team has winning visual and interactive combos at our fingertips to take brands and businesses to the next level, and we have fun doing it.</p>
              <div className="m_about_services_list">
                <div>
                  <h3>Type</h3>
                  <ul>
                    <li><span>Nice one</span></li>
                    <li><span>Nice one</span></li>
                    <li><span>Nice one</span></li>
                  </ul>
                </div>
                <div>
                  <h3>Type</h3>
                  <ul>
                    <li><span>Nice one</span></li>
                    <li><span>Nice one</span></li>
                    <li><span>Nice one</span></li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="m_about_team">
              <h2><span>OUR</span><br/>Insane<br/><span>TEAM</span></h2>
              <div className="m_about_picture_line">
                <div className="m_about_picture">
                  <img src={MobileTeam}/>
                  <div></div>
                  <p>Information...</p>
                </div>
                <div className="m_about_picture">
                  <img src={MobileTeam}/>
                  <div></div>
                  <p>Information...</p>
                </div>
              </div>
              <div className="m_about_picture_line">
                <div className="m_about_picture">
                  <img src={MobileTeam}/>
                  <div></div>
                  <p>Information...</p>
                </div>
                <div className="m_about_picture">
                  <img src={MobileTeam}/>
                  <div></div>
                  <p>Information...</p>
                </div>
              </div>
              <div className="m_about_picture_line">
                <div className="m_about_picture">
                  <img src={MobileTeam}/>
                  <div></div>
                  <p>Information...</p>
                </div>
                <div className="m_about_picture">
                  <img src={MobileTeam}/>
                  <div></div>
                  <p>Information...</p>
                </div>
              </div>
              <div className="m_about_picture_line">
                <div className="m_about_picture">
                  <img src={MobileTeam}/>
                  <div></div>
                  <p>Information...</p>
                </div>
                <div className="m_about_picture">
                  <img src={MobileTeam}/>
                  <div></div>
                  <p>Information...</p>
                </div>
              </div>
              <p className="m_about_team_text">
                You are <span className="company_color">passionate</span>, curious, creative and ready to <span className="company_color">step up</span> your game? Let’s talk! ...
              </p>
              <Link to="join-the-crew"><div className="m_about_join">
                <p>Join<br/>the<br/>crew</p>
              </div></Link>
              <p>
                From full-time jobs, to freelance gigs and internships, we’re always on the lookout. So if the position you’re looking for isn’t available at the moment, no worries–send us your stuff anyway....
              </p>
            </section>
            <section className="m_about_enjoy">
              <h3>ENJOY DESCRIPTION?</h3>
              <p>So if the position you’re looking for isn’t available at the moment, no worries sendus your stuff anyway....</p>
              <h4>Click to</h4>
              <Link to="join-the-crew"><h3><span className="company_color">START A PROJECT</span></h3></Link>
              <h4>For new<br/>achivments</h4>
              <img src={Graph}/>
            </section>
            <section className="m_about_application">
              <h3>APPLICATION</h3>
              <p>So if the position you’re looking for isn’t available at the moment, no worries sendus your stuff anyway....</p>
              <img src={AppImg}/>
              <div className="m_about_download">
                <img src={GetApp}/>
                <img src={GetGoogle}/>
              </div>
            </section>
            <section className="m_about_feedback">
              <div className="m_about_feedback_title">
                <h3>Our customers said</h3>
                <img src={Comments}/>
              </div>
              <div className="m_about_customer_info">
                <img src={CustomerImg} className="m_about_customer_img"/>
                <img src={CustomerGlobus} className="m_about_customer_globus"/>
                <h4>John Maru</h4>
                <p>Federal Bureau of Investigation</p>
              </div>
              <div className="m_about_chat">
                <div className="m_about_chat_message">
                  <img src={CustomerImg}/>
                  <div className="m_about_message_info">
                    <p className="m_about_message_data bg_company_color">
                    Как же это удобно! Спасибо вам!                    </p>
                    <div className="m_about_message_date">
                      12.11.18
                    </div>
                  </div>
                </div>
                <div className="m_about_chat_message">
                  <img src={CustomerImg}/>
                  <div className="m_about_message_info">
                    <p className="m_about_message_data bg_gray">
                    У меня такие ощущения что я в раю))                    </p>
                    <div className="m_about_message_date">
                      12.11.18
                    </div>
                  </div>
                </div>
                <div className="m_about_chat_message">
                  <img src={CustomerImg}/>
                  <div className="m_about_message_info">
                    <p className="m_about_message_data bg_company_color">
                      Видел как выросла компания друга и искренне завидую, очень хочется так-же. Может быть мне скинут цену? Я буду хорошим покупателем длявас. Вообще у меня шок, круто!
                    </p>
                    <div className="m_about_message_date">
                      12.11.18
                    </div>
                  </div>
                </div>
                <div className="m_about_chat_message">
                  <img src={CustomerImg}/>
                  <div className="m_about_message_info">
                    <p className="m_about_message_data bg_company_color">
                    Как же это удобно! Спасибо вам!    
                    </p> 
                    <div className="m_about_message_date">
                      12.11.18
                    </div>
                  </div>
                </div>
                <div className="m_about_chat_message">
                  <img src={CustomerImg}/>
                  <div className="m_about_message_info">
                    <p className="m_about_message_data bg_gray">
                    У меня такие ощущения что я в раю))  
                    </p>
                    <div className="m_about_message_date">
                      12.11.18
                    </div>
                  </div>
                </div>
                <div className="m_about_chat_message">
                  <img src={CustomerImg}/>
                  <div className="m_about_message_info">
                    <p className="m_about_message_data bg_company_color">
                    Видел как выросла компания друга и 
искренне завидую, очень хочется так-же.
 Может быть мне скинут цену? Я буду
хорошим покупателем длявас. Вообще 
у меня шок, круто!                    
                      </p>
                    <div className="m_about_message_date">
                      12.11.18
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <MobileAboutNav/>
          <img src={MobileExit} onClick={()=>this.goBack()} className="mobile_exit"/>
        </div> ) 
      }
      </div>
    )
  }
}
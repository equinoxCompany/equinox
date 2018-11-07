import React, {Component} from 'react';
import Logo from '../Components/Logo';
import Socials from '../Components/Socials';
import Login from '../Components/Login';
import { Link } from 'react-router-dom';
import '../Styles/AboutUs.css';
import bg from '../media/bg.png'
import mobile_img from '../media/mobile_about.png';
import mobile_serv from '../media/mobile_services.png';
import mobile_team from '../media/mobile_team.png';
import '../Styles/SideMenu.css';
import VisibilitySensor from 'react-visibility-sensor';
import SideMenuLeft from '../Components/SideMenuLeft'
import '../Styles/SideMenuLeft.css'

export default class extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      visibility: window.innerWidth >= 768 ? true : false,
      team: 0,
      sideMenu: false
    }
  }


  
  visible(el) {
    let bound = el.getBoundingClientRect();
    let coef = Math.abs(bound.y / bound.height);
    let back_atom = document.getElementsByClassName('inner_circle_one')[0];
    let back_right = document.getElementsByClassName('inner_circle_two')[0];
    let back_bottom = document.getElementsByClassName('inner_circle_three')[0];
    let front_bottom = document.getElementsByClassName('inner_circle_four')[0];
    let front_left = document.getElementsByClassName('inner_circle_five')[0];
    front_left.style.opacity = 1;
    front_bottom.style.opacity = 1;
    back_bottom.style.opacity = 1;
    back_right.style.opacity = 1;
    back_atom.style.opacity = 1;
    if(!back_atom.style.animation){
    back_atom.style.animation = 'atom_back_left_anim 2s ease-in-out infinite';
    back_atom.style.animationPlayState = 'paused';
    back_right.style.animation = 'atom_back_right_anim 2s ease-in-out infinite';
    back_right.style.animationPlayState = 'paused';
    back_bottom.style.animation = 'atom_back_bottom_anim 2s ease-in-out infinite';
    back_bottom.style.animationPlayState = 'paused';
    front_bottom.style.animation = 'atom_front_bottom_anim 2s ease-in-out infinite';
    front_bottom.style.animationPlayState = 'paused';
    front_left.style.animation = 'front_left_anim 2s ease-in-out infinite';
    front_left.style.animationPlayState = 'paused';
    }

    if(back_atom.style.animationPlayState === 'paused'){
      setTimeout(() => {
        back_atom.style.animationPlayState = 'paused';
        back_right.style.animationPlayState = 'paused';
        back_bottom.style.animationPlayState = 'paused';
        front_bottom.style.animationPlayState = 'paused';
        front_left.style.animationPlayState = 'paused';
      }, 2000)
      back_atom.style.animationPlayState = 'running';
      back_right.style.animationPlayState = 'running';
      back_bottom.style.animationPlayState = 'running';
      front_bottom.style.animationPlayState = 'running';
      front_left.style.animationPlayState = 'running';
    }


    let activeEls = [
      {
        id: 0,
        coef: 1,
        el: 'about_menu',
        elText: 'about_sec'
      },
      {
        id: 1,
        coef: 2.2,
        el: 'services_menu',
        elText: 'about_sec'
      },
      {
        id: 2,
        coef: 10.3,
        el: 'team_menu',
        elText: 'services_sec'
      },
      {
        id: 3,
        coef: 16,
        el: 'career_menu',
        elText: 'about_sec'
      }
    ];

    for(let els of activeEls){
      let active = document.getElementsByClassName(els.el)[0];
      if((Math.abs(els.coef) - coef) > 0 && (Math.abs(els.coef) - coef) < 1) {
        active.className = active.className.includes('active_menu') ? active.className : `${active.className} active_menu`;
        let activeElements = document.getElementsByClassName('active_menu');
        
        for(let ae of activeElements){
          if(ae.className != active.className){
            ae.style.opacity = 1;
            ae.className = ae.className.slice(0, -11);
          }
        }
      }
    }
    
  }

  showFirstSec(visible){
    if(visible){
      let elName = 'about_sec';
      let animName = 'title_before';
      let textName = 'again_text'
      let el = document.getElementsByClassName(elName)[0];
      let elText = document.getElementsByClassName(textName)[0];
      let animPlay = document.getElementsByClassName(elName)[0];
      let titleAnim = document.getElementsByClassName(animName)[0];
      animPlay.style.animation ='appear 0.5s ease-in-out forwards 0.5s';
      titleAnim.style.animation= 'title_appear 1s ease-in-out forwards 1s';
      elText.style.animation = 'text_appear_about 1.5s ease-in-out forwards 1.5s';
    }  
  };

  showSecondSec(visible){
    if(visible){
      let elName = 'services_sec';
      let animName = 'title_before_services';
      let textName = 'services_text';
      let el = document.getElementsByClassName(elName)[0];
      let elText = document.getElementsByClassName(textName)[0];
      let animPlay = document.getElementsByClassName(elName)[0];
      animPlay.style.animation ='appear 0.5s ease-in-out forwards 0.5s';
      let titleAnim = document.getElementsByClassName(animName)[0];
      titleAnim.style.animation= 'title_appear 1s ease-in-out forwards 1s';
      elText.style.animation = 'text_appear_about 1.5s ease-in-out forwards 1.5s';
    }
  };

  showServList(visible){
    if(visible){
      let elName = 'services_list';
      let animName = 'title_before_list';
      let textName = ['second_text', 'first_text'];
      let circles = document.getElementsByClassName('circle_before_li');
      let circleClasses = ['trigered_one', 'trigered_two', 'trigered_three', 'trigered_four', 'trigered_five', 'trigered_six', 'trigered_seven', 'trigered_eight'];
      let circleOrder = [[0, 8],[ 1, 9],[ 2, 10], [3, 11], [4, 12], [5, 13], [6, 14], [7, 15]];
      let el = document.getElementsByClassName(elName)[0];
      let elText = textName.map(x => document.getElementsByClassName(x)[0]);
      let animPlay = document.getElementsByClassName(elName)[0];
      let listItems = document.getElementsByClassName('list_item_about');
      animPlay.style.animation ='appear 0.5s ease-in-out forwards 0.5s';
      let titleAnim = document.getElementsByClassName(animName);

      for(let i = 0; i < circleOrder.length; i++){
        circles[circleOrder[i][0]].className += ' trigered '+circleClasses[i];
        listItems[circleOrder[i][0]].className += ' trigered_text '+circleClasses[i];
        circles[circleOrder[i][1]].className += ' trigered '+circleClasses[i];
        listItems[circleOrder[i][1]].className += ' trigered_text '+circleClasses[i];
      }
      for(let el of titleAnim){
        el.style.animation= 'title_appear 1s ease-in-out forwards 1s';
      }
      elText.map(x => x.style.animation = 'text_appear_about 1.5s ease-in-out forwards 1.5s');
    }  
  };

  showSome(visible){
    if(visible){
      let elName = 'services_type';
      let animName = 'title_before_type';
      let textName = 'type_text';
      let el = document.getElementsByClassName(elName)[0];
      let elText = document.getElementsByClassName(textName)[0];
      let animPlay = document.getElementsByClassName(elName)[0];
      let titleAnim = document.getElementsByClassName(animName)[0];
      animPlay.style.animation ='appear 0.5s ease-in-out forwards 0.5s';
      titleAnim.style.animation= 'title_appear 1s ease-in-out forwards 1s';
      elText.style.animation = 'text_appear_about 1.5s ease-in-out forwards 1.5s'
    }
  };

  showEl(visible){
  }

  
  showSomeTwo(visible){
    if(visible){
      let elName = 'services_type';
      let animName = 'title_before_type';
      let textName = 'type_text';
      let el = document.getElementsByClassName(elName)[0];
      let elText = document.getElementsByClassName(textName)[0];
      let animPlay = document.getElementsByClassName(elName)[0];
      let titleAnim = document.getElementsByClassName(animName)[0];
      animPlay.style.animation ='appear 0.5s ease-in-out forwards 0.5s';
      titleAnim.style.animation= 'title_appear 1s ease-in-out forwards 1s';
      elText.style.animation = 'text_appear_about 1.5s ease-in-out forwards 1.5s'
    }
  };

  onClickEvent(){
    let animation = this.state.sideMenu ? '-20vw' : '20vw'
    let sideMenu = document.getElementsByClassName('left_menu');
    console.log(this.state.sideMenu)
    for(let i = 0; i < sideMenu.length; i++){
      (function(i){
        setTimeout(function(){sideMenu[i].style.transform = `translateX(${animation})`}, i*500);
      })(i);
    }
    this.setState({sideMenu: !this.state.sideMenu});
  }

  

  render(){
    return(
      <div onScroll={() => this.visible(document.getElementsByClassName('description_container')[0])}>
      {
        this.state.visibility ?(
      <div className="about">
      <div onClick={()=> this.onClickEvent()}><Logo /></div>
      
      {/* <SideMenuLeft></SideMenuLeft> */}
      <div className="sidemenu_left">
        <ul>
          <li className="left_menu first_item_left"><Link to="/">Project</Link></li>
          <li className="left_menu second_item_left"><Link to="/">Team</Link> </li>
          <li className="left_menu third_item_left"><Link to="about-us">About Us</Link></li>
          <li className="left_menu fourth_item_left"><Link to="contacts">Contacts</Link></li>
        </ul>
      </div>
        <div className="circle_container">
          <div className="bg_circle one"></div>
          <div id="connection_one"></div>
          <div className="bg_circle two"></div>
          <div className="connection_two"></div>
          <div className="bg_circle three"></div>
          <div className="connection_three"></div>
          <div className="bg_circle four"></div>
          <div className="connection_four"></div>
          <div className="bg_circle five"></div>
          <div className="connection_five"></div>
          <div className="bg_circle six"></div>
          <div className="connection_six"></div>
          <div className="bg_circle seven"></div>
          <div className="connection_seven"></div>
          <div className="bg_circle eight"></div>
          <div className="connection_eight"></div>
          <div className="bg_circle nine"></div>
          <div className="connection_nine"></div>
          <div className="bg_circle ten"></div>
          <div className="connection_ten"></div>
          <div className="bg_circle eleven"></div>
          <div className="connection_eleven"></div>
          <div className="bg_circle twelve"></div>
          <div className="connection_twelve"></div>
          <div className="bg_circle thirteen"></div>
          <div className="connection_thirteen"></div>
          <div className="bg_circle fourteen"></div>
          <div className="connection_fourteen"></div>
          <div className="bg_circle fifteen"></div>
          <div className="connection_fifteen"></div>
        </div>
        <div className="side_menu">
        <nav>
          <ul>
            <li className="about_menu trigered_text trigered_one" onClick={()=>this.handleClick()}><a>About us</a></li> 
            <li className="services_menu trigered_text trigered_two" onClick={()=>this.handleClick()}><a>Services</a></li>
            <li className="team_menu trigered_text trigered_three" onClick={()=>this.handleClick()}><a>Team</a></li>
            <li className="career_menu trigered_text trigered_four" onClick={()=>this.handleClick()}><a>Career</a></li>
            <li className="awards_menu trigered_text trigered_five" onClick={()=>this.handleClick()}><a>Awards</a></li>
          </ul>
        </nav>
        <div className="menu_lines">
          <ul>
            <li className="trigered_text trigered_one"><div className="line_after"></div></li>
            <li className="trigered_text trigered_two"><div className="line_after"></div></li>
            <li className="trigered_text trigered_three"><div className="line_after"></div></li>
            <li className="trigered_text trigered_four"><div className="line_after"></div></li>
            <li className="trigered_text trigered_five"><div className="line_after"></div></li>
          </ul>
        </div>
      </div>
        <div className="description_container">
        <a name="second-link"></a>
          <div className="description">
            <h1>
              <span id="let-e">E</span>
              <span id="let-q">Q</span>
              <span id="let-u">U</span>
              <span id="let-i">I</span>
              <span id="let-n">N</span>
              <span id="let-o">O</span>
              <span id="let-x">X</span>
            </h1>
            <h3 className="example_comp">Example Company</h3>
         </div>
        </div>
        <div className="descrition_small_container">
          <div className="descrition_small">
            <p>Some moore about us text here or something another,we are      
              i dont <span style={{color: 'rgb(227, 93, 20)'}}>SOME</span>moore about us text here
              <span style={{color: 'rgb(227, 93, 20)'}}> NICE TYPE</span>  job.</p>
          </div>
        </div>
        <div className="circle_big_about">
          <div className="circle_big_about_container">
            <div className="atom inner_circle_one"></div>
            <div className="atom inner_circle_two"></div>
            <div className="atom inner_circle_three"></div>
            <div className="atom inner_circle_four"></div>
            <div className="atom inner_circle_five"></div>
            <div className="atom inner_circle_six"></div>
          </div>
        </div>
        <VisibilitySensor onChange={this.showFirstSec}>
        <div className="section about_sec">
            <div className="title again">
            <div className="title_before"></div>
            <div className="hidding_title"></div>
              <h1 className="again_text">
                Title <span style={{ color: 'rgb(270, 92, 20)', fontSize: '88px'}}>AGAIN</span>
              </h1>
            </div>
            <p>Let's face it: the digital age has introduced a bunch of new players on the block.
              Hey, you might be litteraly going aginst the computer.
                That's were Equinox comes in-our team has winning visual and interactive combos
                at our fingertips to take brands and businesses
                to the next level, and we have fun doing it. </p>
        </div>
        </VisibilitySensor>
        <VisibilitySensor onChange={this.showSecondSec}>
        <div className="section services_sec">
            <div className="title services">
            <div className="hidding_title"></div>
            <div className="title_before_services"></div>
            <h1 className="services_text">Services</h1>
            </div>
            <p>Let's face it: the digital age has introduced a bunch of new players on the block.
              Hey, you might be litteraly going aginst the computer.
                That's were Equinox comes in-our team has winning visual and interactive combos
                at our fingertips to take brands and businesses
                to the next level, and we have fun doing it. </p>
        </div>
        </VisibilitySensor>
        <VisibilitySensor onChange={this.showServList}>
        <div className="section services_list">
            <div className="col first_ser">
            <div className="title service_list first_list">
            <div className="hidding_title"></div>
            <div className="title_before_list"></div>
            <h2 className="list_text first_text">The Digital Studio</h2>
            </div>
              <ul>  
                <li><div className="circle_before_li"></div><h1 className="list_item_about">Digital strategy</h1></li>
                <li><div className="circle_before_li"></div><h1 className="list_item_about" >SEO</h1> </li>
                <li><div className="circle_before_li"></div><h1 className="list_item_about">User experience</h1> </li>
                <li><div className="circle_before_li"></div><h1 className="list_item_about">User experience</h1> </li>
                <li><div className="circle_before_li"></div><h1 className="list_item_about">Web design</h1> </li>
                <li><div className="circle_before_li"></div><h1 className="list_item_about">Content creation</h1> </li>
                <li><div className="circle_before_li"></div><h1 className="list_item_about">Web development & CMS</h1> </li>
                <li><div className="circle_before_li"></div><h1 className="list_item_about">Web hosting</h1></li>
              </ul>
            </div>
            <div className="col second_ser">
            <div className="title service_list second_list">
            <div className="hidding_title second_hide"></div>
            <div className="title_before_list"></div>
            <h2 className="list_text second_text">The Branding Studio</h2></div>
            <ul>
                <li><div className="circle_before_li"></div><h1 className="list_item_about">Brand strategy</h1> </li>
                <li><div className="circle_before_li"></div><h1 className="list_item_about">Motion design</h1> </li>
                <li><div className="circle_before_li"></div><h1 className="list_item_about">Graphic design</h1> </li>
                <li><div className="circle_before_li"></div><h1 className="list_item_about">Creative copywriting</h1> </li>
                <li><div className="circle_before_li"></div><h1 className="list_item_about">Stationery design</h1> </li>
                <li><div className="circle_before_li"></div><h1 className="list_item_about">Photography</h1> </li>
                <li><div className="circle_before_li"></div><h1 className="list_item_about">Packaging</h1> </li>
                <li><div className="circle_before_li"></div><h1 className="list_item_about">Video production</h1> </li>
              </ul>
            </div>
        </div>
        </VisibilitySensor>
        <VisibilitySensor onChange={this.showSome}>
        <div className="section services_type">
            <div className="title title_type">
            <div className="title_before_type"></div>
            <div className="hidding_title"></div>
              <h1 className="type_text">
                Type Services
              </h1>
            </div>
            <p>Your brand is your avatar, and we’re in the game
            to make it the best it can be. <span style={{ color: 'rgb(270, 92, 20)'}}>WE CREATE </span>
            adaptable brand identities that stand strong on
            all platforms<span style={{ color: 'rgb(270, 92, 20)'}}>...</span></p>
        </div>
        </VisibilitySensor>
        <VisibilitySensor onChange={this.showEl} active={this.state.team ? true: false}>
        <div className="team_container">
        <div className="team">
        <a name="third-link"></a>
          <h1>
            <span className="our">OUR<br/> <div className="title_before"></div> </span>
            <span className="insane" style={{ color: 'rgb(270, 92, 20)', fontSize:'50px'}}>INSANE<br/></span>
           <span className="team_team">TEAM</span> 
          </h1>
        </div>
        </div>
        </VisibilitySensor>
        <div className="section team_members">
          <ul>
          <VisibilitySensor onChange={()=> {
          this.setState({team: this.state.team += 1});
          if(this.state.team > 1){
            let members = document.getElementsByClassName('first_row_member_img');
            for(let member of members) member.style.animation = 'show_img 1s ease-in-out forwards 1s';
          }
        }}>
       
          <div className="first_row">
            <li className="first_row_item">
              <div className="first_row_member_img">
              <div className="border_bottom"></div>
              </div>
              <div className="member_info">
              <h1>Designer</h1>
              <p>Some more info</p>
              </div>
            </li>
            <li className="first_row_item">
              <div className="first_row_member_img">
              <div className="border_bottom"></div>
              </div>
              <div className="member_info">
                <h1>Designer</h1>
                <p>Some more info</p>
                </div>
            </li>
            <li className="first_row_item">
              <div className="first_row_member_img">
              <div className="border_bottom"></div>
              </div>
              <div className="member_info">
              <h1>Designer</h1>
              <p>Some more info</p>
              </div>
            </li>
            </div>
            
            </VisibilitySensor>
            <li>
              <div className="member_img">
              <div className="border_bottom"></div>
              </div>
              <div className="member_info">
              <h1>Designer</h1>
              <p>Some more info</p>
              </div>
            </li>
            <li>
              <div className="member_img">
              <div className="border_bottom"></div>
              </div>
              <div className="member_info">
              <h1>Designer</h1>
              <p>Some more info</p>
              </div>
            </li>
            <li>
              <div className="member_img">
              <div className="border_bottom"></div>
              </div>
              <div className="member_info">
              <h1>Designer</h1>
              <p>Some more info</p>
              </div>
            </li>
            <li>
              <div className="member_img">
              <div className="border_bottom"></div>
              </div>
              <div className="member_info">
              <h1>Designer</h1>
              <p>Some more info</p>
              </div>
            </li>
            <li>
              <div className="member_img">
              <div className="border_bottom"></div>
              </div>
              <div className="member_info">
              <h1>Designer</h1>
              <p>Some more info</p>
              </div>
            </li>
            <li>
              <div className="member_img">
              <div className="border_bottom"></div>
              </div>
              <div className="member_info">
              <h1>Designer</h1>
              <p>Some more info</p>
              </div>
            </li>
          </ul>
        </div>
        <VisibilitySensor onChange={this.showEl}>
        <div className="section career">
        <a name="fourth-link"></a>
          <div className="career_text">
          <p>You are passionate, curious, creative
              and ready to <span style={{color: 'rgb(227, 93, 20)'}}>step up</span> your game?
              <span style={{color: 'rgb(227, 93, 20)'}}>Let’s talk! ...</span></p>
          </div>
          <Link to="/join-the-crew" className="join">Join the Crew</Link>
        </div>
        </VisibilitySensor>
        <div className="section offers">
          <div className="offers_text">
            <p>From <span style={{color: 'rgb(227, 93, 20)'}}>full-time jobs</span>, to freelance gigs and internships, 
              we’re always on the lookout. So if the position you’re l
              ooking for <span style={{color: 'rgb(227, 93, 20)'}}>isn’t available</span> at the moment, <span style={{color: 'rgb(227, 93, 20)'}}>no worries–send </span>
               us your stuff anyway....</p>
          </div>
        </div>
        <Socials/>
        </div>) : ( <div className="mobile_about">
        <div className="mobile_about_circle_container">
          <div className="mobile_about_circle">
          </div>
        </div>
            <div className="mobile_about_title">
             <h1>EQUINOX</h1>
             <h2>EXAMPLE COMPANY</h2>
             <div className="mobile_about_shadow">
             </div>
              <div className="mobile_about_title_text">
              <p>Simple of description removed
            from anywhere or writed by 
            yourself or heared from friends 
            or somebody another</p>
              </div>
              <div className="mobile_about_title_second">
              <h1> <span style={{color: 'rgb(270, 92, 20)'}}>Title </span>NEW</h1>
              <p>Let’s face it: the digital age has introduced 
            a bunch of new players on the block. 
            Hey, you might be literally going up against
            a computer. That’s where we comes 
            in–our team has winning visual and 
            interactive combos at our fingertips to take 
            brands and businesses to the next level, 
            and we have fun doing it.</p>
            </div>
            <div className="mobile_about_img" style={{background: `url(${mobile_img})`}}></div>
              </div>
            <div className="mobile_about_title_third">
              <h1> <span style={{color: 'rgb(270, 92, 20)'}}>TYPE </span>SERVICE</h1>
              <p>Your brand is your avatar, and we’re in the
                gameto make it the best it can be. 
                WE CREATEadaptable brand identities 
                that stand strong on all platforms...</p>
            </div>
            <div className="mobile_services">
            <div className="mobile_serv_nav">
            <h2>Type</h2>
              <ul>
                <li>Nice one</li>
                <li>Nice one</li>
                <li>Nice one</li>
              </ul>
            </div>
            <div className="mobile_serv_nav_img" style={{background: `url(${mobile_serv})`}}></div>
            </div>
            <div className="mobile_about_title_fourth">
              <h1>SERVICES</h1>
              <p>Let’s face it: the digital age has introduced 
          a bunch of new players on the block. 
          Hey, you might be literally going up against
          a computer. That’s where we comes 
          in–our team has winning visual and 
          interactive combos at our fingertips to take 
          brands and businesses to the next level, 
          and we have fun doing it.</p>
            </div>
            <div className="mobile_service_navs">
              <ul className="mobile_service_nav_one">
              <h1 style={{color: 'rgb(270, 92, 20)', fontWeight: '500'}}>TYPE</h1>
                <li>Nice one</li>
                <li>Nice one</li>
                <li>Nice one</li>
              </ul>
              <ul className="mobile_service_nav_two">
              <h1 style={{color: 'rgb(270, 92, 20)', fontWeight: '500'}}>TYPE</h1>
                <li>Nice one</li>
                <li>Nice one</li>
                <li>Nice one</li>
              </ul>
            </div>
            <div className="mobile_team">
            <h1>OUR<br/> <span style={{color: 'rgb(270, 92, 20)'}}>INSANE</span><br/> TEAM</h1>
            <ul>
              <li>
                <div className="mobile_member" style={{ backgroundImage: `url(${mobile_team})` }} > <div className="mobile_member_info">
                <h1>Information</h1>  
                </div>
                </div>
              </li>
              <li>
                <div className="mobile_member" style={{ backgroundImage: `url(${mobile_team})` }} > <div className="mobile_member_info">
                <h1>Information</h1>
                </div>
                </div>
              </li>
              <li>
                <div className="mobile_member" style={{ backgroundImage: `url(${mobile_team})` }} > <div className="mobile_member_info">
                <h1>Information</h1>
                </div>
                </div>
              </li>
              <li>
                <div className="mobile_member" style={{ backgroundImage: `url(${mobile_team})` }} > <div className="mobile_member_info">
                <h1>Information</h1>

                </div>
                </div>
              </li>
              <li>
                <div className="mobile_member" style={{ backgroundImage: `url(${mobile_team})` }} > <div className="mobile_member_info">
                <h1>Information</h1>
                </div>
                </div>
              </li>
              <li>
                <div className="mobile_member" style={{ backgroundImage: `url(${mobile_team})` }} > <div className="mobile_member_info">
                <h1>Information</h1>
                </div>
                </div>
              </li>
            </ul>
            <p>You are passionate, curious, creative
        and ready to step up your game?
        Let’s talk! ...</p>
              <div className="mobile_join_button">
                <h1>Join the crew</h1>
              </div>
              <p>From full-time jobs, to freelance 
gigs and internships, we’re always
on the lookout. So if the position 
you’re looking for isn’t available at
the moment, no worries–send
us your stuff anyway....</p>
            </div>
            
        </div> ) 
      }
      </div>
    )
  }
}


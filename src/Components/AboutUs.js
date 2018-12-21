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
<<<<<<< HEAD
import MobileExit from '../media/mobile_exit.png';
=======
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
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
<<<<<<< HEAD
=======
import MetaTags from 'react-meta-tags';

>>>>>>> 810585ec3033f2509e86fed8344eed731109470d


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
<<<<<<< HEAD
      items: []
    }
  }


  // componentDidMount(){
  //   fetch('/about-us')
  //     .then(res => res.json())
  //     .then(items => this.setState({items}))
  // }
=======
      items: [],
      meta: ''
    }
  }

  componentDidMount(){
    fetch('http://d29.default-host.net:3002/seo/about-us')
      .then(res => res.json())
      .then(meta => this.setState({meta: meta[0]}))
  }
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d

  mouseEnterHandler(){
    let tail = document.getElementsByClassName('tail');
    tail[0].style.opacity = 0;
    tail[1].style.opacity = 0;
  }

  mouseLeaveHandler(){
    let tail = document.getElementsByClassName('tail');
    tail[0].style.opacity = 1;
    tail[1].style.opacity = 1;
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
    let elName = 'about_sec';
      let animName = 'title_before';
      let textName = 'again_text'
      let el = document.getElementsByClassName(elName)[0];
      let elText = document.getElementsByClassName(textName)[0];
      let animPlay = document.getElementsByClassName(elName)[0];
      let titleAnim = document.getElementsByClassName(animName)[0];
      
    if(visible){
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

  showSideMenu(){
    if(!this.state.sideMenu){
      function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;  
      }
      let keys = {37: 1, 38: 1, 39: 1, 40: 1};
      let aboutContainer = document.getElementsByClassName('about_container')[0];
      if(!aboutContainer.className.includes('darken_bg')){
        aboutContainer.className += ' darken_bg';
        let sideMenu = document.getElementsByClassName('left_menu');
        for(let i = 0; i < sideMenu.length; i++){
          (function(i){
            setTimeout(function(){
              if(sideMenu[i]){
                 sideMenu[i].style.transform = 'translateX(20vw)'
              }
            }, i*500);
          })(i);
        }
      }
      function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
      }

      if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
      window.onwheel = preventDefault; // modern standard
      window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
      window.ontouchmove  = preventDefault; // mobile
      document.onkeydown  = preventDefaultForScrollKeys;

      this.setState({sideMenu: true});
    }
  }

  hideSideMenu() {
    if(this.state.sideMenu){
      function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;  
      }
      let aboutContainer = document.getElementsByClassName('about_container')[0];
      aboutContainer.className = aboutContainer.className.slice(0, -10);
      if (window.removeEventListener){
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.onmousewheel = document.onmousewheel = null; 
        window.onwheel = null; 
        window.ontouchmove = null;  
        document.onkeydown = null;
    }
    let sideMenu = document.getElementsByClassName('left_menu');
    for(let i = 0; i < sideMenu.length; i++){
      (function(i){
        setTimeout(function(){
          if(sideMenu[i]){
             sideMenu[i].style.transform = 'translateX(-20vw)'
          }
        }, i*500);
      })(i);
    }
    }
    this.setState({sideMenu: false});
  }

  goToAbout(){
    let el = document.getElementsByClassName('description_container')[0];
    el.scrollIntoView();
  }

  mouseClick() {
    function scrollToView(name){
      let el;
      switch(name){
        case 'about_menu' : el = document.getElementsByClassName('description_container')[0];
        el.scrollIntoView();
        break;
        case 'services_menu' : el = document.getElementsByClassName('services_list')[0];
        el.scrollIntoView();
        break;
        case 'team_menu' : el = document.getElementsByClassName('team')[0];
        el.scrollIntoView();
        break;
        case 'career_menu' : el = document.getElementsByClassName('career')[0];
        el.scrollIntoView();
        break;
      }
    }

    document.onmousedown = handleMouseMove();
    function handleMouseMove(event) {
        var dot, eventDoc, doc, body, pageX, pageY;
  
        event = event || window.event; // IE-ism
        let els = document.getElementsByClassName('side_click');
        let sideMenu = []
        
        for(let el of els){
          sideMenu.push(
            {
              class: el.className.split(' ')[1],
              y: el.getBoundingClientRect().y
            }
          )
        }
  
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;
        }
  
        for(let item of sideMenu){
          let curItem = document.getElementsByClassName(item.class)[0]
          let curItemCoords = curItem.getBoundingClientRect();
          if(event.x >= curItemCoords.x ){
              if(event.y <= curItemCoords.y + curItemCoords.height / 2 && event.y >= curItemCoords.y - curItemCoords.height / 2){
              for(let el of els){
                if(el.className.includes('active_menu')){
                  el.className = el.className.slice(0, -11);
                }
              }
              curItem.className += ' active_menu';
              scrollToView(item.class);
              }
            }
        }
  }
  };
  
<<<<<<< HEAD
  goBack(){
    this.props.history.goBack()
  }
=======
  
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d

  render(){
    return(
      <div className="test"
        onClick={() => this.hideSideMenu()}
        onMouseDown={() => this.mouseClick()}
        >
      {
        this.state.visibility ?(
      <div className="about">
<<<<<<< HEAD
=======
      <MetaTags>
        <title>{this.state.meta.title}</title>
        <meta name="description" content={this.state.meta.description}/>
        <meta property="og:title" content={this.state.meta.title} />
      </MetaTags>
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
      <div onMouseEnter={()=> this.showSideMenu()}><Logo/></div>
      
      <div className="sidemenu_left">
      {/* <ul>
      {this.state.sideMenuLinks.map(link => 
       <li className="left_menu first_item_left"><Link to={link.to}>{link.text}</Link></li>
      )}
      </ul> */}
        <ul>
          <li className="left_menu first_item_left"><Link to="/">Project</Link></li>
          <li className="left_menu second_item_left"><Link to="blog">Blog</Link> </li>
          <li className="left_menu third_item_left"><Link to="about-us">About Us</Link></li>
          <li className="left_menu fourth_item_left"><Link to="contacts">Contacts</Link></li>
        </ul>
      </div>
      <div className="about_container">
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
            <li className="side_click about_menu trigered_text trigered_one" ><a>About us</a></li> 
            <li className="side_click services_menu trigered_text trigered_two" ><a >Services</a></li>
            <li className="side_click team_menu trigered_text trigered_three"><a >Team</a></li>
            <li className="side_click career_menu trigered_text trigered_four" ><a>Career</a></li>
            <li className="side_click awards_menu trigered_text trigered_five"><a>Awards</a></li>
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
            <p>
            {
              this.state.items[0]
            }
            </p>
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
        <VisibilitySensor onChange={this.showFirstSec} >
        <div className="section about_sec">
            <div className="title again">
            <div className="title_before"></div>
            <div className="hidding_title"></div>
              <h1 className="again_text">
                Наша <span style={{ color: 'rgb(270, 92, 20)', fontSize: '88px'}}>ціль</span>
              </h1>
            </div>
            <p>Самобутність інтернет - простору , на  якому якість та потужний емоційний заряд надихає всіх і кожного. 
            Ми спеціалізуємося на комплексному підході: з вами від задуму до всебічно налаштованого концептуального механізму.
            Нас запалюють Ваші проекти , спонукаючи до найбільш неочікуваного   вираженняq ідейної індивідуальності. 

            </p>
        </div>
        </VisibilitySensor>
        <VisibilitySensor onChange={this.showSecondSec}>
        <div className="section services_sec">
            <div className="title services">
            <div className="hidding_title"></div>
            <div className="title_before_services"></div>
            <h1 className="services_text">Services</h1>
            </div>
            <p>
            Ми спеціалізуємося на  комплексному  підході : з вами від задуму до  всебічно налаштованого концептуального механізму. Оформлення простору  – ніби створення гри , між аудиторією та уявою. Правил не існує  ,лише  декорації й  атмосфера… лише погляд.... і
            гра почалась)
            </p>
        </div>
        </VisibilitySensor>
        <VisibilitySensor onChange={this.showServList} partialVisibility={true}>
        <div className="section services_list">
            <div className="col first_ser">
            <div className="title service_list first_list">
            <div className="hidding_title"></div>
            <div className="title_before_list"></div>
            <h2 className="list_text first_text">The Digital<br/> Studio</h2>
            </div>
              <ul>  
                <li><div className="circle_before_li"
                onClick={() => this.redirectTo()}
                ></div><h1 className="list_item_about">Digital strategy</h1></li>
                <li><div className="circle_before_li"></div><h1 className="list_item_about" >SEO</h1> </li>
                <li><div className="circle_before_li"></div><h1 className="list_item_about">User experience</h1> </li>
                <li><div className="circle_before_li"></div><h1 className="list_item_about">E-commerce</h1> </li>
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
            <h2 className="list_text second_text">The Branding<br/> Studio</h2></div>
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
        <a href="#services_type"></a>
            <div className="title title_type">
            <div className="title_before_type"></div>
            <div className="hidding_title"></div>
              <h1 className="type_text">
                Type Services
              </h1>
            </div>
            <p>Студія , що почала свою діяльність у 2018, згуртувала молоду команду творчих експериментаторів з усієї країни.  
            Відчайдушність , наполегливість, відданість стали запорукою вдалих  результатів нашої щоденної кооперації . </p>
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

            let members = document.getElementsByClassName('member_img');
            let borders = document.getElementsByClassName('border_bottom');
            let circles = document.getElementsByClassName('circle_before_info');
            let text = document.getElementsByClassName('member_info_text');
            let order = [[0, 1], [2,3], [4,5], [6,7], [8,9], [10, 11]];
            let atoms = document.getElementsByClassName('atom');
            let rect = borders[0].getBoundingClientRect();
            for(let i = 0; i < members.length; i++){
              (function(i){
                setTimeout(function(){
                     members[i].style.animation = 'show_img 1s ease-in-out forwards 1s';
                     borders[i].style.animation = 'border_img 1s ease-in-out forwards 1s';
                     circles[i].style.animation = 'about_appear 1s ease-in-out forwards 1s';
                     text[order[i][0]].style.animation = 'appear 1s ease-in-out forwards 1s';
                     text[order[i][1]].style.animation = 'appear 1s ease-in-out forwards 1s';
                }, i*500);
              })(i);
            }
          }
        }}>
       
          <div className="first_row">
            <li className="first_row_item">
              <div className="member_img" style={{ backgroundImage: `url(${ceo})` }}>
              </div>
              <div className="border_bottom"></div>
              <div className="member_info">
              <div className="circle_before_info"></div>
              <h1 className="member_info_text">CEO</h1>
              <p className="member_info_text">Some more info</p>
              </div>
            </li>
            <li className="first_row_item">
              <div className="member_img" style={{ backgroundImage: `url(${design})` }}>
              </div>
              <div className="border_bottom"></div>
              <div className="member_info">
              <div className="circle_before_info"></div>
                <h1 className="member_info_text">Designer</h1>
                <p className="member_info_text">Some more info</p>
                </div>
            </li>
            <li className="first_row_item">
              <div className="member_img" style={{ backgroundImage: `url(${dev1})` }}>
              </div>
              <div className="border_bottom"></div>
              <div className="member_info">
              <div className="circle_before_info"></div>
              <h1 className="member_info_text">Developer</h1>
              <p className="member_info_text">Some more info</p>
              </div>
            </li>
            <div className="hide_row">
            </div>
          </div>
            </VisibilitySensor>
            <li>
              <div className="member_img" style={{ backgroundImage: `url(${dev2})` }}>
              </div>
              <div className="border_bottom"></div>
              <div className="member_info">
              <div className="circle_before_info"></div>
              <h1 className="member_info_text">Developer</h1>
              <p className="member_info_text">Some more info</p>
              </div>
            </li>
            <li>
              <div className="member_img" style={{ backgroundImage: `url(${seo})` }}>
              </div>
              <div className="border_bottom"></div>
              <div className="member_info">
              <div className="circle_before_info"></div>
              <h1 className="member_info_text">Seo</h1>
              <p className="member_info_text">Some more info</p>
              </div>
            </li>
            {/* <li>
              <div className="member_img">
              </div>
              <div className="border_bottom"></div>
              <div className="member_info">
              <div className="circle_before_info"></div>
              <h1 className="member_info_text">Designer</h1>
              <p className="member_info_text">Some more info</p>
              </div>
            </li> */}
            <div className="hide_row_second">
            </div>
          </ul>
        </div>
        <div className="section career">
        <a name="fourth-link"></a>
          <div className="career_text">
          <VisibilitySensor onChange={()=>{
            this.setState({team: this.state.career += 1});
            if(this.state.career > 1){
              let text = document.getElementsByClassName('career_text')[0];
              let btn = document.getElementsByClassName('join_button')[0];
              btn.style.animation = 'appear 1s ease-in-out forwards 1s';
              text.style.animation = 'appear 1s ease-in-out forwards 1s';
            }
        }}>
          <p>Equinoх –  це стихія  різних   уподобань та вмінь, 
          це команда, націлена  на винятковість,
          це мрія, що прагне реалізації.</p>
            </VisibilitySensor>
          </div >
          <div className="join_button">
          <Link to="/join-the-crew" className="join">Join the Crew</Link>
          </div>
        </div>
        <div className="section offers">
          <div className="offers_text">
          <VisibilitySensor onChange={()=>{
            this.setState({team: this.state.offers += 1});
            if(this.state.offers > 1){
             let text = document.getElementsByClassName('offers_text')[0];
             text.style.animation = 'appear 1s ease-in-out forwards 1s';
          }}}>
            <p>From <span style={{color: 'rgb(227, 93, 20)'}}>full-time jobs</span>, to freelance gigs and internships, 
              we’re always on the lookout. So if the position you’re l
              ooking for <span style={{color: 'rgb(227, 93, 20)'}}>isn’t available</span> at the moment, <span style={{color: 'rgb(227, 93, 20)'}}>no worries–send </span>
               us your stuff anyway....</p>
          </VisibilitySensor>
          </div>
        </div>
        <div className="start_project">
          <VisibilitySensor onChange={() => {
            this.setState({team: this.state.start += 1});
            if(this.state.start > 1){
              let letters = document.getElementsByClassName('start_txt');
              let lettersEven = document.getElementsByClassName('start_txt_even');
              for(let letter of letters){
                letter.style.animation = 'start_appear_bot 1s ease-in-out forwards 1s';
              }
              for(let letterEven of lettersEven){
                letterEven.style.animation = 'start_appear_top 1s ease-in-out forwards 1s';
              } 
            }
          }} partialVisibility={true} >

<Link to="join-the-crew">
          <h1>
            <span className="start_txt proj_r" onMouseEnter={()=>this.mouseEnterHandler()} onMouseLeave={()=>this.mouseLeaveHandler()} onClick={()=>this.mouseLeaveHandler()}>R
            <div className="grey_container_about"><div className="grey_circle_about" style={{backgroundColor:"rgb(58, 58, 58)"}}> <p>Start a project</p> </div></div>
            </span>
            <span className="start_txt_even proj_e" onMouseEnter={()=>this.mouseEnterHandler()} onMouseLeave={()=>this.mouseLeaveHandler()} onClick={()=>this.mouseLeaveHandler()}>E
            <div className="grey_container_about"><div className="grey_circle_about" style={{backgroundColor:"rgb(58, 58, 58)"}}> <p>Start a project</p> </div></div></span>
            <span className="start_txt proj_a" onMouseEnter={()=>this.mouseEnterHandler()} onMouseLeave={()=>this.mouseLeaveHandler()} onClick={()=>this.mouseLeaveHandler()}>a
            <div className="grey_container_about"><div className="grey_circle_about" style={{backgroundColor:"rgb(58, 58, 58)"}}> <p>Start a project</p> </div></div>
            </span>
            <span className="start_txt_even proj_d" onMouseEnter={()=>this.mouseEnterHandler()} onMouseLeave={()=>this.mouseLeaveHandler()} onClick={()=>this.mouseLeaveHandler()}>D
            <div className="grey_container_about"><div className="grey_circle_about" style={{backgroundColor:"rgb(58, 58, 58)"}}> <p>Start a project</p> </div></div>
            </span> 
            <span className="start_txt proj_y "onMouseEnter={()=>this.mouseEnterHandler()} onMouseLeave={()=>this.mouseLeaveHandler()} onClick={()=>this.mouseLeaveHandler()}>Y
            <div className="grey_container_about"><div className="grey_circle_about" style={{backgroundColor:"rgb(58, 58, 58)"}}> <p>Start a project</p> </div></div>
            </span><br/>
            <span className="start_txt_even proj_to"onMouseEnter={()=>this.mouseEnterHandler()} onMouseLeave={()=>this.mouseLeaveHandler()} onClick={()=>this.mouseLeaveHandler()}>to
            <div className="grey_container_about"><div className="grey_circle_about" style={{backgroundColor:"rgb(58, 58, 58)"}}> <p>Start a project</p> </div></div>
            </span> <br/>
            <span className="start_txt start_s" onMouseEnter={()=>this.mouseEnterHandler()} onMouseLeave={()=>this.mouseLeaveHandler()} onClick={()=>this.mouseLeaveHandler()}>S
            <div className="grey_container_about">
              <div className="grey_circle_about" style={{backgroundColor:"rgb(58, 58, 58)"}}> 
                <p>Start a project</p> 
              </div>
            </div>
            </span>
            <span className="start_txt_even start_t" onMouseEnter={()=>this.mouseEnterHandler()} onMouseLeave={()=>this.mouseLeaveHandler()} onClick={()=>this.mouseLeaveHandler()}>t
            <div className="grey_container_about"><div className="grey_circle_about" style={{backgroundColor:"rgb(58, 58, 58)"}}> <p>Start a project</p> </div></div>
            </span>
            <span className="start_txt start_a" onMouseEnter={()=>this.mouseEnterHandler()} onMouseLeave={()=>this.mouseLeaveHandler()} onClick={()=>this.mouseLeaveHandler()}>A
            <div className="grey_container_about"><div className="grey_circle_about" style={{backgroundColor:"rgb(58, 58, 58)"}}> <p>Start a project</p> </div></div>
            </span>
            <span className="start_txt_even start_r" onMouseEnter={()=>this.mouseEnterHandler()} onMouseLeave={()=>this.mouseLeaveHandler()} onClick={()=>this.mouseLeaveHandler()}>r
            <div className="grey_container_about"><div className="grey_circle_about" style={{backgroundColor:"rgb(58, 58, 58)"}}> <p>Start a project</p> </div></div>
            </span>
            <span className="start_txt start_t" onMouseEnter={()=>this.mouseEnterHandler()} onMouseLeave={()=>this.mouseLeaveHandler()} onClick={()=>this.mouseLeaveHandler()}>t
            <div className="grey_container_about"><div className="grey_circle_about" style={{backgroundColor:"rgb(58, 58, 58)"}}> <p>Start a project</p> </div></div>
            </span>
            <span className="start_txt_even start_quest" onMouseEnter={()=>this.mouseEnterHandler()} onMouseLeave={()=>this.mouseLeaveHandler()} onClick={()=>this.mouseLeaveHandler()}>?
            <div className="grey_container_about"><div className="grey_circle_about" style={{backgroundColor:"rgb(58, 58, 58)"}}> <p>Start a project</p> </div></div>
            </span>
            </h1>
            </Link>
          
            </VisibilitySensor>
        </div>
        <Socials/>
        </div>
        </div>) : ( 
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
              <div className="m_about_join">
                <p>Join<br/>the<br/>crew</p>
              </div>
              <p>
                From full-time jobs, to freelance gigs and internships, we’re always on the lookout. So if the position you’re looking for isn’t available at the moment, no worries–send us your stuff anyway....
              </p>
            </section>
            <section className="m_about_enjoy">
              <h3>ENJOY DESCRIPTION?</h3>
              <p>So if the position you’re looking for isn’t available at the moment, no worries sendus your stuff anyway....</p>
              <h4>Click to</h4>
              <h3><span className="company_color">START A PROJECT</span></h3>
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
<<<<<<< HEAD
          <img src={MobileExit} onClick={()=>this.goBack()} className="mobile_exit"/>
=======
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
        </div> ) 
      }
      </div>
    )
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d

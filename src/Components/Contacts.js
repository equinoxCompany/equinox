import React, { Component } from 'react';
import Logo from '../Components/Logo';
import Socials from '../Components/SocialsV2';
import '../App.css';
import Link from 'react-router-dom/Link';
import Exit from '../media/exit.png';
import { BrowserRouter } from 'react-router-dom';
import '../Styles/Contacts.css';
import VisibilitySensor from 'react-visibility-sensor';
import ReactDOM from 'react-dom';
import MobileNav from './MobileNav';
import MobileContactsMenuNav from './MobileContactsMenuNav';
import MobileExit from '../media/mobile_exit.png';

export default class extends Component {



  constructor(props){
    super(props);
    this.state = {
      visibility: window.innerWidth >= 768 ? true : false,
      map: false
    }
  }


  openMap(){
    document.getElementsByClassName('map_folded')[0].style.height = '100vh'
    document.getElementsByClassName('click_to_open')[0].style.opacity = 0;
    this.setState({map: true});
  }

  goBack(){
    if(!this.state.map){
    this.props.history.goBack();
    } else {
      document.getElementsByClassName('map_folded')[0].style.height = '40vh'
      this.setState({map: false})
    }
  }

  componentDidMount(){
    if(this.state.visibility){
    let contacts_address_bottom_text = document.getElementsByClassName("contacts_address_bottom_text")[0];
    let address_info_h1 = document.getElementsByClassName("contacts_address_info")[0].firstChild;
    let info_underline = document.getElementsByClassName("contacts_address_info")[0].children[1];
    let contacts_address_bottom = document.getElementsByClassName('contacts_address_bottom')[0];
    let contacts_background = document.getElementsByClassName('contacts_background')[0];
    let address_info_right = document.getElementsByClassName("right")[0];
    let address_info_left = document.getElementsByClassName("left")[0];
    let before_line = contacts_address_bottom_text.children[0];
    let first_line = contacts_address_bottom_text.children[1];
    let second_line = contacts_address_bottom_text.children[2];
    let third_line = contacts_address_bottom_text.children[3];
    let contacts = contacts_background.children;
    let info_circle = contacts_address_bottom.firstChild;
    let info_circle_ul = info_circle.firstChild;
    let info_circle_a = info_circle_ul.children;
    let left_mail = address_info_left.children[0];
    let left_number = address_info_left.children[1];
    let left_map_container = address_info_left.children[2];
    let left_map = left_map_container.children[1];
    let right_street = address_info_right.children[0];
    let right_city = address_info_right.children[1];
    let right_coordinates = address_info_right.children[2];
    address_info_h1.style.visibility = "visible";
    contacts_background.style.visibility = "visible";
    address_info_h1.classList.add("contact_address_h1");
    for(var i=0, child; child=contacts[i]; i++){
      if(i%2 == 0){
        child.classList.add("right_slide");
      }else{
        child.classList.add("left_slide");
      }
    }
    setTimeout(()=>{
      left_mail.style.visibility = "visible";
      right_street.style.visibility = "visible";
      info_circle_ul.style.visibility = "visible";
      info_circle.style.visibility = "visible";
      info_circle.classList.add("address_info_circle");
      left_mail.classList.add("mail");
      right_street.classList.add("street");
      info_underline.classList.add("info_underline");
      for(var i=0, child; child=info_circle_a[i]; i++){
        child.classList.add("increaseCircleLi");
      }
    }, 1500);
    setTimeout(()=>{
      left_number.style.visibility = "visible";
      right_city.style.visibility = "visible";
      left_number.classList.add("number");
      right_city.classList.add("city");
    }, 2000);
    setTimeout(()=>{
      left_map_container.style.visibility = "visible";
      left_map.style.visibility = "visible";
      right_coordinates.style.visibility = "visible";
      left_map_container.classList.add("map_container");
      right_coordinates.classList.add("coordinates");
      left_map.classList.add("map");
    }, 2500);
    before_line.style.visibility = "visible";
    before_line.classList.add("before_line");
    first_line.style.visibility = "visible";
    first_line.classList.add("first_line");
    setTimeout(()=>{
      second_line.style.visibility = "visible";
      second_line.classList.add("second_line");
    }, 1000);
    setTimeout(()=>{
      third_line.style.visibility = "visible";
      third_line.classList.add("third_line");
    }, 1500);
  }
  }


  setMap(position){
    var close_map = document.getElementsByClassName("close_map")[0];
    if(position){
       if(!close_map.classList.contains("close_map_hide")){
        close_map.classList.toggle("close_map_show");
      }else{
        close_map.classList.remove("close_map_hide");
        close_map.classList.toggle("close_map_show");
      }


      let contacts_address_bottom;
      if(document.getElementsByClassName('contacts_address_bottom')[0]){
        contacts_address_bottom = document.getElementsByClassName('contacts_address_bottom')[0];
        contacts_address_bottom.classList.toggle("contacts_address_bottom");
      } else if(document.getElementsByClassName('push_map')[0]){
        contacts_address_bottom = document.getElementsByClassName('push_map')[0];
        contacts_address_bottom.classList.toggle("push_map");
      }


      let contacts_address_bottom_text;
      if(document.getElementsByClassName("contacts_address_bottom_text")[0]){
        contacts_address_bottom_text = document.getElementsByClassName("contacts_address_bottom_text")[0];
        contacts_address_bottom_text.classList.remove("contacts_address_bottom_text");
      } else if(document.getElementsByClassName("contacts_address_bottom_text_show")[0]){
        contacts_address_bottom_text = document.getElementsByClassName("contacts_address_bottom_text_show")[0];
        contacts_address_bottom_text.classList.remove("contacts_address_bottom_show");
      }


      let pulse = document.getElementsByClassName("pulse")[0];
      let ring = document.getElementsByClassName("ring_map")[0];
      let text_we_are_here = document.getElementsByClassName("text_we_are_here")[0].children;
      let contact_info = document.getElementsByClassName("contact_info")[0].children;
      let info_circle = contacts_address_bottom.firstChild;
      let info_circle_ul = info_circle.firstChild;
      let info_circle_a = info_circle_ul.children;
      pulse.classList.add("pulse_animation");
      setTimeout(()=>{
        ring.classList.add("ring_animation");
      }, 1000);
      contacts_address_bottom.classList.toggle("pull_map");
      contacts_address_bottom_text.classList.add("contacts_address_bottom_text_hide");
      info_circle.classList.toggle("address_info_circle");
      info_circle.classList.toggle("address_info_circle_transform");
      pulse.style.visibility = "visible";
      for(var i=0, child; child=info_circle_a[i]; i++){
        child.classList.toggle("increaseCircleLi");
        child.classList.toggle("decreaseCircleLi");
      }
      setTimeout(()=>{
        if(text_we_are_here[0].classList.contains("first_part_hide")){
          text_we_are_here[0].classList.remove("first_part_hide");
        }
        text_we_are_here[0].classList.add("first_part_show");
        if(contact_info[0].classList.contains("box_contact_info_h1_hide")){
          contact_info[0].classList.remove("box_contact_info_h1_hide");
        }
        contact_info[0].classList.add("box_contact_info_h1");
      }, 500);
      setTimeout(()=>{
        if(text_we_are_here[1].classList.contains("second_part_hide")){
          text_we_are_here[1].classList.remove("second_part_hide");
        }
        text_we_are_here[1].classList.add("second_part_show");
        if(contact_info[1].classList.contains("contact_info_h1_hide")){
          contact_info[1].classList.remove("contact_info_h1_hide");
        }
        contact_info[1].classList.add("contact_info_h1");
      },1000);
      setTimeout(()=>{
        if(text_we_are_here[2].classList.contains("third_part_hide")){
          text_we_are_here[2].classList.remove("third_part_hide");
        }
        text_we_are_here[2].classList.add("third_part_show");
        if(contact_info[2].classList.contains("contact_info_h2_hide")){
          contact_info[2].classList.remove("contact_info_h2_hide");
        }
        contact_info[2].classList.add("contact_info_h2");
      },1500);
    }else{
      if(!close_map.classList.contains("close_map_show")){
        close_map.classList.toggle("close_map_hide");
      }else{
        close_map.classList.remove("close_map_show");
        close_map.classList.toggle("close_map_hide");
      }
    let contacts_address_bottom = document.getElementsByClassName("pull_map")[0];
    let contacts_address_bottom_text;
    if(document.getElementsByClassName("contacts_address_bottom_text_hide")){
      contacts_address_bottom_text = document.getElementsByClassName("contacts_address_bottom_text_hide")[0];
      contacts_address_bottom_text.classList.remove("contacts_address_bottom_text_hide");
    }else if(document.getElementsByClassName("contacts_address_bottom_text")){
      contacts_address_bottom_text = document.getElementsByClassName("contacts_address_bottom_text");
      contacts_address_bottom_text.classList.remove("contacts_address_bottom_text");
    }
    let text_we_are_here = document.getElementsByClassName("text_we_are_here")[0].children;
    let contact_info = document.getElementsByClassName("contact_info")[0].children;
    let ring = document.getElementsByClassName("ring_map")[0];
    let pulse = document.getElementsByClassName("pulse")[0];
    let address_info_circle = document.getElementsByClassName("address_info_circle_transform")[0];
    let circle_li = address_info_circle.firstChild.children;
    ring.classList.remove("ring_animation");
    pulse.classList.remove("pulse_animation");
    contacts_address_bottom.classList.toggle("push_map");
    contacts_address_bottom.classList.toggle("pull_map");
    contacts_address_bottom_text.classList.add("contacts_address_bottom_text_show");
    text_we_are_here[0].classList.toggle("first_part_show");
    text_we_are_here[0].classList.toggle("first_part_hide");
    contact_info[0].classList.toggle("box_contact_info_h1");
    contact_info[0].classList.toggle("box_contact_info_h1_hide");
    contact_info[1].classList.toggle("contact_info_h1");
    contact_info[1].classList.toggle("contact_info_h1_hide");
    address_info_circle.classList.toggle("address_info_circle_transform");
    address_info_circle.classList.toggle("address_info_circle");
    circle_li[0].classList.toggle("decreaseCircleLi");
    circle_li[0].classList.toggle("increaseCircleLi");
    setTimeout(()=>{
      text_we_are_here[1].classList.toggle("second_part_show");
      text_we_are_here[1].classList.toggle("second_part_hide");
      contact_info[2].classList.toggle("contact_info_h2");
      contact_info[2].classList.toggle("contact_info_h2_hide");
      circle_li[1].classList.toggle("decreaseCircleLi");
      circle_li[1].classList.toggle("increaseCircleLi");
    }, 200);
    setTimeout(()=>{
      text_we_are_here[2].classList.toggle("third_part_show");
      text_we_are_here[2].classList.toggle("third_part_hide");
      circle_li[2].classList.toggle("decreaseCircleLi");
      circle_li[2].classList.toggle("increaseCircleLi");
    }, 400);
    }
  }


  render(){
    return(
      <div>
        <div>
          { this.state.visibility ?(
            <div>
              <Logo/>
              <img src={Exit} className="close_map" onClick={()=>this.setMap(false)}/>
              <div className="pulse"></div>
              <div className="ring_map"></div>
              <div className="text_we_are_here">
                <h1>WE</h1>
                <h2 style={{color: "rgb(270, 92, 20)"}}>ARE</h2>
                <h1>HERE</h1>
              </div>
              <div className="contact_info">
                <div></div>
                <h1>Saksaganskogo 36 st.</h1>
                <h2>Some details here,<br/> or just fan.</h2>
              </div>
              <div  className="contacts_address">
                <div className="contacts_background">
                  <span>&nbsp;&nbsp;&nbsp;Contacts</span>
                  <span>ContactsContacts</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;ContactsContacts</span>
                  <span>ContactsContacts</span>
                  <span>Contacts</span>
                  <span>Contacts</span>
                  <span>ContactsContacts</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contacts</span>
                  <span>ContactsContacts</span>
                  <span>ContactsContacts</span>
                  <span>Contacts</span>
                </div>
                <div className="contacts_address_info">
                  <h1>HOW <span style={{color: 'rgb(270, 92, 20'}}>YOU CAN </span> FIND US</h1>
                  <div></div>
                  <div className="address_info left">
                    <h3> <a href="mailto:info@equinox.company" style={{color: 'white'}}>info@equinox.company</a> </h3>
                    <a href="tel: +380961999932">+380961999932</a>
                    <div onClick={()=>this.setMap(true)}>
                      <h3>Open map</h3>
                      <div></div>
                    </div>
                  </div>
                  <div className="address_info right">
                    <h3>16, Big Vasylkivska st. , Kiev, 03150</h3>
                    <h3>CGQ9+X3 Kiev, city Kiev</h3>
                    <h3>50.440093, 30.517538</h3>
                  </div>
                </div>
              </div> 
              <div className="contacts_address_bottom">
                <div>
                  <ul>
                    <li><Link to="/join-the-crew" style={{textDecoration: 'none', color: 'white'}}>Join the crew</Link></li>
                    <li><a>Start a project</a></li>
                    <li><a>Say Hi!</a></li>
                  </ul>
                </div>
                <div className="contacts_address_bottom_text">
                  <div>
                  </div>
                  <h3>We’re always looking for new people to push us to be more</h3>
                  <h3>creative. After all, <span style={{color: 'rgb(270, 92, 29)'}}>‘Playing New’ </span> means finding new ways to redefine</h3> 
                  <h3>the digital and visual landscape.Wanna play? Let’s chat!</h3>
                </div>
              </div>
              <Socials/>
            </div>
          ) :
        (<div>
          <MobileNav/>
          <section className="m_contacts_map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9320.197926172807!2d30.499148889390593!3d50.44227454843369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cef6dad51cc5%3A0x5e55cbe0d15f7789!2z0KPQvdC40LLQtdGA0YHQuNGC0LXRgg!5e0!3m2!1sru!2sua!4v1545077764815" width="auto" height="auto" frameborder="0" ></iframe>
          </section>
          <section className="m_contacts_address">
            <p>16, Big Vasylkivska st., Kiev, 03150</p>
            <p>+380667680976</p>
            <p>equinox@gmail.com</p>
          </section>
          <MobileContactsMenuNav/>
          <div className="m_contacts_address_circle">
            <p>CGQ9+X3 Kiev, city Kiev <br/>50.440093, 30.517538</p>
          </div>
          <img src={MobileExit} onClick={()=>this.goBack()} className="mobile_exit"/>
        </div>)
        }
      </div>
      </div>
    )
  }
}